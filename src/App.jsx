"use client"

import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Upload_Users from './components/upload-users';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
          <Route
            path="/"
            element={
              <main className="pt-16 transition-all duration-300 ease-in-out">
                <Hero />
                <About />
                <Services />
                <Contact />
              </main>
            }
          />
          <Route path="/users" element={<Upload_Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App

