import './App.css';
import Header from './components/structure/Header'
import Aside from './components/pages/About'
import Main from './components/structure/Main'
import Footer from './components/structure/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;