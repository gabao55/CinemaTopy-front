import styled from "styled-components";

const SelectTemplate = styled.select`
    width: 300px;
    height: 60px;
    margin-bottom: 150px;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #2b2b2b;
    font-size: 20px;
    font-family: 'Montserrat';
    color: #ee766d;
    padding: 0 10px;
    &::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #2b2b2b;
        font-family: 'Montserrat', sans-serif;
    }
`;

const UserData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    h2 {
        margin-bottom: 30px;
        text-align: center;
    }

    p {
        margin-bottom: 15px;
        text-align: center;
    }
`;

export { SelectTemplate, UserData };