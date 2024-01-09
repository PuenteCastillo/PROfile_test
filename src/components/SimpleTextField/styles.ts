import { Color } from "globals/enums";
import styled from "styled-components";

export const SimpleTextFieldLabel = styled.h3`
  margin-top: 20px;
`;

export const SimpleTextFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const SimpleTextFieldInputContainer = styled.div`
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

export const SimpleTextFieldInput = styled.input`
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
