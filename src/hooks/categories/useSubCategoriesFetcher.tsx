import { useEffect, useState } from "react";
import { fetchMainCategory } from "../../api/categoryFetch";


const useCategoriesFetcher = (category: string) => {
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMainCategory(category)
      .then((data) => {
        setSubCategories(data.subcategories);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  return { subCategories, isLoading, error };
};

export default useCategoriesFetcher;
