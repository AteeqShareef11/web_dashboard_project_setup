import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useStoreData = (selectorFunction, getFunction, refetch) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (typeof getFunction === 'function') {
          await dispatch(getFunction());
        } else {
          console.error('getFunction should be a function.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, getFunction, refetch]);

  return { data: useSelector(selectorFunction), loading };
};

export default useStoreData;

//usage of this hook
// const { data, loading } = useStoreData((s) => s.patients?.data?.patients || [], getAllPatients, refetch);
