import './App.css'
import BookCard from './components/BookCard'
import capa_livro from './assets/cavernas_aco.jpg'

function App() {

  return (
    <>
      <div>
        <h1>PW3 - WEB APP - LIVRARIA</h1>
        <BookCard 
          titulo = 'As Cavernas de Aço' 
          autor = 'Isaac Azimov'
          imagem = {capa_livro}/>
        {/* <BookCard 
          titulo = 'O Sol Desvelado' 
          autor = 'Isaac Azimov'
          imagem = 'Teste'/>
        <BookCard 
          titulo = 'O Fim da Infância' 
          autor = 'Arthur C. Clark'
          imagem = 'Teste'/>
        <BookCard 
          titulo = 'Neuromancer' 
          autor = 'Willian Gibson'
          imagem = 'Teste'/> */}
      </div>
    </>
  )
}

export default App
