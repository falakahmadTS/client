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

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
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
