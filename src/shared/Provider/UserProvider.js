import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [isUserSignedIn, setisUserSignedIn] = useState();
  return (
    <UserContext.Provider value={[isUserSignedIn, setisUserSignedIn]}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
