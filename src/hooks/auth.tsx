import { createContext, ReactNode, useContext } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string
  name: string
  email: string
  photo?: string
}

interface IAuthContextData {
  user: User
}

const AuthContext = createContext({} as IAuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = {
    id: '123456',
    name: 'Diogo',
    email: 'diogo@diogo.com',
    photo: 'qweqeq',
  }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
