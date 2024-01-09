import { Color } from "globals/enums";
import styled from "styled-components";

export const SignUpPageWrapper = styled.div`
  max-width: 1360px;
  margin: 120px auto 0 auto;
`;

export const SignUpPageTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const SignUpPageTitle = styled.h1`
  font-family: "Inter", serif;
  font-weight: bold;
  font-size: 70px;
  margin-bottom: 14px;
  color: ${Color.Black};
`;

export const SignUpPageSubTitle = styled.p`
  font-family: "Inter", serif;
  font-size: 18px;
  display: inline-block;
  color: ${Color.Black};
`;

export const SignUpPageLoginLink = styled.a`
  font-family: "Inter", serif;
  font-size: 18px;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpPageFormContainer = styled.div`
  width: 418px;
  text-align: center;
  margin: 0 auto;
`;

export const SignUpPageFormFieldLabel = styled.p`
  text-align: left;
  font-family: "Inter", serif;
  font-size: 12px;
  padding-bottom: 6px;
  margin: 23px 0 0 0;
  color: ${Color.Black};
`;

export const SignUpPageInputText = styled.input`
  width: 100%;
  height: 100%;
  padding: 14px 44px 14px 10px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${Color.Gray3};
  font-family: "Inter", serif;
  font-size: 18px;
  color: ${Color.Gray7};

  &::placeholder {
    color: ${Color.Gray7};
  }

  &:focus-visible {
    outline: 2px solid ${Color.Blue};
    outline-offset: -1px;
    caret-color: ${Color.Blue};
  }

  &:focus-visible + svg {
    stroke: ${Color.Blue};
  }
`;

export const SignUpPageButton = styled.button`
  width: 418px;
  cursor: pointer;
  margin-top: 30px;
  padding: 14px;
  border: 0;
  border-radius: 8px;
  background: ${Color.Blue};
  color: ${Color.White};
  opacity: 50%;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    opacity: 100%;
  }
`;

export const SignUpPageTermsOfUse = styled.p`
  width: 418px;
  text-align: center;
  font-family: "Inter", serif;
  font-size: 12px;
  line-height: 20px;
  margin-top: 20px;
  color: ${Color.Black};
`;

export const SignUpPageTermsOfUseLink = styled.a`
  font-family: "Inter", serif;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;
