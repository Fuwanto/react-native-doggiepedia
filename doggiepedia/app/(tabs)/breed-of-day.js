import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Screen from "../../components/Screen";
import BreedCard from "../../components/BreedCard";
import { getBreedOfTheDay } from "../../lib/doggiePedia";

export default function BreedOfDay() {
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    getBreedOfTheDay().then(setBreed);
  }, []);

  if (!breed) {
    return <Loader />;
  }

  return (
    <Screen>
      <BreedCard breed={breed} />
    </Screen>
  );
}
