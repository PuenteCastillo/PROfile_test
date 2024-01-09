type TextAreaProps = {
  field: EditableTextField;
  fontFamilies: Array<string>;
  fontSizeRange: Array<number>;
  lineHeightRange: Array<number>;
  toggleToolbars: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  brickIndex: number;
  setBrickProps: Dispatch<SetStateAction<{index: number, props: any}>>;
};
