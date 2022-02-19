import { useSelector } from 'react-redux';
import './App.scss';
import Header from './componenets/header/Header';
import Home from './componenets/home/Home';

function App() {
  return (
    <div className='App'>
		<Header />
		<Home />
    </div>
  );
}

export default App;
