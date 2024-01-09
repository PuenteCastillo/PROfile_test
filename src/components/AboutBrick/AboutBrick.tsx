import { Row } from "antd";
import TextFieldFactory from "helpers/TextFieldFactory";
import {
  AboutBrickWrapper,
  AboutBrickContent,
  AboutBrickColumn,
  AboutBrickTitle,
  AboutBrickBody,
  AboutBrickStats,
  AboutBrickStat,
  AboutBrickStatTitle,
  AboutBrickStatData,
  AboutBrickImage,
  AboutBrickImageContainer,
  AboutBrickImagePreview,
  Col,
} from "./styles";

const AboutBrick = ({
  background,
  title,
  body,
  statOneTitle,
  statOneData,
  statTwoTitle,
  statTwoData,
  statThreeTitle,
  statThreeData,
  statFourTitle,
  statFourData,
  imageOne,
  imageTwo,
  imageThree,
}: AboutBrickProps) => {
  return (
    <AboutBrickWrapper>
      <AboutBrickContent style={{ backgroundImage: `url(${background})` }}>
        <AboutBrickColumn>
          <AboutBrickTitle
            style={{
              fontFamily: title.fontFamily,
              fontWeight: title.fontWeight,
              fontStyle: title.fontStyle,
              fontSize: title.fontSize,
              textTransform: TextFieldFactory.textTransform(title.textTransform),
              textDecoration: title.textDecoration,
              textAlign: TextFieldFactory.textAlign(title.textAlign),
              color: title.color
            }}
          >
            {title.fieldValue}
          </AboutBrickTitle>
          <AboutBrickBody
            style={{
              fontFamily: body.fontFamily,
              fontWeight: body.fontWeight,
              fontStyle: body.fontStyle,
              fontSize: body.fontSize,
              textTransform: TextFieldFactory.textTransform(body.textTransform),
              textDecoration: body.textDecoration,
              textAlign: TextFieldFactory.textAlign(body.textAlign),
              color: body.color
            }}
          >
            {body.fieldValue}
          </AboutBrickBody>
          <AboutBrickStats>
            <AboutBrickStat>
              <AboutBrickStatTitle style={{fontSize: statOneTitle.fontSize, color: statOneTitle.color}}>
                {statOneTitle.fieldValue}
              </AboutBrickStatTitle>
              <AboutBrickStatData style={{fontSize: statOneData.fontSize, color: statOneData.color}}>
                {statOneData.fieldValue}
              </AboutBrickStatData>
            </AboutBrickStat>

            <AboutBrickStat>
              <AboutBrickStatTitle style={{fontSize: statTwoTitle.fontSize, color: statTwoTitle.color}}>
                {statTwoTitle.fieldValue}
              </AboutBrickStatTitle>
              <AboutBrickStatData style={{fontSize: statTwoData.fontSize, color: statTwoData.color}}>
                {statTwoData.fieldValue}
              </AboutBrickStatData>
            </AboutBrickStat>

            <AboutBrickStat>
              <AboutBrickStatTitle style={{fontSize: statThreeTitle.fontSize, color: statThreeTitle.color}}>
                {statThreeTitle.fieldValue}
              </AboutBrickStatTitle>
              <AboutBrickStatData style={{fontSize: statThreeData.fontSize, color: statThreeData.color}}>
                {statThreeData.fieldValue}
              </AboutBrickStatData>
            </AboutBrickStat>

            <AboutBrickStat>
              <AboutBrickStatTitle style={{fontSize: statFourTitle.fontSize, color: statFourTitle.color}}>
                {statFourTitle.fieldValue}
              </AboutBrickStatTitle>
              <AboutBrickStatData style={{fontSize: statFourData.fontSize, color: statFourData.color}}>
                {statFourData.fieldValue}
              </AboutBrickStatData>
            </AboutBrickStat>

          </AboutBrickStats>
        </AboutBrickColumn>
        <AboutBrickColumn>
          <Row gutter={[25, 25]}>
            <Col span={12}>
              <AboutBrickImageContainer>
                {!imageOne && (
                  <AboutBrickImagePreview>1</AboutBrickImagePreview>
                )}
                {imageOne && <AboutBrickImage src={imageOne} />}
              </AboutBrickImageContainer>
            </Col>
            <Col span={12}>
              <AboutBrickImageContainer>
                {!imageTwo && (
                  <AboutBrickImagePreview>2</AboutBrickImagePreview>
                )}
                {imageTwo && <AboutBrickImage src={imageTwo} />}
              </AboutBrickImageContainer>
            </Col>
            <Col span={24}>
              <AboutBrickImageContainer>
                {!imageThree && (
                  <AboutBrickImagePreview>3</AboutBrickImagePreview>
                )}
                {imageThree && <AboutBrickImage src={imageThree} />}
              </AboutBrickImageContainer>
            </Col>
          </Row>
        </AboutBrickColumn>
      </AboutBrickContent>
    </AboutBrickWrapper>
  );
};

export default AboutBrick;
