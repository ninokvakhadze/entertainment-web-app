import styled from "styled-components";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <MainDiv>
      <img src="./assets/logo.svg" />
      <SignUpDiv>
        <Title>Sign Up</Title>
        <SignUpInput type="text" placeholder="Email address"/>
        <SignUpInput type="password" placeholder="Password"/>
        <SignUpInput type="password" placeholder="Repeat password"/>
        <Button>SignUp to your account</Button>
        <Question>
          Don’t have an account?
          <Link style={{ textDecoration: "none" }} to="/login">
            <LoginLink> Login</LoginLink>
          </Link>
        </Question>
      </SignUpDiv>
    </MainDiv>
  );
}

export default SignUp;

const MainDiv = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: 40px;
`;

const SignUpDiv = styled.div`
  background-color: #161d2f;
  height: 420px;
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
const SignUpInput = styled.input`
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
const LoginLink = styled.span`
  color: #fc4747;
  cursor: pointer;
`;
