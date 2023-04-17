import './App.css';
import HomePage from  './HomePage'
import AboutPage from './AboutPage';
import DonatePage from './DonatePage'
import { Routes, Route, Link }  from "react-router-dom"



function App() {
  // routing used to be done like this
  // const [page, setPage] = useState("home")

  // const renderPage = () => {
  //   switch (page) {
  //     case "home":
  //       return <HomePage />
  //     case "about":
  //       return <AboutPage />
  //     case "donate":
  //       return <DonatePage />
  //   }
  // }
  return (
    <div className="App">
      <h1>router demo</h1>

      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/donate">donate</Link>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
