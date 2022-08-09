import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: rgba(213, 209, 209, 0.888);
    
    `;
export  const Header = styled.div`
    color: white;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    box-shadow: 0 5px 8px #555;
    `;

export const AppNameComponent = styled.div`
    display: flex;
    align-items: center;
  `;

export const SearchComponent = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 5px;
    border-radius: 6px;
    width: 50%;
    `;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    color:black;
    font-size: 15px;
    font-weight: 500;
    width: 150px;
    `;

export const SearchIcon = styled.img`
    height: 25px;
    width: 25px;
    margin: 10px
    `;
export const AppIcon = styled.img`
    height: 45px;
    width: 45px;
    margin: 10px;
    `;

