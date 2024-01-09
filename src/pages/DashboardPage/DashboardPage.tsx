import {Col, Row} from "antd";
import { DashboardPageWrapper, HeaderContainer, SmallHeader, BigHeader } from './styles';
import DashboardCard from "../../components/DashboardCard";

const cardsMock: Array<DashboardCardProps> = [
  {
    id: 1,
    name: "Start with a template.",
    description: "Select one of our carefully curated site templates and edit to your needs.",
    tip: "Saved PROfiles will live here in your Dashboard.",
    buttonText: "Browse Templates",
    buttonUrl: "/templates",
    videoUrl: "/videos/PROfile Dashboard Template.mp4"
  },
  {
    id: 2,
    name: "Start from scratch.",
    description: "Build your dream site from the ground up by utilizing a vast array of specific bricks.",
    tip: "Saved PROfiles will live here in your Dashboard.",
    buttonText: "Start from scratch",
    buttonUrl: "/builder",
    videoUrl: "/videos/PROfile Dashboard Start from Scratch.mp4"
  }
];

const DashboardPage = () => {
  return (
    <DashboardPageWrapper>
      <HeaderContainer>
        <SmallHeader>
          Welcome to your
        </SmallHeader>
        <BigHeader>
          Dashboard
        </BigHeader>
      </HeaderContainer>
      <Row gutter={[60, 60]}>
        {cardsMock.map((data) => (
          <Col key={data.id} xs={24} md={12} lg={12} xl={12}>
            <DashboardCard {...data}/>
          </Col>
        ))}
      </Row>
    </DashboardPageWrapper>
  );
}

export default DashboardPage;
