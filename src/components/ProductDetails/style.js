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
    margin-top: 40px;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
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
margin-top: 70px;
background-color: #F6f0f0;
width: 350px;
border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

img {
    margin: 10px 0;
    width: 330px;
    height: 330px;
    border-radius: 10px;
}

p > ion-icon {
    color: #FFD700;
}

& > ion-icon {
    color: #FFA07A;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

h2 {
    margin: 10px 0;
    font-size: 25px;
    font-weight: 700;
}

h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 5px;
}

& > div {
    width: 330px;
    display: flex;
    justify-content: space-between;
}

h4 {
    font-weight: 700;
    margin: 5px 0;
}

p {
    margin-bottom: 5px;
}

`;

export { HomeBG, Item };