import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Footer } from "./Components/Footer"
import { Home } from "./pages/Home/Home"
import { Header } from "./Components/Header"
import { Catalog } from "./pages/Catalog/Catalog"


function App() {


  return (
    <main>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Catalogo" element={<Catalog/>}/>
          <Route path="*" element={<>Err 404 Page not Fount </>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </main>
  )
}

export default App
