import { createContext, useContext, useEffect, useState } from "react";

export const enum UserRolesEnum {
  USER = "user",
  GUEST = "guest",
}

interface AuthContextType {
  user: { role: UserRolesEnum } | null;
  logout: () => void;
  login: (
    role: UserRolesEnum,
    accessToken: string,
    refreshToken: string
  ) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

// const USER_ROLE_KEY = "role";
// const defaultUserRole: UserRolesEnum = UserRolesEnum.GUEST;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const getUserData = (): { role: UserRolesEnum } | null => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const [user, setUser] = useState<{ role: UserRolesEnum } | null>(() =>
    getUserData()
  );

  useEffect(() => {
    // Store user data in sessionStorage after each state update
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      setUser({ role: UserRolesEnum.GUEST });
    }
  }, [user]);

  const login = (
    role: UserRolesEnum,
    accessToken: string,
    refreshToken: string
  ) => {
    // Set user data asynchronously
    setTimeout(() => {
      setUser({ role });
      storeTokens(accessToken, refreshToken);
    }, 0);
  };

  const logout = () => {
    // Clear sessionStorage and set user data asynchronously
    setTimeout(() => {
      removeTokens();
      sessionStorage.clear();
    }, 0);
  };

  const storeTokens = (accessToken: string, refreshToken: string) => {
    sessionStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);
  };

  const removeTokens = () => {
    localStorage.removeItem("refresh");
    sessionStorage.removeItem("access");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
