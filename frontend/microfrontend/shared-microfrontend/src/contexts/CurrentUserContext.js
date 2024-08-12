import React from 'react';
import api from '../utils/api';

// Объект контекста CurrentUserContext экспортируется из отдельного файла директории contexts
export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState({});
  
    React.useEffect(() => {
      api.getUserInfo()
        .then(setCurrentUser)
        .catch(console.error);
    }, []);
  
    return (
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </CurrentUserContext.Provider>
    );
  };
