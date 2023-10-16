import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReadingMask from '../ReadingMask';
import {
  FaArrowsAltH,
  FaArrowsAltV,
  FaLink,
  FaMousePointer
} from 'react-icons/fa';
import { MdInvertColors, MdOutlineSplitscreen } from 'react-icons/md';
import { ImContrast } from 'react-icons/im';
import { LuImageOff } from 'react-icons/lu';
import { BiAccessibility } from 'react-icons/bi';
import {HeadingData} from "../Accessibility";
import PageStructure from "../PageStructure/PageStructure";
import {LiaPagerSolid} from "react-icons/lia";
import {GrTextAlignLeft, GrTextAlignRight} from "react-icons/gr";
import {translation} from "../Language";
import {Features} from "../Features";

interface BootstrapInterface {
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

const Bootstrap: React.FC<BootstrapInterface> = React.forwardRef(
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
      language = "en",
      excludedFeatures = []
    },
    ref
  ) => {
    console.log(ref);
    return (
      <Container
        fluid
        className={bigCursor ? 'cursor' : ''}
        onMouseMove={(event) => handleMouseMove(event)}
        style={{
          maxWidth: '100vw',
          minHeight: '100vh'
        }}
        ref={null}
      >
        {readingMask && (
          <ReadingMask
            position={mouseYPosition}
            mainHeight={window.innerHeight}
          />
        )}
        {isOpen && (
          <Container
            className="left-bar"
            style={{
              border: '1px solid gray',
              backgroundColor: '#eff1f5',
              zIndex: 9999,
              top: 0,
              left: 0,
              overflow: 'auto',
              height: '100%',
              width: '40%'
            }}
          >
            <Row>
              <Col md={12} sm={12} style={{
                marginBottom: "5px"
              }}>
                <Row>
                  <Col md={6} sm={12} style={{
                    textAlign: "left"
                  }}>
                    <span>{translation[language].accessibilityMenu}</span>
                  </Col>
                  <Col md={6} sm={12} style={{
                    textAlign: "right"
                  }}>
                    <Button onClick={() => handleReset()}
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
                        !shouldRightAlign &&
                        !lowSaturation &&
                        !highSaturation &&
                        !desaturation
                      }
                    >{translation[language].reset}</Button>
                  </Col>
                </Row>
              </Col>
              {
                !excludedFeatures.includes(Features.BIG_CURSOR) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={bigCursor ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleBigCursorChange()}
                      style={{
                        cursor: bigCursor ? 'inherit' : 'pointer',
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <FaMousePointer size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].bigCursor}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.READING_MASK) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={readingMask ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleReadingMask()}
                      style={{
                        cursor: bigCursor ? 'inherit' : 'pointer',
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <MdOutlineSplitscreen size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].readingMask}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.HIDE_IMAGE) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={hideImage ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleHideImage()}
                      style={{
                        cursor: bigCursor ? 'inherit' : 'pointer',
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <LuImageOff size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].hideImage}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.HIGHLIGHT_LINK) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={highlightLink ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleLinkHighlightingChange()}
                      style={{
                        cursor: bigCursor ? 'inherit' : 'pointer',
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <FaLink size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].highlightLink}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.INCREASE_LETTER_SPACE) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={increasedLetterSpace ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleLetterSpace()}
                      style={{
                        cursor: bigCursor ? 'inherit' : 'pointer',
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <FaArrowsAltH size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].increaseLetterSpace}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.INCREASE_LINE_HEIGHT) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={increasedLineHeight ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleLineHeight()}
                      style={{
                        cursor: bigCursor ? 'inherit' : 'pointer',
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <FaArrowsAltV size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].increaseLineHeight}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.DARK_CONTRAST) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={darkContrast ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleDarkContrast()}
                      style={{
                        cursor: bigCursor ? 'inherit' : 'pointer',
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <ImContrast size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].darkContrast}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.LIGHT_CONTRAST) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={lightContrast ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleLightContrast()}
                      style={{
                        cursor: bigCursor ? 'inherit' : 'pointer',
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <ImContrast size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].lightContrast}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.INVERT_COLOR) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={invertColor ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleInvertColor()}
                      style={{
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <MdInvertColors size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].invertColor}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.LEFT_ALIGN) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={shouldLeftAlign ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleLeftAlign()}
                      style={{
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <GrTextAlignLeft size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].leftAlign}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.RIGHT_ALIGN) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={shouldRightAlign ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleRightAlign()}
                      style={{
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <GrTextAlignRight size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].rightAlign}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.LOW_SATURATION) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={lowSaturation ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleLowSaturation()}
                      style={{
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <MdInvertColors size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].lowSaturation}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.HIGH_SATURATION) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={highSaturation ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleHighSaturation()}
                      style={{
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <MdInvertColors size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].hightSaturation}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
              {
                !excludedFeatures.includes(Features.DESATURATE) && (
                  <Col md={4} sm={12}>
                    <Button
                      className={`accessibility-button mb-1`}
                      variant={desaturation ? 'primary' : 'outline-dark'}
                      size="lg"
                      onClick={() => handleDesaturation()}
                      style={{
                        height: '125px',
                        borderRadius: '20px',
                        padding: 'inherit',
                        width: '100%'
                      }}
                    >
                      <Container>
                        <Row>
                          <Col xs={12} className="mb-3">
                            <MdInvertColors size={30} />
                          </Col>
                          <Col xs={12}>
                            <span>{translation[language].desaturate}</span>
                          </Col>
                        </Row>
                      </Container>
                    </Button>
                  </Col>
                )
              }
            </Row>
          </Container>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            cursor: bigCursor ? 'inherit' : 'pointer',
            left: isOpen ? '41%' : '0',
            color: 'black',
            position: 'fixed'
          }}
          variant="outline"
          className="disabled-person-button"
        >
          <BiAccessibility size={30} />
        </Button>
        <Container className={classes.join(' ')}>{children}</Container>
        <PageStructure
          isOpen={isPageStructureOpen}
          links={links}
          headings={headings}
          onClose={handlePageStructureOpening}
          language={language}
        />
      </Container>
    );
  }
);

export default Bootstrap;
