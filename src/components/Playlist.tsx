import React from 'react';
import { GripVertical } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

interface PlaylistProps {
  tracks: Track[];
  currentTrackId: number;
  onTrackSelect: (id: number) => void;
}

export default function Playlist({ tracks, currentTrackId, onTrackSelect }: PlaylistProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 h-64 overflow-y-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-800 sticky top-0">
          <tr className="text-green-400">
            <th className="w-8 p-1"></th>
            <th className="text-left p-1">Title</th>
            <th className="text-left p-1">Artist</th>
            <th className="text-right p-1">Duration</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr
              key={track.id}
              className={`
                hover:bg-gray-800 cursor-pointer
                ${currentTrackId === track.id ? 'bg-gray-800' : ''}
              `}
              onClick={() => onTrackSelect(track.id)}
            >
              <td className="p-1">
                <GripVertical className="w-4 h-4 text-gray-600" />
              </td>
              <td className="p-1 text-yellow-400">{track.title}</td>
              <td className="p-1 text-green-400">{track.artist}</td>
              <td className="p-1 text-green-400 text-right">{track.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}