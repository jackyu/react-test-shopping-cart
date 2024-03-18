import type { FC } from 'react';
import Navigation from '~/components/molecules/Navigation';
import ProductList from '~/components/molecules/ProductList';
import categories from '~/data/mock-categories.json';
import CategoryProvider from '~/context/category-provider';

const Home: FC = () => {
  return (
    <main className="w-[1280px] m-auto my-0 p-4">
      <CategoryProvider>
        <Navigation data={categories} />
        <ProductList />
      </CategoryProvider>
    </main>
  );
}

export default Home;