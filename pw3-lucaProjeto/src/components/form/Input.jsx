import styles from './Input.module.css'

function Input ({type, name, id, placeholder, value, text, handlerChange}) {
    return (
        <div className = {styles.form_control} >
            <label htmlFor = {name}>{text}</label>
            <input 
                onChange = {handlerChange}
                type = {type}
                name = {name}
                id = {id}
                placeholder = {placeholder}
                value = {value}/>
        </div>
    )
}

export default Input;