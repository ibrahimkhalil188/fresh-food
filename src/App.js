import './App.css';
import Info from './component/Info/Info';
import Footer from './component/Shared/Footer/Footer';
import Navbar from './component/Shared/Nabv ar/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}

export default App;
