import styled, { css } from 'styled-components';

interface Props {
  index: number;
  arrowNow: number;
}

const List = styled.div<Props>`
  margin: 0.5em 1.5em;
  ${({ index, arrowNow }) =>
    index === arrowNow - 1 &&
    css`
      background-color: lightgray;
    `}
`;
export { List };
