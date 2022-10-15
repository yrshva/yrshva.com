import React, { useEffect, useRef } from "react";
import MainPage from "./HomePage/MainPage";
import WeatherApp from "./HomePage/WeatherApp";
import DictionaryApp from "./HomePage/DictionaryApp";
import CollectionServices from "./HomePage/CollectionServices";
import MobileDictionary from "./HomePage/MobileDictionary";
import "../../styles/home.css";
import TournamentApp from "./HomePage/TournamentApp";
import ApplicationsApp from "./HomePage/ApplicationsApp";

const Home = () => {
  const weatherApp = useRef<HTMLDivElement | null>(null);
  const dictionaryApp = useRef<HTMLDivElement | null>(null);
  const mobileDictionary = useRef<HTMLDivElement | null>(null);
  const tournamentApp = useRef<HTMLDivElement | null>(null);
  const applicationApp = useRef<HTMLDivElement | null>(null);
  const collectionServices = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainPage projects={weatherApp} />
      <WeatherApp current={weatherApp} next={dictionaryApp} />
      <DictionaryApp
        previous={weatherApp}
        current={dictionaryApp}
        next={mobileDictionary}
      />
      <MobileDictionary
        previous={dictionaryApp}
        current={mobileDictionary}
        next={tournamentApp}
      />
      <TournamentApp
        previous={mobileDictionary}
        current={tournamentApp}
        next={applicationApp}
      />
      <ApplicationsApp
        previous={tournamentApp}
        current={applicationApp}
        next={collectionServices}
      />
      <CollectionServices
        previous={applicationApp}
        current={collectionServices}
        next={weatherApp}
      />
    </>
  );
};
export default Home;
