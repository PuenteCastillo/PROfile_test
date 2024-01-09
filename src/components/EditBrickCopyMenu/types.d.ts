import { EditBrickMode } from "globals/enums";
import { BrickInstance } from "globals/types";

type EditBrickCopyMenuProps = {
  brick: BrickInstance;
  brickIndex: number;
  setBrickProps: Dispatch<SetStateAction<{index: number, props: any}>>;
  setEditBrickMode: Dispatch<SetStateAction<EditBrickMode.Copy | EditBrickMode.Image | EditBrickMode.None>>;
};
