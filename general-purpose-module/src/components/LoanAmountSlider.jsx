import SliderComponent from "./common/SliderComponent";

const LADPAmountSlider = ({ data, setData }) => {

    return (
        <div>
            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        downPayment: value.toFixed(0),
                        loanAmount: (data.homeValue - value).toFixed(0),
                    })
                }
                defaultValue={data.downPayment}
                min={0}
                max={data.homeValue}
                steps={100}
                unit="$"
                amount={data.downPayment}
                label="Down Payment"
                value={data.downPayment}
            />

            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        loanAmount: value.toFixed(0),
                        downPayment: (data.homeValue - value).toFixed(0),
                    })

                }
                defaultValue={data.homeValue}
                min={0}
                max={data.homeValue}
                steps={100}
                unit="$"
                amount={data.loanAmount}
                label="Loan Amount"
                value={data.loanAmount}
            />

        </div>

    );
};

export default LADPAmountSlider;