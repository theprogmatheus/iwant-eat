// import styles
import './App.css';

// import components
import MyRoutes from './MyRoutes';

// import hooks
import useStorage from './hooks/useStorage';

import { UserContext } from './contexts/UserContext';

function App() {

  const [user, setUser] = useStorage("user");


  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <MyRoutes user={user} setUser={setUser} />
    </UserContext.Provider>
  );
}

export default App;
