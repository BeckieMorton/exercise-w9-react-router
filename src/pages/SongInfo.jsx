// - This component is responsible for displaying detailed information about a specific song.
// - It uses the `useParams` hook from `react-router-dom` to fetch the song title from the URL.
// - Based on the song title from the URL, it finds the corresponding song from the imported JSON data.
// - If the song is found, it displays its title, artist, album, and year. If not, it displays a "Song not found!" message.

// TODO: Import necessary modules and data
import songs from "../data/songs.json";
import { useParams } from "react-router-dom";

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)

  const { songTitle } = useParams();
  const songMatch = songs.songs.find((p) => p.title === songTitle);

  console.log(songMatch);

  return (
    <div>
      <h1> Song information</h1>
      <p>Title: {songMatch.title}</p>
      <p>Artist: {songMatch.artist}</p>
      <p>Rank: {songMatch.rank}</p>
      <p>Album: {songMatch.album}</p>
      <p>Year: {songMatch.year}</p>
    </div>
  );

  return (
    <>
      <div>
        <h2>Song Information</h2>
        <p>rank is: {songs.rank}</p>
        {/* TODO: Display song details or a "Song not found!" message */}
        {songs.songs.map((song) => (
          <p>{song.title}</p>
        ))}
      </div>
    </>
  );
}

export default SongInfo;
