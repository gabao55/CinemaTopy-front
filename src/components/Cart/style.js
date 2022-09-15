import styled from "styled-components";

const CartWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 40px 25px 50px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

    main {
        width: 100%;
        max-width: 500px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }

    h2 {
        margin-bottom: 60px;
        font-size: 22px;
        font-weight: 700;
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        cursor: pointer;
    }

    .product-specs {
        width: 30%;
        word-wrap: break-word;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .product-specs p {
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .product-specs span {
        font-size: 14px;
        opacity: 60%;
    }

    .product-costs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-costs div {
        min-width: 40px;
        height: 25px;
        padding: 0 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        border-radius: 8px;
        background-color: #dddddd;
        cursor: pointer;
    }

    .product-costs p {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 700;
    }

    .product-costs span, ion-icon {
        font-size: 12px;
        margin: 0 3px;
    }

    .product-costs form {
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        background-color: #f8f8f8;
    }

    .product-costs input {
        width: 30px;
        height: 25px;
        background: #FFFFFF;
        border-radius: 5px;
        border: 1px solid #2b2b2b;
        font-size: 12px;
        font-family: 'Montserrat';
        color: #ee766d;
        text-align: center;
        &::placeholder {
            font-size: 20px;
            line-height: 23px;
            color: #2b2b2b;
            font-family: 'Montserrat', sans-serif;
        }
    }

    .product-costs button {
        width: 25px;
        height: 25px;
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
    }

    .delete {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .delete ion-icon {
        font-size: 20px;
        color: #ee766d;
        cursor: pointer;
    }

    .total {
        width: 100%;
        height: 100px;
        padding: 20px 3px 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 22px;
        border-top: 1px solid #dddddd;
    }
`;



export { CartWrapper };