import { SearchBarButton, SearchbarContainer, SearchbarInput, SearchBarIcon } from "./style";

interface Props {
  className?: string;
}

const Searchbar = ({className}: Props) => {
  return (
    <SearchbarContainer className={className}>
      <SearchbarInput placeholder="Search" />
      <SearchBarButton>
        <SearchBarIcon />
      </SearchBarButton>
    </SearchbarContainer>
  );
};

export default Searchbar;
