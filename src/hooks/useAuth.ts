import React from 'react';

type AuthState = {
  isAuthenticated: boolean;
  userData: any;
};
type LoginInfo = {
  email: string;
  password: string;
};

const useAuth = (): [any] => {
  const [authState, setAuthState] = React.useState<AuthState>({
    isAuthenticated: false,
    userData: {},
  });
  const handleLogin = ({ email, password }: LoginInfo) => {
    return authState;
  };

  return [handleLogin];
};

export { useAuth };
