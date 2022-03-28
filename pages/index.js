// * our-domain.com/
import classes from '../styles/Home.module.css';
import { Toolbar } from '../components/Toolbar';

const HomePage = () => {
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={classes.main}>
        <h1>Next.js News App</h1>
        <p>Your one stop for the latest news articles</p>
      </div>
    </div>
  );
};

export default HomePage;
