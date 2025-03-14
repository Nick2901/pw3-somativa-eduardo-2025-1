import React from "react";
import {useState} from "react";
import style from './CreateBook.module.css'
import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";

const CreateBook = ()=>{

    const [book, setBook] = useState({});

    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book);
    }

    function handlerChangeCategory(event){
        setBook({...book, category : event.target.options[event.target.selectedIndex].text})
    }

    function submit(event){
        event.preventDefault();
        console.log(book);
    }

    return(
        <section className = {style.create_book_container}>
            <h1>CADASTRO DE LIVROS</h1>
            <form onSubmit = {submit}>
                <Input
                    handlerChange = {handlerChangeBook}
                    text = 'Nome do Livro' 
                    type = 'text'
                    name = 'txt_livro' 
                    id = 'txt_livro' 
                    placeholder = 'Digite o nome do livro'/>
                <Input 
                    handlerChange = {handlerChangeBook}
                    text = 'Nome do Autor' 
                    type = 'text'
                    name = 'txt_autor' 
                    id = 'txt_autor' 
                    placeholder = 'Digite o nome do autor do livro'/>
                <Input 
                    handlerChange = {handlerChangeBook}
                    text = 'Descrição do Livro' 
                    type = 'text'
                    name = 'txt_descricao' 
                    id = 'txt_descricao' 
                    placeholder = 'Digite a descrição do livro'/>
                <Select
                    handlerChange = {handlerChangeCategory}
                    name = 'slc_categoria'
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