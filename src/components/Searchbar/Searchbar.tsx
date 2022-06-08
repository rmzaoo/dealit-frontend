import { SearchBarButton, SearchbarContainer, SearchbarInput, SearchBarIcon } from "./style";

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <SearchbarInput />
      <SearchBarButton>
        <SearchBarIcon />
      </SearchBarButton>
    </SearchbarContainer>
  );
};

export default Searchbar;
