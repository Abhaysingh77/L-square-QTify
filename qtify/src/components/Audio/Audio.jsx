import { Typography } from "@mui/material";
import Style from "./Audio.module.css";
import PlayCircleOutlineRounded from "@mui/icons-material/PlayCircleOutlineRounded";
import PauseCircleOutlineRounded from "@mui/icons-material/PauseCircleOutlineRounded";
import IconButton from "@mui/material/IconButton";
import { useEffect, useRef, useState } from "react";
import image from '../../assets/image.png';

function SongDesc() {
  return (
    <div className={Style.desc}>
      <div>
        <img
          src={image}
          alt="song"
          width="100vw"
          height="100vh"
        />
      </div>
      <div className={Style.names}>
        <Typography variant="h6">Song Name</Typography>
        <Typography variant="body2">Album Name</Typography>
      </div>
    </div>
  );
}

function Controls({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  function handleClick() {
    setIsPlaying((prev) => !prev);
  }
  return (
    <>
      {isPlaying ? (
        <IconButton onClick={handleClick} className={Style.buttons}>
          <PauseCircleOutlineRounded sx={{ fontSize: 70 }} />
        </IconButton>
      ) : (
        <IconButton onClick={handleClick} className={Style.buttons}>
          <PlayCircleOutlineRounded sx={{ fontSize: 70 }} />
        </IconButton>
      )}
    </>
  );
}

function ProgressBar({ audioRef }) {
  const progressBarRef = useRef();

  function updateProgress() {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const progress = (currentTime / duration) * 100;
    progressBarRef.current.value = progress;
  }

  useEffect(() => {
    const updateInterval = setInterval(updateProgress, 1000);
    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  function handleChange(e) {
    const progress = e.target.value;
    const newTime = (progress / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  }
  return (
    <>
      <div className={Style.progressBar}>
        <span className="startTime" style={{ color: "#FFFFFF" }}>
          00:00
        </span>
        <input
          type="range"
          ref={progressBarRef}
          style={{ width: '60vw' }}
          defaultValue="0"
          onChange={handleChange}
        />
        <span className="endTime" style={{ color: "#FFFFFF" }}>
          03:45
        </span>
      </div>
    </>
  );
}
export default function AudioPlayer() {
  const audioRef = useRef();

  return (
    <div className={Style.container}>
      <div>
        <SongDesc />
        <audio
          src="https://www.computerhope.com/jargon/m/example.mp3"
          ref={audioRef}
        />
      </div>
      <div className={Style.controls}>
        <Controls audioRef={audioRef} />
        <ProgressBar audioRef={audioRef} />
      </div>
    </div>
  );
}
