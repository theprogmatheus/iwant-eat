// import styles
import './AuthScreen.css'

import logo from './../assets/img/logo.png'


import InputMask from 'react-input-mask';

const AuthScreen = () => {
  return (

    <div className="auth-screen">
      <form className="auth-screen-form" onSubmit={(e) => { e.preventDefault() }}>

        <div className="auth-screen-brand">
          <img
            className="auth-screen-logo"
            src={logo}
          />

          <h1>I Want Eat</h1>
        </div>

        <input id="username" name="username" type="text" placeholder='Informe seu nome' autoComplete='off' />

        <InputMask
          id="phone"
          name="phone"
          mask='(99) 99999-9999'
          placeholder='(00) 00000-0000'
          type="tel"
          maskChar="0"
        />

        <input id="submit" type="submit" value='Entrar' />
      </form>
    </div>

  )
}

export default AuthScreen