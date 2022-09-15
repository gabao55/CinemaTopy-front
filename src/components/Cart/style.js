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
        width: 40px;
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