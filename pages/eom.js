import React from 'react';
import classes from '../styles/EOM.module.css';
import { Toolbar } from '../components/Toolbar';

const EOM = ({ employee }) => {
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={classes.main}>
        <h1 className={classes.employeeOfTheMonth}>Employee of the month</h1>
        <div className={classes.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h5>{employee.position}</h5>
          <img src={employee.image} alt={employee.name} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  // const apiResponse = await fetch(
  //   'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
  // );
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/FesoQue/Nextjs-News-App/employeeOfTheMonth'
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
