import React from "react";
import "./ReadingMask.css";

export interface ReadingMaskProps {
  mousePosition?: number;
}

const ReadingMask: React.FC<ReadingMaskProps> = ({ mousePosition = 0 }) => {
  return (
    <div
      className="reading-mask-parent"
      style={{
        width: `${document.body.offsetWidth}px !important`,
      }}
    >
      <div
        className="reading-mask"
        style={{
          zIndex: "2147483647 !important",
          width: "100vw !important",
          top: "0px",
          height: `${mousePosition - 50}px`,
        }}
      ></div>
      <div
        className="reading-mask"
        style={{
          zIndex: "2147483647 !important",
          width: "100vw !important",
          height: `${document.body.offsetHeight - mousePosition}px`,
          marginTop: "100px",
          top: `${mousePosition - 50}px`,
        }}
      ></div>
    </div>
  );
};

export default ReadingMask;
