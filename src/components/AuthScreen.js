// import styles
import './AuthScreen.css'

import logo from './../assets/img/logo.png'

import { useRef } from 'react'
import useForm from './../hooks/useForm'

const AuthScreen = ({ user, setUser }) => {


  const formElement = useRef(null);
  const form = useForm(formElement, ["username", "phone"]);

  return (

    <div className="auth-screen">

      <form
        ref={formElement}
        className="auth-screen-form"
        onSubmit={(e) => {
          form.handleSubmit(e, (form) => {
            setUser({
              ...user,
              ...form
            })
          })
        }}
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
          placeholder="Qual é seu nome?"
          autoComplete='off'
          required
        />

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Qual seu contato?"
          autoComplete="off"
        />

        <input id="submit" type="submit" value='Entrar' />
      </form>
    </div>

  )
}

export default AuthScreen