import React from 'react';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => (
  <div className="mt-8 text-center text-white/60">
    <a
      href="https://github.com/WhizuGuru"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 hover:text-white transition-colors group"
    >
      <Github className="w-5 h-5 group-hover:text-indigo-400 transition-colors" />
      <span>Created by WhizuGuru</span>
    </a>
  </div>
);