import { MortgageComponentProps } from '../model';
import SliderComponent from './common/SliderComponent';

const HVSlider = (mortgageProp: MortgageComponentProps) => {
    //const bank_limit: number = 10000
    const { mortgage, setMortgage } = mortgageProp

    return (
        <div>
            <SliderComponent
            onChange={(e,value)=>{
                setMortgage({
                    ...mortgage,
                    homeValue:((value as number).toFixed(0)) as unknown as number,
                    downPayment: (0.2*(value as number)).toFixed(0) as unknown as number,
                    loanAmount: (0.8*(value as number)).toFixed(0) as unknown as number,
                })
            }}
            defaultValue={mortgage.homeValue}
            sliderMin={1000}
            slidermax={10000}
            sliderSteps={100}
            sliderUnit={"$"}
            sliderAmount={mortgage.homeValue}
            sliderLabel={"Home Valuation"}
            sliderValue={mortgage.homeValue}
            />

        </div>
    );
}

export default HVSlider;