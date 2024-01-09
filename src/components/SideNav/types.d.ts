import { BuilderMode, EditBrickMode, PreviewMode } from "globals/enums";

type SideNavProps = {
  mode: BuilderMode;
  uiMode: PreviewMode;
  setMode: Dispatch<SetStateAction<BuilderMode.Add | BuilderMode.Image | BuilderMode.Edit>>;
  setUiMode: Dispatch<SetStateAction<PreviewMode.Desktop | PreviewMode.Mobile>>;
  setEditBrickMode: Dispatch<SetStateAction<EditBrickMode.Copy | EditBrickMode.Image | EditBrickMode.None>>;
};
