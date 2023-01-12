import { useState, Dispatch, SetStateAction } from 'react';
import { getSearchedList } from '../../../apis';
import { InputContainer, Input, SearchingButton } from './styles.SerchingInput';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
function SerchingInput({ setSearchResult }: { setSearchResult: Dispatcher<string[]> }) {
  const [searchText, setSearchText] = useState('');

  const changeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    if (e.target.value.length) {
      getSearchedList(e.target.value).then((el) => {
        setSearchResult(el);
      });
    }
  };

  // 아래 부분은 디바운서를 걸고 결과를 받아올 예정
  // setSearchResult에 넣은 값에 따라 아래 출력값이 달라질 예정으로
  // 검색입력길이가 0인 경우 공백칸 출력
  // 검색 길이가 0이 아닌 경우 setSearchResult가 없는경우 검색 결과가 없습니다 출력
  // 검색 길이가 0이 아니고 setSearchResult가 있으면 해당 길이만큼 map으로 출력될 것

  return (
    <InputContainer>
      <Input type="search" value={searchText} onChange={changeSearchText} />
      <SearchingButton />
    </InputContainer>
  );
}

export default SerchingInput;
