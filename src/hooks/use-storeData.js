/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useStoreData = (selectorFunction, getFunction, refetch, data, dynamicDeps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (typeof getFunction === 'function') {
          await dispatch(getFunction(data));
        } else {
          console.error('getFunction should be a function.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, getFunction, refetch, ...(dynamicDeps || [])]);

  return { data: useSelector(selectorFunction), loading };
};

export default useStoreData;
