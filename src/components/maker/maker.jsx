import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [cards, setCards] = useState(
    {
      '1': {
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
      '2': {
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
      '3': {
        id: '3',
        name: 'Sophie',
        company: 'Microsoft',
        theme: 'colorful',
        title: 'software engineer',
        email: 'sophieez@gmail.com',
        message: 'Haha',
        fileName: 'sophie',
        fileURL: null,
      },
    });

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

  // 아래 createOrUpdateCard로 하나로 합침!
  // const addCard = (card) =>{
  //   const updated = [...cards, card]; //기존cards + 새로추가된 'card'
  //   setCards(updated);
  // };

  const createOrUpdateCard = (card) =>{
    const updated = {...cards};
    updated[card.id] = card;
    setCards(updated);

    // *****
    // component안에 state를 이용해서 update를 하면(위에처럼),
    // update하는 시점에 있는 state가 오래된 걸 수도 있음.
    // 이를 피하기 위해 이렇게 callback함수 식으로 setCards를 부를 때의 이 상태
    // 바로 이 시점에 setCards의 상태를 그대로 복사해와서 card의 id를 이용해서
    // object안에 있는 키를 이용해서 그 키에 해당하는 새로운 update되는 카드를 변경해주고
    // return은 업데이트된 아이를 return해준다.
    // *****
    // setCards(cards => {
    //   const updated = {...cards};
    //   updated[card.id] = card;
    //   return updated;
    // });


  };
  const deleteCard = (card) =>{
    const updated = {...cards};
    delete updated[card.id];
    setCards(updated);
  };

  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <Editor cards={cards} 
            addCard={createOrUpdateCard} 
            updateCard={createOrUpdateCard} 
            deleteCard={deleteCard}
          />
          <Preview cards={cards}/>
        </div> 
      <Footer/>
    </section>
  ); 
};

export default Maker;