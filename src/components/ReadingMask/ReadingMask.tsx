import React from 'react';
import './ReadingMask.css';

export interface ReadingMaskProps {
  position?: number;
  mainHeight?: number;
}

const ReadingMask: React.FC<ReadingMaskProps> = ({
  position = 0,
  mainHeight = 0
}) => {
  return (
    <div className="reading-mask-parent" style={{ top: 0, left: 0, right: 0 }}>
      <div
        className="reading-mask-background"
        style={{
          maxHeight: `${position - 50}px`
        }}
      ></div>
      <div
        className="reading-mask-main reading-mask"
        style={{
          top: `${position - 50}px`
        }}
      ></div>
      <div
        className="reading-mask-background"
        style={{
          maxHeight: `${mainHeight - position - 50}px`,
          marginTop: '100px'
        }}
      ></div>
    </div>
  );
};

export default ReadingMask;
