import React, { useEffect, useCallback, useState, useRef } from 'react';
import './Accessibility.css';
import MUI from "./MUI";
import Bootstrap from "./Bootstrap";

export interface AccessibilityProps {
  children?: React.ReactNode;
  theme?: string;
}

const Accessibility: React.FC<AccessibilityProps> = ({ children, theme = "mui" }) => {
  const ref = useRef(null);
  const [bigCursor, setBigCursor] = useState<boolean>(false);
  const [highlightLink, setHighlightLink] = useState<boolean>(false);
  const [increasedLetterSpace, setIncreasedLetterSpace] =
    useState<boolean>(false);
  const [increasedLineHeight, setIncreasedLineHeight] =
    useState<boolean>(false);
  const [hideImage, setHideImage] = useState<boolean>(false);
  const [classes, setClasses] = useState<Array<string>>([]);
  const [mouseYPosition, setMouseYPosition] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [readingMask, setReadingMask] = useState<boolean>(false);
  const [darkContrast, setDarkContrast] = useState<boolean>(false);
  const [lightContrast, setLightContrast] = useState<boolean>(false);
  const [invertColor, setInvertColor] = useState<boolean>(false);

  useEffect(() => {
    const newClasses: Set<string> = new Set<string>();
    if (bigCursor) newClasses.add('cursor');
    if (highlightLink) newClasses.add('highlight-link');
    if (hideImage) newClasses.add('hide-image');
    if (increasedLetterSpace) newClasses.add('increased-letter-space');
    if (increasedLineHeight) newClasses.add('increased-line-height');
    setClasses(Array.from(newClasses));
  }, [
    bigCursor,
    highlightLink,
    hideImage,
    increasedLetterSpace,
    increasedLineHeight
  ]);

  useEffect(() => {
    setBigCursor(!!localStorage.getItem("bigCursor"));
  }, []);

  useEffect(() => {
    setReadingMask(!!localStorage.getItem("readingMask"));
  }, []);

  useEffect(() => {
    setHighlightLink(!!localStorage.getItem("highlightLink"));
  }, []);

  useEffect(() => {
    setHideImage(!!localStorage.getItem("hideImage"));
  }, []);

  useEffect(() => {
    setIncreasedLetterSpace(!!localStorage.getItem("increasedLetterSpace"));
  }, []);

  useEffect(() => {
    setIncreasedLineHeight(!!localStorage.getItem("increasedLineHeight"));
  }, []);

  useEffect(() => {
    setDarkContrast(!!localStorage.getItem("darkContrast"));
  }, []);

  useEffect(() => {
    setLightContrast(!!localStorage.getItem("lightContrast"));
  }, []);

  useEffect(() => {
    setInvertColor(!!localStorage.getItem("invertColor"));
  }, []);

  const handleBigCursorChange = useCallback(() => {
    bigCursor ? localStorage.removeItem("bigCursor") : localStorage.setItem("bigCursor", "1");
    setBigCursor(!bigCursor);
  }, [bigCursor]);

  const handleReadingMask = useCallback(() => {
    readingMask ? localStorage.removeItem("readingMask") : localStorage.setItem("readingMask", "1");
    localStorage.removeItem("darkContrast");
    localStorage.removeItem("lightContrast");
    localStorage.removeItem("invertColor");
    setReadingMask(!readingMask);
    setDarkContrast(false);
    setInvertColor(false);
    setLightContrast(false);
  }, [readingMask]);

  const handleLinkHighlightingChange = useCallback(() => {
    highlightLink ? localStorage.removeItem("highlightLink") : localStorage.setItem("highlightLink", "1");
    setHighlightLink(!highlightLink);
  }, [highlightLink]);

  const handleHideImage = useCallback(() => {
    hideImage ? localStorage.removeItem("hideImage") : localStorage.setItem("hideImage", "1");
    setHideImage(!hideImage);
  }, [hideImage]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement | HTMLElement>) => {
      const bodyHeight = ref.current ? ref.current['clientHeight'] : null;
      if (bodyHeight && bodyHeight - event.clientY <= 50) {
        setMouseYPosition(bodyHeight - 50);
        return;
      }
      setMouseYPosition(event.clientY);
    },
    []
  );

  const handleLetterSpace = useCallback(() => {
    increasedLetterSpace ? localStorage.removeItem("increasedLetterSpace") : localStorage.setItem("increasedLetterSpace", "1");
    setIncreasedLetterSpace(!increasedLetterSpace);
  }, [increasedLetterSpace]);

  const handleLineHeight = useCallback(() => {
    increasedLineHeight ? localStorage.removeItem("increasedLineHeight") : localStorage.setItem("increasedLineHeight", "1");
    setIncreasedLineHeight(!increasedLineHeight);
  }, [increasedLineHeight]);

  const handleDarkContrast = useCallback(() => {
    darkContrast ? localStorage.removeItem("darkContrast") : localStorage.setItem("darkContrast", "1");
    localStorage.removeItem("readingMask");
    localStorage.removeItem("lightContrast");
    localStorage.removeItem("invertColor");
    setDarkContrast(!darkContrast);
    setLightContrast(false);
    setInvertColor(false);
    setReadingMask(false);
  }, [darkContrast]);

  const handleLightContrast = useCallback(() => {
    lightContrast ? localStorage.removeItem("lightContrast") : localStorage.setItem("lightContrast", "1");
    localStorage.removeItem("darkContrast");
    localStorage.removeItem("readingMask");
    localStorage.removeItem("invertColor");
    setLightContrast(!lightContrast);
    setDarkContrast(false);
    setInvertColor(false);
    setReadingMask(false);
  }, [lightContrast]);

  const handleInvertColor = useCallback(() => {
    invertColor ? localStorage.removeItem("invertColor") : localStorage.setItem("invertColor", "1");
    localStorage.removeItem("darkContrast");
    localStorage.removeItem("lightContrast");
    localStorage.removeItem("readingMask");
    setInvertColor(!invertColor);
    setLightContrast(false);
    setDarkContrast(false);
    setReadingMask(false);
  }, [invertColor]);

  useEffect(() => {
    const bodyClasses = document.body.classList;
    invertColor ? bodyClasses.add("invert-color") : bodyClasses.remove("invert-color");
    lightContrast ? bodyClasses.add("light-contrast") : bodyClasses.remove("light-contrast");
    darkContrast ? bodyClasses.add("dark-contrast") : bodyClasses.remove("dark-contrast");
  }, [invertColor, darkContrast, lightContrast]);

  return (
    <>
      {
        theme === "bootstrap" ? (
          <Bootstrap
            children={children}
            bigCursor={bigCursor}
            highlightLink={highlightLink}
            increasedLetterSpace={increasedLetterSpace}
            increasedLineHeight={increasedLineHeight}
            hideImage={hideImage}
            readingMask={readingMask}
            darkContrast={darkContrast}
            lightContrast={lightContrast}
            invertColor={invertColor}
            handleMouseMove={handleMouseMove}
            handleLetterSpace={handleLetterSpace}
            handleBigCursorChange={handleBigCursorChange}
            handleReadingMask={handleReadingMask}
            handleLinkHighlightingChange={handleLinkHighlightingChange}
            handleHideImage={handleHideImage}
            handleLineHeight={handleLineHeight}
            handleDarkContrast={handleDarkContrast}
            handleLightContrast={handleLightContrast}
            handleInvertColor={handleInvertColor}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            classes={classes}
            mouseYPosition={mouseYPosition}
          />
          ) : (
          <MUI
            children={children}
            bigCursor={bigCursor}
            highlightLink={highlightLink}
            increasedLetterSpace={increasedLetterSpace}
            increasedLineHeight={increasedLineHeight}
            hideImage={hideImage}
            readingMask={readingMask}
            darkContrast={darkContrast}
            lightContrast={lightContrast}
            invertColor={invertColor}
            handleMouseMove={handleMouseMove}
            handleLetterSpace={handleLetterSpace}
            handleBigCursorChange={handleBigCursorChange}
            handleReadingMask={handleReadingMask}
            handleLinkHighlightingChange={handleLinkHighlightingChange}
            handleHideImage={handleHideImage}
            handleLineHeight={handleLineHeight}
            handleDarkContrast={handleDarkContrast}
            handleLightContrast={handleLightContrast}
            handleInvertColor={handleInvertColor}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            classes={classes}
            mouseYPosition={mouseYPosition}
          />
        )
      }
    </>
  );
};

export default Accessibility;
