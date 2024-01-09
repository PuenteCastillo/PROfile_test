import { Col, Row } from "antd";
import constants from "globals";
import { ConstantsObject } from "globals/types";
import { BrickCardsWrapper, BrickImage, BrickImageWrapper, UseThisBrick } from "./styles";

const BrickCards = ({ type, onBrickSelect }: BrickCardsProps) => {
  return (
    <BrickCardsWrapper>
      <Row gutter={[20, 40]}>
        {constants[`${type}Bricks` as keyof ConstantsObject].map(
          (bricks: any) => (
            <Col key={bricks.id} xs={24} md={24} lg={24} xl={12} xxl={8}>
              <BrickImageWrapper>
                <BrickImage
                  onClick={() => (bricks.id == 1 ? onBrickSelect(type) : null)}
                  src={`bricks/${type}/${bricks.id}.png`}
                />
                <UseThisBrick onClick={() => (bricks.id == 1 ? onBrickSelect(type) : null)}>
                  Use This Brick
                </UseThisBrick>
              </BrickImageWrapper>
            </Col>
          )
        )}
      </Row>
    </BrickCardsWrapper>
  );
};

export default BrickCards;
