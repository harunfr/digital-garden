import React, { useRef } from "react";
import applause from "./sounds/applause.mp3";
import boo from "./sounds/boo.mp3";
import gasp from "./sounds/gasp.mp3";
import tada from "./sounds/tada.mp3";
import victory from "./sounds/victory.mp3";
import wrong from "./sounds/wrong.mp3";

const SoundBoard = () => {
  const applauseAudio = useRef(new Audio(applause));
  const booAudio = useRef(new Audio(boo));
  const gaspAudio = useRef(new Audio(gasp));
  const tadaAudio = useRef(new Audio(tada));
  const victoryAudio = useRef(new Audio(victory));
  const wrongAudio = useRef(new Audio(wrong));

  const allAudios = useRef([
    applauseAudio,
    booAudio,
    gaspAudio,
    tadaAudio,
    victoryAudio,
    wrongAudio,
  ]);

  function handlePlay(audioName) {
    allAudios.current.forEach((audio) => {
      audio.current.pause();
      audio.current.currentTime = 0;
    });

    if (audioName === "applause") {
      applauseAudio.current.play();
    } else if (audioName === "boo") {
      booAudio.current.play();
    } else if (audioName === "gasp") {
      gaspAudio.current.play();
    } else if (audioName === "tada") {
      tadaAudio.current.play();
    } else if (audioName === "victory") {
      victoryAudio.current.play();
    } else if (audioName === "wrong") {
      wrongAudio.current.play();
    }
  }

  return (
    <div>
      <button onClick={() => handlePlay("applause")}>Play Applause</button>
      <button onClick={() => handlePlay("boo")}>Play boo</button>
      <button onClick={() => handlePlay("gasp")}>Play gasp</button>
      <button onClick={() => handlePlay("tada")}>Play Tada</button>
      <button onClick={() => handlePlay("victory")}>Play victory</button>
      <button onClick={() => handlePlay("wrong")}>Play wrong</button>
    </div>
  );
};

export default SoundBoard;
