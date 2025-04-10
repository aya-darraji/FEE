import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Exemple de fonction de connexion (à adapter avec un appel API par exemple)
  const login = (username, password) => {
    // Logique de connexion ici
    // Vous pouvez ensuite définir l’utilisateur connecté :
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
