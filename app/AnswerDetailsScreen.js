import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AnswerDetailScreen = ({ answerNumber, goBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Answer {answerNumber} Details</Text>
    <Text style={styles.text}>Here is some detailed information about answer {answerNumber}.</Text>
    <TouchableOpacity style={styles.button} onPress={goBack}>
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
