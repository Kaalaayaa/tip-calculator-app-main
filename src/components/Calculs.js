import { useState } from 'react'

export default function Calculs() {

    const [bill, setBill] = useState("")
    const [people, setPeople] = useState("")

    return(
        <div className="calculs">
            <div className="bill">
                <h3>Bill</h3>
                <input 
                type="number" 
                value={bill} 
                onChange={e => setBill(e.target.value)}/>
            </div>
            <div className="selectTip">
                <h3>Select Tip %</h3>
                <div className="tipButtons">
                    <button className="pourcent">5%</button>
                    <button className="pourcent">10%</button>
                    <button className="pourcent">15%</button>
                    <button className="pourcent">25%</button>
                    <button className="pourcent">50%</button>
                    <button className="custom">Custom</button>
                </div>
            </div>
            <div className="people">
                <h3>Number of People</h3>
                <input 
                type="number" 
                value={people} 
                onChange={e => setPeople(e.target.value)}/>
            </div>
        </div>
    )
}