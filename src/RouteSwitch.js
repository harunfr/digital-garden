import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import VerticalSlider from "./components/VerticalSlider"; // 9
import Checkboxes from "./components/Checkboxes";
import VerifyAccount from "./components/VerifyAccount";
import Todo from "./components/Todo";
import SoundBoard from "./components/SoundBoard";
import DragNDrop from "./components/DragNDrop/DragNDrop"; // not completed yet
import GithubProfile from "./components/GithubProfile";
import CatchThem from "./components/CatchThem"; // 7
import AnimatedCountdown from "./components/AnimatedCountdown"; //8
import LoadMoreImg from "./components/LoadMoreImg"; // 10
import TestimonialSwitch from "./components/TestimonialSwitch"; // 11
import Quiz from "./components/Quiz"; // 11
import CustomRangeSlider from "./components/CustomRangeSlider"; // 12
import BackgroundBoxes from "./components/BackgroundBoxes"; // 13
import PasswordBlur from "./components/PasswordBlur"; // 14
import PokeDex from "./components/PokeDex"; // 15
import HoverBoard from "./components/HoverBoard"; // 16
import PasswordGenerator from "./components/PasswordGenerator"; // 17
import AutoText from "./components/AutoText"; // 18
import ToastNotification from "./components/ToastNotification"; // 19
import DrinkWater from "./components/DrinkWater"; // 20
import LiveUserFilter from "./components/LiveUserFilter";

const RouteSwitch = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/vertical-slider" element={<VerticalSlider />} />
        <Route path="/animated-countdown" element={<AnimatedCountdown />} />
        <Route path="/background-boxes" element={<BackgroundBoxes />} />
        <Route path="/catch-them-all" element={<CatchThem />} />
        <Route path="/custom-range-slider" element={<CustomRangeSlider />} />
        <Route path="/drag-and-drop" element={<DragNDrop />} />
        <Route path="/drink-water" element={<DrinkWater />} />
        <Route path="/github-profile" element={<GithubProfile />} />
        <Route path="/hoverboard" element={<HoverBoard />} />
        <Route path="/load-more-image" element={<LoadMoreImg />} />
        <Route path="/password-blur" element={<PasswordBlur />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/pokedex" element={<PokeDex />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/sound-board" element={<SoundBoard />} />
        <Route path="/testimonial-switch" element={<TestimonialSwitch />} />
        <Route path="/toast-notification" element={<ToastNotification />} />
        <Route path="/auto-text" element={<AutoText />} />
        <Route path="/checkboxes" element={<Checkboxes />} />
        <Route path="/live-user-filter" element={<LiveUserFilter />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/todo" element={<Todo />} />
        {/* <Route path="/WWWWWWWWWWWWWWWWWWWWWWWWWWWWW" element={<WWWWWWWW />} /> */}
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
