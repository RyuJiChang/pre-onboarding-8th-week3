import ResultList from './ResultList';
import { InputContainer, Suggestion } from './styles.DropDown';

function DropDown({ searchResult, arrowNow }: { searchResult: string[]; arrowNow: number }) {
  return (
    <InputContainer>
      {searchResult.length ? (
        <>
          <Suggestion>추천 검색어</Suggestion>
          {searchResult.map((el, index) => (
            <ResultList index={index} text={el} arrowNow={arrowNow} />
          ))}
        </>
      ) : (
        <div>검색어 없음</div>
      )}
    </InputContainer>
  );
}

export default DropDown;
