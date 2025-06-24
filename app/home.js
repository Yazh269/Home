import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const BOX_SIZE = (width - 60) / 3;

const OPTIONS = [
  { id: 1, label: "Option 1", description: "Details for Option 1" },
  { id: 2, label: "Option 2", description: "Details for Option 2" },
  { id: 3, label: "Option 3", description: "Details for Option 3" },
  { id: 4, label: "Option 4", description: "Details for Option 4" },
  { id: 5, label: "Option 5", description: "Details for Option 5" },
  { id: 6, label: "Option 6", description: "Details for Option 6" }
];

export default function HomePage() {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.Question}>Question</Text>
      <View style={styles.grid}>
        {OPTIONS.map(option => (
          <AnswerBox
            key={option.id}
            option={option}
            expanded={expandedId === option.id}
            selected={selectedId === option.id}
            onExpand={() => setExpandedId(expandedId === option.id ? null : option.id)}
            onSelect={() => {
              setSelectedId(option.id);
              router.push(`/answer/${option.id}`);
            }}
          />
        ))}
      </View>
    </View>
  );
}

function AnswerBox({ option, expanded, selected, onExpand, onSelect }) {
  return (
    <TouchableOpacity
      style={[
        styles.box,
        expanded && styles.boxExpanded,
        selected && styles.boxSelected
      ]}
      onPress={onExpand}
      activeOpacity={0.8}
    >
      <Text style={styles.boxLabel}>{option.label}</Text>
      {expanded && (
        <View style={styles.expandedContent}>
          <Text style={styles.description}>{option.description}</Text>
          <TouchableOpacity
            style={[
              styles.selectButton,
              selected && styles.selectButtonSelected
            ]}
            onPress={e => {
              e.stopPropagation?.();
              onSelect();
            }}
          >
            <Text
              style={[
                styles.selectButtonText,
                selected && { color: "#181818" }
              ]}
            >
              {selected ? "Selected" : "Select"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "center"
  },
  box: {
    width: BOX_SIZE * 1.4,
    height: BOX_SIZE * 1,
    borderWidth: 2,
    borderColor: "#fff",
    margin: 8,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#181818",
    overflow: "hidden"
  },
  Question: {
    color: "#fff",
    fontSize: 30,
    marginTop: 5,
    marginBottom: 50,
    textAlign: "center"
  },
  boxExpanded: {
    height: BOX_SIZE * 2,
    justifyContent: "flex-start",
    borderColor: "#ffa500"
  },
  boxSelected: {
    borderColor: "#ffa500",
    borderWidth: 2
  },
  boxLabel: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8
  },
  expandedContent: {
    marginTop: 16,
    width: "100%",
    alignItems: "center"
  },
  description: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 12,
    textAlign: "center"
  },
  selectButton: {
    borderWidth: 2,
    borderColor: "#ffa500",
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 18,
    backgroundColor: "#181818",
    marginTop: 60
  },
  selectButtonSelected: {
    backgroundColor: "white",
    marginTop: 60
  },
  selectButtonText: {
    color: "#ffa500",
    fontWeight: "bold"
  }
});
