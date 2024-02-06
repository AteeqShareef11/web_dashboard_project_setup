import { useSelector } from 'react-redux';

const useCurrentPlan = () => {
  const user = useSelector((s) => s.user?.subscription?.currentSubscription?.plan?.plan_name);
  return user;
};

export default useCurrentPlan;
