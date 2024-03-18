import { CategoryContext } from '~/context/category-provider';
import { useContext } from 'react';
import type { ICategoryContext } from '~/context/category-provider';

export const useCategoryContext = (): ICategoryContext => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error(
      'useCategoryContext must be used within a CategoryProvider'
    );
  }

  return context;
}
