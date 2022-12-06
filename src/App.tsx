import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Store } from "./pages/Store"
import { Shipping } from "./pages/Shipping"
import { Navbar } from "./components/NavBar"
import { ContextProvider } from "./context/AppContext"
import { Item } from "./pages/Item"
import { Footer } from "./components/Footer"

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Container>
      <Footer />
    </ContextProvider>
  )
}

export default App