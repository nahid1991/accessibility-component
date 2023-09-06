import React, { useEffect, useCallback, useState, useRef } from 'react';
import Icon from "@mdi/react";
import './Accessibility.css';
import ReadingMask from '../ReadingMask';
import {Box, Button, Stack, Typography} from '@mui/material';
import {
  mdiArrowLeftRightBoldOutline, mdiArrowUpDownBoldOutline,
  mdiCursorDefaultOutline,
  mdiImageOffOutline,
  mdiLinkBoxOutline,
  mdiMinusBoxOutline,
  mdiWheelchairAccessibility
} from "@mdi/js";

export interface AccessibilityProps {
  children: React.ReactNode;
}

const Accessibility: React.FC<AccessibilityProps> = ({ children }) => {
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

  const handleBigCursorChange = useCallback(() => {
    setBigCursor(!bigCursor);
  }, [bigCursor]);

  const handleReadingMask = useCallback(() => {
    setReadingMask(!readingMask);
  }, [readingMask]);

  const handleLinkHighlightingChange = useCallback(() => {
    setHighlightLink(!highlightLink);
  }, [highlightLink]);

  const handleHideImage = useCallback(() => {
    setHideImage(!hideImage);
  }, [hideImage]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
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
    setIncreasedLetterSpace(!increasedLetterSpace);
  }, [increasedLetterSpace]);

  const handleLineHeight = useCallback(() => {
    setIncreasedLineHeight(!increasedLineHeight);
  }, [increasedLineHeight]);

  return (
    <Box
      className={bigCursor ? 'cursor' : ''}
      onMouseMove={(event) => handleMouseMove(event)}
      style={{
        maxWidth: '100vw',
        minHeight: '100vh'
      }}
      ref={ref}
    >
      {readingMask && (
        <ReadingMask
          position={mouseYPosition}
          mainHeight={window.innerHeight}
        />
      )}
      {isOpen && (
        <Stack
          className="left-bar"
          direction="column"
          height={'100vh'}
          width="30%"
          justifyContent="flex-start"
          sx={{
            border: "1px solid gray",
            backgroundColor: '#eff1f5',
            zIndex: 9999,
            position: 'fixed',
            top: 0,
            left: 0,
          }}
        >
          <Stack width="100%" flexDirection="row" flexWrap="wrap" gap="4px">
            <Stack width="32%">
              <Button
                variant="text"
                fullWidth
                onClick={() => handleBigCursorChange()}
                sx={{
                  cursor: bigCursor ? 'inherit' : 'pointer',
                  height: "125px",
                  backgroundColor: bigCursor ? "#87B922" : "white",
                  borderColor: bigCursor ? "#fff" : "#000",
                  color: bigCursor ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "inherit"
                }}
                className={`accessibility-button`}
              >
                <Stack direction="column" width="100%" alignItems="center" gap="2px">
                  <Box sx={{height: "60px"}}>
                    <Icon path={mdiCursorDefaultOutline} size={2} />
                  </Box>
                  <Box sx={{height: "30px"}}>
                    <Typography variant="button">Big Cursor</Typography>
                  </Box>
                </Stack>
              </Button>
            </Stack>
            <Stack width="32%">
              <Button
                variant="text"
                fullWidth
                onClick={() => handleReadingMask()}
                sx={{
                  cursor: bigCursor ? 'inherit' : 'pointer',
                  height: "125px",
                  backgroundColor: readingMask ? "#87B922" : "white",
                  borderColor: readingMask ? "#fff" : "#000",
                  color: readingMask ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "inherit"
                }}
                className={`accessibility-button`}
              >
                <Stack direction="column" width="100%" alignItems="center" gap="3px">
                  <Box sx={{height: "60px"}}>
                    <Icon path={mdiMinusBoxOutline} size={2} />
                  </Box>
                  <Box sx={{height: "30px"}}>
                    <Typography variant="button">Reading Mask</Typography>
                  </Box>
                </Stack>
              </Button>
            </Stack>
            <Stack width="32%">
              <Button
                variant="text"
                fullWidth
                onClick={() => handleLinkHighlightingChange()}
                sx={{
                  cursor: bigCursor ? 'inherit' : 'pointer',
                  height: "125px",
                  backgroundColor: highlightLink ? "#87B922" : "white",
                  borderColor: highlightLink ? "#fff" : "#000",
                  color: highlightLink ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "inherit"
                }}
                className={`accessibility-button`}
              >
                <Stack direction="column" width="100%" alignItems="center" gap="2px">
                  <Box sx={{height: "60px"}}>
                    <Icon path={mdiLinkBoxOutline} size={2} />
                  </Box>
                  <Box sx={{height: "30px"}}>
                    <Typography variant="button">Highlight Link</Typography>
                  </Box>
                </Stack>
              </Button>
            </Stack>
            <Stack width="32%">
              <Button
                variant="text"
                fullWidth
                onClick={() => handleHideImage()}
                sx={{
                  cursor: bigCursor ? 'inherit' : 'pointer',
                  height: "125px",
                  backgroundColor: hideImage ? "#87B922" : "white",
                  borderColor: hideImage ? "#fff" : "#000",
                  color: hideImage ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "inherit"
                }}
                className={`accessibility-button`}
              >
                <Stack direction="column" width="100%" alignItems="center" gap="2px">
                  <Box sx={{height: "60px"}}>
                    <Icon path={mdiImageOffOutline} size={2} />
                  </Box>
                  <Box sx={{height: "30px"}}>
                    <Typography variant="button">Hide Image</Typography>
                  </Box>
                </Stack>
              </Button>
            </Stack>
            <Stack width="32%">
              <Button
                variant="text"
                fullWidth
                onClick={() => handleLetterSpace()}
                sx={{
                  cursor: bigCursor ? 'inherit' : 'pointer',
                  height: "125px",
                  backgroundColor: increasedLetterSpace ? "#87B922" : "white",
                  borderColor: increasedLetterSpace ? "#fff" : "#000",
                  color: increasedLetterSpace ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "inherit"
                }}
                className={`accessibility-button`}
              >
                <Stack direction="column" width="100%" alignItems="center" gap="2px">
                  <Box sx={{height: "60px"}}>
                    <Icon path={mdiArrowLeftRightBoldOutline} size={2} />
                  </Box>
                  <Box sx={{height: "30px"}}>
                    <Typography variant="button">Increase Letter Space</Typography>
                  </Box>
                </Stack>
              </Button>
            </Stack>
            <Stack width="32%">
              <Button
                variant="text"
                fullWidth
                onClick={() => handleLineHeight()}
                sx={{
                  cursor: bigCursor ? 'inherit' : 'pointer',
                  height: "125px",
                  backgroundColor: increasedLineHeight ? "#87B922" : "white",
                  borderColor: increasedLineHeight ? "#fff" : "#000",
                  color: increasedLineHeight ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "inherit"
                }}
                className={`accessibility-button`}
              >
                <Stack direction="column" width="100%" alignItems="center" gap="2px">
                  <Box sx={{height: "60px"}}>
                    <Icon path={mdiArrowUpDownBoldOutline} size={2} />
                  </Box>
                  <Box sx={{height: "30px"}}>
                    <Typography variant="button">Increase Line Height</Typography>
                  </Box>
                </Stack>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          cursor: bigCursor ? 'inherit' : 'pointer',
          left: isOpen ? '32%' : '0',
          color: 'black',
          position: 'fixed'
        }}
        variant="text"
        className="disabled-person-button"
      >
        <Icon path={mdiWheelchairAccessibility} size={2} />
      </Button>
      <Box
        className={classes.join(' ')}>
        {children}
      </Box>
    </Box>
  );
};

export default Accessibility;
