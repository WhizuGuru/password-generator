import React from 'react';
import { Save, Upload, Lock } from 'lucide-react';
import { Config } from '../types/config';

interface SettingsTabProps {
  config: Config;
  onConfigChange: (config: Config) => void;
  onSave: () => void;
  onLoad: () => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  config,
  onConfigChange,
  onSave,
  onLoad,
}) => (
  <div className="space-y-10 animate-fade-scale">
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-3">
          <label className="text-lg font-medium">
            Password Length
          </label>
          <span className="text-2xl font-mono text-indigo-400 animate-pulse">
            {config.length}
          </span>
        </div>
        <input
          type="range"
          min="8"
          max="32"
          value={config.length}
          onChange={(e) =>
            onConfigChange({ ...config, length: parseInt(e.target.value) })
          }
          className="w-full h-2 bg-black/30 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
      </div>

      <div className="space-y-4">
        {[
          { key: 'useUppercase', label: 'Uppercase Letters (A-Z)' },
          { key: 'useNumbers', label: 'Numbers (0-9)' },
          { key: 'useSpecialChars', label: 'Special Characters (!@#$%)' }
        ].map(({ key, label }, index) => (
          <label
            key={key}
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10 cursor-pointer hover:from-white/10 transition-colors group animate-slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <input
              type="checkbox"
              checked={config[key as keyof Config]}
              onChange={(e) =>
                onConfigChange({ ...config, [key]: e.target.checked })
              }
              className="w-5 h-5 rounded accent-indigo-500"
            />
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity group-hover:rotate-12 transform duration-300" />
              <span className="text-lg">{label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 pt-4">
      <button
        onClick={onSave}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group hover:scale-[1.02] active:scale-95"
      >
        <Save className="w-5 h-5 group-hover:scale-110 transition-transform group-hover:rotate-12" />
        <span className="font-medium">Save Settings</span>
      </button>
      <button
        onClick={onLoad}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group hover:scale-[1.02] active:scale-95"
      >
        <Upload className="w-5 h-5 group-hover:scale-110 transition-transform group-hover:-translate-y-1" />
        <span className="font-medium">Load Settings</span>
      </button>
    </div>
  </div>
);