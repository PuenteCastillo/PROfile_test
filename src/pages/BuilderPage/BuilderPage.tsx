import { useEffect, useState } from "react";
import { BrickId, BuilderMode, PreviewMode, ViewBricksMenuMode, EditBrickMode } from "globals/enums";
import { BrickInstance } from "globals/types";
import BrickHelper from "helpers/BrickHelper";
import BrickFactory from "helpers/BrickFactory";
import {
  AddBrickMenu,
  BrickCards,
  SideNav,
  HeaderBrick,
  HeroBrick,
  QuoteBrick,
  EditBrickImageMenu,
  ViewBricksMenu,
  EditBrickCopyMenu,
  AboutBrick,
  ContentBrick,
  GalleryBrick,
  SocialMediaFeedBrick,
  FooterBrick,
} from "components";
import {
  BuilderMainView,
  BuilderMobileView,
  BuilderMobileViewContainer,
} from "./styles";

const bricksComponents: BricksComponents = {
  HeaderBrick,
  HeroBrick,
  AboutBrick,
  QuoteBrick,
  ContentBrick,
  GalleryBrick,
  SocialMediaFeedBrick,
  FooterBrick,
};

let hasHeader = false;
let headerBrickCt = 0;
let heroBrickCt = 0;
let quoteBrickCt = 0;
let contentBrickCt = 0;
let galleryBrickCt = 0;
let aboutBrickCt = 0;
let footerBrickCt = 0;
let socialBrickCt = 0;

const BuilderPage = () => {
  const [mode, setMode] = useState<BuilderMode.View | BuilderMode.Add | BuilderMode.Image | BuilderMode.Edit>(BuilderMode.Add);
  const [uiMode, setUiMode] = useState<PreviewMode.Desktop | PreviewMode.Mobile>(PreviewMode.Desktop);
  const [editBrickMode, setEditBrickMode] = useState<EditBrickMode.Copy | EditBrickMode.Image | EditBrickMode.None>(EditBrickMode.None);
  const [selectedBrickType, setSelectedBrickType] = useState<string>(BrickId.Header);
  const [selectedBrickIndex, setSelectedBrickIndex] = useState<number>(0);
  const [bricks, setBricks] = useState<Array<BrickInstance>>([]);
  const [bricksAddedCt, setBricksAddedCt] = useState<number>(0);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  useEffect(() => {
    if (navigator.userAgent.indexOf('Mac OS X') == -1) {
      document.querySelector("#main-view-panel")?.classList.add("custom-scrollbar");
      document.getElementsByTagName('body')[0].classList.add("custom-scrollbar");
    }
  }, []);

  useEffect(() => {
    highlightRecentBrick();
  }, [bricks.length]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const highlightRecentBrick = () => {
    if (bricks.length > 0) {
      let index = bricks.length - 1;
      let brickPanelAllElements = document.querySelectorAll(`#brick-panel > div`);
      let brickPanelRecentElement = brickPanelAllElements[index] as HTMLElement;
      let mainPanel = uiMode === "mobile" ? document.querySelector(`#main-view-panel > div > div`) as HTMLElement : document.querySelector(`#main-view-panel`) as HTMLElement;
      let mainPanelAllElements = uiMode === "mobile" ? document.querySelectorAll(`#main-view-panel > div > div > div`) : document.querySelectorAll(`#main-view-panel > div`);
      let mainPanelRecentElement = mainPanelAllElements[index] as HTMLElement;

      for (let i = 0; i < mainPanelAllElements.length; i++) {
        let mainPanelBrick = mainPanelAllElements[i] as HTMLElement;
        mainPanelBrick.classList.remove("highlight");
      }

      for (let i = 0; i < brickPanelAllElements.length; i++) {
        let brickPanelElement = brickPanelAllElements[i] as HTMLElement;
        brickPanelElement.classList.remove("highlight");
      }

      brickPanelRecentElement.classList.add("highlight");
      mainPanel.classList.add("highlight");
      mainPanelRecentElement.classList.add("highlight");

      mainPanelRecentElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleClickOutside = (e: any) => {
    let brickPanelAllElements = document.querySelectorAll(`#brick-panel > div`);
    let mainPanel = uiMode === "mobile" ? document.querySelector(`#main-view-panel > div > div`) as HTMLElement : document.querySelector(`#main-view-panel`) as HTMLElement;
    let mainPanelAllElements = uiMode === "mobile" ? document.querySelectorAll(`#main-view-panel > div > div > div`) : document.querySelectorAll(`#main-view-panel > div`);
    let sideNavElements = [...document.querySelectorAll(`#side-nav > div > div`)];

    if (!sideNavElements.includes(e.target)) {
      for (let i = 0; i < brickPanelAllElements.length; i++) {
        if (e.target !== brickPanelAllElements[i]) {
          let brickPanelElement = brickPanelAllElements[i] as HTMLElement;
          let mainPanelElement = mainPanelAllElements[i] as HTMLElement;

          brickPanelElement.classList.remove("highlight");
          mainPanelElement.classList.remove("highlight");
          mainPanel.classList.remove("highlight");
        }
      }

      setHighlightIndex(null);
    }
  };

  const changeBuilderMode = (mode: BuilderMode.View | BuilderMode.Add | BuilderMode.Image | BuilderMode.Edit) => {
    setMode(mode);

    if (!hasHeader) {
      setSelectedBrickType(BrickId.Header);
    } else {
      setSelectedBrickType("");
    }
  };

  const moveBrickUp = (brickIndex: number) => {
    const bricksData = [...bricks];
    if (brickIndex > 1) {
      if (bricksData.length > 1) {
        [bricksData[brickIndex - 1], bricksData[brickIndex]] = [bricksData[brickIndex], bricksData[brickIndex - 1]];
      }
    }
    setBricks(bricksData);
  };

  const moveBrickDown = (brickIndex: number) => {
    const bricksData = [...bricks];
    if (brickIndex < (bricksData.length - 1)) {
      if (bricksData.length > 1) {
        [bricksData[brickIndex], bricksData[brickIndex + 1]] = [bricksData[brickIndex + 1], bricksData[brickIndex]];
      }
    }
    setBricks(bricksData);
  };

  const deleteBrick = (brickIndex: number) => {
    const bricksData = [...bricks];
    bricksData.splice(brickIndex, 1);
    setBricks(bricksData);
  };

  const openEditMenu = (brickIndex: number, mode: EditBrickMode) => {
    setSelectedBrickIndex(brickIndex);
    setEditBrickMode(mode);
  }

  const onBrickSelect = (type: string) => {
    let brickObj: BrickInstance;
    setBricksAddedCt(bricksAddedCt + 1);

    switch (type) {
      case BrickId.Header:
        hasHeader = true;
        headerBrickCt++;
        brickObj = BrickFactory.createBrick(BrickId.Header, headerBrickCt, bricksAddedCt);
        break;
      case BrickId.Hero:
        heroBrickCt++;
        brickObj = BrickFactory.createBrick(BrickId.Hero, heroBrickCt, bricksAddedCt);
        break;
      case BrickId.About:
        aboutBrickCt++;
        brickObj = BrickFactory.createBrick(BrickId.About, aboutBrickCt, bricksAddedCt);
        break;
      case BrickId.Quote:
        quoteBrickCt++;
        brickObj = BrickFactory.createBrick(BrickId.Quote, quoteBrickCt, bricksAddedCt);
        break;
      case BrickId.Content:
        contentBrickCt++;
        brickObj = BrickFactory.createBrick(BrickId.Content, contentBrickCt, bricksAddedCt);
        break;
      case BrickId.Gallery:
        galleryBrickCt++;
        brickObj = BrickFactory.createBrick(BrickId.Gallery, galleryBrickCt, bricksAddedCt);
        break;
      case BrickId.SocialMediaFeed:
        socialBrickCt++;
        brickObj = BrickFactory.createBrick(BrickId.SocialMediaFeed, socialBrickCt, bricksAddedCt);
        break;
      case BrickId.Footer:
        footerBrickCt++;
        brickObj = BrickFactory.createBrick(BrickId.Footer, footerBrickCt, bricksAddedCt);
        break;
      default:
        return;
    }

    setBricks([...bricks!, brickObj!]);
    setMode(BuilderMode.View);
  };

  const renderBricks = (): Array<JSX.Element> => {
    return bricks.length
      ? bricks.map(
        ({ type, props }: BrickInstance, idx: number) => {
          const Component = bricksComponents[(BrickHelper.getIndexName(type) + "Brick") as keyof BricksComponents];
          return <Component key={idx} {...props} className={idx === highlightIndex ? "highlight" : ""} />;
        }
      )
      : [];
  };

  const setBrickProps = (brickIndex: number, props: any) => {
    const bricksData = [...bricks];
    bricks[brickIndex].props = { ...bricks[brickIndex].props, ...props };
    setBricks(bricksData);
  };

  const getViewBricksMenuMode = (mode: BuilderMode): ViewBricksMenuMode => {
    let menuMode: ViewBricksMenuMode = ViewBricksMenuMode.BrickOptions;
    switch (mode) {
      case BuilderMode.View:
        menuMode = ViewBricksMenuMode.BrickOptions;
        break;
      case BuilderMode.Image:
        menuMode = ViewBricksMenuMode.ImageOptions;
        break;
      case BuilderMode.Edit:
        menuMode = ViewBricksMenuMode.BrickCopy;
        break;
    }
    return menuMode;
  }

  return (
    <>
      <SideNav
        mode={mode}
        uiMode={uiMode}
        setMode={changeBuilderMode}
        setUiMode={setUiMode}
        setEditBrickMode={setEditBrickMode}
      />
      {mode == BuilderMode.Add && (
        <AddBrickMenu
          brickType={selectedBrickType}
          setBrickType={setSelectedBrickType}
          hasHeader={hasHeader}
        />
      )}
      {(mode == BuilderMode.View || mode == BuilderMode.Image || mode == BuilderMode.Edit) &&
        (editBrickMode == EditBrickMode.None) && (
          <ViewBricksMenu
            bricks={bricks}
            setBricks={setBricks}
            setAddMode={() => changeBuilderMode(BuilderMode.Add)}
            moveBrickUp={(brickIndex) => moveBrickUp(brickIndex)}
            moveBrickDown={(brickIndex) => moveBrickDown(brickIndex)}
            deleteBrick={(brickIndex) => deleteBrick(brickIndex)}
            openEditMenu={(brickIndex, mode) => openEditMenu(brickIndex, mode)}
            viewBricksMenuMode={getViewBricksMenuMode(mode)}
            uiMode={uiMode}
            highlightIndex={highlightIndex}
            setHighlightIndex={setHighlightIndex}
          />
        )}
      {(mode == BuilderMode.View || mode == BuilderMode.Image || mode == BuilderMode.Edit) &&
        (editBrickMode == EditBrickMode.Image) && (
          <EditBrickImageMenu
            brick={bricks[selectedBrickIndex]}
            brickIndex={selectedBrickIndex}
            setBrickProps={setBrickProps}
            setEditBrickMode={setEditBrickMode}
          />
        )}
      {(mode == BuilderMode.View || mode == BuilderMode.Image || mode == BuilderMode.Edit) &&
        (editBrickMode == EditBrickMode.Copy) && (
          <EditBrickCopyMenu
            brick={bricks[selectedBrickIndex]}
            brickIndex={selectedBrickIndex}
            setBrickProps={setBrickProps}
            setEditBrickMode={setEditBrickMode}
          />
        )}
      <BuilderMainView id="main-view-panel" mode={mode}>
        {mode === BuilderMode.Add && selectedBrickType && (
          <BrickCards onBrickSelect={onBrickSelect} type={selectedBrickType} />
        )}
        {mode !== BuilderMode.Add && uiMode == PreviewMode.Desktop && renderBricks()}
        {mode !== BuilderMode.Add && uiMode == PreviewMode.Mobile && (
          <BuilderMobileView>
            <BuilderMobileViewContainer>
              {renderBricks()}
            </BuilderMobileViewContainer>
          </BuilderMobileView>
        )}
      </BuilderMainView>
    </>
  );
};

export default BuilderPage;
