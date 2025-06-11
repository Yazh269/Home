import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AnswerDetailScreen from './AnswerDetailsScreen';
import HomePage from './home';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | number>('home');

  const navigateToAnswerDetail = (answerNumber: number) => {
    setCurrentPage(answerNumber);
  };

  const goBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/1200x/02/5a/dc/025adcc435163fd746ab34f91b72a3df.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          {currentPage !== 'home' && (
            <TouchableOpacity onPress={goBackToHome} style={styles.backButton}>
              <Text style={styles.headerText}>← Back</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.headerText}>
            {currentPage === 'home' ? 'Explore' : `Answer ${currentPage}`}
          </Text>
        </View>
        <View style={styles.content}>
          {currentPage === 'home' ? (
            <HomePage onAnswerPress={navigateToAnswerDetail} />
          ) : (
            <AnswerDetailScreen
              answerNumber={currentPage as number}
              goBack={goBackToHome}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(18,18,18,0.85)' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ffffff22',
    backgroundColor: '#181818cc',
  },
  backButton: { marginRight: 12, padding: 6 },
  headerText: { color: '#fff', fontSize: 20, fontWeight: '700', letterSpacing: 1 },
  content: { flex: 1 },
});
export default App;