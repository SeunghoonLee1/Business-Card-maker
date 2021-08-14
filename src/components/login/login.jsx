import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
  const onLogin = (event) => {
    // console.log(event);
    // console.log(event.currentTarget);
    authService
    .login(event.currentTarget.textContent)
    .then(console.log);
  }

  const onLogout =(event)=>{
    console.log('log out!');
  }
  return(
    <section className={styles.login}>
      <Header onLogOut={onLogout}/>
        <section>
          <h1>Login</h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.button}onClick={onLogin}>
                Google
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Github
              </button>
            </li>
          </ul>
        </section>
      <Footer/>
    </section>
  ); 
};

export default Login;