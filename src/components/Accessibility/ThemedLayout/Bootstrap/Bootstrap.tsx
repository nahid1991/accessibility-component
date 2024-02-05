import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ReadingMask from "../../ReadingMask";
import { BiAccessibility } from "react-icons/bi";
import { HeadingData } from "../../Accessibility";
import PageStructure from "../../PageStructure/PageStructure";
import { translation } from "../../Language";
import { Feature, Types } from "../../types";

interface BootstrapInterface {
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

const Bootstrap: React.FC<BootstrapInterface> = React.forwardRef<
  HTMLDivElement,
  BootstrapInterface
>(
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
      <Container
        fluid
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
          <Container
            className="left-bar"
            style={{
              border: "1px solid gray",
              backgroundColor: "#eff1f5",
              zIndex: 9999,
              top: 0,
              left: 0,
              overflow: "auto",
              height: "100%",
              width: "40%",
            }}
          >
            <Row>
              <Col
                md={12}
                sm={12}
                style={{
                  marginBottom: "5px",
                }}
              >
                <Row>
                  <Col
                    md={6}
                    sm={12}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <span>{translation[language].accessibilityMenu}(ctrl + u)</span>
                  </Col>
                  <Col
                    md={6}
                    sm={12}
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <Button
                      onClick={() => handleReset()}
                      disabled={resetDisabled}
                      aria-label={translation[language].reset}
                    >
                      {translation[language].reset}
                    </Button>
                  </Col>
                </Row>
              </Col>
              {features.map((f, index) => (
                <Col md={6} sm={12}>
                  <Button
                    className={`accessibility-button mb-1`}
                    variant={f.feature ? "primary" : "outline-dark"}
                    size="lg"
                    onClick={() => f.handler()}
                    style={{
                      cursor: bigCursor ? "inherit" : "pointer",
                      minHeight: "125px",
                      height: "auto",
                      borderRadius: "20px",
                      padding: "inherit",
                      width: "100%",
                      textOverflow: "ellipsis",
                    }}
                    aria-label={f.text}
                    tabIndex={index+1}
                  >
                    <Container>
                      <Row>
                        <Col xs={12} className="mb-3">
                          {f.icon}
                        </Col>
                        <Col xs={12}>
                          <span>{f.text}</span>
                        </Col>
                      </Row>
                    </Container>
                  </Button>
                </Col>
              ))}
            </Row>
          </Container>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            cursor: bigCursor ? "inherit" : "pointer",
            left: isOpen ? "41%" : "0",
            color: "black",
            position: "fixed",
          }}
          variant="outline"
          className="disabled-person-button"
        >
          <BiAccessibility size={30} />
        </Button>
        <Container className={classes.join(" ")}>{children}</Container>
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
      </Container>
    );
  },
);

export default Bootstrap;
