type BackgroundFieldProps = {
  field: EditableImageField;
  toggleToolbar: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  brickIndex: number;
  setBrickProps: Dispatch<SetStateAction<{index: number, props: any}>>;
};
