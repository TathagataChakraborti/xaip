import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  AccordionItem,
  Button,
  Tile,
  Link,
  Tag,
} from 'carbon-components-react';

import FaDownload16 from '@carbon/icons-react/lib/download/16';

const LinkList = ({
  primaryUrlName,
  primaryUrl,
  secondaryUrlName,
  secondaryUrl,
}) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={primaryUrl}>{primaryUrlName}</Link>
    </li>
    {secondaryUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={secondaryUrl}>{secondaryUrlName}</Link>
      </li>
    )}
  </ul>
);

const generateImageUrl = imageUrl => {
  return `${process.env.PUBLIC_URL}/images/team/${imageUrl}.png`;
};

const makePosterLink = e => {
  return `${process.env.PUBLIC_URL}/posters/[ID].png`.replace('[ID]', e);
};

function shuffleArray(array) {
  var newArray = [...array];
  let i = newArray.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

const Member = props => {
  return (
    <div className="bx--col-lg-4" style={{ padding: '1rem', display: 'grid'}}>
      <Tile style={{ backgroundColor: 'white' }}>
        <div className="bx--col-sm-2 bx--offset-sm-1 bx--col-lg-10 bx--offset-lg-3">
          <img
            style={{
              marginTop: '20px',
              marginBottom: '20px',
              borderRadius: '50%',
              maxWidth: '100%',
            }}
            src={generateImageUrl(props.props.image)}
            alt="Carbon illustration"
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href={props.props.link} target="_blank">
            {props.props.name}
          </Link>

          <h6>{props.props.affiliation}</h6>
        </div>
      </Tile>
    </div>
  );
};

const Software = props => {
  return (
    <Tile className="bx--col-lg-4">
      <div
        className="bx--col-16"
        style={{ padding: '15px', backgroundColor: 'white' }}>
        <div className="vertical-container" style={{ minHeight: '150px' }}>
          <h4>{props.props.name}</h4>

          <h6
            style={{
              fontWeight: 'normal',
              marginTop: '10px',
              marginBottom: '20px',
            }}>
            {props.props.tldr}
          </h6>

          <div className="bottom-center">
            {props.props.code && (
              <Link
                href={props.props.code}
                target="_blank"
                style={{ fontSize: '0.75rem', marginRight: '10px' }}>
                <Button
                  kind="ghost"
                  size="sm"
                  style={{ backgroundColor: 'aliceblue' }}>
                  Code
                </Button>
              </Link>
            )}

            {props.props.link && (
              <Link
                href={props.props.link}
                target="_blank"
                style={{ fontSize: '0.75rem', marginRight: '10px' }}>
                <Button
                  kind="ghost"
                  size="sm"
                  style={{ backgroundColor: 'aliceblue' }}>
                  Link
                </Button>
              </Link>
            )}

            {props.props.paper && (
              <Link
                href={props.props.paper}
                target="_blank"
                style={{ fontSize: '0.75rem' }}>
                <Button
                  kind="ghost"
                  size="sm"
                  style={{ backgroundColor: 'aliceblue' }}>
                  Paper
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Tile>
  );
};

const PC = props => {
  return (
    <Tile className="bx--col-lg-5">
      <div
        className="bx--col-16"
        style={{ padding: '10px', backgroundColor: 'white' }}>
        <div className="bx--col-sm-2 bx--offset-sm-1 bx--col-lg-10 bx--offset-lg-3">
          <img
            style={{
              marginTop: '10px',
              marginBottom: '10px',
              borderRadius: '50%',
              maxWidth: '100%',
            }}
            src={generateImageUrl(props.props.image)}
            alt="Carbon illustration"
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href={props.props.link}
            target="_blank"
            style={{ fontSize: '0.75rem' }}>
            {props.props.name}
          </Link>

          <h6 style={{ fontSize: '0.75rem' }}>{props.props.affiliation}</h6>

          {!props.props.affiliation && <h6 style={{ color: 'white' }}>.</h6>}
          {!props.props.overflow && <h6 style={{ color: 'white' }}>.</h6>}
        </div>
      </div>
    </Tile>
  );
};

const PCReduced = props => {
  return (
    <Tile className="bx--col-lg-4" style={{display: 'grid' }}>
      <div
        className="bx--col-16"
        style={{ padding: '10px', backgroundColor: 'white'}}>
        <div style={{ textAlign: 'center' }}>
          <h6 style={{ marginBottom: '5px' }}>{props.props.name}</h6>
          <span>{props.props.affiliation}</span>
        </div>
      </div>
    </Tile>
  );
};

const Speaker = props => {
  return (
    <Tile className="bx--col-lg-16" style={{ padding: '0' }}>
      <div
        className="bx--col-16"
        style={{ paddingBottom: '10px', backgroundColor: 'white' }}>
        <div className="bx--col-sm-2 bx--offset-sm-1 bx--col-lg-14 bx--offset-lg-1">
          <img
            style={{
              marginTop: '20px',
              marginBottom: '10px',
              borderRadius: '50%',
              maxWidth: '100%',
            }}
            src={generateImageUrl(props.props.image)}
            alt="Carbon illustration"
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href={props.props.link} target="_blank">
            {props.props.name}
          </Link>

          <h6>{props.props.affiliation}</h6>
        </div>
      </div>
    </Tile>
  );
};

const Paper = props => {
  return (
    <StructuredListWrapper
      style={{ marginBottom: '0' }}
      ariaLabel="Structured list">
      <StructuredListHead>
        <StructuredListRow>
          <StructuredListCell head>{props.props.title}</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow className="no-border">
          <StructuredListCell>
            <div>
              by <em>{props.props.authors}</em>
            </div>
            <br />
            <div>{props.props.abstract}</div>
            <br />
            <div>
              {props.props.xaip && <Tag type="red"> XAIP </Tag>}
              {props.props.uisp && <Tag type="purple"> UISP </Tag>}
              {props.props.invited && <Tag type="teal"> Invited </Tag>}
              {props.props.year && (
                <Tag type="cool-gray"> {props.props.year} </Tag>
              )}
              {props.props.link && (
                <Link
                  href={props.props.link}
                  target="_blank"
                  className="no-decoration-on-hover">
                  <Button kind="ghost" size="sm">
                    {' '}
                    <FaDownload16 />{' '}
                  </Button>
                </Link>
              )}
            </div>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

const Stub = props => {
  return (
    <StructuredListWrapper
      style={{ marginBottom: '0' }}
      ariaLabel="Structured list">
      <StructuredListHead>
        <StructuredListRow>
          <StructuredListCell head>
            <strong>{props.props.title}</strong>
            <br />
            <em style={{ fontWeight: 'normal' }}>by {props.props.authors}</em>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell>
            {props.props.abstract}

            <br />
            <br />

            {!props.props.invited && props.props.xaip && !props.props.hold && (
              <Link
                href={props.props.link}
                target="_blank"
                style={{ marginRight: '10px' }}>
                <Button
                  kind="secondary"
                  size="field"
                  style={{ minWidth: '175px', marginBottom: '20px' }}>
                  Read the Paper
                </Button>
              </Link>
            )}
            {!props.props.invited && props.props.xai && (
              <Link
                href={props.props.link}
                target="_blank"
                style={{ marginRight: '10px' }}>
                <Button
                  kind="secondary"
                  size="field"
                  style={{ minWidth: '175px', marginBottom: '20px' }}>
                  Read the Paper
                </Button>
              </Link>
            )}
            {!props.props.invited && (
              <Link
                href="https://join.slack.com/t/xaip2020/shared_invite/zt-i8uy3uw0-hRqomirHfO__c5Bu47Uunw"
                target="_blank">
                <Button
                  kind="danger"
                  size="field"
                  style={{ minWidth: '175px' }}>
                  Talk to Authors
                </Button>
              </Link>
            )}
          </StructuredListCell>
        </StructuredListRow>
        {!props.props.invited && (
          <StructuredListRow>
            <StructuredListCell>
              <img
                src={makePosterLink(props.props.xaipid)}
                width="100%"
                alt="Poster could not load."
              />
            </StructuredListCell>
          </StructuredListRow>
        )}
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

const Talk = props => {
  return (
    <AccordionItem
      title={
        <span>
          <strong>{props.props.title}</strong> | <em>{props.props.authors}</em>{' '}
          {props.props.link && (
            <Link href={props.props.link} target="_blank">
              <FaDownload16 />
            </Link>
          )}
        </span>
      }>
      <p>{props.props.abstract}</p>
      <br />
      <br />
      {props.props.link && (
        <Link
          href={props.props.link}
          target="_blank"
          className="no-decoration-on-hover">
          <Button kind="ghost" size="sm">
            Download
          </Button>
        </Link>
      )}
    </AccordionItem>
  );
};

const VideoPresentation = props => {
  return (
    <AccordionItem
      title={
        <span>
          <strong>{props.props.title}</strong> | <em>{props.props.authors}</em>{' '}
        </span>
      }>
      <p>{props.props.abstract}</p>
      <br />
      <br />
      {props.props.slides && (
        <Link
          href={props.props.slides}
          target="_blank"
          className="no-decoration-on-hover">
          <Button kind="ghost" size="sm">
            Slides
          </Button>
        </Link>
      )}
      {props.props.video && (
        <Link
          href={props.props.video}
          target="_blank"
          className="no-decoration-on-hover">
          <Button kind="ghost" size="sm">
            Video
          </Button>
        </Link>
      )}
    </AccordionItem>
  );
};

const Project = props => {
  return (
    <Tile className="bx--col-lg-5">
      <div
        className="bx--col-16"
        style={{ padding: '10px', backgroundColor: 'white' }}>
        <div className="bx--col-sm-2 bx--offset-sm-1 bx--col-lg-10 bx--offset-lg-3">
          <img
            style={{
              marginTop: '10px',
              marginBottom: '10px',
              maxWidth: '100%',
            }}
            src={generateImageUrl(props.props.image)}
            alt="Carbon illustration"
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href={props.props.link}
            target="_blank"
            style={{ fontSize: '0.75rem' }}>
            {props.props.name}
          </Link>
        </div>
      </div>
    </Tile>
  );
};

export {
  LinkList,
  Member,
  PC,
  PCReduced,
  Talk,
  Speaker,
  Stub,
  Paper,
  Software,
  Project,
  shuffleArray,
  VideoPresentation
};
