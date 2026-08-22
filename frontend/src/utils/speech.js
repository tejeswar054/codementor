/**
 * Web Speech API Utility for Socratic Audio Mentor
 */

let currentUtterance = null;

/**
 * Speak provided text aloud using browser text-to-speech
 * @param {string} text
 * @param {Function} [onEndCallback]
 */
export const speakText = (text, onEndCallback) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis is not supported in this browser.');
    return false;
  }

  // Stop any ongoing speech
  stopSpeech();

  // Clean markdown tags for clear speech
  const cleanText = text
    .replace(/```[\s\S]*?```/g, 'Code block omitted.')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/#/g, '')
    .trim();

  currentUtterance = new SpeechSynthesisUtterance(cleanText);
  currentUtterance.rate = 0.95; // Slightly slower, articulate mentor tone
  currentUtterance.pitch = 1.0;

  if (onEndCallback) {
    currentUtterance.onend = () => {
      currentUtterance = null;
      onEndCallback();
    };
    currentUtterance.onerror = () => {
      currentUtterance = null;
      onEndCallback();
    };
  }

  window.speechSynthesis.speak(currentUtterance);
  return true;
};

/**
 * Stop any active speech synthesis
 */
export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  currentUtterance = null;
};

/**
 * Check if speech synthesis is currently speaking
 * @returns {boolean}
 */
export const isSpeaking = () => {
  if ('speechSynthesis' in window) {
    return window.speechSynthesis.speaking;
  }
  return false;
};
