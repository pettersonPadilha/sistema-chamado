import { useState } from 'react'
import {Link} from 'react-router-dom'
import './signin.css';
import logo from '../../assets/perfil01.png'
export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
   
  }

  return(
    <div className="container-center">
        <div className="login">
            <div className="login-area">
                <img src={logo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Entrar</h1>
                <input type="text" placeholder="Digite seu email" value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Digite sua senha" value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Acessar</button>
            </form>
            <Link to="/register">Não possui uma conta? Cadastre-se</Link>
        </div>
    </div>
  )
}
