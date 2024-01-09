import { Input, Layout } from "antd";
import { ReactComponent as ChevronIcon } from "assets/icons/chevron-down-icon.svg";
import { Color } from "globals/enums";
import styled from "styled-components";

export const TemplatePreviewMenu = styled.div`
  position: fixed;
  top: 94px;
  left: 0;
  width: 100vw;
  padding-top: 24px;
  z-index: 120;
  text-align: center;
  display: none;
`;

export const TemplatePreviewMenuImage = styled.img`
  cursor: pointer;
  width: 212px;
  height: 54px;
  display: inline;
  margin: 0 14px 0 0;
`;

export const TemplatePreviewMenuButton = styled.button`
  display: inline;
  cursor: pointer;
  height: 46px;
  padding: 0 14px;
  border: 0;
  border-radius: 12px;
  background: ${Color.Blue};
  color: ${Color.White};
  font-size: 18px;
  font-weight: bold;
  position: relative;
  top: 2px;
`;

export const TemplatePreviewPaneContainer = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 12;
  display: none;
`;

export const TemplatePreviewPane = styled.div`
  max-width: 1360px;
  margin: 90px auto 0 auto;
  z-index: 13;
`;

export const TemplatePreviewPaneImage = styled.img`
  max-width: 100%;
  position: relative;
  left: -8px;
`;

export const TemplatesPageWrapper = styled.div`
  max-width: 1360px;
  margin: 200px auto 0 auto;
  //margin-top: 200px;
`;

export const TemplatesSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const TemplatsHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const TemplatesSearch = styled(Input)`
  border-radius: 25px;
  border: 1px solid ${Color.Gray3};
  height: 42px;
  max-width: 460px;

  input {
    ::placeholder {
      color: ${Color.Gray7};
    }
  }
`;

export const TemplatesSorting = styled.div`
  font-size: 18px;
  font-weight: 600;

  .ant-select {
    width: 170px;
  }

  .ant-select-selection-item {
    font-size: 18px;
    font-weight: 600;
  }

  .ant-select-selection-item,
  .ant-select-arrow {
    color: ${Color.Blue};
  }
`;

export const TemplatesNav = styled(Layout.Header)`
  background: ${Color.White};
  box-shadow: 0 1px 6px ${Color.Black}29;
  position: absolute;
  height: 70px;
  left: 0;
  top: 70px;
  z-index: 9;
  width: 100%;

  .ant-menu,
  .ant-menu-item {
    height: 70px;
  }

  .ant-menu-title-content {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const TemplatesNavLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1360px;
  margin: 0 auto;

  .ant-menu {
    min-width: 50%;
    margin-left: -20px;
  }

  .ant-menu:nth-of-type(2) {
    display: flex;
    align-items: end;
    justify-content: end;
    margin-right: -20px;
  }

  .anticon {
    height: 20px;
    width: 20px;
    margin-right: 4px;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  .ant-menu-submenu:hover {
    svg {
      fill: ${Color.Blue};
    }
  }
`;

export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Divider = styled.div`
  background: ${Color.Gray3};
  position: absolute;
  right: -20px;
  top: 16px;
  height: 34px;
  width: 1px;
`;

export const Chevron = styled(ChevronIcon)`
  position: absolute;
  right: -13px;
  top: 28px;
  height: 9px;
  width: 9px;
`;
