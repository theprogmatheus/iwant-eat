// import styles
import './App.css';

// import components
import MyRoutes from './MyRoutes';

// import hooks
import useStorage from './hooks/useStorage';

function App() {

  const [user, setUser] = useStorage("user");


  return (<MyRoutes user={user} setUser={setUser} />);
}

export default App;
