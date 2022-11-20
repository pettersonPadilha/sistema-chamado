import {useState,createContext, useEffect} from 'react';
import firebase from '../services/firebaseConnection'

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        function loadStore() {
            const storeUser = localStorage.getItem('sistemaUser');

            if(storeUser) {
                setUser(JSON.parse(storeUser))
                setLoading(false);
            }
            setLoading(false);
        }

        loadStore();
            
    },[])

    async function signUp(email,password,nome) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (value) => {
            let uid = value.uid;
            await firebase.firestore().collection("users")
            .doc(uid).set({
                nome:nome,
                avatarUrl:null,
            })
            .then(() => {
                let data = {
                    uid:uid,
                    nome:nome,
                    email: value.user.email,
                    avatarUrl: null
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error) => {
            console.log("🚀 ~ file: auth.js ~ line 50 ~ signUp ~ error", error)
            setLoadingAuth(false)
            
        })
    }

    function storageUser(data) {
        localStorage.setItem("sistemaUser",JSON.stringify(data));
    }
    async function signOut() {
        await firebase.auth().signOut();
        localStorage.removeItem("sistemaUser");
        setUser(null);
        

    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, loading, signUp,signOut}}>
            {children}
        </AuthContext.Provider>
    );
}