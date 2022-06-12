// import styles
import './AuthScreen.css'

import logo from './../assets/img/logo.png'

import { useRef } from 'react'
import useForm from './../hooks/useForm'

const AuthScreen = () => {


  const formElement = useRef(null);
  const form = useForm(formElement, ["password"]);

  return (

    <div className="auth-screen">

      <form
        ref={formElement}
        className="auth-screen-form"
        onSubmit={form.handleSubmit}
      >

        <div className="auth-screen-brand">
          <img
            className="auth-screen-logo"
            src={logo}
            alt="logo"
          />

          <h1>I Want Eat</h1>
        </div>

        <input
          id="username"
          name="username"
          type="text"
          placeholder="Nome de usuário"
          autoComplete='off'
        />

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          autoComplete="off"
        />

        <input id="submit" type="submit" value='Entrar' />
      </form>
    </div>

  )
}

export default AuthScreen