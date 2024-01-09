import {
  FooterBrickWrapper,
  FooterBrickContainer,
  FooterBrickCopyright,
  FooterBrickLink,
} from "./styles";

const FooterBrick = () => {
  return (
    <FooterBrickWrapper>
      <FooterBrickContainer>
        <FooterBrickCopyright>©2022 Greg Palumbo  All Rights Reserved.</FooterBrickCopyright>
        <div>
          <FooterBrickLink to={""}>Privacy Policy</FooterBrickLink>
          <FooterBrickLink to={""}>Terms of Service</FooterBrickLink>
        </div>
      </FooterBrickContainer>
    </FooterBrickWrapper>
  );
};

export default FooterBrick;
