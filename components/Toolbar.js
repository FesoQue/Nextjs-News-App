import { useRouter } from 'next/router';
import classes from '../styles/Toolbar.module.css';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={classes.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed')}>Feed</div>
      <div onClick={() => router.push('/eom')}>EOM</div>
      <div onClick={() => (window.location.shref = '')}>Twitter</div>
    </div>
  );
};
