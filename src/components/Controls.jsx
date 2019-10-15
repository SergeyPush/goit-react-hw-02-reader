import React from 'react';
import style from '../styles/style.module.css';

const Controls = props => {
  return (
    <div className={style.controls}>
      <button
        type="button"
        className={style.button}
        onClick={props.prevArticle}
        disabled={props.prevDisabled}
      >
        Назад
      </button>
      <button
        type="button"
        className={style.button}
        onClick={props.nextArticle}
        disabled={props.nextDisabled}
      >
        Вперед
      </button>
    </div>
  );
};

export default Controls;
