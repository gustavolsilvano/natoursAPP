import React, { useState } from 'react';

const NewUserContext = React.createContext();

export const NewUserProvider = ({ children }) => {
  const [newUser, setNewUser] = useState({});
  return (
    <NewUserContext.Provider value={{ newUser, setNewUser }}>
      {children}
    </NewUserContext.Provider>
  );
};

export default NewUserContext;
