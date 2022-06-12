const FrameItem = (props) => (
  <>
    <div
      className="vs-side-panel"
      style={{ backgroundColor: props.backgroundColor }}
    >
      Some insightful message about photo here -- 1
    </div>
    <img className="vs-image" src={props.src} />
  </>
);

export default FrameItem;
