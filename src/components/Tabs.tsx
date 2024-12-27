import React from 'react';
import { Settings, Key } from 'lucide-react';

interface TabsProps {
  activeTab: 'generate' | 'settings';
  onTabChange: (tab: 'generate' | 'settings') => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => (
  <div className="flex mb-8 bg-black/20 rounded-xl p-1.5 backdrop-blur-sm border border-white/10">
    {[
      { id: 'generate', label: 'Generate', icon: Key },
      { id: 'settings', label: 'Settings', icon: Settings }
    ].map(({ id, label, icon: Icon }) => (
      <button
        key={id}
        onClick={() => onTabChange(id as 'generate' | 'settings')}
        className={`
          flex-1 py-3 px-6 rounded-lg transition-all duration-300
          flex items-center justify-center space-x-2
          font-medium text-lg
          ${activeTab === id
            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
            : 'hover:bg-white/5 text-white/60 hover:text-white/90'
          }
        `}
      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </button>
    ))}
  </div>
);