import React from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const AuthProvider = ({ children }) => {
  // Function to create a new user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Context values (add more later like login, logout, currentUser, etc.)
  const value = {
    createUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
