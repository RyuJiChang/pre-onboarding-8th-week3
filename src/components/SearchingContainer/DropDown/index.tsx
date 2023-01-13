import ResultList from './ResultList';
import { InputContainer } from './styles.DropDown';

function DropDown({ searchResult, arrowNow }: { searchResult: string[]; arrowNow: number }) {
  return (
    <InputContainer>
      {searchResult.length ? (
        searchResult.map((el, index) => <ResultList index={index} text={el} arrowNow={arrowNow} />)
      ) : (
        <div>검색어 없음</div>
      )}
    </InputContainer>
  );
}

export default DropDown;
