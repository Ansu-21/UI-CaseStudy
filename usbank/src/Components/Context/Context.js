import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const user1 = localStorage.getItem("registrationData");

  useEffect(() => {
    if (user1 == null) {
      setUser({
        firstname: "",
        lastname: "",
        email: "",
      });
    } else {
      const userData = JSON.parse(user1);
      setUser({
        firstname: userData[0]?.firstname,
        lastname: userData[0]?.lastname,
        email: userData[0]?.mail,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
