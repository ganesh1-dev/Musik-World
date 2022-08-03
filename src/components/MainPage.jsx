/** @format */

import { useState } from "react";
import { Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import "../css/MainPage.css";
import { useEffect } from "react";
import CarouselComp from "./Carousel";

const MainPage = ({ searchResults }) => {
  const [music, setMusic] = useState([]);

  const [hipHopMusic, setHipHopMusic] = useState([]);

  const [rockMusic, setRockMusic] = useState([]);
  useEffect(() => {
    fetchCrime();
    fetchHipHop();
    fetchRock();
  }, []);

  const fetchCrime = async () => {
    setMusic([]);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=Schlager",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        const songs = result.data.slice(0, 4);
        setMusic(songs);
      } else {
        console.log("ERROR !!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHipHop = async () => {
    setMusic([]);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=Ilayaraja",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        const songs = result.data.slice(12, 16);
        setHipHopMusic(songs);
      } else {
        console.log("ERROR !!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRock = async () => {
    setMusic([]);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=italian",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        const songs = result.data.slice(12, 16);
        setRockMusic(songs);
      } else {
        console.log("ERROR !!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="all">
      <div id="searchResults">
        {searchResults.length === 0 && (
          <>
            <div className="mb-5">
              <CarouselComp />
            </div>
            <h2 className="text-left mt-4">German</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {music &&
                music.map((song) => <AlbumCard song={song} key={song.id} />)}
            </Row>
          </>
        )}

        {searchResults.length === 0 && (
          <>
            <h2 className="text-left mt-4">Ilayaraja Melodies</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {hipHopMusic &&
                hipHopMusic.map((song) => (
                  <AlbumCard song={song} key={song.id} />
                ))}
            </Row>
          </>
        )}

        {searchResults.length === 0 && (
          <>
            <h2 className="text-left mt-4">Italian</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {rockMusic &&
                rockMusic.map((song) => (
                  <AlbumCard song={song} key={song.id} />
                ))}
            </Row>
          </>
        )}

        {searchResults.length > 0 && (
          <>
            <h2 className="text-center mt-4">Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {searchResults &&
                searchResults.map((song) => (
                  <AlbumCard song={song} key={song.id} />
                ))}
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
