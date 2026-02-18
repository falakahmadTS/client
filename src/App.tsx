import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Login } from './pages/Auth/Login'
import { Register } from './pages/Auth/Register'
import { NotFound } from './pages/NotFound'
import { Loader } from './components/ui/Loader'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'

import { useLocation } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { ProtectedRoute } from './components/auth/ProtectedRoute'

import { useAuth } from './context/AuthContext'

function AppContent() {
  const { loading: authLoading } = useAuth()
  const [showMainContent, setShowMainContent] = useState(false)
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')

  useEffect(() => {
    // Ensure the splash screen shows for at least a short duration for aesthetics
    if (!authLoading) {
      const timer = setTimeout(() => {
        setShowMainContent(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [authLoading])

  if (!showMainContent) {
    return <Loader />
  }

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-right" />
        <AppContent />
      </AuthProvider>
    </Router>
  )
}

export default App
