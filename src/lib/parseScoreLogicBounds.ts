export function parseScoreLogicBounds(text: string): {
  whyNotLower: string | null;
  whyNotHigher: string | null;
} {
  const lowerMatch = text.match(/Почему не ниже:\s*/i);
  const higherMatch = text.match(/Почему не выше:\s*/i);

  if (!lowerMatch || !higherMatch) {
    return { whyNotLower: null, whyNotHigher: null };
  }

  const lowerStart = lowerMatch.index! + lowerMatch[0].length;
  const higherStart = higherMatch.index! + higherMatch[0].length;

  const whyNotLower = text.slice(lowerStart, higherMatch.index!).trim().replace(/\.\s*$/, '');
  const whyNotHigher = text.slice(higherStart).trim().replace(/\.\s*$/, '');

  return { whyNotLower, whyNotHigher };
}
