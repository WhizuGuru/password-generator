import { Config } from '../types/config';

export const saveConfig = (config: Config): void => {
  localStorage.setItem('passwordConfig', JSON.stringify(config));
};

export const loadConfig = (): Config | null => {
  const saved = localStorage.getItem('passwordConfig');
  return saved ? JSON.parse(saved) : null;
};