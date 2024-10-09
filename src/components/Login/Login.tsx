import React from 'react';
import { useAuth } from '../../hooks/useAuth';

type Props = {};
type AuthState = {
  isAuthenticated: boolean;
  userData: any;
};
type LoginInfo = {
  email: string;
  password: string;
};

export default function Login(props: Props) {
  const { handleLogin } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [authState, setAuthState] = React.useState<AuthState>({
    isAuthenticated: false,
    userData: {},
  });

  return (
    <div>
      <form onSubmit={() => handleLogin({ email, password })}>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type='submit' value='test' />
      </form>
    </div>
  );
}
