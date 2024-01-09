import { ReactComponent as EditIconSVG } from "assets/icons/edit.svg";
import { ReactComponent as PlusIconSVG } from "assets/icons/plus.svg";
import { Color, TextDecoration } from "globals/enums";
import styled from "styled-components";

export const TextFieldEditIcon = styled(EditIconSVG)`
  position: absolute;
  top: 6px;
  right: 6px;
  fill: none;
  stroke: ${Color.Gray9};
  cursor: pointer;
`;

export const TextFieldLabelWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: .5em;
`;

export const TextFieldLabelContainer = styled.div`
  display: inline-block;
  width: 70%;
  text-align: left;
`;

export const TextFieldLabel = styled.h3`
  display: inline;
`;

export const TextFieldDeleteFieldLinkContainer = styled.div`
  display: inline-block;
  width: 30%;
  text-align: right;
`;

export const TextFieldDeleteFieldLink = styled.a`
  display: none;
  color: ${Color.Red};
  
  &:hover {
    color: ${Color.Red};
    text-decoration: ${TextDecoration.Underline};
  }
`;

export const TextFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextFieldInputContainer = styled.div`
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

export const TextFieldInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 44px 10px 10px;
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

export const TextFieldTrashCanButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 5px 0 0 7px;
`;

export const AddTextFieldContainer = styled.div`
  display: none;
`;

export const AddTextFieldButton = styled.button`
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

export const AddTextFieldPlusIcon = styled(PlusIconSVG)`
  fill: ${Color.LightBlue};
`;

export const AddTextFieldSpan = styled.span`
  font-size: rem(18);
  font-weight: 600;
`;
