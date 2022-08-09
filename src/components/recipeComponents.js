import styled from "styled-components";

export const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;   
gap: 20px; 
`;

export const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 5px 20px;
box-shadow: 0px 3px 10px 0 #aaa;
`;

export const CoverImage = styled.img`
height: 200px;
width: 250px;
object-fit: cover;  
`;


export const RecipeName = styled.span`
font-size: 18px;
font-weight: bold;
color: black;
margin: 10px 0;
`;

export const Ingredients = styled.span`
font-size: 18px;
font-weight: 600;
border: 1px solid green;
padding: 10px 15px;
color: green;
border-radius: 10px;
cursor: pointer;
margin: 10px 0;
text-align: center;

`;

export const SeeMore = styled.span`
font-size: 18px;
font-weight: 600;
border: 1px solid red;
padding: 10px 15px;
color: red;
border-radius: 10px;
cursor: pointer;
margin: 10px 0;
text-align: center;
margin-bottom: 12px;  
`;