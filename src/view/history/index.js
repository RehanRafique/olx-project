import "./index.css"
function History() {
    let array = JSON.parse(localStorage.getItem('allarry')) ?? []
    console.log("arry", array)
    return (
        <div className="history">
            <h1>HISTORY</h1><br></br>
            <div className="his"> 
                       {array.map(item => {

                return (
                    <p>{item}<br/></p>
                )
            }
            )}
            </div>

        </div>
    )
}

export default History;