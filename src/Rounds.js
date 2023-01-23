import { useNavigate } from "react-router-dom";

export default function Setup({rounds, playerData, playersPerCourt, numberOfCourts}) {
    const navigate = useNavigate()
    return (
        <main>
            <h1>
                Rounds
            </h1>
                {playerData.length > 0 && (
                    <table className="results-table">
                        <thead>
                            <tr className="table-header">
                                <td className="player horizontal-write-direction">Players List</td>
                                {rounds.map((round, index) => {
                                    return <td key={index}>Round {index+1}</td>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {playerData.map((player, index) => {
                                return (
                                    <tr className="table-content" key={index}>
                                        <td className="player">{player}</td>
                                        {rounds.map((round, roundIndex) => {
                                                for (let i = 0; i < playersPerCourt * numberOfCourts; i++) {
                                                    if (round[i] === player) {
                                                        return <td className="match-x" key={roundIndex}>X</td>
                                                    }
                                                }
                                                return <td className="match-x" key={roundIndex}></td>
                                            }) 
                                        }
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
                {playerData.length === 0 && (
                    <main className="nodata-message">          
                        <div>No player data entered – please head to the Setup page to enter players.</div>
                        <input type="submit" value="Enter players" className="button" onClick={() => {navigate("/")}}/>
                    </main>
                )}

            <div className="spacer"></div>
        </main>
    )
}