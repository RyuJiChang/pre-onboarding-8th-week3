import styled from 'styled-components';
import { THEME } from '../../../constants';

const InputContainer = styled.div`
  width: 32em;
  height: 4em;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: ${THEME.RADIUS};
  :focus-within {
    outline: 2px solid ${THEME.ButtonColor};
  }
`;
const Input = styled.input`
  width: 23em;
  margin-left: 1em;
  font-size: large;
  border: none;
  :focus {
    outline: none;
  }
`;
const SearchingButton = styled.button`
  width: 48px;
  height: 48px;
  margin: 0 0.5em;
  background-color: ${THEME.ButtonColor};
  border-radius: ${THEME.RADIUS};
  border: none;
  :active {
    border: none;
  }
`;
export { InputContainer, Input, SearchingButton };
