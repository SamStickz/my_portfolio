import { useState, useRef, useEffect } from "react";
import {
  FiPlay,
  FiPause,
  FiSkipBack,
  FiSkipForward,
  FiVolume2,
} from "react-icons/fi";

function SpotifyWidget() {
  // Your playlist - Add your own MP3 files here
  const playlist = [
    {
      title: "Only Time",
      artist: "Enya",
      albumArt: "/album-art/only-time.jpg", // Put album art images in public/album-art/
      fallbackColor: "#8B4513",
      fallbackEmoji: "🎵",
      audioSrc: "/songs/only-time.mp3",
    },
    {
      title: "Wildflower",
      artist: "Billie Eilish",
      albumArt: "/album-art/wildflower.jpg",
      fallbackColor: "#4A90E2",
      fallbackEmoji: "🌸",
      audioSrc: "/songs/wildflower.mp3",
    },
    {
      title: "Scare Away the Dark",
      artist: "Passenger",
      albumArt: "/album-art/scare-away.jpg",
      fallbackColor: "#E67E22",
      fallbackEmoji: "🌙",
      audioSrc: "/songs/scare-away-the-dark.mp3",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  const currentSong = playlist[currentSongIndex];

  // Play/Pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Previous song
  const playPrevious = () => {
    const newIndex =
      currentSongIndex === 0 ? playlist.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  // Next song
  const playNext = () => {
    const newIndex =
      currentSongIndex === playlist.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  // Auto-play when song changes
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentSongIndex]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Auto-play next song when current ends
  const handleSongEnd = () => {
    playNext();
  };

  return (
    <div className="bg-[#1a1a1a] rounded-xl p-3 border border-gray-800 max-w-md">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentSong.audioSrc}
        onEnded={handleSongEnd}
      />

      <div className="flex items-center gap-3">
        {/* Album Art with Fallback */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex-shrink-0 overflow-hidden">
          <img
            src={currentSong.albumArt}
            alt="Album Art"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Hide broken image and show fallback
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          {/* Fallback colored box with emoji */}
          <div
            className="w-full h-full hidden items-center justify-center text-2xl"
            style={{ backgroundColor: currentSong.fallbackColor }}
          >
            {currentSong.fallbackEmoji}
          </div>
        </div>

        {/* Song Info */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">
            {currentSong.title}
          </p>
          <p className="text-gray-400 text-xs truncate">{currentSong.artist}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          {/* Volume (Desktop only) */}
          <button
            onClick={() => setVolume(volume > 0 ? 0 : 0.7)}
            className="p-1.5 hover:bg-gray-700/50 rounded-full transition-colors text-gray-400 hidden sm:block"
            aria-label="Volume"
          >
            <FiVolume2 size={14} />
          </button>

          {/* Previous */}
          <button
            onClick={playPrevious}
            className="p-1.5 hover:bg-gray-700/50 rounded-full transition-colors text-gray-400"
            aria-label="Previous"
          >
            <FiSkipBack size={14} />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="p-2.5 bg-[#1DB954] hover:bg-[#1ed760] rounded-full transition-colors flex items-center justify-center flex-shrink-0"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <FiPause size={16} className="text-white" />
            ) : (
              <FiPlay size={16} className="text-white ml-0.5" />
            )}
          </button>

          {/* Next */}
          <button
            onClick={playNext}
            className="p-1.5 hover:bg-gray-700/50 rounded-full transition-colors text-gray-400"
            aria-label="Next"
          >
            <FiSkipForward size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpotifyWidget;
