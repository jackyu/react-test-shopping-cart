import Footer from '~/components/organisms/Footer';
import Header from '~/components/organisms/Header';
import OrderProvider from '~/context/order-provider';
import Home from '~/pages/home';
import ShoppingCartProvider from './context/shopping-cart-provider';

function App() {
  return (
    <ShoppingCartProvider>
      <OrderProvider>
        <Header />
        <Home />
      </OrderProvider>
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App
