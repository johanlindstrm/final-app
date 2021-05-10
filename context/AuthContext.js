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

  const registerUser = (email, password) => {
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     console.log("User account created & signed in!");
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/email-already-in-use") {
    //       console.log("That email address is already in use!");
    //     }

    //     if (error.code === "auth/invalid-email") {
    //       console.log("That email address is invalid!");
    //     }

    //     console.error(error);
    //   });
    try {
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    } catch (error) {}
  };

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
    <AuthContext.Provider
      value={{ isLoading, user, logIn, signOut, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
