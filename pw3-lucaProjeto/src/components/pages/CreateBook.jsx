import React from "react";
import {useState, useEffect} from "react";
import style from './CreateBook.module.css'
import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";

const CreateBook = ()=>{

    const [book, setBook] = useState({});

    const [categories, setCategories] = useState([]);


    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book);
    }

    function handlerChangeCategory(event){
        setBook({...book, cod_categoria : event.target.options[event.target.selectedIndex].text})
    }

    function submit(event){
        event.preventDefault();
        console.log(book);
    }

useEffect(() => {
    fetch('http://127.0.0.1:5000/listagemCateorias',
        {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
            }
        }
    ).then((resp) =>
        resp.json()
    ).then((categorias) => {
        console.log('TESTE: ' + categorias.data);
    }).catch((error) => {
        console.log('ERRO: ' + error);
    })
}, []);

    return(
        <section className = {style.create_book_container}>
            <h1>CADASTRO DE LIVROS</h1>
            <form onSubmit = {submit}>
                <Input
                    handlerChange = {handlerChangeBook}
                    text = 'Nome do Livro' 
                    type = 'text'
                    name = 'nome_livro' 
                    id = 'txt_livro' 
                    placeholder = 'Digite o nome do livro'/>
                <Input 
                    handlerChange = {handlerChangeBook}
                    text = 'Nome do Autor' 
                    type = 'text'
                    name = 'autor_livro' 
                    id = 'txt_autor' 
                    placeholder = 'Digite o nome do autor do livro'/>
                <Input 
                    handlerChange = {handlerChangeBook}
                    text = 'Descrição do Livro' 
                    type = 'text'
                    name = 'descricao_livro' 
                    id = 'txt_descricao' 
                    placeholder = 'Digite a descrição do livro'/>
                <Select
                    handlerChange = {handlerChangeCategory}
                    name = 'cod_categoria'
                    id = 'slc_categoria'
                    text = 'Categoria do livro'/>
                <Button
                    label = 'Cadastrar Livro'
                />
            </form>
        </section>
    )
}

export default CreateBook 