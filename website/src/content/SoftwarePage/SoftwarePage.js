import React from 'react';
import { DATA } from '../../components/Data/SoftwareData';
import { Software, shuffleArray } from '../../components/Info';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  Link,
} from 'carbon-components-react';

var shuffledDATA = shuffleArray(DATA);

const SoftwarePage = () => {
  return (
    <div
      className="bx--grid bx--grid--full-width landing-page landing-page__banner"
      style={{ minHeight: '100vh' }}>
      <div className="bx--col-lg-16">
        <div className="bx--row publications-page__tab-content">
          <StructuredListWrapper className="low-margin">
            <StructuredListHead>
              <StructuredListRow>
                <StructuredListCell head>
                  XAIP Software in the Wild
                  <br />
                  <p className="disclaimer">
                    Want to contribute to this list? Open an issue{' '}
                    <Link
                      href="https://github.com/TathagataChakraborti/xaip"
                      target="_blank">
                      here
                    </Link>{' '}
                    or get in touch with us on our{' '}
                    <Link
                      href="https://join.slack.com/t/xaip/shared_invite/zt-svdiylde-EwqOBkguynR6jKbi_UKDXA"
                      target="_blank">
                      Slack
                    </Link>
                    .
                  </p>
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
          </StructuredListWrapper>
        </div>

        <div className="bx--row">
          {shuffledDATA.map((item, key) => (
            <React.Fragment key={key}>
              <Software props={item} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwarePage;
