import './App.css';
import Header from './components/structure/Header'
import Nav from './components/structure/Nav'
import Aside from './components/structure/Aside'
import Main from './components/structure/Main'
import Footer from './components/structure/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
