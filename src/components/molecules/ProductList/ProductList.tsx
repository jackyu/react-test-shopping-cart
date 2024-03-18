import type { FC } from 'react';
import products from '~/data/mock-products.json';
import type { IProduct } from '~/types';
import ProductCard from '~/components/atoms/ProductCard';
import { useMemo } from 'react';
import { useCategoryContext } from '~/hooks/use-category-context';

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
