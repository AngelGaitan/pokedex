import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './assets/pages/HomePage'
import Pokedex from './assets/pages/Pokedex'
import PokeIdPage from './assets/pages/PokeIdPage'
import Page404 from './assets/pages/Page404'
import ProtectedRoutes from './assets/pages/ProtectedRoutes'

function App() {

  return (
    <div>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route element={<ProtectedRoutes/>} >
        <Route path='/pokedex' element={<Pokedex/>} />
        <Route path='/pokedex/:id' element={<PokeIdPage/>} />
        </Route>
        <Route path='*' element={<Page404/>} />
      </Routes>
    </div>
  )
}

export default App
