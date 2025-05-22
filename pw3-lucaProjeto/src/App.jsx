import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/layout/Container'

import Home from './components/pages/Home'
import CreateBook from './components/pages/CreateBook'
import ListBook from './components/pages/ListBook'
import DetailBook from './components/pages/DetailBook'
import UpdateBooks from './components/pages/UpdateBooks'

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
                <Route path='/detailBook/:cod_livro' element={<DetailBook />} />
                <Route path='updateBook/:cod_livro' element={<UpdateBooks />} />
              </Route>
            </Routes>
          </Container>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
