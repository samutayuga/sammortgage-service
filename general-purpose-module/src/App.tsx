import './App.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NavBar from './components/NavBar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useState } from 'react';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import HVSlider from './components/HVSlider';
import LADPAmountSlider from './components/LoanAmountSlider';
import { MortgageModel } from './model';

function App() {
  const [mortgage, setMortgage] = useState<MortgageModel>({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  })

  return (
    <div className='App'>
      <NavBar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <HVSlider mortgage={mortgage} setMortgage={setMortgage} />
            <LADPAmountSlider mortgage={mortgage} setMortgage={setMortgage}/>
            <TenureSelect mortgage={mortgage} setMortgage={setMortgage} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result homeValue={mortgage.homeValue} loanAmount={mortgage.loanAmount} loanTerm={mortgage.loanTerm} interestRate={mortgage.interestRate} downPayment={mortgage.downPayment} />
          </Grid>
        </Grid>


      </Container>

    </div>
  )
}

export default App
