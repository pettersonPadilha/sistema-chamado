import { useState } from 'react'
import {Link} from 'react-router-dom'
import './signin.css';
import logo from '../../assets/perfil01.png'
export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <div className="container-center">
        <div className="login">
            <div className="logo-area">
                <img src={logo} alt="logo"/>
            </div>
            <form>
                <h1>Entrar</h1>
                <input type="text" placeholder="Digite seu email"/>
                <input type="password" placeholder="Digite sua senha"/>
                <button type="submit">Acessar</button>
            </form>
            <Link to="/register">Criar uma conta</Link>
        </div>
    </div>
  )
}
