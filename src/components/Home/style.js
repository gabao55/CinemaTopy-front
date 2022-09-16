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

const Itens = styled.div`
margin-top: 50px;
background-color: #F6f0f0;
width: 300px;
height: 300px;
border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

img {
    width: 200px;
    height: 200px;
    border-radius: 5px;
}

p > ion-icon {
    color: #FFD700;
}

& > div > ion-icon {
    color: #FFA07A;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

h2 {
    font-size: 20px;
    font-weight: 700;
}

h3 {
    font-size: 15px;
    font-weight: 700;
    margin: 5px;
}

& > div {
    display: flex;
    width: 200px;
    justify-content: space-around;
    align-items: center;
}

`;

export { HomeBG, Itens };
