import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react'

import Home from './pages/Home'
import Upitnik from './pages/Upitnik'
import EventPage from './pages/EventPage'
import Events from './pages/Events'
import ClothesPage from './pages/ClothesPage'
import Shop from './pages/Shop'
import LogIn from './pages/LogIn'
import Signup from './pages/Signup'
import Usluge from './pages/Usluge'

function App() {


  const [routerPath, setRouterPath] = useState('')

  const [eventPath, setEventPath] = useState('')

  const [clothesPath, setClothesPath] = useState('')

  const [account, setAccount] = useState('')

  const [cart, setCart] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element=
              {
                <Home
                  routerPath={routerPath}
                  setRouterPath={setRouterPath}
                  clothesPath={clothesPath}
                  setClothesPath={setClothesPath}
                  account={account}
                  setAccount={setAccount}
                />}
            />
            <Route
              path='/upitnik'
              element=
              {
                <Upitnik 
                />}
            />

            <Route
              path='/events'
              element={
                <Events
                routerPath={routerPath}
                setRouterPath={setRouterPath}
                eventPath={eventPath}
                setEventPath={setEventPath}
                account={account}
                setAccount={setAccount}
              />}/>

            <Route
              path={eventPath}
              element={
                <EventPage
                  routerPath={routerPath}
                  setRouterPath={setRouterPath}
                  eventPath={eventPath}
                  setEventPath={setEventPath}
                  account={account}
                  setAccount={setAccount}
                />
              }/>

            <Route 
              path={clothesPath}
              element={
                <ClothesPage
                  routerPath={routerPath}
                  setRouterPath={setRouterPath}
                  account={account}
                  setAccount={setAccount}
                />}
            />

            <Route 
              path='/odeca'
              element={
                <Shop
                  routerPath={routerPath}
                  setRouterPath={setRouterPath}
                  clothesPath={clothesPath}
                  setClothesPath={setClothesPath}
                  account={account}
                  setAccount={setAccount}
                />
              }
            />

            <Route
              path='/login'
              element={
                <LogIn/>
              }
            
            />

            <Route
              path='/signup'
              element={
                <Signup/>
              }
            
            />

            <Route
              path='/usluge'
              element={
                <Usluge/>
              }
            
            />

          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
