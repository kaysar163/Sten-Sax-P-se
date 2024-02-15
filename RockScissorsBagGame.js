import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RockScissorsBagGame = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['Rock', 'Scissors', 'Bag'];

  const handleUserChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(computerChoice);

    // Determine the result
    if (choice === computerChoice) {
      setResult('It\'s a tie!');
    } else if (
      (choice === 'Rock' && computerChoice === 'Scissors') ||
      (choice === 'Scissors' && computerChoice === 'Bag') ||
      (choice === 'Bag' && computerChoice === 'Rock')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock, Scissors, Bag</Text>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <Button
            key={choice}
            title={choice}
            onPress={() => handleUserChoice(choice)}
          />
        ))}
      </View>
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your Choice: {userChoice}</Text>
          <Text style={styles.resultText}>Computer's Choice: {computerChoice}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default RockScissorsBagGame;