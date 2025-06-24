import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function AnswerDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/e5/4b/2b/e54b2bcc6d154e2cfd39c9051d947734.jpg"
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={{ color: "#fff", fontSize: 18 }}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Answer {id} Details</Text>
        <Text style={styles.text}>
          Here is some detailed information about answer {id}.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(18,18,18,0.85)",
    justifyContent: "center",
    alignItems: "center"
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: 60,
    marginLeft: 16,
    marginBottom: 20
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 32
  }
});
