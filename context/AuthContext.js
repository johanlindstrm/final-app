import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import { auth } from "../firebase.js";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("user: ", user);
      setUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  });

  const logIn = async (email, password) => {
    console.log("calling log in");
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("* Firebase Log In *");
      // setIsLoggedIn(true);
    } catch (error) {
      console.log("error: ", error);
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        Alert.alert("Error", "wrong password.");
      } else {
        Alert.alert("Error", errorMessage);
      }
    }
  };

  const signOut = () => {
    try {
      auth.signOut();
      // setIsLoggedIn(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoading, user, logIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
