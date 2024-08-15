import { useEffect, useState } from "react";

import { getAllBreeds } from "../lib/doggiePedia";
import Screen from "./Screen";
import { ActivityIndicator, FlatList, Text } from "react-native";

export default function Main() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getAllBreeds().then((data) => {
      setBreeds(data);
    });
  }, []);

  return (
    <Screen>
      {breeds.length === 0 ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={breeds}
          keyExtractor={(item) => item.path}
          renderItem={({ item }) => <Text color="#fff">{item.name}</Text>}
        />
      )}
    </Screen>
  );
}
