import styled from "styled-components";

const HomeBG = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

header {
    padding: 40px 25px 25px 25px;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #f8f8f8;
}

header ion-icon {
    font-size: 25px;
    cursor: pointer;
}

header ion-icon:first-child {
    color: #ee766d;
}

& > div:nth-child(2) {
    margin-top: 100px;
}

h2 {
    font-size: 18px;
}

span {
    font-weight: 700;
}

`;

export { HomeBG };