// Importing React Router components for routing
import { Routes, Route } from 'react-router-dom'

// Importing custom components
import NavigationBar from './components/NavigationBar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Content from './components/Content.jsx'

// Main App component
export default function App() {
  return (
    <>
      {/* Navigation bar at the top of the page */}
      <NavigationBar />

      {/* Define all the application routes here */}
      <Routes>
        {/* Default home route */}
        <Route path="/" element={<h1>Hello everyone Adrian is here</h1>} />
        
        {/* Route for the "Read" page */}
        <Route path="/read" element={<h1>Read</h1>} />
        
        {/* Route for the "Create" page */}
        <Route path="/create" element={<h1>Create</h1>} />
      </Routes>

      {/* Footer displayed at the bottom of the page */}
      <Footer />
    </>
  );
}
