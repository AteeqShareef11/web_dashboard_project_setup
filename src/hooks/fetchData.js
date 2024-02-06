import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

const useFetchData = (fetchFunction, id, refetch) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchFunction(id);
        console.log('res', res);
        const fetchedData = res?.data?.data;
        setData(fetchedData || {});
      } catch (err) {
        toast.error(err?.response?.data?.message || err?.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch data only if id is not undefined
    if (id !== undefined) {
      fetchData();
    }
  }, [fetchFunction, id, refetch]);

  return { data, loading };
};

export default useFetchData;

//usage
//  const { data, loading } = useFetchData(
//     chamberServices.getChamberById,
//     id,
//   );
