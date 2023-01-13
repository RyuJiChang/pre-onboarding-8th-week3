import ResultList from './ResultList';
import { InputContainer, Suggestion } from './styles.DropDown';
import { TSearchResult } from '../../../types';

function DropDown({ searchResult, arrowNow }: { searchResult: TSearchResult; arrowNow: number }) {
  return (
    <InputContainer>
      {searchResult.searchResults.length ? (
        <>
          <Suggestion>추천 검색어</Suggestion>
          {searchResult.searchResults.map((el, index) => (
            <ResultList
              index={index}
              text={el}
              keyword={searchResult.keyword}
              arrowNow={arrowNow}
            />
          ))}
        </>
      ) : (
        <div>검색어 없음</div>
      )}
    </InputContainer>
  );
}

export default DropDown;
