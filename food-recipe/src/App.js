
import { Header, Container, AppIcon, AppNameComponent, SearchComponent, SearchIcon, SearchInput } from './components/headerComponent';
import { RecipeListContainer, RecipeContainer, CoverImage, RecipeName, Ingredients, SeeMore } from './components/recipeComponents';



function App() {
  return <Container>
    <Header>
      <AppNameComponent>
        <AppIcon src="food1.png" alt="food_icon"></AppIcon>
        Recipe Finder Website</AppNameComponent>
      <SearchComponent>
        <SearchIcon src="search.png" alt="search_icon"></SearchIcon>
        <SearchInput placeholder="Search Recipe..."></SearchInput>
      </SearchComponent>
    </Header>
    <RecipeListContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="food1.png" />
        <RecipeName>Mattar Paneer</RecipeName>
        <Ingredients>Ingredients</Ingredients>
        <SeeMore>See Complete Recipe</SeeMore>
      </RecipeContainer>
    </RecipeListContainer>
  </Container>;
}

export default App;
