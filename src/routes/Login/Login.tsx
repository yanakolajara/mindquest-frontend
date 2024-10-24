import React from 'react';
import { loginRequest } from '../../api/api';
import {
  Container,
  Title,
  Form,
  InputGroup,
  Label,
  InputWrapper,
  Icon,
  Input,
  Button,
  FooterText,
  SignUpLink,
  LoginComponent,
} from './Login.styles';

// * -------- Types -------- *

type LoginProps = {
  username: string;
  password: string;
};

// * -------- Login Component -------- *

const Login: React.FC = () => {
  const [isNewUser, setIsNewUser] = React.useState(false);
  const [auth, setAuth] = React.useState<LoginProps>({
    username: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginRequest(auth.username, auth.password).then((res) =>
      console.log(res)
    );
  };
  return (
    <LoginComponent>
      <Container>
        <Title>Log In</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor='username'>Username</Label>
            <InputWrapper>
              <Icon>👤</Icon>
              <Input
                type='text'
                id='username'
                placeholder='Type your username'
                value={auth.username}
                onChange={(e) => setAuth({ ...auth, username: e.target.value })}
              />
            </InputWrapper>
          </InputGroup>
          <InputGroup>
            <Label htmlFor='password'>Password</Label>
            <InputWrapper>
              <Icon>🔒</Icon>
              <Input
                type='password'
                id='password'
                placeholder='Type your password'
                value={auth.password}
                onChange={(e) => setAuth({ ...auth, password: e.target.value })}
              />
            </InputWrapper>
            <Button type='submit'>Login</Button>
          </InputGroup>
          <FooterText>
            Need a MindQuest account? <SignUpLink href='#'>Sign Up</SignUpLink>
          </FooterText>
        </Form>
      </Container>
    </LoginComponent>
  );
};

export default Login;
