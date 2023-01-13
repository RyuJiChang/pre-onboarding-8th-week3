import axios from 'axios';
import { URL } from '../constants';

const getSearchedList = async (params: string) => {
  const { data } = await axios.get(`${URL.searchUrl}${params}`);
  const newData = [];
  for (let i = 0; i < data.length; i += 1) {
    if (i < 7) {
      newData.push(data[i].sickNm);
    } else {
      break;
    }
  }
  return newData;
};

export { getSearchedList };
