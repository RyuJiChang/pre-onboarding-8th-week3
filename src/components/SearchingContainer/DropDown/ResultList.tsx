import { List } from './styles.ResultList ';

function ResultList({
  text,
  index,
  keyword,
  arrowNow,
}: {
  text: string;
  index: number;
  keyword: string;
  arrowNow: number;
}) {
  const keywordSpliter = `@${keyword}@`;
  const textArr = text.split(keyword).join(keywordSpliter).split('@');
  return (
    <List index={index} arrowNow={arrowNow}>
      {textArr.map((el) => (el === keyword ? <b>{el}</b> : el))}
    </List>
  );
}

export default ResultList;
