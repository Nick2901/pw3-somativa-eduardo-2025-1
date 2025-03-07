import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/layout/Container'

/* IMPORTS DOS COMPONENTES DE PÁGINAS */
import Home from './components/pages/Home'
import CreateBook from './components/pages/CreateBook'
import ListBook from './components/pages/ListBook'

/* IMPORTAÇÃO DO NAVBAR */
import NavBar from './components/layout/NavBar'

function App() {

  return (
    <>
    
      <div>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                <Route path='/newBook' element={<CreateBook />} />
                <Route path='/listBook' element={<ListBook />} />

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
