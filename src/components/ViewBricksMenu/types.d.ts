import { EditBrickMode, ViewBricksMenuMode } from "globals/enums";
import { BrickInstance } from "globals/types";

type ViewBricksMenuProps = {
  bricks: Array<BrickInstance>;
  setBricks: (bricks: Array<BrickInstance>) => void;
  setAddMode: () => void;
  moveBrickUp: (brickIndex: number) => void;
  moveBrickDown: (brickIndex: number) => void;
  deleteBrick: (brickIndex: number) => void;
  openEditMenu: (brickIndex: number, mode: EditBrickMode) => void;
  viewBricksMenuMode: ViewBricksMenuMode;
  uiMode: PreviewMode;
  highlightIndex: number | null;
  setHighlightIndex: setHighlightIndex;
};
