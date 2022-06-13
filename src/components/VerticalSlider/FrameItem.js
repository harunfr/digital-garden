const FrameItem = ({
  order,
  length,
  src,
  backgroundColor,
  insightFulTitle,
  insightFulMessage,
}) => (
  <>
    <div
      className="vs-side-panel"
      style={{
        backgroundColor: backgroundColor,
        transform: `translateY(${-(order + length - 1) * 100}vh)`,
      }}
    >
      <div className="message-container">
        <h1 className="title">{insightFulTitle}</h1>
        <p className="body">{insightFulMessage}</p>
      </div>
    </div>
    <img
      className="vs-image"
      src={src}
      style={{
        transform: `translateY(${order * 100}vh)`,
      }}
    />
  </>
);

export default FrameItem;
