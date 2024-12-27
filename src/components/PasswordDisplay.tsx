import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

export const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative">
        <input
          type="text"
          readOnly
          value={password}
          className="w-full bg-black/40 rounded-lg py-6 px-6 text-2xl font-mono border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 placeholder:text-white/20"
          placeholder="Your secure password will appear here"
        />
        <button
          onClick={handleCopy}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 hover:bg-white/10 rounded-md transition-all duration-300 group/button"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="w-6 h-6 text-green-400" />
          ) : (
            <Copy className="w-6 h-6 text-white/50 group-hover/button:text-white/90" />
          )}
        </button>
      </div>
    </div>
  );
};