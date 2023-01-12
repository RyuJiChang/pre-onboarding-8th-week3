import styled from 'styled-components';
// import { THEME } from '../../constants';

const InputDropDownContainer = styled.div`
  > div {
    :last-child {
      display: none;
    }
  }
  :focus-within {
    > div {
      :last-child {
        display: block;
      }
    }
  }
`;
export { InputDropDownContainer };
