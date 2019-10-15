import React, { Component } from 'react';
import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';

import publications from '../data/publications.json';

import style from '../styles/style.module.css';

class Reader extends Component {
  state = {
    currentArticle: 0,
    allArticles: publications.length - 1,
    articlesList: publications,
    nextDisabled: false,
    prevDisabled: true,
  };

  handleDisabled() {
    console.log('handle disabled');
    if (this.state.currentArticle === 0) {
      this.setState({
        prevDisabled: true,
      });
    } else if (this.setState.currentArticle >= this.state.allArticles) {
      this.setState({
        nextDisabled: true,
      });
    }
  }

  nextArticle = () => {
    if (this.state.currentArticle >= this.state.allArticles) {
      return;
    }
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle + 1,
      prevDisabled: false,
    }));
    this.handleDisabled();
  };

  prevArticle = () => {
    if (this.state.currentArticle === 0) {
      return;
    }
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle - 1,
    }));

    this.handleDisabled();
  };

  render() {
    return (
      <div className={style.reader}>
        <Controls
          nextArticle={this.nextArticle}
          prevArticle={this.prevArticle}
          nextDisabled={this.state.nextDisabled}
          prevDisabled={this.state.prevDisabled}
        />
        <Counter
          currentArticle={this.state.currentArticle}
          allArticles={this.state.allArticles}
        />
        <Publication
          article={this.state.articlesList[this.state.currentArticle]}
        />
      </div>
    );
  }
}

export default Reader;
