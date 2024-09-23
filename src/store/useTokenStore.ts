import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface TokenState {
  access_token: string | undefined;
  refresh_token: string | undefined;

  setTokens: (access_token?: string | undefined, refresh_token?: string | undefined) => void;
  clearTokens: () => void;

}

const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      access_token: '',
      refresh_token: '',

      setTokens: (access_token?: string | undefined, refresh_token?: string | undefined) =>
        set({ access_token, refresh_token}),
      clearTokens: () => set({ access_token: undefined, refresh_token: undefined })
    }),
    {
      name: 'token-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useTokenStore;
