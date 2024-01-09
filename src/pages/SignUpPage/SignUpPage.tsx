import { useNavigate } from "react-router-dom";
import {
  SignUpPageButton,
  SignUpPageFormContainer,
  SignUpPageFormFieldLabel,
  SignUpPageInputText,
  SignUpPageLoginLink,
  SignUpPageSubTitle,
  SignUpPageTermsOfUse,
  SignUpPageTermsOfUseLink,
  SignUpPageTitle,
  SignUpPageTitleContainer,
  SignUpPageWrapper,
} from "./styles";

const SignUpPage = () => {
  const navigate = useNavigate();
  
  return (
    <SignUpPageWrapper>
      <SignUpPageTitleContainer>
        <SignUpPageTitle>Sign Up</SignUpPageTitle>
        <SignUpPageSubTitle>Already have a PROfile account?</SignUpPageSubTitle>
        <SignUpPageLoginLink>Log in</SignUpPageLoginLink>
      </SignUpPageTitleContainer>

      <SignUpPageFormContainer>
        <SignUpPageFormFieldLabel>FULL NAME</SignUpPageFormFieldLabel>
        <SignUpPageInputText placeholder="Full Name" />

        <SignUpPageFormFieldLabel>EMAIL ADDRESS</SignUpPageFormFieldLabel>
        <SignUpPageInputText placeholder="name@example.com" />

        <SignUpPageFormFieldLabel>PASSWORD</SignUpPageFormFieldLabel>
        <SignUpPageInputText placeholder="Password" />

        <SignUpPageButton onClick={() => navigate('/dashboard')}>Sign Up</SignUpPageButton>

        <SignUpPageTermsOfUse>
          By signing up, you agree to our <SignUpPageTermsOfUseLink>Terms of Use</SignUpPageTermsOfUseLink> and to receive PROfile emails & updates and acknowledge that you read our <SignUpPageTermsOfUseLink>Privacy Policy</SignUpPageTermsOfUseLink>.
        </SignUpPageTermsOfUse>
      </SignUpPageFormContainer>
    </SignUpPageWrapper>
  );
};

export default SignUpPage;
