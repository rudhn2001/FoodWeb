import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    `;
export  const Header = styled.div`
    color: white;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
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
    border-radius: 10px;
    width: 30%; 
    `;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
    `;

export const SearchIcon = styled.img`
    height: 25px;
    width: 25px;
    margin: 15px
    `;
export const AppIcon = styled.img`
    height: 45px;
    width: 45px;
    margin: 10px;
    `;

