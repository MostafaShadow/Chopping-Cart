import React from 'react';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return <main className="layout">
      <Header/>
      <div className="content">

        Content
      </div>
      <Footer/>
  </main>;
};

export default App;
