import React from 'react';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="container-fluid">
        {/* <Sidebar /> */}
        <Routes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
