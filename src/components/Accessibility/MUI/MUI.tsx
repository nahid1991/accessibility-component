import React from 'react';
import Icon from '@mdi/react';
import ReadingMask from '../ReadingMask';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import {
  mdiArrowLeftRightBoldOutline,
  mdiArrowUpDownBoldOutline,
  mdiContrastCircle,
  mdiCursorDefaultOutline,
  mdiImageOffOutline,
  mdiInvertColors,
  mdiLinkBoxOutline,
  mdiMinusBoxOutline,
  mdiPageNextOutline,
  mdiReceiptTextArrowLeftOutline,
  mdiReceiptTextArrowRightOutline,
  mdiWheelchairAccessibility
} from '@mdi/js';
import PageStructure from '../PageStructure/PageStructure';
import { HeadingData } from '../Accessibility';

export interface MUIProps {
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
}

const MUI: React.FC<MUIProps> = React.forwardRef(
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
      handleReset = () => {}
    },
    ref
  ) => {
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
            height="100%"
            width="40%"
            justifyContent="flex-start"
            sx={{
              border: '1px solid gray',
              backgroundColor: '#eff1f5',
              zIndex: 9999,
              position: 'fixed !important',
              top: 0,
              left: 0,
              overflow: 'auto'
            }}
          >
            <Grid container width="100%" flexDirection="row">
              <Grid
                container
                item
                flexDirection="row"
                justifyContent="space-between"
                xs={12}
                sx={{
                  marginBottom: "2px",
                }}
              >
                <Grid
                  item
                  xs={8}
                  sx={{
                    paddingLeft: "5px"
                  }}
                >
                  <Typography variant="h5">
                    Accessibility Menu
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}>
                  <Button
                    variant="text"
                    disabled={
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
                      !shouldRightAlign
                    }
                    fullWidth
                    onClick={() => handleReset()}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleBigCursorChange()}
                  sx={{
                    height: '125px',
                    backgroundColor: bigCursor ? '#87B922' : 'white',
                    borderColor: bigCursor ? '#fff' : '#000',
                    color: bigCursor ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiCursorDefaultOutline} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Big Cursor</Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleReadingMask()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: readingMask ? '#87B922' : 'white',
                    borderColor: readingMask ? '#fff' : '#000',
                    color: readingMask ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="3px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiMinusBoxOutline} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Reading Mask</Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleLinkHighlightingChange()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: highlightLink ? '#87B922' : 'white',
                    borderColor: highlightLink ? '#fff' : '#000',
                    color: highlightLink ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiLinkBoxOutline} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Highlight Link</Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleHideImage()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: hideImage ? '#87B922' : 'white',
                    borderColor: hideImage ? '#fff' : '#000',
                    color: hideImage ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiImageOffOutline} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Hide Image</Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleLetterSpace()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: increasedLetterSpace ? '#87B922' : 'white',
                    borderColor: increasedLetterSpace ? '#fff' : '#000',
                    color: increasedLetterSpace ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiArrowLeftRightBoldOutline} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">
                        Increase Letter Space
                      </Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleLineHeight()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: increasedLineHeight ? '#87B922' : 'white',
                    borderColor: increasedLineHeight ? '#fff' : '#000',
                    color: increasedLineHeight ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiArrowUpDownBoldOutline} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">
                        Increase Line Height
                      </Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleDarkContrast()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: darkContrast ? '#87B922' : 'white',
                    borderColor: darkContrast ? '#fff' : '#000',
                    color: darkContrast ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiContrastCircle} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Dark Contrast</Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleLightContrast()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: lightContrast ? '#87B922' : 'white',
                    borderColor: lightContrast ? '#fff' : '#000',
                    color: lightContrast ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiContrastCircle} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Light Contrast</Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleInvertColor()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: invertColor ? '#87B922' : 'white',
                    borderColor: invertColor ? '#fff' : '#000',
                    color: invertColor ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiInvertColors} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Invert Color</Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handlePageStructureOpening()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: isPageStructureOpen ? '#87B922' : 'white',
                    borderColor: isPageStructureOpen ? '#fff' : '#000',
                    color: isPageStructureOpen ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiPageNextOutline} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Page Structure</Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleLeftAlign()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: shouldLeftAlign ? '#87B922' : 'white',
                    borderColor: shouldLeftAlign ? '#fff' : '#000',
                    color: shouldLeftAlign ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiReceiptTextArrowLeftOutline} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Left Align</Typography>
                    </Box>
                  </Stack>
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleRightAlign()}
                  sx={{
                    cursor: bigCursor ? 'inherit' : 'pointer',
                    height: '125px',
                    backgroundColor: shouldRightAlign ? '#87B922' : 'white',
                    borderColor: shouldRightAlign ? '#fff' : '#000',
                    color: shouldRightAlign ? '#fff' : '#000',
                    borderRadius: '20px',
                    padding: 'inherit'
                  }}
                  className={`accessibility-button`}
                >
                  <Stack
                    direction="column"
                    width="100%"
                    alignItems="center"
                    gap="2px"
                  >
                    <Box sx={{ height: '60px' }}>
                      <Icon path={mdiReceiptTextArrowRightOutline} size={2} />
                    </Box>
                    <Box sx={{ height: '30px' }}>
                      <Typography variant="button">Right Align</Typography>
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
        <Box className={classes.join(' ')}>{children}</Box>
        <PageStructure
          isOpen={isPageStructureOpen}
          links={links}
          headings={headings}
          onClose={handlePageStructureOpening}
        />
      </Box>
    );
  }
);

// eslint-disable-next-line react-refresh/only-export-components
export default MUI;
