import { useSelector } from 'react-redux';

const useCurrentRole = () => {
  const user = useSelector((s) => s.user?.data?.user_type);
  return user;
};

export default useCurrentRole;
