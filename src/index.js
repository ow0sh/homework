import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.css';

import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
