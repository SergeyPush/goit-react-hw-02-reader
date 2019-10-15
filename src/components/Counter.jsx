import React from 'react';
import style from '../styles/style.module.css';

const Counter = props => {
  return (
    <div className={style.counter}>
      {props.currentArticle}/{props.allArticles}
    </div>
  );
};

export default Counter;
