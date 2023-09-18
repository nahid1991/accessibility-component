import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import ReadingMask from "../ReadingMask";
import {FaArrowsAltH, FaArrowsAltV, FaLink, FaMousePointer} from "react-icons/fa";
import {MdInvertColors, MdOutlineSplitscreen} from "react-icons/md";
import {ImContrast} from "react-icons/im";
import {LuImageOff} from "react-icons/lu";
import {BiAccessibility} from "react-icons/bi";

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
  handleMouseMove?: (event: React.MouseEvent<HTMLDivElement | HTMLElement>) => void;
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
}

const Bootstrap: React.FC<BootstrapInterface> = React.forwardRef((
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
  },
  ref
) => {
  return (
    <Container
      fluid
      className={bigCursor ? 'cursor' : ''}
      onMouseMove={(event) => handleMouseMove(event)}
      style={{
        maxWidth: '100vw',
        minHeight: '100vh',
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
        <Container
          className="left-bar"
          style={{
            border: "1px solid gray",
            backgroundColor: '#eff1f5',
            zIndex: 9999,
            top: 0,
            left: 0,
            overflow: 'auto',
            height: "100%",
            width: "40%"
          }}
        >
        <Row>
          <Col md={4} sm={12}>
            <Button
              className={`accessibility-button mb-1`}
              variant={bigCursor ? "primary" : "outline-dark"}
              size="lg"
              onClick={() => handleBigCursorChange()}
              style={{
                cursor: bigCursor ? 'inherit' : 'pointer',
                height: "125px",
                borderRadius: "20px",
                padding: "inherit",
                width: "100%",
              }}
            >
              <Container>
                <Row>
                  <Col xs={12} className="mb-3">
                    <FaMousePointer size={30}/>
                  </Col>
                  <Col xs={12}>
                    <h5>Big Cursor</h5>
                  </Col>
                </Row>
              </Container>
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <Button
              className={`accessibility-button mb-1`}
              variant={readingMask ? "primary" : "outline-dark"}
              size="lg"
              onClick={() => handleReadingMask()}
              style={{
                cursor: bigCursor ? 'inherit' : 'pointer',
                height: "125px",
                borderRadius: "20px",
                padding: "inherit",
                width: "100%",
              }}
            >
              <Container>
                <Row>
                  <Col xs={12} className="mb-3">
                    <MdOutlineSplitscreen size={30}/>
                  </Col>
                  <Col xs={12}>
                    <h5>Reading Mask</h5>
                  </Col>
                </Row>
              </Container>
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <Button
              className={`accessibility-button mb-1`}
              variant={hideImage ? "primary" : "outline-dark"}
              size="lg"
              onClick={() => handleHideImage()}
              style={{
                cursor: bigCursor ? 'inherit' : 'pointer',
                height: "125px",
                borderRadius: "20px",
                padding: "inherit",
                width: "100%",
              }}
            >
              <Container>
                <Row>
                  <Col xs={12} className="mb-3">
                    <LuImageOff size={30}/>
                  </Col>
                  <Col xs={12}>
                    <h5>Hide Image</h5>
                  </Col>
                </Row>
              </Container>
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <Button
              className={`accessibility-button mb-1`}
              variant={highlightLink ? "primary" : "outline-dark"}
              size="lg"
              onClick={() => handleLinkHighlightingChange()}
              style={{
                cursor: bigCursor ? 'inherit' : 'pointer',
                height: "125px",
                borderRadius: "20px",
                padding: "inherit",
                width: "100%",
              }}
            >
              <Container>
                <Row>
                  <Col xs={12} className="mb-3">
                    <FaLink size={30}/>
                  </Col>
                  <Col xs={12}>
                    <h5>Highlight Link</h5>
                  </Col>
                </Row>
              </Container>
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <Button
              className={`accessibility-button mb-1`}
              variant={increasedLineHeight ? "primary" : "outline-dark"}
              size="lg"
              onClick={() => handleLineHeight()}
              style={{
                cursor: bigCursor ? 'inherit' : 'pointer',
                height: "125px",
                borderRadius: "20px",
                padding: "inherit",
                width: "100%",
              }}
            >
              <Container>
                <Row>
                  <Col xs={12} className="mb-3">
                    <FaArrowsAltV size={30}/>
                  </Col>
                  <Col xs={12}>
                    <h6>Increase Line Height</h6>
                  </Col>
                </Row>
              </Container>
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <Button
              className={`accessibility-button mb-1`}
              variant={increasedLetterSpace ? "primary" : "outline-dark"}
              size="lg"
              onClick={() => handleLetterSpace()}
              style={{
                cursor: bigCursor ? 'inherit' : 'pointer',
                height: "125px",
                borderRadius: "20px",
                padding: "inherit",
                width: "100%",
              }}
            >
              <Container>
                <Row>
                  <Col xs={12} className="mb-3">
                    <FaArrowsAltH size={30}/>
                  </Col>
                  <Col xs={12}>
                    <h6>Increase Letter Space</h6>
                  </Col>
                </Row>
              </Container>
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <Button
              className={`accessibility-button mb-1`}
              variant={darkContrast ? "primary" : "outline-dark"}
              size="lg"
              onClick={() => handleDarkContrast()}
              style={{
                cursor: bigCursor ? 'inherit' : 'pointer',
                height: "125px",
                borderRadius: "20px",
                padding: "inherit",
                width: "100%",
              }}
            >
              <Container>
                <Row>
                  <Col xs={12} className="mb-3">
                    <ImContrast size={30}/>
                  </Col>
                  <Col xs={12}>
                    <h6>Dark Contrast</h6>
                  </Col>
                </Row>
              </Container>
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <Button
              className={`accessibility-button mb-1`}
              variant={lightContrast ? "primary" : "outline-dark"}
              size="lg"
              onClick={() => handleLightContrast()}
              style={{
                cursor: bigCursor ? 'inherit' : 'pointer',
                height: "125px",
                borderRadius: "20px",
                padding: "inherit",
                width: "100%",
              }}
            >
              <Container>
                <Row>
                  <Col xs={12} className="mb-3">
                    <ImContrast size={30}/>
                  </Col>
                  <Col xs={12}>
                    <h6>Light Contrast</h6>
                  </Col>
                </Row>
              </Container>
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <Button
              className={`accessibility-button mb-1`}
              variant={invertColor ? "primary" : "outline-dark"}
              size="lg"
              onClick={() => handleInvertColor()}
              style={{
                cursor: bigCursor ? 'inherit' : 'pointer',
                height: "125px",
                borderRadius: "20px",
                padding: "inherit",
                width: "100%",
              }}
            >
              <Container>
                <Row>
                  <Col xs={12} className="mb-3">
                    <MdInvertColors size={30}/>
                  </Col>
                  <Col xs={12}>
                    <h6>Invert Color</h6>
                  </Col>
                </Row>
              </Container>
            </Button>
          </Col>
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
      <Container className={classes.join()}>
        {children}
      </Container>
    </Container>
  )
});

export default Bootstrap;