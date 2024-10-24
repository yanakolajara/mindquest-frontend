// LoginForm.tsx
import React from 'react';
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

const Login: React.FC = () => {
  return (
    <LoginComponent>
      <Container>
        <Title>Log In</Title>
        <Form>
          <InputGroup>
            <Label htmlFor='username'>Username</Label>
            <InputWrapper>
              <Icon>👤</Icon>
              <Input
                type='text'
                id='username'
                placeholder='Type your username'
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
              />
            </InputWrapper>
          </InputGroup>
          <Button type='submit'>LOGIN</Button>
          <FooterText>
            Need a MindQuest account? <SignUpLink href='#'>Sign Up</SignUpLink>
          </FooterText>
        </Form>
      </Container>
    </LoginComponent>
  );
};

export default Login;
