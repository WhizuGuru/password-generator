import React, { useState, useCallback } from 'react';
import { Config, defaultConfig } from './types/config';
import { generatePassword } from './utils/password';
import { saveConfig, loadConfig } from './utils/storage';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { GenerateTab } from './components/GenerateTab';
import { SettingsTab } from './components/SettingsTab';
import { Footer } from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState<'generate' | 'settings'>('generate');
  const [config, setConfig] = useState<Config>(defaultConfig);
  const [password, setPassword] = useState('');

  const handleGeneratePassword = useCallback(() => {
    setPassword(generatePassword(config));
  }, [config]);

  const handleCopyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
    }
  };

  const handleSaveConfig = () => {
    saveConfig(config);
  };

  const handleLoadConfig = () => {
    const savedConfig = loadConfig();
    if (savedConfig) {
      setConfig(savedConfig);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20">
          <Header />
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="bg-black/30 rounded-xl p-8 shadow-xl backdrop-blur-sm border border-white/10">
            {activeTab === 'generate' ? (
              <GenerateTab
                password={password}
                onGenerate={handleGeneratePassword}
                onCopy={handleCopyToClipboard}
              />
            ) : (
              <SettingsTab
                config={config}
                onConfigChange={setConfig}
                onSave={handleSaveConfig}
                onLoad={handleLoadConfig}
              />
            )}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;