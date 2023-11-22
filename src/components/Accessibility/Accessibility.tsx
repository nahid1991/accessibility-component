import React, { useEffect, useCallback, useState, useRef } from 'react';
import './Accessibility.css';
import MUI from './ThemedLayout/MUI';
import Bootstrap from './ThemedLayout/Bootstrap';
import {
  mdiArrowLeftRightBoldOutline,
  mdiArrowUpDownBoldOutline,
  mdiContrastCircle,
  mdiCursorDefaultOutline,
  mdiImageOffOutline,
  mdiInvertColors,
  mdiLinkBoxOutline,
  mdiMagnifyMinus,
  mdiMagnifyPlus,
  mdiMinusBoxOutline,
  mdiPageNextOutline,
  mdiReceiptTextArrowLeftOutline,
  mdiReceiptTextArrowRightOutline
} from '@mdi/js';
import { Feature, Types } from './types';
import { translation } from './Language';
import {
  FaArrowsAltH,
  FaArrowsAltV,
  FaLink,
  FaMousePointer
} from 'react-icons/fa';
import { MdInvertColors, MdOutlineSplitscreen } from 'react-icons/md';
import { LuImageOff } from 'react-icons/lu';
import { ImContrast } from 'react-icons/im';
import { LiaPagerSolid } from 'react-icons/lia';
import { GrTextAlignLeft, GrTextAlignRight } from 'react-icons/gr';
import Icon from '@mdi/react';
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2';

export interface AccessibilityProps {
  children?: React.ReactNode;
  theme?: string;
  lang?: string;
  excludedFeatures?: string[];
  maxFontSize?: number;
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
  lang = 'en',
  excludedFeatures = [],
  maxFontSize = null
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
  const [magnify, setMagnify] = useState<boolean>(false);

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
    if (magnify) newClasses.add('magnify');
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
    desaturation,
    magnify
  ]);

  useEffect(() => {
    setMagnify(!!localStorage.getItem('magnify'));
  }, []);

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
        const textContent =
          (childNode.textContent && childNode.textContent.trim()) || '';
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
    shouldLeftAlign
      ? localStorage.removeItem('leftAlign')
      : localStorage.setItem('leftAlign', '1');
    localStorage.removeItem('rightAlign');
    setShouldLeftAlign(!shouldLeftAlign);
    setShouldRightAlign(false);
  }, [shouldLeftAlign]);

  const handleRightAlign = useCallback(() => {
    shouldRightAlign
      ? localStorage.removeItem('rightAlign')
      : localStorage.setItem('rightAlign', '1');
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
    setMagnify(false);

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
    localStorage.removeItem('magnify');
  }, []);

  const handleMagnify = useCallback(() => {
    magnify
      ? localStorage.removeItem('magnify')
      : localStorage.setItem('magnify', '1');
    setMagnify(!magnify);
  }, [magnify]);

  useEffect(() => {
    magnify
      ? (document.documentElement.style.fontSize = `${maxFontSize ?? 24}px`)
      : (document.documentElement.style.fontSize = `inherit`);
  }, [magnify]);

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

  const features: Feature[] = [
    {
      feature: bigCursor,
      handler: handleBigCursorChange,
      icon:
        theme === 'bootstrap' ? (
          <FaMousePointer size={30} />
        ) : (
          <Icon path={mdiCursorDefaultOutline} size={2} />
        ),
      featureName: Types.BIG_CURSOR,
      text: translation[lang].bigCursor
    },
    {
      feature: highlightLink,
      handler: handleLinkHighlightingChange,
      icon:
        theme === 'bootstrap' ? (
          <FaLink size={30} />
        ) : (
          <Icon path={mdiLinkBoxOutline} size={2} />
        ),
      featureName: Types.HIGHLIGHT_LINK,
      text: translation[lang].highlightLink
    },
    {
      feature: readingMask,
      handler: handleReadingMask,
      icon:
        theme === 'bootstrap' ? (
          <MdOutlineSplitscreen size={30} />
        ) : (
          <Icon path={mdiMinusBoxOutline} size={2} />
        ),
      featureName: Types.READING_MASK,
      text: translation[lang].readingMask
    },
    {
      feature: hideImage,
      handler: handleHideImage,
      icon:
        theme === 'bootstrap' ? (
          <LuImageOff size={30} />
        ) : (
          <Icon path={mdiImageOffOutline} size={2} />
        ),
      featureName: Types.HIDE_IMAGE,
      text: translation[lang].hideImage
    },
    {
      feature: increasedLetterSpace,
      handler: handleLetterSpace,
      icon:
        theme === 'bootstrap' ? (
          <FaArrowsAltH size={30} />
        ) : (
          <Icon path={mdiArrowLeftRightBoldOutline} size={2} />
        ),
      featureName: Types.INCREASE_LETTER_SPACE,
      text: translation[lang].increaseLetterSpace
    },
    {
      feature: increasedLineHeight,
      handler: handleLineHeight,
      icon:
        theme === 'bootstrap' ? (
          <FaArrowsAltV size={30} />
        ) : (
          <Icon path={mdiArrowUpDownBoldOutline} size={2} />
        ),
      featureName: Types.INCREASE_LINE_HEIGHT,
      text: translation[lang].increaseLineHeight
    },
    {
      feature: darkContrast,
      handler: handleDarkContrast,
      icon:
        theme === 'bootstrap' ? (
          <ImContrast size={30} />
        ) : (
          <Icon path={mdiContrastCircle} size={2} />
        ),
      featureName: Types.DARK_CONTRAST,
      text: translation[lang].darkContrast
    },
    {
      feature: lightContrast,
      handler: handleLightContrast,
      icon:
        theme === 'bootstrap' ? (
          <ImContrast size={30} />
        ) : (
          <Icon path={mdiContrastCircle} size={2} />
        ),
      featureName: Types.LIGHT_CONTRAST,
      text: translation[lang].lightContrast
    },
    {
      feature: invertColor,
      handler: handleInvertColor,
      icon:
        theme === 'bootstrap' ? (
          <MdInvertColors size={30} />
        ) : (
          <Icon path={mdiInvertColors} size={2} />
        ),
      featureName: Types.INVERT_COLOR,
      text: translation[lang].invertColor
    },
    {
      feature: isPageStructureOpen,
      handler: handlePageStructureOpening,
      icon:
        theme === 'bootstrap' ? (
          <LiaPagerSolid size={30} />
        ) : (
          <Icon path={mdiPageNextOutline} size={2} />
        ),
      featureName: Types.PAGE_STRUCTURE,
      text: translation[lang].pageStructure
    },
    {
      feature: shouldLeftAlign,
      handler: handleLeftAlign,
      icon:
        theme === 'bootstrap' ? (
          <GrTextAlignLeft size={30} />
        ) : (
          <Icon path={mdiReceiptTextArrowLeftOutline} size={2} />
        ),
      featureName: Types.LEFT_ALIGN,
      text: translation[lang].leftAlign
    },
    {
      feature: shouldRightAlign,
      handler: handleRightAlign,
      icon:
        theme === 'bootstrap' ? (
          <GrTextAlignRight size={30} />
        ) : (
          <Icon path={mdiReceiptTextArrowRightOutline} size={2} />
        ),
      featureName: Types.RIGHT_ALIGN,
      text: translation[lang].rightAlign
    },
    {
      feature: lowSaturation,
      handler: handleLowSaturation,
      icon:
        theme === 'bootstrap' ? (
          <MdInvertColors size={30} />
        ) : (
          <Icon path={mdiInvertColors} size={2} />
        ),
      featureName: Types.LOW_SATURATION,
      text: translation[lang].lowSaturation
    },
    {
      feature: highSaturation,
      handler: handleHighSaturation,
      icon:
        theme === 'bootstrap' ? (
          <MdInvertColors size={30} />
        ) : (
          <Icon path={mdiInvertColors} size={2} />
        ),
      featureName: Types.HIGH_SATURATION,
      text: translation[lang].highSaturation
    },
    {
      feature: desaturation,
      handler: handleDesaturation,
      icon:
        theme === 'bootstrap' ? (
          <MdInvertColors size={30} />
        ) : (
          <Icon path={mdiInvertColors} size={2} />
        ),
      featureName: Types.DESATURATE,
      text: translation[lang].desaturate
    },
    {
      feature: magnify,
      handler: handleMagnify,
      icon:
        theme === 'bootstrap' ? (
          magnify ? (
            <HiMagnifyingGlassMinus size={30} />
          ) : (
            <HiMagnifyingGlassPlus size={30} />
          )
        ) : magnify ? (
          <Icon path={mdiMagnifyMinus} size={2} />
        ) : (
          <Icon path={mdiMagnifyPlus} size={2} />
        ),
      featureName: Types.MAGNIFY,
      text: translation[lang].magnify
    }
  ];

  const MUIOrBootstrap = theme === 'bootstrap' ? Bootstrap : MUI;

  return (
    <>
      <MUIOrBootstrap
        children={children}
        handleMouseMove={handleMouseMove}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        classes={classes}
        mouseYPosition={mouseYPosition}
        links={links}
        headings={headings}
        handleReset={handleReset}
        language={lang}
        features={features.filter((f) => {
          return !excludedFeatures.includes(f.featureName);
        })}
        resetDisabled={
          !bigCursor &&
          !hideImage &&
          !highlightLink &&
          !increasedLetterSpace &&
          !increasedLineHeight &&
          !readingMask &&
          !darkContrast &&
          !lightContrast &&
          !invertColor &&
          !isPageStructureOpen &&
          !shouldLeftAlign &&
          !shouldRightAlign &&
          !lowSaturation &&
          !highSaturation &&
          !desaturation &&
          !magnify
        }
      />
    </>
  );
};

export default Accessibility;
