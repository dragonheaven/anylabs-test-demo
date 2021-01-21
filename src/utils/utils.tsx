
export function timeStamp(seconds: number) {
  const hours = Math.floor(seconds / 3600).toLocaleString('en', { minimumIntegerDigits: 2 });

  const mins = Math.floor((seconds % 3600) / 60).toLocaleString('en', { minimumIntegerDigits: 2 });

  const secs = (seconds % 60).toLocaleString('en', { minimumIntegerDigits: 2 });

  return `${hours}:${mins}:${secs}`;
}
