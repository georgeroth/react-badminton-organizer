export default function Setup({handleInput, playerDataDisplay, numberOfRounds, numberOfCourts, generateMatches}) {
    return (
        <main>
            <h1>
                Setup
            </h1>
            <form onSubmit={generateMatches}>
            <label className="playerslistcontainer">
                <h2>Players' list</h2>
                <textarea value={playerDataDisplay} onChange={handleInput} name="players" type="text" rows="12" placeholder="Player Name 1
Player Name 2
Player Name 3" 
className="playerslist" />
            </label>
            <label className="inline">
                <h2>Number of courts</h2>
                <input onChange={handleInput} value={numberOfCourts} type="number" min="1" max="10" placeholder="1" name="courts"/>
            </label>
            <label className="inline">
                <h2>Number of rounds</h2>
                <input onChange={handleInput} value={numberOfRounds} type="number" min="1" max="20" placeholder="5" name="rounds" />
            </label>
            <input type="submit" value="Let's play!" className="button"/>
            </form>
        </main>
    )
}