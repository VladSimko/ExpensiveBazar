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
import AddHousePage from './Pages/AddHousePage';
import AddBoatPage from './Pages/AddBoatPage';
import CarPage from './Pages/CarPage';
import HousePage from './Pages/HousePage';
import BoatPage from './Pages/BoatPage';
import MyList from './Pages/MyList';
import UpdateCar from './Pages/UpdateCar';
import UpdateHouse from './Pages/UpdateHouse';
import UpdateBoat from './Pages/UpdateBoat';
import ProfilPage from './Pages/ProfilPage';
import ChatPage from './Pages/ChatPage'

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
        <Route path="/addhousepage">
            <ProtectedPage Cmp={AddHousePage}/>
        </Route>
        <Route path="/addboatpage">
            <ProtectedPage Cmp={AddBoatPage}/>
        </Route>
        <Route path="/carpage/:id">
            <ProtectedPage Cmp={CarPage}/>
        </Route>
        <Route path="/housepage/:id">
            <ProtectedPage Cmp={HousePage}/>
        </Route>
        <Route path="/boatpage/:id">
            <ProtectedPage Cmp={BoatPage}/>
        </Route>
        <Route path="/mylist">
            <ProtectedPage Cmp={MyList}/>
        </Route>
        <Route path="/updatecar/:id">
            <ProtectedPage Cmp={UpdateCar}/>
        </Route>
        <Route path="/updatehouse/:id">
            <ProtectedPage Cmp={UpdateHouse}/>
        </Route>
        <Route path="/updateboat/:id">
            <ProtectedPage Cmp={UpdateBoat}/>
        </Route>
        <Route path="/profilpage">
            <ProtectedPage Cmp={ProfilPage}/>
        </Route>
        <Route path="/chatpage">
            <ProtectedPage Cmp={ChatPage}/>
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
