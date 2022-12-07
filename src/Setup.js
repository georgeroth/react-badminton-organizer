export default function Setup() {
    return (
        <main>
            <h1>
                Setup
            </h1>
            <form>
            <label>
                <h2>Players' list</h2>
                <textarea type="text" rows="12" placeholder="Player Name 1
Player Name 2
Player Name 3" 
className="playerslist" />
            </label>
            <label className="inline">
                <h2>Number of courts</h2>
                <input type="number" min="1" max="10" placeholder="2" />
            </label>
            <label className="inline">
                <h2>Number of rounds</h2>
                <input type="number" min="1" max="20" placeholder="10" />
            </label>
            <input type="submit" value="Let's play!" className="button"/>
            </form>
        </main>
    )
}