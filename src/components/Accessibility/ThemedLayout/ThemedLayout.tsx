import React from 'react';
import MUILayout from './MUI/MUILayout';
import { HeadingData } from '../Accessibility';

interface ThemedLayoutProps {
  children?: React.ReactNode;
  bigCursor?: boolean;
  highlightLink?: boolean;
  increasedLetterSpace?: boolean;
  increasedLineHeight?: boolean;
  hideImage?: boolean;
  readingMask?: boolean;
  darkContrast?: boolean;
  lightContrast?: boolean;
  invertColor?: boolean;
  mouseYPosition?: number;
  isOpen?: boolean;
  classes?: string[];
  handleMouseMove?: (
    event: React.MouseEvent<HTMLDivElement | HTMLElement>
  ) => void;
  handleLetterSpace?: () => void;
  handleBigCursorChange?: () => void;
  handleReadingMask?: () => void;
  handleLinkHighlightingChange?: () => void;
  handleHideImage?: () => void;
  handleLineHeight?: () => void;
  handleDarkContrast?: () => void;
  handleLightContrast?: () => void;
  handleInvertColor?: () => void;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isPageStructureOpen?: boolean;
  handlePageStructureOpening?: () => void;
  links?: { href: string; text: string }[];
  headings?: HeadingData[];
  shouldLeftAlign?: boolean;
  handleLeftAlign?: () => void;
  shouldRightAlign?: boolean;
  handleRightAlign?: () => void;
  handleReset?: () => void;
  lowSaturation?: boolean;
  highSaturation?: boolean;
  desaturation?: boolean;
  handleLowSaturation?: () => void;
  handleHighSaturation?: () => void;
  handleDesaturation?: () => void;
  language?: string;
  excludedFeatures?: string[];
}

const ThemedLayout: React.FC<ThemedLayoutProps> = React.forwardRef<
  HTMLDivElement,
  ThemedLayoutProps
>(
  (
    {
      children,
      bigCursor = false,
      highlightLink = false,
      increasedLetterSpace = false,
      increasedLineHeight = false,
      hideImage = false,
      readingMask = false,
      darkContrast = false,
      lightContrast = false,
      invertColor = false,
      mouseYPosition = 0,
      isOpen = false,
      classes = [],
      handleMouseMove = () => {},
      handleLetterSpace = () => {},
      handleBigCursorChange = () => {},
      handleReadingMask = () => {},
      handleLinkHighlightingChange = () => {},
      handleHideImage = () => {},
      handleLineHeight = () => {},
      handleDarkContrast = () => {},
      handleLightContrast = () => {},
      handleInvertColor = () => {},
      setIsOpen = () => {},
      isPageStructureOpen = false,
      handlePageStructureOpening = () => {},
      links = [],
      headings = [],
      shouldLeftAlign = false,
      handleLeftAlign = () => {},
      shouldRightAlign = false,
      handleRightAlign = () => {},
      handleReset = () => {},
      lowSaturation = false,
      highSaturation = false,
      desaturation = false,
      handleLowSaturation = () => {},
      handleHighSaturation = () => {},
      handleDesaturation = () => {},
      language = 'en',
      excludedFeatures = []
    },
    ref
  ) => {
    return (
      <MUILayout
        bigCursor={bigCursor}
        handleMouseMove={handleMouseMove}
        ref={ref}>
        {children}
      </MUILayout>);
  }
);
