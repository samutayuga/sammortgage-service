import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import morgagateCalc from "mortgage-js"
import { MortgageModel } from "../model";

ChartJS.register(ArcElement, Tooltip, Legend);



const Result = (data: MortgageModel) => {
    const { homeValue, loanAmount, loanTerm, interestRate, downPayment } = data;

    const totalLoanMonths = loanTerm * 12;
    const mortgageCalculator = morgagateCalc.createMortgageCalculator();
    mortgageCalculator.totalPrice = homeValue;
    mortgageCalculator.downPayment = downPayment;
    mortgageCalculator.interestRate = (interestRate / 100);
    mortgageCalculator.months = (12 * loanTerm);
    mortgageCalculator.mortgageInsuranceEnabled = false;

    useEffect(() => { },
        [])
    const monthlyPaymentResult = mortgageCalculator.calculatePayment();
    const monthlyPayment = monthlyPaymentResult.principalAndInterest;
    const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

    const pieChartData = {
        labels: ["Principle", "Interest"],
        datasets: [
            {
                label: "Ratio of Principle and Interest",
                data: [homeValue, totalInterestGenerated],
                backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Stack gap={3}>
            <Typography textAlign="center" variant="h5">
                Monthly Payment: $ {monthlyPayment.toFixed(2)}
            </Typography>
            <Stack direction="row" justifyContent="center">
                <div>
                    <Pie data={pieChartData} />
                </div>
            </Stack>
        </Stack>
    );
};

export default Result;
