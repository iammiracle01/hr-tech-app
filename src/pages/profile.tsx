import { useEffect, useState } from 'react';
import client from '../lib/apollo';
import { useRouter } from 'next/router';
import useTokenStore from '@/store/useTokenStore';
import { Button } from '@/components/ui/button';
import useRefreshToken from '@/lib/refreshToken';
import { MY_PROFILE_QUERY } from '@/graphql/profileQuery';
import toast from 'react-hot-toast';

interface Profile {
  id: string;
  name: string;
  avatar: string;
}

const ProfilePage = () => {
  const access_token = useTokenStore((state) => state.access_token);
  const clearTokens = useTokenStore((state) => state.clearTokens);
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const refreshToken = useRefreshToken();

  useEffect(() => {
    const loadProfile = async () => {

      if (!access_token) {
        const refreshed = await refreshToken();
        if (!refreshed) {
          toast.error('Session expired, redirecting to home.');
          router.push('/');
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
        router.push('/');
      }
    };

    loadProfile();
  }, [router, access_token, refreshToken, clearTokens]);

  const handleLogout = () => {
    clearTokens();
    router.push('/');
  };

  if (!profile) return null;

  return (
    <div>
      <h1>Profile</h1>
      <img src={profile.avatar} alt={profile.name} />
      <h2>{profile.name}</h2>
      <Button onClick={handleLogout} className="mt-4 bg-red-500 hover:bg-red-600">
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
