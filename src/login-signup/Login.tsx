import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";

function Login() {
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{8,}$/;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginChange = () => {
    const testEmail = emailRegex.test(email);
    const testPassword = passwordRegex.test(password);

    if (testEmail && testPassword) {
      navigate("/home");
    }
  };

  return (
    <MainDiv>
      <img src="./assets/logo.svg" />
      <LoginDiv>
        <Title>Login</Title>
        <LoginInput
          type="text"
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button onClick={handleLoginChange}>Login to your account</Button>
        <Question>
          Don’t have an account?
          <Link style={{ textDecoration: "none" }} to="/signup">
            <SignUpLink> Sign up</SignUpLink>
          </Link>
        </Question>
      </LoginDiv>
    </MainDiv>
  );
}

export default Login;

const MainDiv = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: 40px;
`;

const LoginDiv = styled.div`
  background-color: #161d2f;
  height: 327px;
  width: 100%;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Title = styled.h2`
  color: white;
  font-family: "Outfit", sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.5px;
  text-align: left;
`;
const LoginInput = styled.input`
  width: 100%;
  background-color: #161d2f;
  height: 37px;
  border: none;
  border-bottom: 1px solid #5a698f;
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  padding-left: 20px;
  color: #ffffff;
  transition: color 0.3s ease;

  &::placeholder {
    color: #ffffff;
    opacity: 50%;
    margin-right: 10px;
  }

  &:focus,
  &:not(:placeholder-shown) {
    color: #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 1px 0px 0px #5a698f;
  }
`;

const Button = styled.button`
  background-color: #fc4747;
  width: 279px;
  height: 48px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  margin-top: 10px;
  cursor: pointer;
  margin: auto;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const Question = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  text-align: center;
`;
const SignUpLink = styled.span`
  color: #fc4747;
  cursor: pointer;
`;
