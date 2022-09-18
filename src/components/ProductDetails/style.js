import styled from "styled-components";

const HomeBG = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
padding: 40px 25px 50px 25px;
display: flex;
flex-direction: column;
align-items: center;

header {
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header ion-icon {
    font-size: 25px;
    cursor: pointer;
}

header ion-icon:first-child {
    color: #ee766d;
}
`;

const Item = styled.div`
margin-top: 50px;
background-color: #F6f0f0;
width: 350px;
border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

img {
    margin: 10px 0;
    width: 300px;
    height: 300px;
    border-radius: 10px;
}

`;

export { HomeBG, Item };