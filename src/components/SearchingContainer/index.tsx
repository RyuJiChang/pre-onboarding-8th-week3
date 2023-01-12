import { useState } from 'react';
import SerchingInput from './SerchingInput';
import DropDown from './DropDown';
import { InputDropDownContainer } from './styles.SearchingContainer';

function SearchingContainer() {
  const [searchResult, setSearchResult] = useState<string[]>(['']);

  return (
    <InputDropDownContainer>
      <SerchingInput setSearchResult={setSearchResult} />
      <DropDown searchResult={searchResult} />
    </InputDropDownContainer>
  );
}

export default SearchingContainer;
