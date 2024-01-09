import styled from "styled-components";

export const QuoteBrickTitle = styled.h3<QuoteBrickTitleProps>`
  margin: 0 auto;
  line-height: 1;
  font-size: ${({ fontSize }: {fontSize: number}): string => fontSize + "px"};
`;

export const QuoteBrickContainer = styled.div<QuoteBrickContainerProps>`
  width: 100%;
  background-size: cover;
  background-position: center;
  padding: 124px;
  @container (max-width: 360px) {
    ${QuoteBrickTitle} {
        font-size: ${({fontSize}: { fontSize: number }): string => fontSize / 3 + "px"};
    }
  }
`;

export const QuoteBrickWrapper = styled.div`
  container-type: inline-size;
  @container (max-width: 360px) {
    ${QuoteBrickContainer} {
        padding: 40px 30px;
    }
}
`;
