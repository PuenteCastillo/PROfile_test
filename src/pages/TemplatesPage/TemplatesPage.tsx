import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Menu, Row, Select } from "antd";
import { TemplateCard } from "components";
import { SearchOutlined, SketchOutlined } from "@ant-design/icons";
import {
  TemplatesPageWrapper,
  TemplatesSearchWrapper,
  TemplatsHeading,
  TemplatesSearch,
  TemplatesSorting,
  MenuItemContent,
  Divider,
  Chevron,
  TemplatesNav,
  TemplatesNavLayout,
  TemplatePreviewMenu,
  TemplatePreviewMenuImage,
  TemplatePreviewMenuButton,
  TemplatePreviewPaneContainer,
  TemplatePreviewPane,
  TemplatePreviewPaneImage,
} from "./styles";
import templatePreviewImg from "../../assets/greg-palumbo-template.png";
import wireframePreviewImg from "../../assets/greg-palumbo-wireframe.png";
import hideDesignButtonImg from "../../assets/hide-design-button.png";
import showDesignButtonImg from "../../assets/show-design-button.png";

const templatesMock = [
  {
    id: 1,
    name: "Greg Palumbo",
    description:
      "Point Loma Nazarene University Athletics / Surf Team",
    image: "greg_palumbo.webp",
    type: "Athletics",
  },
  {
    id: 2,
    name: "Eyelander",
    description:
      "A simple, beautiful e-commerce site for all your business needs.",
    image: "eyelander.webp",
    type: "E-commerce",
  },
  {
    id: 3,
    name: "Bocchan",
    description:
      "A simple, beautiful e-commerce site for all your business needs.",
    image: "bocchan.webp",
    type: "Photography",
  },
  {
    id: 4,
    name: "Fandyl",
    description:
      "A simple, beautiful e-commerce site for all your business needs.",
    image: "fandyl.webp",
    type: "Photography",
  },
  {
    id: 5,
    name: "Vantas",
    description:
      "A simple, beautiful e-commerce site for all your business needs.",
    image: "vantas_plumbing.webp",
    type: "Business",
  },
  {
    id: 6,
    name: "Beam",
    description:
      "A simple, beautiful e-commerce site for all your business needs.",
    image: "beam_pet_care.webp",
    type: "Health",
  },
];

const navLeftItems: Array<NavItem> = [
  {
    name: "Product & Services",
    route: "/products",
    children: [
      { name: "Product 1", route: "/product-test1" },
      { name: "Product 2", route: "/product-test2" },
    ],
  },
  {
    name: "Creativity",
    route: "/creativity",
    children: [
      { name: "Creativity 1", route: "/creativity-test1" },
      { name: "Creativity 2", route: "/creativity-test2" },
    ],
  },
  {
    name: "Personal",
    route: "/personal",
    children: [
      { name: "Personal 1", route: "/personal-test1" },
      { name: "Personal 2", route: "/personal-test2" },
    ],
  },
];

const navRightItems: Array<NavItem> = [
  {
    name: "All templates",
    route: "/templates",
    divider: true,
  },
  {
    name: "Free Templates",
    route: "/templates?filter=free",
    divider: true,
  },
  {
    name: "Premium Templates",
    route: "/templates?filter=premium",
    icon: <SketchOutlined />,
  },
];

const TemplatesPage = () => {

  const [isTemplateView, setIsTemplateView] = useState<Boolean>(true);

  const renderMenu = (data: Array<NavItem>): Array<ReactNode> => {
    return data.map((item: NavItem) => {
      if (!item.children)
        return (
          <Menu.Item title={item.name} key={item.route}>
            <MenuItemContent>
              {item.icon ? item.icon : null}
              <Link to={item.route}>{item.name}</Link>
              {item.divider ? <Divider /> : null}
            </MenuItemContent>
          </Menu.Item>
        );
      else
        return (
          <Menu.SubMenu
            title={
              <>
                {item.name} <Chevron />
              </>
            }
            key={item.route}
          >
            {renderMenu(item.children)}
          </Menu.SubMenu>
        );
    });
  };

  const showTemplatePreview = () => {
    const menu = document.querySelector("#template-preview-menu") as HTMLElement;
    const container = document.querySelector("#template-preview-container") as HTMLElement;
    menu.style.display = "block";
    container.style.display = "block";
  }

  const hideTemplatePreview = () => {
    const menu = document.querySelector("#template-preview-menu") as HTMLElement;
    const container = document.querySelector("#template-preview-container") as HTMLElement;
    menu.style.display = "none";
    container.style.display = "none";
  }

  return (
    <>
      <TemplatePreviewMenu id="template-preview-menu">
          <TemplatePreviewMenuImage
            src={isTemplateView ? hideDesignButtonImg : showDesignButtonImg }
            onClick={() => setIsTemplateView(!isTemplateView)}
          />
          <TemplatePreviewMenuButton onClick={() => hideTemplatePreview()}>
            Exit Preview
          </TemplatePreviewMenuButton>
      </TemplatePreviewMenu>

      <TemplatePreviewPaneContainer id="template-preview-container">
        <TemplatePreviewPane>
          <TemplatePreviewPaneImage
            src={isTemplateView ? templatePreviewImg : wireframePreviewImg}
          />
        </TemplatePreviewPane>
      </TemplatePreviewPaneContainer>

      <TemplatesPageWrapper>
        <TemplatesNav>
          <TemplatesNavLayout>
            <Menu mode="horizontal">{renderMenu(navLeftItems)}</Menu>
            <Menu
              selectedKeys={[location.pathname + location.search]}
              mode="horizontal"
            >
              {renderMenu(navRightItems)}
            </Menu>
          </TemplatesNavLayout>
        </TemplatesNav>
        <TemplatesSearchWrapper>
          <TemplatsHeading>All Profile Templates</TemplatsHeading>
          <TemplatesSearch
            size="large"
            placeholder="Search all templates…"
            prefix={<SearchOutlined />}
          />
          <TemplatesSorting>
            Sort by:
            <Select
              defaultValue="recommended"
              bordered={false}
              options={[
                {
                  value: "recommended",
                  label: "Recommended",
                },
                {
                  value: "popular",
                  label: "Popular",
                },
              ]}
            />
          </TemplatesSorting>
        </TemplatesSearchWrapper>
        <Row gutter={[50, 60]}>
          {templatesMock.map((template) => (
            <Col key={template.id} xs={24} md={12} lg={12} xl={8}>
              <TemplateCard {...template} showTemplatePreview={showTemplatePreview} />
            </Col>
          ))}
        </Row>
      </TemplatesPageWrapper>
    </>
  );
};

export default TemplatesPage;
