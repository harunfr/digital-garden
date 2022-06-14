interface ICurrentApp {
  name: string;
  status: boolean;
  path: string;
}

const CurrentApps: ICurrentApp[] = [
  { name: "Double Vertical Slider", status: true, path: "/vertical-slider" },
  { name: "AnimatedCountdown", status: false, path: "/animated-countdown" },
  { name: "BackgroundBoxes", status: false, path: "/background-boxes" },
  { name: "CatchThem", status: false, path: "/catch-them-all" },
  { name: "CustomRangeSlider", status: false, path: "/custom-range-slider" },
  { name: "DragNDrop", status: false, path: "/drag-and-drop" },
  { name: "DrinkWater", status: false, path: "/drink-water" },
  { name: "GithubProfile", status: false, path: "/github-profile" },
  { name: "HoverBoard", status: false, path: "/hoverboard" },
  { name: "LoadMoreImg", status: false, path: "/load-more-image" },
  { name: "Password Blur", status: false, path: "/password-blur" },
  { name: "PasswordGenerator", status: false, path: "/password-generator" },
  { name: "PokeDex", status: false, path: "/pokedex" },
  { name: "Quiz", status: false, path: "/quiz" },
  { name: "SoundBoard", status: false, path: "/sound-board" },
  { name: "TestimonialSwitch", status: false, path: "/testimonial-switch" },
  { name: "ToastNotification", status: false, path: "/toast-notification" },
  { name: "AutoText", status: false, path: "/auto-text" },
  { name: "Checkboxes", status: false, path: "/checkboxes" },
  { name: "LiveUserFilter", status: false, path: "/live-user-filter" },
  { name: "VerifyAccount", status: false, path: "/verify-account" },
  // { name: "WWWWWWWWW", status: false , path: '/verify-account'},
];

export default CurrentApps;
