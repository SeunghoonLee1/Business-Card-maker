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
      company: 'Google',
      theme: 'dark',
      title: 'software engineer',
      email: 'seunghoonlee95@gmail.com',
      message: 'Go for it!',
      fileName: 'danny',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Alina',
      company: 'Apple',
      theme: 'light',
      title: 'software engineer',
      email: 'alina@gmail.com',
      message: 'You can do this!',
      fileName: 'alina',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Sophie',
      company: 'Microsoft',
      theme: 'colorful',
      title: 'software engineer',
      email: 'sophieez@gmail.com',
      message: 'Haha',
      fileName: 'sophie',
      fileURL: null,
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

  const addCard = (card) =>{
    const updated = [...cards, card];
    setCards(updated);
  };

  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <Editor cards={cards} addCard={addCard}/>
          <Preview cards={cards}/>
        </div> 
      <Footer/>
    </section>
  ); 
};

export default Maker;