import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogList from './pages/blog/BlogList'
import BlogPost from './pages/blog/BlogPost'

function AppContent() {
  return (
    <Router>
      <div className="bg-[#F8FAFC] dark:bg-[#05080F]" style={{ minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

function App() {
  return <AppContent />
}

export default App
