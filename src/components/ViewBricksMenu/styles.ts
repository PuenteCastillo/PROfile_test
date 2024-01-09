import styled from "styled-components";
import { Button } from "antd";
import { Color } from "globals/enums";
import { ReactComponent as UpArrowIconSVG } from "assets/icons/up-arrow.svg";
import { ReactComponent as DownArrowIconSVG } from "assets/icons/down-arrow.svg";
import { ReactComponent as TrashCanIconSVG } from "assets/icons/trash-can.svg";

const panelWidth = '320px;'

export const ViewBricksMenuWrapper = styled.div`
  position: fixed;
  left: 80px;
  top: 0;
  height: 100vh;
  width: ${panelWidth};
  box-shadow: 2px 0 6px -2px ${Color.Black}29;
  z-index: 10;
`;

export const ViewBricksContentWrapper = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 105px);
  margin-top: 30px;
  text-align: center;
  width: ${panelWidth};
  padding: 4px 20px 40px 20px;

  /* Firefox */
  &.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: ${Color.Gray5} #F2F2F2;
  }
  
  /* Chrome, Edge and Safari */
  &.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
    width: 6px;
  }
  
  &.custom-scrollbar::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #F2F2F2;
  }
  
  &.custom-scrollbar::-webkit-scrollbar-track:hover {
    background-color: #F2F2F2;
  }
  
  &.custom-scrollbar::-webkit-scrollbar-track:active {
    background-color: #F2F2F2;
  }
  
  &.custom-scrollbar::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${Color.Gray5};
  }
  
  &.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #7a7a7a;
  }
  
  &.custom-scrollbar::-webkit-scrollbar-thumb:active {
    background-color: #A2A2A2;
  }
`;

export const ViewBricksTitle = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.22px;
  margin-top: 40px;
  margin-left: 20px;

  &:after {
    content: "";
    background: ${Color.Black};
    position: absolute;
    left: 0px;
    top: 35px;
    height: 3px;
    width: 100%;
  }
`;

export const ViewBricksComponentWrapper = styled.div`
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.16);
  border-radius: 8px;
  position: relative;
  padding: 8px 8px 8px 8px;
  min-height: 46px;
  margin-bottom: 20px;

  &:hover,
  &.highlight {
    outline: 3px solid ${Color.Blue};
    cursor: pointer;
  }
`;

export const ViewBricksAddButton = styled(Button)`
  display: inline-block;
  font-weight: 600;
  margin-left: 30px;
`;

// TODO: All of these components should eventually be reworked as Flex elements instead of being absolutely positioned & with fixed widths - 03.02.2023 Shane Elliott
export const ViewBricksComponent = styled.div`
  zoom: 25%; // this zooms the preview of the Brick in the brick options panel
  overflow-y: hidden; // hide the overflow for the background image which has a negative margin-top to appear under the header/nav
`;

export const BrickOptionsToolbar = styled.div`
  text-align: right;
  position: relative;
  margin-top: 10px;
  min-height: 36px;
`;

export const BrickOptionsToolbarBrickName = styled.div`
  width: 112px;
  height: 34px;
  display: inline-block;
  outline: 1px solid ${Color.Gray3};
  border-radius: 8px;
  text-align: left;
  position: absolute;
  top: 1px;
  left: 2px;
  padding: 4px 0 0 8px;
  font-size: 16px;
  color: black;
`;

export const BrickOptionsToolbarUpArrowIcon = styled(UpArrowIconSVG)`
  width: 36px;
  height: 36px;
  margin-right: 5px;
  cursor: pointer;
`;

export const BrickOptionsToolbarDownArrowIcon = styled(DownArrowIconSVG)`
  width: 36px;
  height: 36px;
  margin-right: 5px;
  cursor: pointer;
`;

export const BrickOptionsToolbarTrashCanIcon = styled(TrashCanIconSVG)`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export const ImageOptionsButton = styled.button`
  display: block;
  cursor: pointer;
  color: ${Color.White};
  background: ${Color.Blue};
  border-radius: 8px;
  border: none;
  margin-top: 8px;
  height: 40px;
  width: 100%;
  text-align: center;

  &:hover {
    background: ${Color.BlueHover};
  }
`;

export const BrickCopyButton = styled.button`
  display: block;
  cursor: pointer;
  color: ${Color.White};
  background: ${Color.Blue};
  border-radius: 8px;
  border: none;
  margin-top: 8px;
  height: 40px;
  width: 100%;
  text-align: center;

  &:hover {
    background: ${Color.BlueHover};
  }

  &:disabled {
    opacity: 50%;
  }
`;
