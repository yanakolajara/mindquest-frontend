import React from 'react';
import styled from 'styled-components';

type Props = {};

type AuthState = {
  isAuthenticated: boolean;
  userData: any;
};

const LoginComponent = styled.div`
  display: flex;
`;

export default function Login({}: Props) {
  // const { handleLogin } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [authState, setAuthState] = React.useState<AuthState>({
    isAuthenticated: false,
    userData: {},
  });
  return (
    <LoginComponent>
      <h1>Login</h1>
      <div>
        <form
          onSubmit={() => {
            // handleLogin({ email, password })
          }}
        >
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
    </LoginComponent>
  );
}
