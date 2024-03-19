import type { FC } from 'react';
import { useMemo } from 'react';
import ProductCard from '~/components/molecules/ProductCard';
import products from '~/data/mock-products.json';
import { useCategoryContext } from '~/hooks/use-category-context';
import type { IProduct } from '~/types';

const ProductList: FC = () => {
  const { categoryId } = useCategoryContext();
  const productsOfCategory = useMemo(() => products.filter((product: IProduct) => product.categoryId === categoryId), [categoryId]);

  return (
    <div className='flex flex-wrap justify-start items-center py-4 mt-8 gap-6'>
      {productsOfCategory.map((product) => (
        <ProductCard key={`product_${product.id}`} item={product} />
      ))}
    </div>
  );
};

export default ProductList;
