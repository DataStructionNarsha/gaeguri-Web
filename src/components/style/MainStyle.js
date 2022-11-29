import styled from "styled-components"

export const Pobtn = styled.button`
    border:none;
    box-shadow : none;
    background-color:black;
    color:white;
    height : 30px;
    padding : 0px 10px;
    border-radius:10px;
    margin-left:1rem;
    transition : 0.5s;
    &:hover{
        transform : translateY(-0.5em);
        box-shadow : 0px 4px 10px 3px rgba(0,0,0,0.3);
    }
`;

export const Setbtn = styled.button`
    border : 1px;
    box-shadow : none;
    background-color:gray;
    color : whitesmoke;
    height : 30px;
    padding : 0px 10px;
    margin-left : 1rem;
    transition : 0.5s;
    border-radius : 10px;
    
    &:hover{
        
    }
`;

export const ProjectBox = styled.div`
    width: 250px;
    height: 120px;
    background-color: gray;
    border : 1px;
    box-shadow : none;
    display:block;    

`;
