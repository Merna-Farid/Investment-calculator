import {calculateInvestmentResults} from '../util/investment'
import {formatter} from '../util/investment'
export default function Results({input}){
    const results=calculateInvestmentResults(input)
    const initialInvestment=results[0].valueEndOfYear-results[0].interest-results[0].annualInvestment
    return (
        <>
            <table id="result">
                
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest </th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((year)=>{
                    const totalInterest=
                    year.valueEndOfYear-year.annualInvestment*year.year-initialInvestment
                    const totalAmountInvested=year.valueEndOfYear-totalInterest
                    return <tr key={year.year}>
                        <td>{year.year}</td>
                        <td>{formatter.format(year.valueEndOfYear)}</td>
                        <td>{formatter.format(year.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>

            </table>
        </>
    )
}