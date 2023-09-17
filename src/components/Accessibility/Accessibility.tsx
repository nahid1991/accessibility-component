import React, { useEffect, useCallback, useState, useRef } from 'react';
import Icon from "@mdi/react";
import './Accessibility.css';
import ReadingMask from '../ReadingMask';
import {Box, Button, Grid, Stack, Typography} from '@mui/material';
import {
  mdiArrowLeftRightBoldOutline, mdiArrowUpDownBoldOutline, mdiContrastCircle,
  mdiCursorDefaultOutline,
  mdiImageOffOutline, mdiInvertColors,
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

  const handleBigCursorChange = useCallback(() => {
    setBigCursor(!bigCursor);
  }, [bigCursor]);

  const handleReadingMask = useCallback(() => {
    setReadingMask(!readingMask);
    setDarkContrast(false);
    setInvertColor(false);
    setLightContrast(false);
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

  const handleDarkContrast = useCallback(() => {
    setDarkContrast(!darkContrast);
    setLightContrast(false);
    setInvertColor(false);
  }, [darkContrast]);

  const handleLightContrast = useCallback(() => {
    setLightContrast(!lightContrast);
    setDarkContrast(false);
    setInvertColor(false);
  }, [lightContrast]);

  const handleInvertColor = useCallback(() => {
    setInvertColor(!invertColor);
    setLightContrast(false);
    setDarkContrast(false);
  }, [invertColor]);

  useEffect(() => {
    const bodyClasses = document.body.classList;
    invertColor ? bodyClasses.add("invert-color") : bodyClasses.remove("invert-color");
    lightContrast ? bodyClasses.add("light-contrast") : bodyClasses.remove("light-contrast");
    darkContrast ? bodyClasses.add("dark-contrast") : bodyClasses.remove("dark-contrast");
  }, [invertColor, darkContrast, lightContrast]);

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
        <Grid
          className="left-bar"
          flexDirection="column"
          height={'100vh'}
          width="40%"
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
          <Grid container width="100%" flexDirection="row">
            <Grid container item xs={12} sm={12} md={4} flexDirection="column" alignItems="center">
              <Button
                variant="outlined"
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
            </Grid>
            <Grid container item xs={12} sm={12} md={4} flexDirection="column" alignItems="center">
              <Button
                variant="outlined"
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
            </Grid>
            <Grid container item xs={12} sm={12} md={4} flexDirection="column" alignItems="center">
              <Button
                variant="outlined"
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
            </Grid>
            <Grid container item xs={12} sm={12} md={4} flexDirection="column" alignItems="center">
              <Button
                variant="outlined"
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
            </Grid>
            <Grid container item xs={12} sm={12} md={4} flexDirection="column" alignItems="center">
              <Button
                variant="outlined"
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
            </Grid>
            <Grid container item xs={12} sm={12} md={4} flexDirection="column" alignItems="center">
              <Button
                variant="outlined"
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
            </Grid>
            <Grid container item xs={12} sm={12} md={4} flexDirection="column" alignItems="center">
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleDarkContrast()}
                sx={{
                  cursor: bigCursor ? 'inherit' : 'pointer',
                  height: "125px",
                  backgroundColor: darkContrast ? "#87B922" : "white",
                  borderColor: darkContrast ? "#fff" : "#000",
                  color: darkContrast ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "inherit"
                }}
                className={`accessibility-button`}
              >
                <Stack direction="column" width="100%" alignItems="center" gap="2px">
                  <Box sx={{height: "60px"}}>
                    <Icon path={mdiContrastCircle} size={2} />
                  </Box>
                  <Box sx={{height: "30px"}}>
                    <Typography variant="button">Dark Contrast</Typography>
                  </Box>
                </Stack>
              </Button>
            </Grid>
            <Grid container item xs={12} sm={12} md={4} flexDirection="column" alignItems="center">
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleLightContrast()}
                sx={{
                  cursor: bigCursor ? 'inherit' : 'pointer',
                  height: "125px",
                  backgroundColor: lightContrast ? "#87B922" : "white",
                  borderColor: lightContrast ? "#fff" : "#000",
                  color: lightContrast ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "inherit"
                }}
                className={`accessibility-button`}
              >
                <Stack direction="column" width="100%" alignItems="center" gap="2px">
                  <Box sx={{height: "60px"}}>
                    <Icon path={mdiContrastCircle} size={2} />
                  </Box>
                  <Box sx={{height: "30px"}}>
                    <Typography variant="button">Light Contrast</Typography>
                  </Box>
                </Stack>
              </Button>
            </Grid>
            <Grid container item xs={12} sm={12} md={4} flexDirection="column" alignItems="center">
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleInvertColor()}
                sx={{
                  cursor: bigCursor ? 'inherit' : 'pointer',
                  height: "125px",
                  backgroundColor: invertColor ? "#87B922" : "white",
                  borderColor: invertColor ? "#fff" : "#000",
                  color: invertColor ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "inherit"
                }}
                className={`accessibility-button`}
              >
                <Stack direction="column" width="100%" alignItems="center" gap="2px">
                  <Box sx={{height: "60px"}}>
                    <Icon path={mdiInvertColors} size={2} />
                  </Box>
                  <Box sx={{height: "30px"}}>
                    <Typography variant="button">Invert Color</Typography>
                  </Box>
                </Stack>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          cursor: bigCursor ? 'inherit' : 'pointer',
          left: isOpen ? '41%' : '0',
          color: 'black',
          position: 'fixed'
        }}
        variant="outlined"
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
