import { useState } from 'react';
import SerchingInput from './SerchingInput';
import DropDown from './DropDown';
import { InputDropDownContainer } from './styles.SearchingContainer';

function SearchingContainer() {
  const [searchResult, setSearchResult] = useState<string[]>(['']);
  const [arrowNow, setArrowNow] = useState(0);

  return (
    <InputDropDownContainer>
      <SerchingInput
        setSearchResult={setSearchResult}
        arrowNow={arrowNow}
        setArrowNow={setArrowNow}
      />
      <DropDown searchResult={searchResult} arrowNow={arrowNow} />
    </InputDropDownContainer>
  );
}

export default SearchingContainer;
