import { MortgageComponentProps } from "../model";
import SliderComponent from "./common/SliderComponent";

const LADPAmountSlider = (mortgageProp: MortgageComponentProps) => {
    const { mortgage, setMortgage } = mortgageProp

    return (
        <div>
            <SliderComponent
                onChange={(e, value) =>
                    setMortgage({
                        ...mortgage,
                        downPayment: (value as number) .toFixed(0) as unknown as number,
                        loanAmount: (mortgage.homeValue - (value as number)).toFixed(0) as unknown as number,
                    })
                }
                defaultValue={mortgage.downPayment}
                sliderMin={0}
                slidermax={mortgage.homeValue}
                sliderSteps={100}
                sliderUnit="$"
                sliderAmount={mortgage.downPayment}
                sliderLabel="Down Payment"
                sliderValue={mortgage.downPayment}
            />

            <SliderComponent
                onChange={(e, value) =>
                    setMortgage({
                        ...mortgage,
                        loanAmount: (value as number).toFixed(0) as unknown as number,
                        downPayment: (mortgage.homeValue - (value as number)).toFixed(0) as unknown as number,
                    })

                }
                defaultValue={mortgage.homeValue}
                sliderMin={0}
                slidermax={mortgage.homeValue}
                sliderSteps={100}
                sliderUnit="$"
                sliderAmount={mortgage.loanAmount}
                sliderLabel="Loan Amount"
                sliderValue={mortgage.loanAmount}
            />

        </div>

    );
};

export default LADPAmountSlider;