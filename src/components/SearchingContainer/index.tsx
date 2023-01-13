import { useState } from 'react';
import SerchingInput from './SerchingInput';
import DropDown from './DropDown';
import { InputDropDownContainer } from './styles.SearchingContainer';
import { TSearchResult } from '../../types';

function SearchingContainer() {
  const [searchResult, setSearchResult] = useState<TSearchResult>({
    keyword: '',
    searchResults: [],
  });
  const [arrowNow, setArrowNow] = useState(0);

  const arrowReset = () => {
    setArrowNow(0);
  };

  return (
    <InputDropDownContainer onBlur={arrowReset}>
      <SerchingInput
        searchResultLength={searchResult.searchResults.length}
        setSearchResult={setSearchResult}
        arrowNow={arrowNow}
        setArrowNow={setArrowNow}
      />
      <DropDown searchResult={searchResult} arrowNow={arrowNow} />
    </InputDropDownContainer>
  );
}

export default SearchingContainer;
