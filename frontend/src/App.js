
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import  {Toaster} from 'react-hot-toast'
import MovieDialog from './components/MovieDialog';

function App() {
  return (
    <div >
      
      <Body/>
      <Toaster/>
      <MovieDialog/>
      
    </div>
  );
}

export default App;
