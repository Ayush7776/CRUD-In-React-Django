import ItemList from './Components/ItemList';
import Create from './Components/Create';
import Update from './Components/Update';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
          <Routes>
            <Route exact path='/' element={<ItemList/>}></Route>
            <Route exact path='/create' element={<Create/>}></Route>
            <Route exact path='/update' element={<Update/>}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
