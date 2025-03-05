import { createContext, ReactNode, useContext, useState } from "react";

interface UserContextProps {
  children: ReactNode | ReactNode[];
}

interface UserContextData {
  name: string | null;
  login: (userName: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserContextProvider({ children }: UserContextProps) {
  const [name, setName] = useState<string | null>(null);

  const login = (userName: string) => {
    setName(userName);
  };
  const logout = () => {
    setName(null);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextData {
  return useContext(UserContext);
}
