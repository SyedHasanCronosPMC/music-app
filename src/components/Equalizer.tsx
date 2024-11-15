import React from 'react';

const FREQUENCIES = [
  '70Hz', '180Hz', '320Hz', '600Hz', '1kHz',
  '3kHz', '6kHz', '12kHz', '14kHz', '16kHz'
];

interface EqualizerProps {
  values: number[];
  preamp: number;
  onValueChange: (index: number, value: number) => void;
  onPreampChange: (value: number) => void;
}

export default function Equalizer({
  values,
  preamp,
  onValueChange,
  onPreampChange
}: EqualizerProps) {
  return (
    <div className="bg-gray-900 p-3 border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-400 text-xs">Preamp</span>
        <input
          type="range"
          min="-12"
          max="12"
          value={preamp}
          onChange={(e) => onPreampChange(Number(e.target.value))}
          className="w-24 h-2 accent-green-400"
        />
        <span className="text-yellow-400 text-xs">{preamp}dB</span>
      </div>
      <div className="flex justify-between gap-1">
        {FREQUENCIES.map((freq, index) => (
          <div key={freq} className="flex flex-col items-center gap-1">
            <input
              type="range"
              min="-12"
              max="12"
              value={values[index]}
              onChange={(e) => onValueChange(index, Number(e.target.value))}
              className="h-24 w-2 accent-green-400"
              orient="vertical"
            />
            <span className="text-green-400 text-xs rotate-90 mt-6 whitespace-nowrap">
              {freq}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}