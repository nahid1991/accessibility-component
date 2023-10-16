import React, { useEffect, useCallback, useState, useRef } from 'react';
import './Accessibility.css';
import MUI from './MUI';
import Bootstrap from './Bootstrap';

export interface AccessibilityProps {
  children?: React.ReactNode;
  theme?: string;
  lang?: string;
  excludedFeatures?: string[]
}

export interface HeadingData {
  tagName: string;
  innerText: string;
  innerTexts: string[];
  children: HeadingData[];
}

const Accessibility: React.FC<AccessibilityProps> = ({
  children,
  theme = 'mui',
  lang = "en",
  excludedFeatures = []
}) => {
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
  const [isPageStructureOpen, setIsPageStructureOpen] =
    useState<boolean>(false);
  const [links, setLinks] = useState<{ href: string; text: string }[]>([]);
  const [headings, setHeadings] = useState<HeadingData[]>([]);
  const [shouldLeftAlign, setShouldLeftAlign] = useState<boolean>(false);
  const [shouldRightAlign, setShouldRightAlign] = useState<boolean>(false);
  const [lowSaturation, setLowSaturation] = useState<boolean>(false);
  const [highSaturation, setHighSaturation] = useState<boolean>(false);
  const [desaturation, setDesaturation] = useState<boolean>(false);
  // const [languange, setLanguage] = useState<string>(localStorage.getItem("accLang") ?? lang);

  useEffect(() => {
    const newClasses: Set<string> = new Set<string>();
    if (bigCursor) newClasses.add('cursor');
    if (highlightLink) newClasses.add('highlight-link');
    if (hideImage) newClasses.add('hide-image');
    if (increasedLetterSpace) newClasses.add('increased-letter-space');
    if (increasedLineHeight) newClasses.add('increased-line-height');
    if (shouldLeftAlign) newClasses.add('left-align');
    if (shouldRightAlign) newClasses.add('right-align');
    if (lowSaturation) newClasses.add('low-saturation');
    if (highSaturation) newClasses.add('high-saturation');
    if (desaturation) newClasses.add('desaturation');
    setClasses(Array.from(newClasses));
  }, [
    bigCursor,
    highlightLink,
    hideImage,
    increasedLetterSpace,
    increasedLineHeight,
    shouldLeftAlign,
    shouldRightAlign,
    lowSaturation,
    highSaturation,
    desaturation
  ]);

  useEffect(() => {
    setBigCursor(!!localStorage.getItem('bigCursor'));
  }, []);

  useEffect(() => {
    setReadingMask(!!localStorage.getItem('readingMask'));
  }, []);

  useEffect(() => {
    setHighlightLink(!!localStorage.getItem('highlightLink'));
  }, []);

  useEffect(() => {
    setHideImage(!!localStorage.getItem('hideImage'));
  }, []);

  useEffect(() => {
    setIncreasedLetterSpace(!!localStorage.getItem('increasedLetterSpace'));
  }, []);

  useEffect(() => {
    setIncreasedLineHeight(!!localStorage.getItem('increasedLineHeight'));
  }, []);

  useEffect(() => {
    setDarkContrast(!!localStorage.getItem('darkContrast'));
  }, []);

  useEffect(() => {
    setLightContrast(!!localStorage.getItem('lightContrast'));
  }, []);

  useEffect(() => {
    setInvertColor(!!localStorage.getItem('invertColor'));
  }, []);

  useEffect(() => {
    setShouldLeftAlign(!!localStorage.getItem('leftAlign'));
  }, []);

  useEffect(() => {
    setShouldRightAlign(!!localStorage.getItem('rightAlign'));
  }, []);

  useEffect(() => {
    setLowSaturation(!!localStorage.getItem('lowSaturation'));
  }, []);

  useEffect(() => {
    setHighSaturation(!!localStorage.getItem('highSaturation'));
  }, []);

  useEffect(() => {
    setDesaturation(!!localStorage.getItem('desaturation'));
  }, []);

  // useEffect(() => {
  //   setLanguage(localStorage.getItem("accLang") ?? lang)
  // }, [lang]);

  const handleBigCursorChange = useCallback(() => {
    bigCursor
      ? localStorage.removeItem('bigCursor')
      : localStorage.setItem('bigCursor', '1');
    setBigCursor(!bigCursor);
  }, [bigCursor]);

  const handleReadingMask = useCallback(() => {
    readingMask
      ? localStorage.removeItem('readingMask')
      : localStorage.setItem('readingMask', '1');
    localStorage.removeItem('darkContrast');
    localStorage.removeItem('lightContrast');
    localStorage.removeItem('invertColor');
    setReadingMask(!readingMask);
    setDarkContrast(false);
    setInvertColor(false);
    setLightContrast(false);
    setLowSaturation(false);
    setDesaturation(false);
    setHighSaturation(false);
  }, [readingMask]);

  const handleLinkHighlightingChange = useCallback(() => {
    highlightLink
      ? localStorage.removeItem('highlightLink')
      : localStorage.setItem('highlightLink', '1');
    setHighlightLink(!highlightLink);
  }, [highlightLink]);

  const handleHideImage = useCallback(() => {
    hideImage
      ? localStorage.removeItem('hideImage')
      : localStorage.setItem('hideImage', '1');
    setHideImage(!hideImage);
  }, [hideImage]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement | HTMLElement>) => {
      const bodyHeight = ref.current ? ref.current["clientHeight"] : null;
      if (bodyHeight && bodyHeight - event.clientY <= 50) {
        setMouseYPosition(bodyHeight - 50);
        return;
      }
      setMouseYPosition(event.clientY);
    },
    []
  );

  const handleLetterSpace = useCallback(() => {
    increasedLetterSpace
      ? localStorage.removeItem('increasedLetterSpace')
      : localStorage.setItem('increasedLetterSpace', '1');
    setIncreasedLetterSpace(!increasedLetterSpace);
  }, [increasedLetterSpace]);

  const handleLineHeight = useCallback(() => {
    increasedLineHeight
      ? localStorage.removeItem('increasedLineHeight')
      : localStorage.setItem('increasedLineHeight', '1');
    setIncreasedLineHeight(!increasedLineHeight);
  }, [increasedLineHeight]);

  const handleDarkContrast = useCallback(() => {
    darkContrast
      ? localStorage.removeItem('darkContrast')
      : localStorage.setItem('darkContrast', '1');
    localStorage.removeItem('readingMask');
    localStorage.removeItem('lightContrast');
    localStorage.removeItem('invertColor');
    localStorage.removeItem('lowSaturation');
    localStorage.removeItem('highSaturation');
    localStorage.removeItem('desaturation');
    setDarkContrast(!darkContrast);
    setLightContrast(false);
    setInvertColor(false);
    setReadingMask(false);
    setLowSaturation(false);
    setDesaturation(false);
    setHighSaturation(false);
  }, [darkContrast]);

  const handleLightContrast = useCallback(() => {
    lightContrast
      ? localStorage.removeItem('lightContrast')
      : localStorage.setItem('lightContrast', '1');
    localStorage.removeItem('darkContrast');
    localStorage.removeItem('readingMask');
    localStorage.removeItem('invertColor');
    localStorage.removeItem('lowSaturation');
    localStorage.removeItem('highSaturation');
    localStorage.removeItem('desaturation');
    setLightContrast(!lightContrast);
    setDarkContrast(false);
    setInvertColor(false);
    setReadingMask(false);
    setLowSaturation(false);
    setDesaturation(false);
    setHighSaturation(false);
  }, [lightContrast]);

  const handleInvertColor = useCallback(() => {
    invertColor
      ? localStorage.removeItem('invertColor')
      : localStorage.setItem('invertColor', '1');
    localStorage.removeItem('darkContrast');
    localStorage.removeItem('lightContrast');
    localStorage.removeItem('readingMask');
    localStorage.removeItem('lowSaturation');
    localStorage.removeItem('highSaturation');
    localStorage.removeItem('desaturation');
    setInvertColor(!invertColor);
    setLightContrast(false);
    setDarkContrast(false);
    setReadingMask(false);
    setLowSaturation(false);
    setDesaturation(false);
    setHighSaturation(false);
  }, [invertColor]);

  const handleLowSaturation = useCallback(() => {
    lowSaturation
      ? localStorage.removeItem('lowSaturation')
      : localStorage.setItem('lowSaturation', '1');
    localStorage.removeItem('darkContrast');
    localStorage.removeItem('lightContrast');
    localStorage.removeItem('readingMask');
    localStorage.removeItem('highSaturation');
    localStorage.removeItem('desaturation');
    setLowSaturation(!lowSaturation);
    setInvertColor(false);
    setLightContrast(false);
    setDarkContrast(false);
    setReadingMask(false);
    setDesaturation(false);
    setHighSaturation(false);
  }, [lowSaturation]);

  const handleHighSaturation = useCallback(() => {
    highSaturation
      ? localStorage.removeItem('highSaturation')
      : localStorage.setItem('highSaturation', '1');
    localStorage.removeItem('darkContrast');
    localStorage.removeItem('lightContrast');
    localStorage.removeItem('readingMask');
    localStorage.removeItem('lowSaturation');
    localStorage.removeItem('desaturation');
    setHighSaturation(!highSaturation);
    setInvertColor(false);
    setLightContrast(false);
    setDarkContrast(false);
    setReadingMask(false);
    setDesaturation(false);
    setLowSaturation(false);
  }, [highSaturation]);

  const handleDesaturation = useCallback(() => {
    desaturation
      ? localStorage.removeItem('desaturation')
      : localStorage.setItem('desaturation', '1');
    localStorage.removeItem('darkContrast');
    localStorage.removeItem('lightContrast');
    localStorage.removeItem('readingMask');
    localStorage.removeItem('lowSaturation');
    localStorage.removeItem('desaturation');
    setInvertColor(false);
    setLightContrast(false);
    setDarkContrast(false);
    setReadingMask(false);
    setDesaturation(!desaturation);
    setLowSaturation(false);
    setHighSaturation(false);
  }, [desaturation]);

  const getTextContent = useCallback((element: Element): string => {
    let text = '';
    element.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        text += getTextContent(node as Element);
      }
    });
    return text.trim();
  }, []);

  const getLinks = useCallback(() => {
    const links = document.querySelectorAll('a');
    const data: { href: string; text: string }[] = [];

    links.forEach((link) => {
      const href = link.getAttribute('href');
      const text = getTextContent(link);

      if (href) {
        data.push({ href, text });
      }
    });

    return data;
  }, [getTextContent]);

  const getHeadingsData = useCallback((node: HTMLElement): HeadingData => {
    const nodeData: HeadingData = {
      tagName: node.tagName.toLowerCase(),
      innerText: node.innerText,
      innerTexts: [],
      children: []
    };

    const childNodesArray = Array.from(node.childNodes); // Convert to array

    for (const childNode of childNodesArray) {
      if (childNode.nodeType === Node.ELEMENT_NODE) {
        const element = childNode as HTMLElement;
        if (/^H\d$/.test(element.tagName)) {
          nodeData.children.push(getHeadingsData(element));
        } else {
          nodeData.children = nodeData.children.concat(
            getHeadingsData(element).children
          );
        }
      } else if (childNode.nodeType === Node.TEXT_NODE) {
        const textContent = (childNode.textContent && childNode.textContent.trim()) || '';
        if (textContent !== '') {
          nodeData.innerTexts.push(textContent);
        }
      }
    }

    return nodeData;
  }, []);

  const getHeadings = useCallback((): HeadingData[] => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingsData: HeadingData[] = [];

    headings.forEach((heading) => {
      headingsData.push(getHeadingsData(heading as HTMLElement));
    });

    return headingsData;
  }, [getHeadingsData]);

  const handlePageStructureOpening = useCallback(() => {
    if (!isPageStructureOpen) {
      const links = getLinks();
      const headingsData = getHeadings();
      setLinks(links);
      setHeadings(headingsData);
    } else {
      setLinks([]);
      setHeadings([]);
    }
    setIsPageStructureOpen(!isPageStructureOpen);
  }, [isPageStructureOpen, getHeadingsData, getHeadings]);

  const handleLeftAlign = useCallback(() => {
    shouldLeftAlign ? localStorage.removeItem('leftAlign') : localStorage.setItem('leftAlign', '1');
    localStorage.removeItem('rightAlign');
    setShouldLeftAlign(!shouldLeftAlign);
    setShouldRightAlign(false);
  }, [shouldLeftAlign]);

  const handleRightAlign = useCallback(() => {
    shouldRightAlign ? localStorage.removeItem('rightAlign') : localStorage.setItem('rightAlign', '1');
    localStorage.removeItem('leftAlign');
    setShouldRightAlign(!shouldRightAlign);
    setShouldLeftAlign(false);
  }, [shouldRightAlign]);

  const handleReset = useCallback(() => {
    setBigCursor(false);
    setReadingMask(false);
    setHighlightLink(false);
    setHideImage(false);
    setHighlightLink(false);
    setIncreasedLineHeight(false);
    setIncreasedLetterSpace(false);
    setDarkContrast(false);
    setLightContrast(false);
    setInvertColor(false);
    setIsPageStructureOpen(false);
    setShouldLeftAlign(false);
    setShouldRightAlign(false);
    setHighSaturation(false);
    setLowSaturation(false);
    setDesaturation(false);

    localStorage.removeItem('bigCursor');
    localStorage.removeItem('readingMask');
    localStorage.removeItem('highlightLink');
    localStorage.removeItem('hideImage');
    localStorage.removeItem('increasedLetterSpace');
    localStorage.removeItem('increasedLineHeight');
    localStorage.removeItem('darkContrast');
    localStorage.removeItem('lightContrast');
    localStorage.removeItem('invertColor');
    localStorage.removeItem('leftAlign');
    localStorage.removeItem('rightAlign');
    localStorage.removeItem('lowSaturation');
    localStorage.removeItem('highSaturation');
    localStorage.removeItem('desaturation');
  }, []);

  useEffect(() => {
    const bodyClasses = document.body.classList;
    invertColor
      ? bodyClasses.add('invert-color')
      : bodyClasses.remove('invert-color');
    lightContrast
      ? bodyClasses.add('light-contrast')
      : bodyClasses.remove('light-contrast');
    darkContrast
      ? bodyClasses.add('dark-contrast')
      : bodyClasses.remove('dark-contrast');
  }, [invertColor, darkContrast, lightContrast]);

  // const handleSetLanguage = useCallback((language: string) => {
  //   setLanguage(language);
  //   localStorage.setItem("accLang", language);
  // }, []);

  return (
    <>
      {theme === 'bootstrap' ? (
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
          isPageStructureOpen={isPageStructureOpen}
          handlePageStructureOpening={handlePageStructureOpening}
          setIsOpen={setIsOpen}
          classes={classes}
          mouseYPosition={mouseYPosition}
          links={links}
          headings={headings}
          shouldLeftAlign={shouldLeftAlign}
          handleLeftAlign={handleLeftAlign}
          shouldRightAlign={shouldRightAlign}
          handleRightAlign={handleRightAlign}
          handleReset={handleReset}
          lowSaturation={lowSaturation}
          highSaturation={highSaturation}
          desaturation={desaturation}
          handleLowSaturation={handleLowSaturation}
          handleHighSaturation={handleHighSaturation}
          handleDesaturation={handleDesaturation}
          language={lang}
          excludedFeatures={excludedFeatures}
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
          isPageStructureOpen={isPageStructureOpen}
          handlePageStructureOpening={handlePageStructureOpening}
          setIsOpen={setIsOpen}
          classes={classes}
          mouseYPosition={mouseYPosition}
          links={links}
          headings={headings}
          shouldLeftAlign={shouldLeftAlign}
          handleLeftAlign={handleLeftAlign}
          shouldRightAlign={shouldRightAlign}
          handleRightAlign={handleRightAlign}
          handleReset={handleReset}
          lowSaturation={lowSaturation}
          highSaturation={highSaturation}
          desaturation={desaturation}
          handleLowSaturation={handleLowSaturation}
          handleHighSaturation={handleHighSaturation}
          handleDesaturation={handleDesaturation}
          language={lang}
          excludedFeatures={excludedFeatures}
        />
      )}
    </>
  );
};

export default Accessibility;
