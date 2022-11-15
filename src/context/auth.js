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

    return(
        <AuthContext.Provider value={{signed: !!user, user, loading}}>
            {children}
        </AuthContext.Provider>
    );
}