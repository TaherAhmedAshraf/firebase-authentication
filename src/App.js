import './App.css';
import Signin from './pages/Signin';
import { Switch, Route } from "react-router-dom"
import { firebase, useAuthState } from "./Firebase/Firebase"
import Home from './pages/Home';
import { createContext } from 'react';
const FirebaseContex = createContext()
const UseAuthStateContext = createContext()
const UserContext = createContext()

function App() {
  const auth = firebase.auth()
  const [user] = useAuthState(auth)
  return (
    <>
      <FirebaseContex.Provider value={firebase}>
        <UseAuthStateContext.Provider value={useAuthState}>
          <UserContext.Provider value={user}>
            <main>
              {user ?

                <Switch>
                  <Route path="/" component={Home} exact />
                </Switch>
                :
                <Switch>
                  <Route path="/" component={Signin} exact />
                </Switch>

              }
            </main>
          </UserContext.Provider>
        </UseAuthStateContext.Provider>
      </FirebaseContex.Provider>
    </>
  );
}

export default App;
export { FirebaseContex, UseAuthStateContext, UserContext }