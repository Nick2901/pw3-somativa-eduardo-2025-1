import style from './Button.module.css'
import {Link} from 'react-router-dom'

const Button = ({label, router, cod_livro})=>{
    return(
            <div className={style.buttonContainer}>
                <Link to = {`${router}${cod_livro}`}>
                    <button>{label}</button>
                </Link>
            </div>
    )  
}

export default Button