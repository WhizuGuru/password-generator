import React from 'react';
import { Shield, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => (
  <div className="flex flex-col items-center justify-center mb-12 text-center animate-slide-in">
    <div className="relative animate-float">
      <div className="absolute -left-6 -top-6 animate-pulse">
        <Shield className="w-8 h-8 text-indigo-400/30" />
      </div>
      <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-6 rounded-2xl mb-6 backdrop-blur-sm border border-indigo-500/30 shadow-xl animate-glow">
        <ShieldCheck className="w-16 h-16 text-indigo-400" />
      </div>
      <div className="absolute -right-6 -bottom-6 animate-pulse delay-150">
        <Shield className="w-8 h-8 text-purple-400/30" />
      </div>
    </div>
    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-glow">
      Password Generator
    </h1>
    <p className="mt-4 text-lg text-white/60">
      Create strong, secure passwords with ease
    </p>
  </div>
);