import React, { useState } from 'react'

const Music = () => {
  const [music, setMusic] = useState([
    {artist: "eiffel 65", song: "blue"},
    {artist: "bombay bicycle club", song: "luna"},
    {artist: "darude", song:"sandstorm"}
  ])
  return (
    <div>
      {music.map((tune, index) => {
        return <Song key={index} artist={tune.artist} song={tune.song} />
      })}
    </div>
  )
};

const Song = ({ artist, song }) => {
    return (
        <div>
            <h2>{artist}</h2>
            <h3>{song}</h3>
        </div>
    )
}

export default Music;
