import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const ClassWork2 = () => {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [winner, setWinner] = useState('None')

  const [scores, setScores] = useState({
    player1: 0,
    player2: 0,
    player3: 0,
    player4: 0,
  })

  const [turn, setTurn] = useState(1) // keep track of which player's turn it is (1-4)

  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1

  const handlePress = (player) => {
    if (player !== turn) return // only allow correct player to press

    const number = generateRandomNumber()
    setCurrentNumber(number)

    setScores((prevScores) => ({
      ...prevScores,
      [`player${player}`]: prevScores[`player${player}`] + number,
    }))

    // move to next player's turn
    setTurn(player === 4 ? 1 : player + 1)

    // check winner (example: first to 200 points wins)
    if (scores[`player${player}`] + number >= 200) {
      setWinner(`Player ${player}`)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 4 Player Random Number Game 🎮</Text>
      <Text style={styles.subtitle}>Current Number: {currentNumber}</Text>
      <Text style={styles.subtitle}>Winner: {winner}</Text>

      <View style={styles.scores}>
        <Text>Player 1: {scores.player1}</Text>
        <Text>Player 2: {scores.player2}</Text>
        <Text>Player 3: {scores.player3}</Text>
        <Text>Player 4: {scores.player4}</Text>
      </View>

      <View style={styles.buttons}>
        <Button
          title="Player 1"
          onPress={() => handlePress(1)}
          disabled={turn !== 1 || winner !== 'None'}
        />
        <Button
          title="Player 2"
          onPress={() => handlePress(2)}
          disabled={turn !== 2 || winner !== 'None'}
        />
        <Button
          title="Player 3"
          onPress={() => handlePress(3)}
          disabled={turn !== 3 || winner !== 'None'}
        />
        <Button
          title="Player 4"
          onPress={() => handlePress(4)}
          disabled={turn !== 4 || winner !== 'None'}
        />
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
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  scores: {
    marginVertical: 15,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
})
