import React from 'react';
import Reader from './components/Reader';
import publications from './data/publications.json';

const App = () => {
  return <Reader items={publications} />;
};

export default App;
