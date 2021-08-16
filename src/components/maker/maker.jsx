import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Danny',
      theme: 'light',
      title: 'software engineer',
      email: 'seunghoonlee95@gmail.com',
      message: 'go for it',
      fileName: 'danny',
      fileURL: 'danny.png'
    },
    {
      id: '2',
      name: 'Alina',
      theme: 'light',
      title: 'software engineer',
      email: 'alina@gmail.com',
      message: 'go for it',
      fileName: 'alina',
      fileURL: 'alina.png'
    },
    {
      id: '3',
      name: 'Sophie',
      theme: 'light',
      title: 'software engineer',
      email: 'sophieez@gmail.com',
      message: 'go for it',
      fileName: 'sophie',
      fileURL: 'sophie.png'
    }
  ]);

  const history = useHistory();
  // const location = useLocation();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(()=>{
    // console.log(`uid : ${location.state.uid}`);
    authService.onAuthChange(user => {
      if(!user){
        history.push('/');
      }
    });
  });

  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <Editor cards={cards}/>
          <Preview cards={cards}/>
        </div> 
      <Footer/>
    </section>
  ); 
};

export default Maker;