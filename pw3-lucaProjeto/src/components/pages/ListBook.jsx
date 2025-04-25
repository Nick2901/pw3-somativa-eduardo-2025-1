import React from "react"
import { useState, useEffect } from "react"
import BookCard from "../BookCard"
import cavernas from '../../assets/cavernas_aco.jpg'
import ContainerBook from '../layout/ContainerBook'
import style from './ListBook.module.css'

const ListBook = ()=>{
    const [books, setBook] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/listagemLivros',
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
                }
            }
        ).then((resp) =>
            resp.json()
        ).then((bookData) => 
            {
            console.log(bookData.data);
            setBook(bookData.data)
            }
        ).catch((error) => {
                console.log('ERRO: ' + error)
            }
        )
    }, [])

    return(
        <section>
            <h1>LIST BOOK</h1>
            <ContainerBook>
                {
                    books.map((book) => (
                    <BookCard
                        nome_livro = {book.nome_livro}
                        autor_livro = {book.autor_livro}
                        imagem = {cavernas}
                        key = {book.cod_livro}/>
                    )) 
                }
            </ContainerBook>
        </section>
    )
}

export default ListBook