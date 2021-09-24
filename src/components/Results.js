export default function Results() {

    function handleReset(){
            // reset
    }


      const total = 55

    return(
        <div className="results">
            <div className= "tipAmount">
                <div>
                    <h3>Tip Amount</h3>
                    <p>/person</p>
                </div>
                <h2>$4.27</h2>
            </div>
            <div className= "total">
                <div>
                    <h3>Total</h3>
                </div>
                <h2>{total}</h2>
            </div>
            <button 
            className="reset"
            onClick={handleReset}>
            
            RESET</button>
        </div>
    )
}