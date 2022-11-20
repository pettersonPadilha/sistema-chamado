import { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/auth'
import logo from '../../assets/perfil01.png'
export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nome, setNome] = useState('')

  const {signUp} = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if(nome !== '' && email !== '' && password !== '') {
      signUp(email,password,nome)
    }
    
  }

  return(
    <div className="container-center">
        <div className="login">
            <div className="login-area">
                <img src={logo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar </h1>
                <input type="text" placeholder="Digite seu nome" value={nome} 
                onChange={(e) => setNome(e.target.value)}/>
                <input type="text" placeholder="Digite seu email" value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Digite sua senha" value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Entre</Link>
        </div>
    </div>
  )
}
