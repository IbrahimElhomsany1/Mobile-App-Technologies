import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ClassWork2 = () => {
  const [numbers, setNumbers] = useState({
    player1: null,
    player2: null,
    player3: null,
    player4: null,
  })

  const [scores, setScores] = useState({
    player1: 0,
    player2: 0,
    player3: 0,
    player4: 0,
  })

  const [turn, setTurn] = useState(1) // current player's turn
  const [roundWinner, setRoundWinner] = useState(null) // highlight winner

  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1

  const handlePress = (player) => {
    if (player !== turn) return // only allow correct turn

    const number = generateRandomNumber()

    setNumbers((prev) => {
      const updated = {
        ...prev,
        [`player${player}`]: number,
      }

      // If last player played → check winner automatically
      if (player === 4) {
        checkRoundWinner(updated)
      } else {
        setTurn(player + 1)
      }

      return updated
    })
  }

  const checkRoundWinner = (roundNumbers) => {
    const maxNumber = Math.max(...Object.values(roundNumbers))
    const winner = Object.keys(roundNumbers).find(
      (player) => roundNumbers[player] === maxNumber
    )

    setScores((prev) => ({
      ...prev,
      [winner]: prev[winner] + 1,
    }))

    setRoundWinner(winner)

    // Reset for next round after 2 seconds (so numbers are visible)
    setTimeout(() => {
      setNumbers({
        player1: null,
        player2: null,
        player3: null,
        player4: null,
      })
      setRoundWinner(null)
      setTurn(1) // restart with player 1
    }, 2000)
  }

  return (
    <View style={styles.container}>
      {/* Player buttons */}
      <TouchableOpacity
        style={[styles.playerButton, styles.top]}
        onPress={() => handlePress(1)}
        disabled={turn !== 1 || roundWinner}
      >
        <Text style={styles.btnText}>Player 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.playerButton, styles.right]}
        onPress={() => handlePress(2)}
        disabled={turn !== 2 || roundWinner}
      >
        <Text style={styles.btnText}>Player 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.playerButton, styles.bottom]}
        onPress={() => handlePress(3)}
        disabled={turn !== 3 || roundWinner}
      >
        <Text style={styles.btnText}>Player 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.playerButton, styles.left]}
        onPress={() => handlePress(4)}
        disabled={turn !== 4 || roundWinner}
      >
        <Text style={styles.btnText}>Player 4</Text>
      </TouchableOpacity>

      {/* Number boxes */}
      <View style={styles.boxContainer}>
        {Object.entries(numbers).map(([player, number]) => (
          <View
            key={player}
            style={[
              styles.box,
              roundWinner === player ? styles.winnerBox : null,
            ]}
          >
            <Text style={styles.boxText}>
              {player}: {number !== null ? number : '-'}
            </Text>
          </View>
        ))}
      </View>

      {/* Show scores */}
      <View style={styles.scoreContainer}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Scores</Text>
        {Object.entries(scores).map(([player, score]) => (
          <Text key={player} style={{ fontSize: 16 }}>
            {player}: {score}
          </Text>
        ))}
      </View>
    </View>
  )
}

export default ClassWork2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Player button styles
  playerButton: {
    position: 'absolute',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  top: { top: 40, alignSelf: 'center' },
  right: { right: 20, top: '45%' },
  bottom: { bottom: 40, alignSelf: 'center' },
  left: { left: 20, top: '45%' },

  // Boxes for numbers
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    flexWrap: 'wrap',
    gap: 10,
  },
  box: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  winnerBox: {
    borderColor: 'gold',
    borderWidth: 3,
    backgroundColor: '#fffae6',
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Scores
  scoreContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
})


