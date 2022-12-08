export default function Setup({rounds, playerData}) {
    let playerPlays = false
    return (
        <main>
            <h1>
                Rounds
            </h1>
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
                                {rounds.map((round, index) => {
                                    round.map(roundPlayer => {
                                        if (roundPlayer.name === player.name) {
                                            return playerPlays = true 
                                        }
                                        return playerPlays = false
                                    })
                                    return (
                                        <td className="match-x">{playerPlays && (<span>X</span>)}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    {/* <tr className="table-content">
                        <td className="player">Hardcoded Player</td>
                        <td className="match-x">X</td>
                        <td className="match-x">X</td>
                        <td className="match-x"></td>
                        <td className="match-x">X</td>
                        <td className="match-x">X</td>
                        <td className="match-x"></td>
                    </tr> */}
                </tbody>
            </table>
            <div className="spacer"></div>
        </main>
    )
}