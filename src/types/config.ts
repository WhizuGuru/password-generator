export interface Config {
  length: number;
  useUppercase: boolean;
  useNumbers: boolean;
  useSpecialChars: boolean;
}

export const defaultConfig: Config = {
  length: 12,
  useUppercase: true,
  useNumbers: true,
  useSpecialChars: true,
};