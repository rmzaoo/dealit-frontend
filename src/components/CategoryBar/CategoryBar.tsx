import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../api/productsFetch";
import TextLink from "../TextLink/TextLink";
import { Container } from "./style";
interface Props {
  className?: string;
}

const CategoryBar = ({ className }: Props) => {
  const navigate = useNavigate();
  const categories = fetchCategories();

  return !categories ? null : (
    <Container className={className}>
      {categories.map((category: string) => (
        <TextLink
          onClick={() => navigate(`/products/${category}`)}
          key={category}
        >
          {category}
        </TextLink>
      ))}
    </Container>
  );
};

export default CategoryBar;
