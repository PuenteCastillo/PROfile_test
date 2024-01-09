import { Input, InputNumber, Select } from "antd";
import { Color } from "globals/enums";
import styled from "styled-components";
import { ReactComponent as LeftArrowSVG } from "assets/icons/left-arrow.svg";
import { ReactComponent as PlusIconSVG } from "assets/icons/plus.svg";

export const EditBrickCopyLeftArrowIcon = styled(LeftArrowSVG)`
  position: relative;
  top: 3px;
  fill: ${Color.LightBlue};
`;

export const EditBrickCopyPlusIcon = styled(PlusIconSVG)`
  fill: ${Color.LightBlue};
`;

const panelWidth = '320px;'

export const EditBrickCopyMenuWrapper = styled.div`
  position: fixed;
  left: 80px;
  top: 0;
  height: 100vh;
  width: ${panelWidth};
  box-shadow: 2px 0 6px -2px ${Color.Black}29;
`;

export const EditBrickCopyContentWrapper = styled.div`
  overflow-y: auto;
  scrollbar-width: thin;
  height: calc(100vh - 105px);
  width: ${panelWidth};
  padding: 0 20px;
`;

export const EditBrickCopyVerticalSpacer = styled.div`
  height: 80px;
`;

export const EditBrickCopyBackLink = styled.div`
  margin-top: 40px;
  padding-left: 20px;
  cursor: pointer;
`;

export const EditBrickCopyBackLinkText = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.22px;
  color: ${Color.LightBlue};
  padding-left: 7px;
`;

export const EditBrickCopyTitle = styled.h2`
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

export const EditBrickCopyOptionLabel = styled.label`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 30px;
`;

export const EditBrickCopyOptionInput = styled(Input)`
  margin-top: 10px;
  height: 50px;
  font-size: 18px;
`;

export const EditBrickCopyOptionSelect = styled(Select)`
  font-size: 18px;
  margin-top: 20px;
  height: 50px;
  width: 100%;

  .ant-select-selector {
    display: flex;
    align-items: center;
    height: 50px !important;
  }
`;

export const EditBrickCopyOptionInputNumber = styled(InputNumber)`
  font-size: 18px;
  margin-top: 20px;
  height: 50px;
  width: 100%;

  .ant-input-number-input-wrap {
    display: flex;
    align-items: center;
    height: 50px;
  }
`;

export const BrickDivider = styled.hr`
  height: 1px;
  background-color: ${Color.Gray4};
  border: none;
  margin: 28px 0 0 0;
`;

export const EditBrickBodyLabel = styled.h3`
  margin-top: 20px;
`;

export const EditBrickTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const EditBrickTitleInputContainer = styled.div`
  width: 100%;
  position: relative;
  height: 50px;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
`;

export const EditBrickTitleInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${Color.Gray3};

  &:focus-visible {
    outline: 2px solid ${Color.Blue};
    outline-offset: -1px;
    caret-color: ${Color.Blue};
  }

  &:focus-visible + svg {
    stroke: ${Color.Blue};
  }
`;

export const EditBrickHeaderTrashButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 5px 0 0 7px;
`;

export const EditBrickBodyTextContainer = styled.div``;

export const EditBrickBodyTextButton = styled.button`
  position: relative;
  text-align: left;
  border: 1px solid ${Color.LightBlue};
  border-radius: 8px;
  padding: 10px 14px 10px 10px;
  height: 50px;
  color: ${Color.LightBlue};
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;

export const EditBrickBodyTextSpan = styled.span`
  font-size: rem(18);
  font-weight: 600;
`;
