import {
  HeaderContainer,
  HeaderLogo,
  HeaderLogoImg,
  HeaderLinks,
  HeaderLink,
} from "./styles";
import { HeaderBrickProps } from "./types";

const HeaderBrick = ({ logo, mode }: HeaderBrickProps) => {
  return (
    <HeaderContainer>
      {!logo && <HeaderLogo>Logo</HeaderLogo>}
      {logo && <HeaderLogoImg src={logo} />}
      <HeaderLinks>
        <HeaderLink to={""}>Link1</HeaderLink>
        <HeaderLink to={""}>Link2</HeaderLink>
        <HeaderLink to={""}>Link3</HeaderLink>
      </HeaderLinks>
    </HeaderContainer>
  );
};

export default HeaderBrick;
