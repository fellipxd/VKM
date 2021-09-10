  
import axios from 'axios';

export const fetchCasesForAll = async () => {
  try {
    const { data } = await axios.get('https://covidnigeria.herokuapp.com/api');
    return data;
  } catch (error) {
    console.log(error);
  }
};

