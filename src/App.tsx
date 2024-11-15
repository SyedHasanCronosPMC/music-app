import React, { useState } from 'react';
import PlaybackControls from './components/PlaybackControls';
import Display from './components/Display';
import Equalizer from './components/Equalizer';
import Playlist from './components/Playlist';

const DEMO_TRACKS = [
  { id: 1, title: "Smells Like Teen Spirit", artist: "Nirvana", duration: "5:01" },
  { id: 2, title: "Black Hole Sun", artist: "Soundgarden", duration: "5:18" },
  { id: 3, title: "Wonderwall", artist: "Oasis", duration: "4:18" },
  { id: 4, title: "Buddy Holly", artist: "Weezer", duration: "2:39" },
  { id: 5, title: "1979", artist: "The Smashing Pumpkins", duration: "4:26" },
];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [balance, setBalance] = useState(0);
  const [currentTrackId, setCurrentTrackId] = useState(1);
  const [equalizerValues, setEqualizerValues] = useState(Array(10).fill(0));
  const [preamp, setPreamp] = useState(0);

  const currentTrack = {
    title: DEMO_TRACKS.find(t => t.id === currentTrackId)?.title || "",
    artist: DEMO_TRACKS.find(t => t.id === currentTrackId)?.artist || "",
    duration: DEMO_TRACKS.find(t => t.id === currentTrackId)?.duration || "",
    bitrate: "320kbps",
    stereo: true
  };

  const handleEqualizerChange = (index: number, value: number) => {
    const newValues = [...equalizerValues];
    newValues[index] = value;
    setEqualizerValues(newValues);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-green-400 font-bold tracking-wide">
            RetroPlayer
            <span className="text-yellow-400 text-xs ml-2">#AllAbout90sLife</span>
          </h1>
        </div>
        
        <div className="space-y-1">
          <PlaybackControls
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            onStop={() => setIsPlaying(false)}
            onNext={() => setCurrentTrackId(curr => Math.min(curr + 1, DEMO_TRACKS.length))}
            onPrevious={() => setCurrentTrackId(curr => Math.max(curr - 1, 1))}
            volume={volume}
            onVolumeChange={setVolume}
            balance={balance}
            onBalanceChange={setBalance}
          />
          
          <Display
            currentTrack={currentTrack}
            currentTime="2:30"
          />
          
          <Equalizer
            values={equalizerValues}
            preamp={preamp}
            onValueChange={handleEqualizerChange}
            onPreampChange={setPreamp}
          />
          
          <Playlist
            tracks={DEMO_TRACKS}
            currentTrackId={currentTrackId}
            onTrackSelect={setCurrentTrackId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;