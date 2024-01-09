type BrickType = {
  name: string;
  type: string;
};

type AddBrickMenuProps = {
  brickType: string | undefined;
  setBrickType: Dispatch<SetStateAction<string>>;
  hasHeader: boolean;
};
