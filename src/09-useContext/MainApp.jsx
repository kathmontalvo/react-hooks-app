import { Navigate, Route, Routes } from "react-router"
import { HomeApp } from "./HomePage"
import { AboutApp } from "./AboutPage"
import { LoginApp } from "./LoginPage"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>
      <hr />
      <NavBar />


      <Routes>
        <Route path="/" element={ <HomeApp /> } />
        <Route path="about" element={ <AboutApp /> } />
        <Route path="login" element={ <LoginApp /> } />

        {/* <Route path="*" element={ <LoginApp /> } /> */}
        <Route path="*" element={ <Navigate to="/about" /> } />

      </Routes>
    </UserProvider>
  )
}
