import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const postsData = [
  {
    id: 1,
    text: "Hello World!",
    likesCount: 5,
    imgSrc: "http://www.thaicybergames.com/dota/images/heroes/72.jpg"
  },
  {
    id: 2,
    text: "По-тихонечку едем",
    likesCount: 8,
    imgSrc: "http://www.thaicybergames.com/dota/images/heroes/101.jpg"
  },
  {
    id: 3,
    text: "React is nice",
    likesCount: 12,
    imgSrc: "http://www.thaicybergames.com/dota/images/heroes/80.jpg"
  },
  {
    id: 4,
    text: "Как Ваши дела?",
    likesCount: 6,
    imgSrc: "http://www.thaicybergames.com/dota/images/heroes/55.jpg"
  },
  {
    id: 5,
    text: "Почти 25% пути самурая, юхууу!",
    likesCount: 9,
    imgSrc: "http://www.thaicybergames.com/dota/images/heroes/43.jpg"
  },

]


const dialogsData = [
  { id: 1, name: "Nadya" },
  { id: 2, name: "Oleg" },
  { id: 3, name: "Artem" },
  { id: 4, name: "Elya" },
  { id: 5, name: "Ilya" },
]

const messages = [
  { id: 1, text: "Heyyooo!" },
  { id: 2, text: "How do you do you?" },
  { id: 3, text: "Dzzzip Dzaaap" },
  { id: 4, text: "Piu piu... piu piu piu!" },
  { id: 5, text: 'Meeeowww ~~' },
]



ReactDOM.render(
  <React.StrictMode>
    <App
      dialogsData={dialogsData}
      messages={messages}
      posts={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
