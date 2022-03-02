import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Lendables from './components/lendables/Lendables'
import Toast from './components/layout/Toast'

function App() {
  return (
    <main className="App main">
      <Navbar />
      <div className="container is-fullhd">
        <div className='columns'>
          <Lendables className='column' />
        </div>
      </div>
      <Footer />
      <Toast />
    </main>
  );
}

export default App;
