import initializeAuthencation from "../components/Shared/Login/firebase/firebase.init"
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthencation();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);




    const SignInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubcribed;
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        SignInWithGoogle,
        isLoading,
        logOut
    }
}

export default useFirebase;