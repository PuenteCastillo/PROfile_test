import { BuilderMode, EditBrickMode, PreviewMode } from "globals/enums";
import { Link } from "react-router-dom";
import {
  SideNavContainer,
  SideNavTopMenu,
  SideNavBottomMenu,
  Logo,
  Divider,
  AddBrickIcon,
  ImageIcon,
  PencilIcon,
  DesktopIcon,
  MobileIcon,
  PreviewIcon,
  HelpIcon,
  LaunchIcon,
  SaveIcon,
  SettingsIcon,
} from "./styles";
import { SideNavProps } from "./types";

const SideNav = ({
  mode,
  uiMode,
  setMode,
  setUiMode,
  setEditBrickMode
}: SideNavProps) => {
  return (
    <SideNavContainer id="side-nav">
      <SideNavTopMenu>
        <Link to={"/dashboard"}>
          <Logo />
        </Link>
        <Divider />
        <AddBrickIcon
          active={Boolean(mode == BuilderMode.Add || mode == BuilderMode.View)}
          onClick={() => {
            setMode(BuilderMode.View);
            setEditBrickMode(EditBrickMode.None);
          }}
        ></AddBrickIcon>
        <ImageIcon  
          active={Boolean(mode == BuilderMode.Image)}
          onClick={() => {
            setMode(BuilderMode.Image);
            setEditBrickMode(EditBrickMode.None);
          }}
        ></ImageIcon>
        <PencilIcon
          active={Boolean(mode == BuilderMode.Edit)}
          onClick={() => {
            setMode(BuilderMode.Edit);
            setEditBrickMode(EditBrickMode.None);
          }}
        ></PencilIcon>
        <Divider />
        <DesktopIcon
          active={Boolean(uiMode == PreviewMode.Desktop)}
          onClick={() => setUiMode(PreviewMode.Desktop)}
        ></DesktopIcon>
        <MobileIcon
          active={Boolean(uiMode == PreviewMode.Mobile)}
          onClick={() => setUiMode(PreviewMode.Mobile)}
        ></MobileIcon>
        <Divider />
        <PreviewIcon></PreviewIcon>
        <Divider />
        <HelpIcon></HelpIcon>
      </SideNavTopMenu>
      <SideNavBottomMenu>
        <LaunchIcon></LaunchIcon>
        <Divider />
        <SaveIcon></SaveIcon>
        <SettingsIcon></SettingsIcon>
      </SideNavBottomMenu>
    </SideNavContainer>
  );
};

export default SideNav;
