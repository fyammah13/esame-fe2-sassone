export const formattaData = (data: string): string => {
  if (!data) return 'N/D';
  const parti = data.split('-');
  if (parti.length !== 3) return data;
  return `${parti[2]}/${parti[1]}/${parti[0]}`;
};
