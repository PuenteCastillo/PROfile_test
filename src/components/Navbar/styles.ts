import styled from "styled-components";
import { Layout } from "antd";
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import { ReactComponent as UserIcon } from "assets/icons/user-icon.svg";
import { Color } from "globals/enums";

export const Logo = styled(LogoIcon)`
  float: left;
  margin: 10px 20px 0 0;
  height: 50px;
  width: 50px;
`;

export const User = styled(UserIcon)`
  vertical-align: middle;
  margin-right: 10px;
  height: 26px;
  width: 26px;
`;

export const Nav = styled(Layout.Header)`
  background: ${Color.White};
  box-shadow: 0 1px 6px ${Color.Black}29;
  position: fixed;
  height: 70px;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;

  .ant-menu,
  .ant-menu-item {
    height: 45px;
    border-bottom: none;
  }

  .ant-menu-title-content {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const NavLayout = styled.div`
  max-width: 1360px;
  margin: 0 auto;
`;

export const NavProfile = styled.div`
  float: right;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  .anticon {
    vertical-align: middle;
    height: 26px;
    width: 26px;
    margin-right: 10px;

    svg {
      height: 100%;
      width: 100%;
    }
  }
`;
