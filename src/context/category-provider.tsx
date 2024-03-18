import { createContext, useMemo, useState } from 'react';

export interface ICategoryContext {
  categoryId: number;
  setCategoryId(categoryId: number): void;
}

export const CategoryContext = createContext<ICategoryContext | undefined>(undefined);

type CategoryProviderPros = {
  children: React.ReactNode;
};

const DEFAULT_CATEGORY_ID = 1;

export default function CategoryProvider({ children }: CategoryProviderPros) {
  const [categoryId, setCategoryId] = useState<number>(DEFAULT_CATEGORY_ID);
  const value: ICategoryContext = useMemo(
    () => ({
      categoryId,
      setCategoryId,
    }),
    [categoryId]
  );

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}

// https://medium.com/comsystoreply/how-to-use-react-context-with-usestate-c8ae4fe72fb9
