import { SearchBarButton, SearchbarContainer, SearchbarInput, SearchBarIcon } from "./style";

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <SearchbarInput placeholder="Search" />
      <SearchBarButton>
        <SearchBarIcon />
      </SearchBarButton>
    </SearchbarContainer>
  );
};

export default Searchbar;
