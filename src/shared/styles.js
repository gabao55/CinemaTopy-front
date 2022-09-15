import styled from "styled-components";

const Auth = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    h1 {
        margin-bottom: 40px;
    }
    form {
        width: 300px;
    }
    input {
        margin-bottom: 12px;
    }
    p {
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        margin-top: 25px;
        font-weight: 700;
        cursor: pointer;
    }
    ${props => {
        if(props.disabled === true){
            return `
                input {
                    background: #F2F2F2;
                    color: #AFAFAF;
                }
                button {
                    opacity: 0.7;
                    cursor: initial;
                }
            `; 
        }
    }}
`;

const TemplateButton = styled.button`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    padding: 0 25px;
    background: #ee766d;
    border-radius: 5px;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    justify-content: ${props => props.spaced ? "space-between": "center"};
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    font-weight: 700;

    ion-icon {
        font-size: 26px;
        color: #FFFFFF;
    }
`;

const TemplateInput = styled.input`
    width: 300px;
    height: 60px;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #2b2b2b;
    font-size: 20px;
    font-family: 'Raleway';
    color: #ee766d;
    padding-left: 10px;
    &::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #2b2b2b;
        font-family: 'Montserrat', sans-serif;
    }
`;

const BackGround = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 25px;
    & > div:first-child {
        width: 330px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
    }
    h3 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    ion-icon {
        width: 30px;
        height: 30px;
        color: #FFFFFF;
        cursor: pointer;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    input {
        margin-bottom: 12px;
        width: 330px;
    }
    svg {
        margin-bottom: 40px;
    }
    ${props => {
        if(props.disabled === true){
            return `
                input {
                    background: #F2F2F2;
                    color: #AFAFAF;
                }
                button {
                    opacity: 0.7;
                    cursor: initial;
                }
            `; 
        }
    }}
`;

export { BackGround, Auth, TemplateButton, TemplateInput};