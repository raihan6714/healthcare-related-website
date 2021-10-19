import initializeAuthencation from "../components/Shared/Login/firebase/firebase.init"
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeAuthencation();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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

    // email sign in
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    // Register
    const handleRegstation = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }
        registerNewUser(email, password);
        // handleEmailLogin(email,password);
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
                // console.log(error.message);
            })
    }
    // login with email
    const handleLogin = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }
        handleEmailLogin(email, password);
    }
    const handleEmailLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const users = userCredential.user;
                setUser(users);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.log(error.message);
            });
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
    }, [isLoading]);

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        error,
        SignInWithGoogle,
        signInWithEmail,
        handleEmailChange,
        handlePasswordChange,
        handleRegstation,
        registerNewUser,
        handleLogin,
        logOut
    }
}

export default useFirebase;