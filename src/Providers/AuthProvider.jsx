import { createContext, useEffect, useState } from "react";
import{ getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import app from "../../firebase.config";



export const authContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, provider)
     }

    const authInfo = {
        user,
        signUp,
        loading,
        login,
        signInWithGoogle,

    }
    

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            // console.log('logged usr', currentUser);
            setLoading(false);
        })
    })



    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;