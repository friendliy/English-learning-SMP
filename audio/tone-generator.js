// Fallback audio menggunakan Web Audio API untuk generate simple tones
// Ini akan digunakan sebagai placeholder sampai file audio asli di-upload

function generateToneAudio(word, frequency = 440) {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const duration = 1.0; // 1 second
  const sampleRate = audioContext.sampleRate;
  const numSamples = duration * sampleRate;
  
  // Create buffer
  const buffer = audioContext.createBuffer(1, numSamples, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  // Generate tone with word-specific frequency
  const wordFreq = frequency + (word.length * 50); // Unique frequency per word
  
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    // Create a pleasant tone that fades in and out
    const envelope = Math.sin(t * Math.PI / duration); // Fade in/out
    channelData[i] = Math.sin(2 * Math.PI * wordFreq * t) * 0.1 * envelope;
  }
  
  // Play the generated tone
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
  
  return Promise.resolve();
}

// Export for use in vocab.html
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateToneAudio };
} else {
  window.generateToneAudio = generateToneAudio;
}