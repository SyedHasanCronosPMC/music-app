import React from 'react';

interface DisplayProps {
  currentTrack: {
    title: string;
    artist: string;
    duration: string;
    bitrate: string;
    stereo: boolean;
  };
  currentTime: string;
}

export default function Display({ currentTrack, currentTime }: DisplayProps) {
  return (
    <div className="bg-black p-2 border border-gray-700 font-mono text-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="text-yellow-400">{currentTrack.title}</span>
        <span className="text-green-400">{currentTime}</span>
      </div>
      <div className="flex justify-between text-xs">
        <span className="text-green-400">{currentTrack.artist}</span>
        <div className="flex gap-2">
          <span className="text-yellow-400">{currentTrack.bitrate}</span>
          <span className="text-green-400">{currentTrack.stereo ? 'Stereo' : 'Mono'}</span>
        </div>
      </div>
    </div>
  );
}