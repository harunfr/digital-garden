import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// import Checkboxes from './components/Checkboxes';
// import VerifyAccount from './components/VerifyAccount';
// import Todo from './components/Todo';
// import SoundBoard from './components/SoundBoard';
// import DragNDrop from './components/DragNDrop/DragNDrop'; // not completed yet
// import GithubProfile from './components/GithubProfile';
// import CatchThem from './components/CatchThem'; // 7
// import AnimatedCountdown from './components/AnimatedCountdown'; //8
import VerticalSlider from "./components/VerticalSlider"; // 9
// import LoadMoreImg from './components/LoadMoreImg'; // 10
// import TestimonialSwitch from './components/TestimonialSwitch'; // 11
// import Quiz from './components/Quiz'; // 11
// import CustomRangeSlider from './components/CustomRangeSlider'; // 12
// import BackgroundBoxes from './components/BackgroundBoxes' // 13
// import PasswordBlur from './components/PasswordBlur' // 14
// import PokeDex from './components/PokeDex' // 15
// import HoverBoard from './components/HoverBoard' // 16
// import PasswordGenerator from './components/PasswordGenerator' // 17
// import AutoText from './components/AutoText' // 18
// import ToastNotification from './components/ToastNotification' // 19
// import DrinkWater from './components/DrinkWater' // 20

ReactDOM.render(
  <React.StrictMode>
    <VerticalSlider />
  </React.StrictMode>,
  document.getElementById("root")
);

// search link for DragNDrop
//  https://www.google.com/search?q=drag+and+drop+with+react&oq=drag+and+drop+with+react&aqs=chrome.0.0i512l2j0i22i30l8.6655j0j4&sourceid=chrome&ie=UTF-8
// could be improved but recently good for learning. it's not in final version.
// 8 need styling and a nice animation
// 9 needs some serious styling
// 10 not completed yet.
// 11 how to make react forms properly?
// 12
// 13 study css sprites to make this app
// 14
// 15 with a little css styling, cards would look wonderful.
// 16 I found react way of doing this app and it really deserves a proper css styling.
// 17
// 18 read setinterval at mdn and think why useState keep returning same values.
// 19 not completed, there is some sort of problem, it can be solved by storing textContent of element in state.
// 20 needs code refactor, solve grid template column 999999 fr problem.
