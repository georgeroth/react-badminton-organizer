import { useNavigate } from "react-router-dom";

export default function Setup({rounds, playerData, playersPerCourt, numberOfCourts}) {
    const navigate = useNavigate()
    return (
        <main>
            <h1>
                Rounds
            </h1>
                {rounds.length > 0 && (
                    <table className="results-table">

                        <thead>
                            <tr className="table-header">
                                <td className="player"></td>
                                {rounds.map((round, index) => {
                                    return <td key={index}>Round {index+1}</td>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {playerData.map((player, index) => {
                                return (
                                    <tr className="table-content" key={index}>
                                        <td className="player">{player.name}</td>
                                        {rounds.map((round) => {
                                                for (let i = 0; i < playersPerCourt * numberOfCourts; i++) {
                                                    if (round[i].name === player.name) {
                                                        return <td className="match-x">X</td>
                                                    }
                                                }
                                                return <td className="match-x"></td>
                                            }) 
                                        }
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
                {rounds.length === 0 && (
                    <table className="results-table">
                        <div>No player data entered – please head to the Setup page to enter data.</div>
                        <input type="submit" value="Enter players" className="button" onClick={() => {navigate("/")}}/>
                    </table>
                )}

            <div className="spacer"></div>
        </main>
    )
}