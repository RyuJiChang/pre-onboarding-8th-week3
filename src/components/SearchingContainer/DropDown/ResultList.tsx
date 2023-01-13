import { List } from './styles.ResultList ';

function ResultList({ text, index, arrowNow }: { text: string; index: number; arrowNow: number }) {
  return (
    <List index={index} arrowNow={arrowNow}>
      {text}
    </List>
  );
}

export default ResultList;
