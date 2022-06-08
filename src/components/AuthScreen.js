// import styles
import './AuthScreen.css'

const AuthScreen = () => {
  return (
    <div className="auth-screen">
      <form className="auth-screen-form" onSubmit={(e)=>{e.preventDefault()}}>
        <input id="username" name="username" type="text" placeholder='Seu nome completo' />
        <input id="phone" name="phone" type="text" placeholder='(XX) 9 XXXX-XXXX' />
        <input id="submit" type="submit" value='Entrar' />
      </form>
    </div>
  )
}

export default AuthScreen