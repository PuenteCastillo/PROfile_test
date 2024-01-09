import { BuilderMode, Color } from "globals/enums";
import styled from "styled-components";

const panelWidth = '400px' // 80px sidenav + 320px options panel

export const BuilderMainView = styled.div`
  overflow-y: scroll;
  position: absolute;
  padding: 20px;
  height: 100%;

  ${({mode}: {mode: BuilderMode.View | BuilderMode.Add | BuilderMode.Image | BuilderMode.Edit}): string => {
    return !!mode
      ? "left: " + panelWidth + "; width: calc(100vw - " + panelWidth + ");"
      : "left: 80px; width: calc(100vw - 80px);";
  }};

  // Original values
  // position: relative
  // ? "margin-left: 387px; width: calc(100vw - 427px);"
  // : "margin-left: 40px; width: calc(100vw - 80px);";

  &> div {
    scroll-margin-top: 20px;
  }

  &.highlight {
    background-color: ${Color.Gray5};
  }

  div.highlight {
    background-color: ${Color.BlueGray};
    border-radius: 16px;
  }

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

export const BuilderMobileView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const BuilderMobileViewContainer = styled.div`
  height: 80vh;
  max-height: 864px;
  width: 360px;
  box-shadow: 0 1px 6px ${Color.Black}29;
  overflow: scroll;
  position: relative;

  &> div {
    scroll-margin-top: 20px !important;
  }

  &.highlight {
    background-color: ${Color.Gray5} !important;
  }

  div.highlight {
    background-color: ${Color.BlueGray} !important;
    border-radius: 16px !important;
  }
`;
