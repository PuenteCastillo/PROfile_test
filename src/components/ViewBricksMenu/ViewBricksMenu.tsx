import { DragEvent, MouseEvent, useEffect, useRef } from "react";
import {
  AboutBrick,
  ContentBrick,
  FooterBrick,
  GalleryBrick,
  HeaderBrick,
  HeroBrick,
  QuoteBrick,
  SocialMediaFeedBrick,
} from "components";
import {
  ViewBricksTitle,
  ViewBricksMenuWrapper,
  ViewBricksContentWrapper,
  ViewBricksAddButton,
  ViewBricksComponentWrapper,
  ViewBricksComponent,
  BrickOptionsToolbar,
  BrickOptionsToolbarBrickName,
  BrickOptionsToolbarUpArrowIcon,
  BrickOptionsToolbarDownArrowIcon,
  BrickOptionsToolbarTrashCanIcon,
  ImageOptionsButton,
  BrickCopyButton
} from "./styles";
import { ViewBricksMenuProps } from "./types";
import { BrickId, EditBrickMode, ViewBricksMenuMode } from "globals/enums";
import BrickHelper from "helpers/BrickHelper";
import { BrickInstance } from "globals/types";

// TODO: Move to useRenderBricks
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

const ViewBricksMenu = ({
  bricks,
  setBricks,
  setAddMode,
  moveBrickUp,
  moveBrickDown,
  deleteBrick,
  openEditMenu,
  viewBricksMenuMode,
  uiMode,
  highlightIndex,
  setHighlightIndex
}: ViewBricksMenuProps) => {

  const dragItem = useRef(0);
  const dragOverItem = useRef(0);

  useEffect(() => {
    if (navigator.userAgent.indexOf('Mac OS X') == -1) {
      document.querySelector("#brick-panel")?.classList.add("custom-scrollbar");
    }
  }, []);

  const dragStart = (e: DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position;
    // e.currentTarget.style.cursor = "grabbing"
    console.log("dragStart:dragItem.current: [" + dragItem.current + "]");
  };

  const dragEnter = (e: DragEvent<HTMLDivElement>, position: number) => {
    dragOverItem.current = position;
    console.log("dragEnter:dragOverItem.current: [" + dragOverItem.current + "]");
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {

    // e.currentTarget.style.cursor = "help";
    // e.currentTarget.classList.add("highlight");

    const dragItemEl = document.querySelector(`#brick-panel > div:nth-child(${dragItem.current + 1})`) as HTMLElement;
    dragItemEl.classList.remove("highlight");

    const dragOverItemEl = document.querySelector(`#brick-panel > div:nth-child(${dragOverItem.current + 1})`) as HTMLElement;
    dragOverItemEl.classList.add("highlight");

    const copyOfBricks = [...bricks];
    const dragItemContent = copyOfBricks[dragItem.current];
    copyOfBricks.splice(dragItem.current, 1);
    copyOfBricks.splice(dragOverItem.current, 0, dragItemContent);
    
    setBricks(copyOfBricks);

    highlightAndScrollBrickInMainPanel(dragOverItem.current);

    console.log("handleDrop:dragItem.current: [" + dragItem.current + "]");
    console.log("handleDrop:dragOverItem.current: [" + dragOverItem.current + "]");
    dragItem.current = 0;
    dragOverItem.current = 0;

    

    // e.dataTransfer.target

    // e.currentTarget.style.cursor = "pointer";
    // e.currentTarget.classList.add("highlight");
    // TODO: This needs to be set on the main panel (e.currentTarget.scrollIntoView({ behavior: "smooth" });)
  };

  const highlightAndScrollBrickInMainPanel = (index: number) => {
    // let brickPanelAllElements = document.querySelectorAll(`#brick-panel > div`);
    let mainPanel = uiMode === "mobile" ? document.querySelector(`#main-view-panel > div > div`) as HTMLElement : document.querySelector(`#main-view-panel`) as HTMLElement;
    let mainPanelSelectedElement = uiMode === "mobile" ? document.querySelector(`#main-view-panel > div > div > div:nth-child(${index + 1})`) as HTMLElement : document.querySelector(`#main-view-panel > div:nth-child(${index + 1})`) as HTMLElement;
    let mainPanelAllElements = uiMode === "mobile" ? document.querySelectorAll(`#main-view-panel > div > div > div`) : document.querySelectorAll(`#main-view-panel > div`);

    for (let i = 0; i < mainPanelAllElements.length; i++) {
      let mainPanelBrick = mainPanelAllElements[i] as HTMLElement;
      mainPanelBrick.classList.remove("highlight");
    }

    // for (let i = 0; i < brickPanelAllElements.length; i++) {
    //   let brickPanelElement = brickPanelAllElements[i] as HTMLElement;
    //   brickPanelElement.classList.remove("highlight");
    // }

    // brickPanelSelectedElement.classList.add("highlight");
    mainPanel.classList.add("highlight");
    mainPanelSelectedElement.classList.add("highlight");
    mainPanelSelectedElement.scrollIntoView({ behavior: "smooth" });

    setHighlightIndex(index);
  }


  const handleClick = (e: React.FormEvent<HTMLElement>, index: number) => {
    let target = e.target as HTMLElement;
    let brickPanelSelectedElement = e.currentTarget;
    let brickPanelAllElements = document.querySelectorAll(`#brick-panel > div`);
    let mainPanel = uiMode === "mobile" ? document.querySelector(`#main-view-panel > div > div`) as HTMLElement : document.querySelector(`#main-view-panel`) as HTMLElement;
    let mainPanelSelectedElement = uiMode === "mobile" ? document.querySelector(`#main-view-panel > div > div > div:nth-child(${index + 1})`) as HTMLElement : document.querySelector(`#main-view-panel > div:nth-child(${index + 1})`) as HTMLElement;
    let mainPanelAllElements = uiMode === "mobile" ? document.querySelectorAll(`#main-view-panel > div > div > div`) : document.querySelectorAll(`#main-view-panel > div`);

    for (let i = 0; i < mainPanelAllElements.length; i++) {
      let mainPanelBrick = mainPanelAllElements[i] as HTMLElement;
      mainPanelBrick.classList.remove("highlight");
    }

    for (let i = 0; i < brickPanelAllElements.length; i++) {
      let brickPanelElement = brickPanelAllElements[i] as HTMLElement;
      brickPanelElement.classList.remove("highlight");
    }

    brickPanelSelectedElement.classList.add("highlight");
    mainPanel.classList.add("highlight");
    mainPanelSelectedElement.classList.add("highlight");
    mainPanelSelectedElement.scrollIntoView({ behavior: "smooth" });

    setHighlightIndex(index);

    console.log("handleClick:setHighlightIndex(" + index + ")");
  }

  const renderBricks = (): Array<JSX.Element> => {
    return bricks.length
      ? bricks.map(({ type, instanceCt, props }: BrickInstance, idx: number) => {
        const Component = bricksComponents[(BrickHelper.getIndexName(type) + "Brick") as keyof BricksComponents];
        return (
          <ViewBricksComponentWrapper
            key={idx}
            onClick={(e) => handleClick(e, idx)}
            // onMouseDown={(e) => e.currentTarget.style.cursor = "grab"}
            // onMouseUp={(e) => e.currentTarget.style.cursor = "default"}
            onDragStart={(e) => dragStart(e, idx)}
            onDragEnter={(e) => dragEnter(e, idx)}
            onDragEnd={(e) => handleDrop(e)}
            draggable
            // className={idx === highlightIndex ? "highlight" : ""}
          >
            <ViewBricksComponent>
              <Component {...props} />
            </ViewBricksComponent>
            {viewBricksMenuMode === ViewBricksMenuMode.BrickOptions &&
              <BrickOptionsToolbar>
                <BrickOptionsToolbarBrickName>
                  {BrickHelper.getDisplayName(type) + (instanceCt == 1 ? "" : " " + instanceCt)}
                </BrickOptionsToolbarBrickName>
                {/* {type !== BrickId.Header && idx != 1 &&
                  <BrickOptionsToolbarUpArrowIcon onClick={() => moveBrickUp(idx)} />
                }
                {type !== BrickId.Header && idx != (bricks.length - 1) &&
                  <BrickOptionsToolbarDownArrowIcon onClick={() => moveBrickDown(idx)} />
                } */}
                {type !== BrickId.Header &&
                  <BrickOptionsToolbarTrashCanIcon onClick={() => deleteBrick(idx)} />
                }
              </BrickOptionsToolbar>
            }
            {viewBricksMenuMode === ViewBricksMenuMode.ImageOptions &&
              <ImageOptionsButton id="image-edit" onClick={() => openEditMenu(idx, EditBrickMode.Image)}>
                {BrickHelper.getEditImagesHeaderText(type)}
              </ImageOptionsButton>
            }
            {viewBricksMenuMode === ViewBricksMenuMode.BrickCopy &&
              <BrickCopyButton
                id="copy-edit"
                onClick={() => openEditMenu(idx, EditBrickMode.Copy)}
                disabled={BrickHelper.isEditCopyButtonDisabled(type)}
              >
                Edit {BrickHelper.getDisplayName(type)} Copy
              </BrickCopyButton>
            }
          </ViewBricksComponentWrapper>
        );
      }
      )
      : [];
  };

  return (
    <ViewBricksMenuWrapper>
      <ViewBricksTitle>{viewBricksMenuMode}</ViewBricksTitle>
      {viewBricksMenuMode == ViewBricksMenuMode.BrickOptions &&
        <ViewBricksAddButton type="primary" size="large" onClick={setAddMode}>
          Add Brick
        </ViewBricksAddButton>
      }
      <ViewBricksContentWrapper id="brick-panel">
        {renderBricks()}
      </ViewBricksContentWrapper>
    </ViewBricksMenuWrapper>
  );
};

export default ViewBricksMenu;
