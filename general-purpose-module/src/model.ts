export interface MortgageModel {
    homeValue: number,
    downPayment: number,
    loanAmount: number,
    loanTerm: number,
    interestRate: number
}

export interface MortgageComponentProps {
    mortgage: MortgageModel,
    setMortgage: (mortgage: MortgageModel) => void
}

export interface SliderProps {
    defaultValue: number;
    sliderMin: number;
    slidermax: number;
    sliderLabel: string;
    sliderUnit: string;
    onChange: (event: Event, value: number | number[], activeThumb: number)=>void;
    sliderAmount: number;
    sliderValue: number;
    sliderSteps: number;
}