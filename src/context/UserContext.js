import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { app } from '../firebase/config';
import db from '../firebase/config';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth(app);
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getUserData('users', user.uid)
                    .then((userData) => {
                        setUser(userData);
                        setIsLoading(false);
                    })
                    .catch(e => alert(e));

            }else{
                setUser();
                setIsLoading(false);
            }
        });
    }, [auth]);
    
    const getUserData = async (collectionName, id) => {
        try {
            const docData = doc(db, collectionName, id)
            const userData = await getDoc(docData)
    
            return { ...userData.data(), id: userData.id }
        }
        catch (e) {
            throw new Error(e)
        }
    };

    const addUser = async (collectionName, name, lastName, email, phone, id) => {
        try {
            await setDoc(doc(db, collectionName, id), { name, lastName, email, phone });
        }
        catch (e) {
            throw new Error(e)
        }
    }
    
    const createUser = async (email, password) => {

        try {
            const newUserData = await createUserWithEmailAndPassword(auth, email, password)
            return newUserData.user.uid;
        }
        catch (error) {
            throw new Error(error)
        }
    };

    const loginUser = async (email, password) => {
        try {
            const user =  await signInWithEmailAndPassword(auth, email, password);
            getUserData('users', user.user.uid)
            .then((userData) => {
                setUser(userData);
                navigate('/checkout');
            })
            .catch(e => alert(e));
   
        }
        catch (error) {
            alert(error.message);
        }
    }

    const sendPasswordReset = async (email) => {
        try {
          await sendPasswordResetEmail(auth, email);
          alert("Password reset link sent!");
        } catch (error) {
          alert(error.message);
        }
      };

    const signOutUser = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            alert(error.message);
        });
    }


    return (
        <UserContext.Provider value={{ isLoading, user, createUser, loginUser, signOutUser, sendPasswordReset, addUser}}>
        {children}
        </UserContext.Provider>
    );

}

