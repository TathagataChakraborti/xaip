import React from 'react';
import { DATA } from '../../components/Data/PaperData';
import {
  MemberListCache,
  PCListCache,
} from '../../components/Data/XAIP2022Data';
import {
  Member,
  Talk,
  PCReduced,
  shuffleArray,
} from '../../components/Info';
import {
  Accordion,
  AccordionItem,
  Link,
  Button,
  Tag,
  Tile
} from 'carbon-components-react';

import { FaceDissatisfied16 } from '@carbon/icons-react';
import { FaceCool16 } from '@carbon/icons-react';

var MemberList = shuffleArray(MemberListCache);
var PCList = shuffleArray(PCListCache);

var items = [];
var shuffledData = DATA.filter(item => item.year === '2022');
shuffledData.sort(
  (item1, item2) =>
    item1.session * 10 + item1.position - (item2.session * 10 + item2.position)
);

shuffledData.forEach(function(item, key) {
  if (item.year === '2022') {
    if (item.invited) {
      items.push({
        id: item.id,
        label: 'Invited Talk | ' + item.title,
      });
    } else if (item.xaip) {
      items.push({
        id: item.id,
        label: 'XAIP 2022 Accepted Paper | ' + item.title,
      });
    }
  }
});

class Page2022 extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        className="bx--grid bx--grid--full-width landing-page"
        style={{ minHeight: '100vh' }}>
        <div id="program" className="bx--col-lg-12 bx--offset-lg-2">
          <br />
          <br />
          <br />
          <br />
          <h4>XAIP 2022 Program</h4>
          <hr />

          <p style={{ color: 'gray' }}>
            These are proceedings of the XAIP 2021 edition. You can also explore
            all previous editions by clicking{' '}
            <Link href="/#/explore">here</Link>.
          </p>
          <br />
          <br />

          <div className="bx--row">
            <Link
              href="https://openreview.net/group?id=icaps-conference.org/ICAPS/2022/Workshop/XAIP"
              style={{ marginLeft: '1rem', textDecoration: 'none' }}
              target="_blank">
              <Button kind="primary" size="sm">
                Open Review
              </Button>
            </Link>

            {/* <Link
              href="https://ibm.box.com/s/qds11d8aqzi8ja7pd8dh1695170qtyxn"
              target="_blank"
              style={{ marginLeft: '0.5rem', textDecoration: 'none' }}>
              <Button kind="secondary" size="sm">
                Recordings
              </Button>
            </Link> */}

            <Link
              href="https://join.slack.com/t/xaip2021/shared_invite/zt-svdiylde-EwqOBkguynR6jKbi_UKDXA"
              target="_blank"
              style={{ marginLeft: '0.5rem', textDecoration: 'none' }}>
              <Button kind="danger" size="sm">
                Slack
              </Button>
            </Link>
          </div>

          <br />
          <br />

          <div className="bx--col-lg-4">
            <Tile style={{ minHeight: '200px' }}>
              <Tag
                type="magenta"
                size="sm"
                style={{ borderRadius: '0', marginLeft: '0' }}>
                {' '}
                Coming Soon{' '}
              </Tag>

              <p>
                XAIP 2022
                <br />
                Schedule
              </p>
            </Tile>
        </div>

          <br />
          <h4>Accepted Papers</h4>
          <hr />
          <Accordion align="start">
            {shuffledData.map((item, key) => (
              <React.Fragment key={key}>
                <Talk props={item} />
              </React.Fragment>
            ))}
          </Accordion>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div id="team" className="bx--col-lg-12 bx--offset-lg-2 landing-page__banner">
          <h4>XAIP 2022 Organizing Team</h4>
          <hr />
          <Link href="mailto:xaip21team@gmail.com">
            <Button size="small" kind="secondary">
              Contact
            </Button>
          </Link>

          <div className="bx--row publications-page__tab-content">
            {MemberList.map((item, key) => (
              <React.Fragment key={key}>
                <Member props={item} />
              </React.Fragment>
            ))}
          </div>

          <br />
          <br />
          <br />


          <Accordion align="start">
            <AccordionItem open title="Extended Program Committee">
              <div className="bx--row">
                {PCList.map((item, key) => (
                  <React.Fragment key={key}>
                    <PCReduced props={item} />
                  </React.Fragment>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default Page2022;
