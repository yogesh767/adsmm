import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import  {Home}  from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Header from './components/Header';
import Details from './pages/details/Details';
import Details2 from './pages/details2/Details2';
import SongPage from './pages/songPage/SongPage';

function App() {
  const path = useLocation().pathname

  return (
    <div className="App " >
      {
        path !== "/" &&
        <Header />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/details' element={<Details/>}/>
        <Route path='/details2' element={<Details2/>}/>
        <Route path='/song' element={<SongPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
