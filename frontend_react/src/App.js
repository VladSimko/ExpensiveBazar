import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import ListPage from './Pages/ListPage';
import './css/myStyle.css';
import ProtectedPage from './Pages/ProtectedPage';
import AddCarPage from './Pages/AddCarPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route path="/loginpage">
            <LoginPage />
        </Route>
        <Route path="/registerpage">
            <RegistrationPage />
        </Route>
        <Route path="/listpage">
            <ProtectedPage Cmp={ListPage}/>
        </Route>
        <Route path="/addcarpage">
            <ProtectedPage Cmp={AddCarPage}/>
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
