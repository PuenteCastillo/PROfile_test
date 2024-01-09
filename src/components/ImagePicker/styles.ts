import { Color } from "globals/enums";
import styled from "styled-components";

export const ImagePickerPreview = styled.div`
  cursor: pointer;
  color: ${Color.White};
  background: ${Color.Blue};
  text-align: center;
  border-radius: 8px;
  height: 120px;
  width: 100%;
  padding-top: 40px;
  margin-top: 8px;
  font-weight: bold;
  font-size: 25px;
`;

export const ImagePreview = styled.img`
  cursor: pointer;
  border-radius: 8px;
  height: 120px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  margin-top: 8px;
`;
