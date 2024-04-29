
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
   <div className='App'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
   </div>
  )
}

export default App;
