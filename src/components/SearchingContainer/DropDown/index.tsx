import ResultList from './ResultList';
import { InputContainer } from './styles.DropDown';

function DropDown({ searchResult, arrowNow }: { searchResult: string[]; arrowNow: number }) {
  console.log(arrowNow);
  return (
    <InputContainer>
      {searchResult.length ? (
        searchResult.map((el) => <ResultList text={el} />)
      ) : (
        <div>검색어 없음</div>
      )}
    </InputContainer>
  );
}

export default DropDown;
