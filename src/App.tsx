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
import { Payment } from "./pages/Payment"
import { Cart } from "./pages/Cart"
import { Login } from "./pages/Login"
import { Register} from "./pages/Register"
import { Orders } from "./pages/Orders"

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment/>}></Route>
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </Container>
      <Footer />
    </ContextProvider>
  )
}

export default App