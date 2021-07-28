import React,{useEffect, useContext} from 'react'
import Google from '../Authentication/Google.js'
import {UserContext, FirebaseContex} from '../App'

export default function Signin() {
    const user = useContext(UserContext)
    const firebase = useContext(FirebaseContex)
    const auth = firebase.auth()
    console.log(user)

    return (
        <>
            <section>
                <div className="container">
                <div className="title">
                    <h1>Welcome to Firebase Authentication App</h1>
                </div>
                <div className="auths row">
                    <Google firebase={firebase}/>
                    <button id="google" className="auth-button col-12">Google</button>
                    <button id="google" className="auth-button col-12">Google</button>
                    <button id="google" className="auth-button col-12">Google</button>
                </div>
                </div>
            </section>
        </>
    )
}
