import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Square, Volume2 } from 'lucide-react';

interface PlaybackControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onStop: () => void;
  onNext: () => void;
  onPrevious: () => void;
  volume: number;
  onVolumeChange: (value: number) => void;
  balance: number;
  onBalanceChange: (value: number) => void;
}

export default function PlaybackControls({
  isPlaying,
  onPlayPause,
  onStop,
  onNext,
  onPrevious,
  volume,
  onVolumeChange,
  balance,
  onBalanceChange
}: PlaybackControlsProps) {
  return (
    <div className="bg-gray-900 p-2 rounded-t-lg border border-gray-700">
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={onPrevious}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
        >
          <SkipBack className="w-4 h-4 text-green-400" />
        </button>
        <button
          onClick={onPlayPause}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-green-400" />
          ) : (
            <Play className="w-4 h-4 text-green-400" />
          )}
        </button>
        <button
          onClick={onStop}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
        >
          <Square className="w-4 h-4 text-green-400" />
        </button>
        <button
          onClick={onNext}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
        >
          <SkipForward className="w-4 h-4 text-green-400" />
        </button>
        <div className="flex items-center gap-2 ml-4">
          <Volume2 className="w-4 h-4 text-green-400" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            className="w-20 h-2 accent-green-400"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-green-400">
        <span>L</span>
        <input
          type="range"
          min="-100"
          max="100"
          value={balance}
          onChange={(e) => onBalanceChange(Number(e.target.value))}
          className="w-full h-1 accent-green-400"
        />
        <span>R</span>
      </div>
    </div>
  );
}