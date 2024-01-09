import { Color, TextDecoration } from "globals/enums";
import styled from "styled-components";

export const ImageFieldLabelWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: .5em;
`;

export const ImageFieldLabelContainer = styled.div`
  display: inline-block;
  width: 70%;
  text-align: left;
`;

export const ImageFieldLabel = styled.h3`
  display: inline;
`;

export const ImageFieldDeleteFieldLinkContainer = styled.div`
  display: inline-block;
  width: 30%;
  text-align: right;
`;

export const ImageFieldDeleteFieldLink = styled.a`
  display: none;
  color: ${Color.Red};
  
  &:hover {
    color: ${Color.Red};
    text-decoration: ${TextDecoration.Underline};
  }
`;

export const ImageFieldContainer = styled.div`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // margin-bottom: 10px;
`;

export const ImageFieldOpenModalButton = styled.button`
  width: 100%;
  height: 120px;
  cursor: pointer;
  // margin-top: 30px;
  padding: 14px;
  border: 0;
  border-radius: 8px;
  background: ${Color.Blue};
  color: ${Color.White};
  opacity: 100%;
  font-size: 25px;
  font-weight: bold;

  &:hover {
    opacity: 100%;
  }
`;

export const ImageFieldClickToChangeLabel = styled.label`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 10px;
  text-align: center;
`;
