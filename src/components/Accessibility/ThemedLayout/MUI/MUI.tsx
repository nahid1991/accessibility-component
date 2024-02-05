import React from "react";
import Icon from "@mdi/react";
import ReadingMask from "../../ReadingMask";
import { Box, Button, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { mdiWheelchairAccessibility } from "@mdi/js";
import PageStructure from "../../PageStructure/PageStructure";
import { HeadingData } from "../../Accessibility";
import { translation } from "../../Language";
import { Feature, Types } from "../../types";

export interface MUIProps {
  children?: React.ReactNode;
  mouseYPosition?: number;
  isOpen?: boolean;
  classes?: string[];
  handleMouseMove?: (
    event: React.MouseEvent<HTMLDivElement | HTMLElement>,
  ) => void;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  links?: { href: string; text: string }[];
  headings?: HeadingData[];
  handleReset?: () => void;
  language?: string;
  features?: Feature[];
  resetDisabled?: boolean;
}

const MUI: React.FC<MUIProps> = React.forwardRef<HTMLDivElement, MUIProps>(
  (
    {
      children,
      mouseYPosition = 0,
      isOpen = false,
      classes = [],
      handleMouseMove = () => {},
      setIsOpen = () => {},
      links = [],
      headings = [],
      handleReset = () => {},
      language = "en",
      features = [],
      resetDisabled = false,
    },
    ref,
  ) => {
    const bigCursor =
      features.filter((f) => f.featureName === Types.BIG_CURSOR).length > 0 &&
      features.filter((f) => f.featureName === Types.BIG_CURSOR)[0].feature;
    const readingMask =
      features.filter((f) => f.featureName === Types.READING_MASK).length > 0 &&
      features.filter((f) => f.featureName === Types.READING_MASK)[0].feature;

    return (
      <Box
        className={bigCursor ? "cursor" : ""}
        onMouseMove={(event) => handleMouseMove(event)}
        style={{
          maxWidth: "100vw",
          minHeight: "100vh",
        }}
        ref={ref}
      >
        {readingMask && (
          <ReadingMask
            mousePosition={mouseYPosition}
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
              border: "1px solid gray",
              backgroundColor: "#eff1f5",
              zIndex: 9999,
              position: "fixed !important",
              top: 0,
              left: 0,
              overflow: "auto",
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
                    paddingLeft: "5px",
                  }}
                >
                  <Typography variant="caption">
                    {translation[language].accessibilityMenu}(ctrl + u)
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="text"
                    disabled={resetDisabled}
                    fullWidth
                    onClick={() => handleReset()}
                    aria-label={translation[language].reset}
                  >
                    {translation[language].reset}
                  </Button>
                </Grid>
              </Grid>
              {features.map((f, index) => (
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  flexDirection="column"
                  alignItems="center"
                  aria-label={f.text}
                  sx={{
                    minHeight: "125px",
                    height: "auto",
                  }}
                >
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => f.handler()}
                    sx={{
                      backgroundColor: f.feature ? "#87B922" : "white",
                      borderColor: f.feature ? "#fff" : "#000",
                      color: f.feature ? "#fff" : "#000",
                      borderRadius: "20px",
                      padding: "inherit",
                      height: "100%",
                    }}
                    className={`accessibility-button`}
                    tabIndex={index+1}
                  >
                    <Stack
                      direction="column"
                      width="100%"
                      alignItems="center"
                      gap="2px"
                    >
                      <Box>{f.icon}</Box>
                      <Box>
                        <Typography variant="button">{f.text}</Typography>
                      </Box>
                    </Stack>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            cursor: bigCursor ? "inherit" : "pointer",
            left: isOpen ? "41%" : "0",
            color: "black",
            position: "fixed",
          }}
          variant="outlined"
          className="disabled-person-button"
        >
          <Icon path={mdiWheelchairAccessibility} size={2} />
        </Button>
        <Box className={classes.join(" ")}>{children}</Box>
        {features.filter((f) => f.featureName === Types.PAGE_STRUCTURE).length >
          0 && (
          <PageStructure
            isOpen={
              features.filter((f) => f.featureName === Types.PAGE_STRUCTURE)[0]
                .feature
            }
            links={links}
            headings={headings}
            onClose={
              features.filter((f) => f.featureName === Types.PAGE_STRUCTURE)[0]
                .handler
            }
            language={language}
            bigCursor={bigCursor}
          />
        )}
      </Box>
    );
  },
);

// eslint-disable-next-line react-refresh/only-export-components
export default MUI;
