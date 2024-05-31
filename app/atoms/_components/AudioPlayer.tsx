import { useState, useEffect, useRef } from "react";
import { BsPlayBtnFill, BsPauseBtnFill } from "react-icons/bs";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    audioElement.volume = volume;

    return () => {
      audioElement.volume = 1; // Reset volume when unmounting
    };
  }, [volume]);

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="flex flex-col items-start">
      <audio ref={audioRef} src={src} />
      <div className="flex items-center justify-center space-x-4">
        <button onClick={togglePlay} className="focus:outline-none text-2xl">
          {isPlaying ? (
           <BsPlayBtnFill className="inline"/>
          ) : (
            <BsPauseBtnFill className="inline"/>
          )}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className={"range accent-red-500 ml-4 appearance-none w-20 bg-primary h-1 rounded-full focus:outline-none"}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;