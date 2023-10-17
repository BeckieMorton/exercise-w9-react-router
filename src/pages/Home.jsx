// - This component displays a list of the "Rolling Stones 500 Greatest Songs of all Time".
// - Songs data is imported from a JSON file and is mapped to display each song with a link.
// - The link for each song is dynamically generated based on the song's title. This will be crucial when setting up dynamic routes.

// TODO: Import necessary modules and data
import songs from "../data/songs.json";
import { Link } from "react-router-dom";
import SongInfo from "./SongInfo";

function Home() {
  // TODO: Implement logic to display the list of songs

  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        {songs.songs.map((song) => (
          <Link to={`/song/${song.title}`} key={song.rank}>
            <p>{song.title}</p>
            {/* <SongInfo
              name={songs.title}
              artist={songs.artist}
              rank={songs.rank}
              album={songs.album}
              year={songs.year}
            /> */}
          </Link>
        ))}
      </div>
    </>
  );

  // {burgers.map((burger) => (
  //   <Link to={`/burgers/${burger.slug}`} key={burger.name}>
  //     <Burger name={burger.name} image={burger.image} />
  //   </Link>
}

export default Home;
