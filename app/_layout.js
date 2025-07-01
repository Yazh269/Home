import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AnswerDetailScreen from './AnswerDetailsScreen';
import HomePage from './home';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToAnswerDetail = (answerNumber) => {
    setCurrentPage(answerNumber);
  };

  const goBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/e5/4b/2b/e54b2bcc6d154e2cfd39c9051d947734.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {currentPage !== 'home' && (
          <TouchableOpacity style={styles.backButton} onPress={goBackToHome}>
            <Text style={{ color: '#fff', fontSize: 18 }}>← Back</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.headerText}>
          {currentPage === 'home' ? 'Explore' : `Answer ${currentPage}`}
        </Text>

        <View style={styles.content}>
          {currentPage === 'home' ? (
            <HomePage onAnswerPress={navigateToAnswerDetail} />
          ) : (
            <AnswerDetailScreen answerNumber={currentPage} goBack={goBackToHome} />
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { 
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(18,18,18,0.85)' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ffffff22',
    backgroundColor: '#181818cc',
  },
  backButton: { 
    marginRight: 12, 
    padding: 6,
    marginTop: 40,
    marginLeft: 16
  },
  headerText: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: '700', 
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  content: { flex: 1 },
});
