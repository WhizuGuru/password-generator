export const generatePassword = (config: {
  length: number;
  useUppercase: boolean;
  useNumbers: boolean;
  useSpecialChars: boolean;
}): string => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let chars = lowercase;
  if (config.useUppercase) chars += uppercase;
  if (config.useNumbers) chars += numbers;
  if (config.useSpecialChars) chars += special;

  return Array.from({ length: config.length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('');
};