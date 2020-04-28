import React from 'react';
import './styles/App.scss';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import Main from './components/organisms/Main/Main';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
