import { useEffect, useState } from 'react';
import client from '../../lib/apollo';
import useTokenStore from '@/store/useTokenStore';
import useRefreshToken from '@/lib/refreshToken';
import { MY_PROFILE_QUERY } from '@/graphql/profileQuery';
import { useRouter } from 'next/router';
import UserProfileSection from '@/components/ui/UserProfileSection';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/Sidebar';
import TimeOffComponent from '@/components/TimeOffComponent';

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
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [access_token, refreshToken, clearTokens, router]);

  const handleLogout = () => {
    clearTokens();
    router.push('/');
  };

  useEffect(() => {
    if (!profile && !loading) {
      const timeout = setTimeout(() => {
        router.push('/');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [profile, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Unauthorized, please login to access this page</h1>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='bg-[#DADFDD] max-w-[1440px] mx-auto min-h-screen'>
        <Navbar profile={profile} onLogout={handleLogout} />
        <UserProfileSection profile={profile} />

        {/* Flex container for sidebar and main content */}
        <div className="lg:flex">
          {/* Sidebar */}
          <Sidebar />

          {/* TimeOffComponent next to the sidebar */}
          <div className="lg:mx-4 flex-grow">
            <TimeOffComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
