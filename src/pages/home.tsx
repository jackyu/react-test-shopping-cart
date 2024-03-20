import type { FC } from 'react';
import Navigation from '~/components/molecules/Navigation';
import ProductList from '~/components/molecules/ProductList';
import ShoppingCart from '~/components/organisms/ShoppingCart';
import CategoryProvider from '~/context/category-provider';
import categories from '~/data/mock-categories.json';
import useShoppingCart from '~/hooks/use-shopping-cart';

const Home: FC = () => {
  const { isOpen } = useShoppingCart();

  return (
    <main className="container m-auto my-0 p-4 relative">
      <>
        <CategoryProvider>
          <Navigation data={categories} />
          <ProductList />
        </CategoryProvider>
        {isOpen && <ShoppingCart />}
      </>
    </main>
  );
}

export default Home;