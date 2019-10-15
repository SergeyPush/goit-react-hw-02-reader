import React, { Component } from 'react';
import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';

import publications from '../data/publications.json';
import style from '../styles/style.module.css';

class Reader extends Component {
  state = {
    currentArticle: 0,
    allArticles: publications.length,
    articlesList: publications,
    nextDisabled: false,
    prevDisabled: true,
  };

  nextArticle = () => {
    if (this.state.currentArticle >= this.state.allArticles - 2) {
      this.setState({
        nextDisabled: true,
      });
    }
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle + 1,
      prevDisabled: false,
    }));
  };

  prevArticle = () => {
    if (this.state.currentArticle <= 1) {
      this.setState({
        prevDisabled: true,
      });
    }
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle - 1,
      nextDisabled: false,
    }));
  };

  render() {
    const {
      nextDisabled,
      prevDisabled,
      currentArticle,
      allArticles,
      articlesList,
    } = this.state;

    return (
      <div className={style.reader}>
        <Controls
          nextArticle={this.nextArticle}
          prevArticle={this.prevArticle}
          nextDisabled={nextDisabled}
          prevDisabled={prevDisabled}
        />
        <Counter currentArticle={currentArticle} allArticles={allArticles} />
        <Publication article={articlesList[currentArticle]} />
      </div>
    );
  }
}

export default Reader;
