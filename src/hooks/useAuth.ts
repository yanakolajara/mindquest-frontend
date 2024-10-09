import React from 'react';

type AuthState = {
  isAuthenticated: boolean;
  userData: any;
};
type LoginInfo = {
  email: string;
  password: string;
};

const useAuth = () => {
  const [authState, setAuthState] = React.useState<AuthState>({
    isAuthenticated: false,
    userData: {},
  });

  const testApiLogin = ({ email, password }: LoginInfo) => {
    return 'FDaVfg654fdwgf';
  };
  const handleLogin = async ({ email, password }: LoginInfo) => {
    const authState = await testApiLogin({ email, password });
    // .then((res) => )
    if (authState) {
      await setAuthState({
        isAuthenticated: true,
        userData: 'test',
      });
    }
    return authState;
  };

  return { handleLogin };
};

export { useAuth };
