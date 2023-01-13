import React, { useState, Dispatch, SetStateAction } from 'react';
import { getSearchedList } from '../../../apis';
import { InputContainer, Input, SearchingButton } from './styles.SerchingInput';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

function SerchingInput({
  searchResultLength,
  setSearchResult,
  arrowNow,
  setArrowNow,
}: {
  searchResultLength: number;
  setSearchResult: Dispatcher<string[]>;
  arrowNow: number;
  setArrowNow: Dispatcher<number>;
}) {
  const [searchText, setSearchText] = useState('');

  const changeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setArrowNow(0);
    if (e.target.value.length) {
      getSearchedList(e.target.value).then((el) => {
        setSearchResult(el);
      });
    }
  };

  const arrowChecker = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const arrowHaveToDo = {
      ArrowUp: -1,
      ArrowDown: 1,
    };
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      setArrowNow(Math.max(0, Math.min(searchResultLength, arrowNow + arrowHaveToDo[e.key])));
    }
  };

  return (
    <InputContainer>
      <Input
        type="search"
        value={searchText}
        onChange={changeSearchText}
        onKeyDown={arrowChecker}
      />
      <SearchingButton />
    </InputContainer>
  );
}

export default SerchingInput;
