import React, { useEffect, useReducer, useState } from 'react';
import fetchIndexData from './index';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

async function transformData(data) {
  return data
    .filter(el => el.value)
    .map(el => {
      const { date, value } = el;
      const year = date.getFullYear();
      const mon = date.getMonth() + 1;
      const day = date.getDate();

      return {
        date: `${year}-${mon}-${day}`,
        value
      };
    });
}

const useIndexApi = (initialIndex, initialPeriod, initialData) => {
  const [index, setIndex] = useState(initialIndex);
  const [period, setPeriod] = useState(initialPeriod);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const responseData = await fetchIndexData(index, period);
        const results = await transformData(responseData.historical_data);
        dispatch({ type: 'FETCH_SUCCESS', payload: results });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    fetchData();
  }, [index, period]);

  return [state, setIndex, setPeriod];
};

export default useIndexApi;