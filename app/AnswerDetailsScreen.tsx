import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AnswerDetailScreenProps {
  answerNumber: number;
  goBack: () => void;
}

const AnswerDetailScreen: React.FC<AnswerDetailScreenProps> = ({ answerNumber, goBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Answer {answerNumber} </Text> <Text style={styles.title}> Details</Text>
    <Text style={styles.text}>Here is some detailed information about answer {answerNumber}.</Text>
    <TouchableOpacity onPress={goBack} style={styles.button}>
      <Text style={styles.buttonText}>Go Back</Text>
    </TouchableOpacity>
  </View>
);

export default AnswerDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { color: '#fff', fontSize: 16, marginBottom: 32 },
  button: { backgroundColor: '#4A90E2', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
