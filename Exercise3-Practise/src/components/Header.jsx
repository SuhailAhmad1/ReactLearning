import inv_cal_logo from "../assets/investment-calculator-logo.png" 
export default function Header() {
  return (
    <div id="header">
        <img src={inv_cal_logo} alt="main-logo" />
        <h1>Investment Calculator</h1>
    </div>
  )
}
