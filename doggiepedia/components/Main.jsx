import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import Screen from "./Screen";
import BreedCard from "./BreedCard";
import { Stack } from "expo-router";
import { getAllBreeds } from "../lib/doggiePedia";

export default function Main() {
  const [breeds, setBreeds] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadBreeds = async (pageNumber) => {
    setLoading(true);
    const newBreeds = await getAllBreeds(pageNumber);
    setLoading(false);

    if (newBreeds.length > 0) {
      setBreeds((prevBreeds) => [...prevBreeds, ...newBreeds]);
      setPage(pageNumber);
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    loadBreeds(page);
  }, []);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      loadBreeds(page + 1);
    }
  };

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerTitle: "DoggiePedia",
        }}
      />
      <FlatList
        data={breeds}
        keyExtractor={(item) => item.path}
        renderItem={({ item }) => <BreedCard breed={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5} // Triggers `onEndReached` when 50% from the end
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#fff" /> : null
        }
      />
    </Screen>
  );
}
