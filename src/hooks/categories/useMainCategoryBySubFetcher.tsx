import { useEffect, useState } from "react";
import { fetchMainCategory } from "../../api/categoryFetch";

export interface mainCategoryProps {
  main: {
    id: number;
    name: string;
    level: number;
    upperLevel: null;
    image: string;
  };
  subcategories: {
    id: number;
    name: string;
    level: number;
    upperLevel: number;
    image: string;
  };
}

export const useMainCategoryBySubFetcher = (sub: string) => {
  const [mainCategory, setMainCategory] = useState<mainCategoryProps>();
  useEffect(() => {
    fetchMainCategory(sub).then((data) => {
      setMainCategory(data);
    });
  }, []);

  return mainCategory;
};
