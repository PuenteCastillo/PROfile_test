import { Color } from "globals/enums";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import addBrick from "assets/nav-icons/add-brick.svg?raw";
import addBrickHover from "assets/nav-icons/add-brick-hover.svg?raw";
import addBrickActive from "assets/nav-icons/add-brick-active.svg?raw";
import image from "assets/nav-icons/image.svg?raw";
import imageHover from "assets/nav-icons/image-hover.svg?raw";
import imageActive from "assets/nav-icons/image-active.svg?raw";
import pencil from "assets/nav-icons/pencil.svg?raw";
import pencilHover from "assets/nav-icons/pencil-hover.svg?raw";
import pencilActive from "assets/nav-icons/pencil-active.svg?raw";
import desktop from "assets/nav-icons/desktop.svg?raw";
import desktopHover from "assets/nav-icons/desktop-hover.svg?raw";
import desktopActive from "assets/nav-icons/desktop-active.svg?raw";
import mobile from "assets/nav-icons/mobile.svg?raw";
import mobileHover from "assets/nav-icons/mobile-hover.svg?raw";
import mobileActive from "assets/nav-icons/mobile-active.svg?raw";
import preview from "assets/nav-icons/preview.svg?raw";
import previewHover from "assets/nav-icons/preview-hover.svg?raw";
import previewActive from "assets/nav-icons/preview-active.svg?raw";
import help from "assets/nav-icons/help.svg?raw";
import helpHover from "assets/nav-icons/help-hover.svg?raw";
import helpActive from "assets/nav-icons/help-active.svg?raw";
import launch from "assets/nav-icons/launch.svg?raw";
import launchHover from "assets/nav-icons/launch-hover.svg?raw";
import launchActive from "assets/nav-icons/launch-active.svg?raw";
import save from "assets/nav-icons/save.svg?raw";
import saveHover from "assets/nav-icons/save-hover.svg?raw";
import saveActive from "assets/nav-icons/save-active.svg?raw";
import settings from "assets/nav-icons/settings.svg?raw";
import settingsHover from "assets/nav-icons/settings-hover.svg?raw";
import settingsActive from "assets/nav-icons/settings-active.svg?raw";

const baseIcon = `
  margin: 20px 20px 0 20px;
  height: 40px;
  width: 40px;
  background-size: contain;

  @media only screen and (max-height: 800px) {
    margin: 20px 25px 0 25px;
    height: 30px;
    width: 30px;
  }
`;

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 80px;
  background: ${Color.White};
  box-shadow: 1px 1px 6px ${Color.Black}29;
  z-index: 10; // ensure the dropshadow stays above the options panel on the right
`;

export const SideNavTopMenu = styled.div`
  padding-top: 20px;
`;

export const SideNavBottomMenu = styled.div`
  padding-bottom: 20px;
`;

export const Logo = styled(LogoIcon)`
  margin: 0 20px;
  height: 40px;
  width: 40px;
`;

export const Divider = styled.div`
  margin: 20px 20px 0 20px;
  height: 1px;
  width: 40px;
  background-color: ${Color.Gray4};
`;

export const AddBrickIcon = styled.div`
  ${baseIcon}
  background-image: ${({ active }: { active: boolean }): string => {
    return active
      ? `url(data:image/svg+xml;base64,${btoa(addBrickActive)}) !important;`
      : `url(data:image/svg+xml;base64,${btoa(addBrick)});`;
  }};

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(addBrickHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(addBrickActive)});
  }
`;

export const ImageIcon = styled.div`
  ${baseIcon}
  background-image: ${({ active }: { active: boolean }): string => {
    return active
      ? `url(data:image/svg+xml;base64,${btoa(imageActive)}) !important;`
      : `url(data:image/svg+xml;base64,${btoa(image)});`;
  }};

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(imageHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(imageActive)});
  }
`;

export const PencilIcon = styled.div`
  ${baseIcon}
  background-image: ${({ active }: { active: boolean }): string => {
    return active
      ? `url(data:image/svg+xml;base64,${btoa(pencilActive)}) !important;`
      : `url(data:image/svg+xml;base64,${btoa(pencil)});`;
  }};

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(pencilHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(pencilActive)});
  }
`;

export const DesktopIcon = styled.div`
  ${baseIcon}
  background-image: ${({ active }: { active: boolean }): string => {
    return active
      ? `url(data:image/svg+xml;base64,${btoa(desktopActive)}) !important;`
      : `url(data:image/svg+xml;base64,${btoa(desktop)});`;
  }};

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(desktopHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(desktopActive)});
  }
`;

export const MobileIcon = styled.div`
  ${baseIcon}
  background-image: ${({ active }: { active: boolean }): string => {
    return active
      ? `url(data:image/svg+xml;base64,${btoa(mobileActive)}) !important;`
      : `url(data:image/svg+xml;base64,${btoa(mobile)});`;
  }};

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(mobileHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(mobileActive)});
  }
`;

export const PreviewIcon = styled.div`
  ${baseIcon}
  background-image: url(data:image/svg+xml;base64,${btoa(preview)});

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(previewHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(previewActive)});
  }
`;

export const HelpIcon = styled.div`
  ${baseIcon}
  background-image: url(data:image/svg+xml;base64,${btoa(help)});

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(helpHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(helpActive)});
  }
`;

export const LaunchIcon = styled.div`
  ${baseIcon}
  background-image: url(data:image/svg+xml;base64,${btoa(launch)});

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(launchHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(launchActive)});
  }
`;

export const SaveIcon = styled.div`
  ${baseIcon}
  background-image: url(data:image/svg+xml;base64,${btoa(save)});

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(saveHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(saveActive)});
  }
`;

export const SettingsIcon = styled.div`
  ${baseIcon}
  background-image: url(data:image/svg+xml;base64,${btoa(settings)});

  &:hover {
    background-image: url(data:image/svg+xml;base64,${btoa(settingsHover)});
    cursor: pointer;
  }

  &:active {
    background-image: url(data:image/svg+xml;base64,${btoa(settingsActive)});
  }
`;
