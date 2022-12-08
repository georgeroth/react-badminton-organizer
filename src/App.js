import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Rounds from './Rounds'
import Setup from './Setup'
import Header from './Header'
import { useState, useEffect } from 'react'


function App() {
  const [playerData, setPlayerData] = useState([])
  const [numberOfCourts, setNumberofCourts] = useState(1)
  const [numberOfRounds, setNumberofRounds] = useState(1)
  const [rounds, setRounds] = useState([])
  let playerDataDisplay = []
  const playersPerCourt = 4
  const navigate = useNavigate()

  // useEffect(() => {
  //   playerDataDisplay = playerData.split(',').join('\n')
  // }, [playerData])

  const handleInput = (event) => {
    if (event.target.name === "players") {
      console.log("in the if")
      const playersList = event.target.value.split(/\r?\n/)
      console.log("playersList is:", playersList)
      const incomingPlayersData = []
      playersList.forEach(player => {
        const newPlayerObject = {name: player, chanceToBePicked: 1}
        console.log("newPlayerObject is:", newPlayerObject)
        incomingPlayersData.push(newPlayerObject)
      })
      setPlayerData(incomingPlayersData)
    }
    if (event.target.name === "courts") {
      setNumberofCourts(event.target.value)
    }
    if (event.target.name === "rounds") {
      setNumberofRounds(event.target.value)
    }
  }

  const generateMatches = (event) => {
    event.preventDefault()
    console.log("Generating matches with the following data:")
    console.log("playerData is:", playerData)
    console.log("numberOfCourts is:", numberOfCourts)
    console.log("numberOfRounds is:", numberOfRounds)
    const temporaryRounds = []
    for (let i = 0; i < numberOfRounds; i++) {
      const shuffledPlayers = playerData.sort((playerObject) => playerObject.chanceToBePicked * 0.5 - Math.random());
      let oneRound = shuffledPlayers.slice(0, playersPerCourt * numberOfCourts);
      temporaryRounds.push(oneRound)
      oneRound.forEach(playerWhoPlays => {
        const updatedPlayerState = playerData.map(playerInState => {
          if (playerWhoPlays.name === playerInState.name) {
            console.log("The following is returned in the if: ", {...playerInState, chanceToBePicked: playerWhoPlays.chanceToBePicked - 0.1 })
            return {...playerInState, chanceToBePicked: playerInState.chanceToBePicked - 0.1 }
          } 
          return playerInState
        })
        console.log("updatedPlayerState is:", updatedPlayerState)
        setPlayerData(updatedPlayerState)
      })
      setRounds(temporaryRounds)
      console.log("rounds is:", rounds)
    }
    navigate("/rounds")
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/rounds"
          element={<Rounds rounds={rounds} playerData={playerData} />}
        />
          <Route
          path="/setup"
          element={<Setup playerDataDisplay={playerDataDisplay} handleInput={handleInput} playerData={playerData} numberOfCourts={numberOfCourts} numberOfRounds={numberOfRounds} generateMatches={generateMatches} />}
        />
          <Route
          path="/"
          element={<Setup handleInput={handleInput} playerData={playerData} numberOfCourts={numberOfCourts} numberOfRounds={numberOfRounds} generateMatches={generateMatches} />}
        />
      </Routes>
    </div>
  );
}

export default App;
