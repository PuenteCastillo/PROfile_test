type BackgroundFieldToolbarProps = {
  id: string;
  field: EditableImageField;
  currentImage: string;
  brickIndex: number;
  setBrickProps: Dispatch<SetStateAction<{index: number, props: any}>>;
};
