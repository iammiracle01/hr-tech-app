import { createContext, useContext, useState, useEffect } from 'react';
import client from '@/lib/apollo';
import useTokenStore from '@/store/useTokenStore';
import useRefreshToken from '@/lib/refreshToken';
import { MY_PROFILE_QUERY } from '@/graphql/profileQuery';

interface Profile {
  id: string;
  name: string;
  avatar: string;
}

interface ProfileContextProps {
  profile: Profile | null;
  loading: boolean;
  logout: () => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const access_token = useTokenStore((state) => state.access_token);
  const clearTokens = useTokenStore((state) => state.clearTokens);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const refreshToken = useRefreshToken();

  useEffect(() => {
    const loadProfile = async () => {
      if (!access_token) {
        const refreshed = await refreshToken();
        if (!refreshed) {
          setLoading(false);
          return;
        }
      }

      try {
        const response = await client.query<{ myProfile: Profile }>({
          query: MY_PROFILE_QUERY,
        });
        setProfile(response.data.myProfile);
      } catch (error) {
        console.error('Error loading profile', error);
        clearTokens();
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [access_token, refreshToken, clearTokens]);

  const logout = () => {
    clearTokens();
  };

  return (
    <ProfileContext.Provider value={{ profile, loading, logout }}>
      {children}
    </ProfileContext.Provider>
  );
};
