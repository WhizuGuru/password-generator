import React from 'react';
import { RefreshCw, Zap } from 'lucide-react';
import { PasswordDisplay } from './PasswordDisplay';

interface GenerateTabProps {
  password: string;
  onGenerate: () => void;
  onCopy: () => void;
}

export const GenerateTab: React.FC<GenerateTabProps> = ({
  password,
  onGenerate,
  onCopy,
}) => (
  <div className="space-y-8 animate-fade-scale">
    <PasswordDisplay password={password} onCopy={onCopy} />
    
    <div className="flex flex-col space-y-4">
      <button
        onClick={onGenerate}
        className="relative overflow-hidden group bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-5 px-8 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-95"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Zap className="w-32 h-32 text-white/5 animate-pulse" />
        </div>
        <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
        <span className="font-medium text-lg">Generate Strong Password</span>
      </button>
      
      {password && (
        <p className="text-center text-white/40 text-sm animate-fade-scale">
          Click the copy icon to save your password to clipboard
        </p>
      )}
    </div>
  </div>
);