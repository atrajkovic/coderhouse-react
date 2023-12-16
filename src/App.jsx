import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import CartContextProvider from "./contexts/CartContext";
import Checkout from "./pages/Checkout";
import { ItemDetailPage } from "./pages/ItemDetailPage";
import { ItemListContainer } from "./pages/ItemListContainer";
import OrderResume from "./pages/OrderResume";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[calc(100vh-68px)] bg-yellow-50/50">
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/category/:categoryId"
              telefono
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:itemId" element={<ItemDetailPage />} />
            <Route exact path="/cart" element={<Checkout />} />
            <Route exact path="/order/:orderId" element={<OrderResume />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
