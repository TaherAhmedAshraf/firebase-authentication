import React from 'react'

export default function Google({ firebase }) {
    const auth = firebase.auth()
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider).then(async (data) => {
            console.log(data)
        })
    }
    return (
        <button id="google" className="auth-button col-12" onClick={signInWithGoogle}>Google</button>
    )
}
