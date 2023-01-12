import styled from 'styled-components';
import { THEME } from '../../constants';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${THEME.BackGroundColor};
`;

const Header = styled.h1`
  width: 12em;
  margin-top: 4em;
  text-align: center;
  line-height: 1.7em;
`;

const DropDown = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 2em;
  background-color: gray;
`;
export { Container, Header, DropDown };
