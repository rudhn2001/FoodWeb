import styled from "styled-components";
import { useState } from 'react';
import axios from "axios";
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { Header, Container, AppIcon, AppNameComponent, SearchComponent, SearchIcon, SearchInput } from './components/headerComponent';
import { RecipeListContainer, RecipeContainer, CoverImage, RecipeName, Ingredients, SeeMore } from './components/recipeComponents';

const API_ID = "232604d1";
const API_KEYS = "6277719e4454d1fd8db2fe31917cc6ed";

const Placeholder = styled.img`
  height: 200px;
  width: 200px;
  margin: 200px;
  opacity: 50%;
  `;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  console.log("props", props);
  const { recipeObject } = props


  return (

    <>
      <Dialog open={show}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObject.ingredients.map((ingredientsObj) => (
                <tr>
                  <td>{ingredientsObj.text}</td>
                  <td>{ingredientsObj.weight}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Ingredients onClick={() => window.open(recipeObject.url)}>See More</Ingredients>
          <SeeMore onClick={() => setShow(false)}>Close</SeeMore>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObject.image} alt="food_image" />
        <RecipeName>{recipeObject.label}</RecipeName>
        <Ingredients onClick={() => setShow(true)} >Ingredients</Ingredients>
        <SeeMore onClick={() => window.open(recipeObject.url)} >See Complete Recipe</SeeMore>
      </RecipeContainer>
    </>
  );
}

function App() {
  const [TimeoutID, updateTimeoutID] = useState();
  const [RecipeList, UpdateRecipeList] = useState([]);

  const FetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEYS}`
    );
    console.log(response);
    UpdateRecipeList(response.data.hits)
  };

  const onTextChange = (event) => {
    clearTimeout(TimeoutID)
    const Timeout = setTimeout(() => {
      FetchRecipe(event.target.value);
      console.log("API Call");
    }, 500);
    updateTimeoutID(Timeout);

  };




  return <Container>
    <Header>
      <AppNameComponent>
        <AppIcon src="food1.png" alt="food_icon"></AppIcon>
        Recipe Finder Website</AppNameComponent>
      <SearchComponent>
        <SearchIcon src="search.png" alt="search_icon"></SearchIcon>
        <SearchInput type="text" placeholder="Search Recipe..." onChange={onTextChange}></SearchInput>
      </SearchComponent>
    </Header>
    <RecipeListContainer>


      {RecipeList.length ? RecipeList.map((recipeObject) => (
        <RecipeComponent recipeObject={recipeObject.recipe} />
      )) : <Placeholder src="food1.png" ></Placeholder>}

    </RecipeListContainer>
  </Container>;
}

export default App;
