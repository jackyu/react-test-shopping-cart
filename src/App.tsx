import Header from '~/components/organisms/Header';
import Footer from '~/components/organisms/Footer';
import Home from '~/pages/home';
import ShoppingCartProvider from './context/shopping-cart-provider';

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Home />
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App
