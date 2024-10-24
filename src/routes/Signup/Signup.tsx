import React from 'react';
import {
  SignupComponent, // Cambié LoginComponent por SignupComponent
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
} from './Signup.styles';

import { registerRequest } from '../../api/api'; // Cambié a la función registerRequest

// * -------- Types -------- *

type SignupProps = {
  email: string;
  username: string;
  password: string;
};

// * -------- Signup Component -------- *

const Signup: React.FC = () => {
  const [auth, setAuth] = React.useState<SignupProps>({
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registerRequest(auth.email, auth.username, auth.password).then(
      (res) => console.log(res)
    );
  };

  return (
    <SignupComponent>
      <Container>
        <Title>Create an Account</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor='email'>Email</Label>
            <InputWrapper>
              <Icon>📧</Icon>
              <Input
                type='email'
                id='email'
                placeholder='Type your email'
                value={auth.email}
                onChange={(e) => setAuth({ ...auth, email: e.target.value })}
              />
            </InputWrapper>
          </InputGroup>
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
          </InputGroup>
          <Button type='submit'>Sign Up</Button>
          <FooterText>
            Already have a MindQuest account?{' '}
            <SignUpLink href='#'>Log In</SignUpLink>
          </FooterText>
        </Form>
      </Container>
    </SignupComponent>
  );
};

export default Signup;
