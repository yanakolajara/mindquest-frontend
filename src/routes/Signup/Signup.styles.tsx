import styled from 'styled-components';

export const SignupComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Container = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`;

export const Icon = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 5px;
  background-color: transparent;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6b869d;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: #666;
`;

export const SignUpLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;
