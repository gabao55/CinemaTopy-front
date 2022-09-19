import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const steps = [
    {
      status: "Carrinho"
    },
    {
      status: "Endereço"
    },
    {
      status: "Confirmação"
    }
];

export default function Progress({ percentage }) {  
return (
    <div style={{ marginTop: 50, marginBottom: 50 }}>
        <ProgressBar width={'60vw'} percent={percentage} filledBackground="#ee766d">
        {steps.map((step, index, arr) => {
            return (
            <Step
                transition="scale"
                children={({ accomplished }) => (
                <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                    color: "black",
                    fontFamily: 'Montserrat',
                    backgroundColor: accomplished ? "#ee766d" : "gray"
                    }}
                >
                </div>
                )}
            />
            );
        })}
        </ProgressBar>
    </div>
);
}
