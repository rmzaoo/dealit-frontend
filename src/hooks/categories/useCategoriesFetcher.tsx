import { useEffect, useState } from "react";
import { fetchCategories } from "../../api/categoryFetch";

const useCategoriesFetcher = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      fetchCategories()
        .then((data) => {
          setCategories(data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
  
    return { categories, isLoading, error };
  };
  
  export default useCategoriesFetcher;
  