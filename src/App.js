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
  const [playerDataDisplay, setPlayerDataDisplay] = useState("")
  const [notEnoughPlayers, setNotEnoughPlayers] = useState(false)
  const playersPerCourt = 4
  const navigate = useNavigate()

  // useEffect(() => {
  //     if (playerData.length > 0) {
  //     setPlayerDataDisplay(playerData.join('\n'))
  //   }
  // }, [playerData])


  const handleInput = (event) => {
    if (event.target.name === "players") {
      setPlayerDataDisplay(event.target.value)
      const playersList = event.target.value.split(/\r?\n/)
      setPlayerData(playersList)
      if (playerData.length > playersPerCourt) {
      setNotEnoughPlayers(false)
      }
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
    if (playerData.length < playersPerCourt * numberOfCourts) {
      setNotEnoughPlayers(true)
    } else {
    setNotEnoughPlayers(false)
    const temporaryRounds = []
    let availablePlayers = []
    for (let i = 0; i < numberOfRounds; i++) {
      let temporaryRound = []
      for (let j = 0; j < playersPerCourt * numberOfCourts; j++) {
        console.log("Available players to start with are: ", availablePlayers)
        console.log("What is happening to allPlayers", playerData)
        if (availablePlayers.length === 0) {
          availablePlayers = [...playerData]
          console.log("Available players have been replenished! ", availablePlayers, "playerData is ", playerData)
        }
        const randomIndex = Math.floor(Math.random() * availablePlayers.length);
        const playerToBeAdded = availablePlayers[randomIndex]
        if (temporaryRound.includes(playerToBeAdded)) {
          console.log("Includes player already!")
          --j
          continue
        } else {
          temporaryRound.push(playerToBeAdded)
          availablePlayers.splice(randomIndex, 1)
          console.log("AvailablePlayers after the removal is:", availablePlayers)
        }
        console.log('temporaryRound is:', temporaryRound)
      }
      temporaryRounds.push(temporaryRound)
    }
    setRounds(temporaryRounds)
    navigate("/rounds")
    }
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/rounds"
          element={<Rounds rounds={rounds} playerData={playerData} playersPerCourt={playersPerCourt} numberOfCourts={numberOfCourts} />}
        />
          <Route
          path="/"
          element={<Setup playerDataDisplay={playerDataDisplay} handleInput={handleInput} playerData={playerData} numberOfCourts={numberOfCourts} numberOfRounds={numberOfRounds} generateMatches={generateMatches} />}
        />
      </Routes>
      {notEnoughPlayers && (<div className="error">You don't have enough players for the amount of courts you have. <br></br><strong>Please lower the amount of courts or add more players and then try again.</strong></div>)}
    </div>
  );
}

export default App;
