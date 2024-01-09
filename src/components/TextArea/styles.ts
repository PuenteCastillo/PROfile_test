import { ReactComponent as EditIconSVG } from "assets/icons/edit.svg";
import { ReactComponent as PlusIconSVG } from "assets/icons/plus.svg";
import { Color, TextDecoration } from "globals/enums";
import styled from "styled-components";

export const TextAreaEditIcon = styled(EditIconSVG)`
  position: absolute;
  top: 6px;
  right: 6px;
  fill: none;
  stroke: ${Color.Gray9};
  cursor: pointer;
`;

export const TextAreaLabelWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: .5em;
`;

export const TextAreaLabelContainer = styled.div`
  display: inline-block;
  width: 70%;
  text-align: left;
`;

export const TextAreaLabel = styled.h3`
  display: inline;
`;

export const TextAreaDeleteFieldLinkContainer = styled.div`
  display: inline-block;
  width: 30%;
  text-align: right;
`;

export const TextAreaDeleteFieldLink = styled.a`
  display: none;
  color: ${Color.Red};
  
  &:hover {
    color: ${Color.Red};
    text-decoration: ${TextDecoration.Underline};
  }
`;

export const TextAreaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextAreaInputContainer = styled.div`
  width: 100%;
  position: relative;
  height: auto;

  svg {
    position: absolute;
    top: 14px;
    right: 10px;
  }
`;

export const TextAreaInput = styled.textarea`
  width: 100%;
  height: 215px;
  padding: 10px 44px 10px 10px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${Color.Gray3};
  spellcheck: false;

  &:focus-visible {
    outline: 2px solid ${Color.Blue};
    outline-offset: -1px;
    caret-color: ${Color.Blue};
  }

  &:focus-visible + svg {
    stroke: ${Color.Blue};
  }
`;

export const TextAreaTrashCanButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 5px 0 0 7px;
`;

export const AddTextAreaContainer = styled.div`
  display: none;
`;

export const AddTextAreaButton = styled.button`
  position: relative;
  text-align: left;
  border: 1px solid ${Color.LightBlue};
  border-radius: 8px;
  padding: 10px 14px 10px 10px;
  height: 50px;
  color: ${Color.LightBlue};
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;

export const AddTextAreaPlusIcon = styled(PlusIconSVG)`
  fill: ${Color.LightBlue};
`;

export const AddTextAreaSpan = styled.span`
  font-size: rem(18);
`;
