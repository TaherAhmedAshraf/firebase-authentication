import React, {useContext} from 'react'
import {UserContext, FirebaseContex} from '../App'

export default function Home() {
    const user = useContext(UserContext)
    const firebase = useContext(FirebaseContex)
    const auth = firebase.auth()

    const signOut = () =>{
        console.log("clicked")
        firebase.auth().signOut().then(() => {
            console.log("successful")
          }).catch((error) => {
            console.log(error)
          });
    }

    console.log(user)
    return (
        <div className="home">
            <div className="title">
                    <h1>Logged in</h1>
                </div>
            <button className="auth-button" onClick={()=>signOut()}>
                sign out
            </button>
        </div>
    )
}
