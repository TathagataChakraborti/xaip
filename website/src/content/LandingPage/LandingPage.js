import React from 'react';
import { Download16 } from '@carbon/icons-react';
import {
  Link,
  ListItem,
  UnorderedList,
  Button,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  ProgressIndicator,
  ProgressStep,
  Modal,
  Tile,
} from 'carbon-components-react';
import { Member } from '../../components/Info';
import { OrganizingTeamList, SteeringCommitteeList } from '../../components/Data/HAXP2023Data';


class LandingPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      readme: false,
    };
  }

  onClickREADME = e => {
    this.setState({
      ...this.state,
      readme: true,
    });
  };

  onClickModalClose = e => {
    this.setState({
      ...this.state,
      readme: false,
    });
  };

  render() {
    return (
      <div>
        <div className="bx--grid bx--grid--full-width landing-page vertical-container fill-height">
          <div className="bx--row vertical-center">
            <div className="bx--col-lg-8">
              <h1 className="landing-page__heading">
                HAXP @{' '}
                <Link
                  href="https://icaps23.icaps-conference.org/"
                  target="_blank"
                  style={{ fontSize: 'inherit' }}>
                  ICAPS 2023
                </Link>
              </h1>
              {/*
              <p style={{ paddingTop: '5px', color: 'grey' }}>
                <Link href="#call">2022</Link> |{' '}
                <Link href="/#/2021">2021</Link> |{' '}
                <Link href="/#/2020">2020</Link>
              </p>
              */}
              <p style={{ paddingTop: '5px', color: 'grey' }}>
                July, 2023 | Pargue, Czech Republic
              </p>
              <br />
              <br />
              <p className="participation-page__p">
                As artificial intelligence (AI) is increasingly being adopted
                into application solutions, the challenge of supporting effective
                interactions with humans is becoming more apparent. Partly this
                is to support integrated working styles, in which humans and
                intelligent systems cooperate in problem-solving, but also it is
                a necessary step in the process of building and calibrating trust
                as humans migrate greater competence and responsibility to such
                systems. The International Workshop on Human-Aware and Explainable
                Planning (HAXP), formerly known as the Explainable AI Planning
                (XAIP) workshop, brings together the latest and best in human-AI
                interaction and explainability, in the context of planning,
                scheduling, RL and other forms of sequential decision-making
                process. The workshop is collocated with ICAPS, the premier
                conference on automated planning and scheduling.{' '}
                <Link href="/overview">
                  Read more
                </Link>
              </p>
              <br />
              <br />

              <div className="bx--row">
                <div className="bx--col-lg-4">
                  <Tile
                    style={{ minHeight: '175px', marginBottom: '20px' }}
                    className="announcement-card">
                    <div>
                      <p>
                        Landscape of <br />
                        Explainable AI <br /> Planning
                      </p>
                    </div>

                    <Button
                      style={{ maxWidth: '75%' }}
                      target="_blank"
                      href="https://explainableplanning.com"
                      className="no-decoration-on-hover"
                      size="sm"
                      kind="secondary">
                      Explore
                    </Button>
                  </Tile>
                </div>

                {/* <div className="bx--col-lg-4">
                  <Tile
                    style={{ minHeight: '175px' }}
                    className="announcement-card">
                    <div>
                      <p>
                        HAXP 2023
                      </p>
                    </div>

                    <Button
                      style={{ maxWidth: '75%' }}
                      href="/2023"
                      className="no-decoration-on-hover"
                      size="sm"
                      kind="primary">
                      Program
                    </Button>
                  </Tile>
                </div> */}
              </div>
            </div>
            <div className="bx--col-lg-8">
              <img
                className="landing-page__illo"
                src={`${process.env.PUBLIC_URL}/images/cover.png`}
                alt="Carbon illustration"
              />
            </div>
          </div>
        </div>

        <div className="bx--row landing-page__tab-content" id="call">
          <div className="bx--col-lg-8 bx--offset-lg-2">
            <StructuredListWrapper style={{ marginBottom: '20px' }}>
              <StructuredListHead>
                <StructuredListRow>
                  <StructuredListCell>
                    <h2 className="landing-page__subheading">
                      Call for Contributions.
                    </h2>
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                <StructuredListRow>
                  <StructuredListCell>
                    <strong>Full technical papers </strong>
                    making an original contribution; up to 9 pages including
                    references.
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>
                    <strong>Short technical papers </strong>
                    making an original contribution; up to 5 pages including
                    references.
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>
                    <strong>Position papers </strong>
                    proposing HAXP challenges, outlining HAXP ideas, debating
                    issues relevant to HAXP; up to 5 pages including references.
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListBody>
            </StructuredListWrapper>
            <Link href="https://openreview.net/group?id=icaps-conference.org/ICAPS/2023/Workshop/HAXP">
              <Button size="sm" kind="ghost">
                Submit
              </Button>
            </Link>
            <Link
              className="no-decoration-on-hover"
              href="https://www.aaai.org/Publications/Templates/AuthorKit23.zip"
              target="_blank">
              <Button size="sm" kind="ghost">
                Template
              </Button>
            </Link>

            <Button
              className="no-decoration-on-hover"
              size="sm"
              kind="ghost"
              onClick={this.onClickREADME.bind(this)}>
              Additional Instructions
            </Button>

            <Link
              href="/files/haxp23_cfp.pdf"
              target="_blank"
              className="no-decoration-on-hover">
              <Button size="sm" kind="ghost">
                <Download16 />
              </Button>
            </Link>
          </div>

          <div className="bx--col-lg-4 xaip-tags">
            <div className="some-container" style={{ marginTop: '70px' }}>
              <ProgressIndicator vertical currentIndex={0}>
                <ProgressStep
                  current
                  label={
                    <>
                      <span style={{ color: 'Blue' }}>
                        Submission Deadline{' '}
                      </span>
                    </>
                  }
                  secondaryLabel="March 24 UTC-12"
                />
                <ProgressStep
                  label="Author Notification"
                  secondaryLabel="April 30 UTC-12"
                />
                <ProgressStep
                  label="HAXP 2023 Workshop"
                  secondaryLabel="July 8 - 13, 2023 (TBD)"
                />
                <ProgressStep
                  label="Camera Ready Deadline"
                  secondaryLabel="TBD"
                />
              </ProgressIndicator>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="bx--grid bx--grid--full-width landing-page landing-page__banner">
          <div className="bx--row landing-page__tab-content">
            <div className="bx--col-lg-12 bx--offset-lg-2 xaip-tags">
              <h4>Topics of Interest</h4>
              <hr />

              <Button
                href="/overview"
                className="no-decoration-on-hover"
                size="sm"
                kind="secondary">
                Landscape of HAXP
              </Button>

              <br />
              <br />
              <br />

              <UnorderedList>
                <ListItem>Human-aware planning, scheduling, and execution.</ListItem>
                <ListItem>Human monitoring, plan & goal recognition, and behavior prediction.</ListItem>
                <ListItem>Mixed-initiative planning and scheduling systems.</ListItem>
                <ListItem>Learning methods for planning/scheduling in the presence of humans.</ListItem>
                <ListItem>Explanations of behavior in sequential decision-making/decision-support.</ListItem>
                <ListItem>Explanation of scheduling/allocation decisions to human stakeholders.</ListItem>
                <ListItem>Improving interpretability and explainability of AI planning/scheduling systems.</ListItem>
                <ListItem>Generating predictable and interpretable behavior.</ListItem>
                <ListItem>Methods for reward, goal, preference, or constraint specification for reinforcement learning agents.</ListItem>
                <ListItem>Creating interpretable and adaptive user interfaces for planning/scheduling systems.</ListItem>
                <ListItem>Proactive assistance and decision-support in human-AI collaborative scenarios.</ListItem>
                <ListItem>Cognitive modeling, social interaction, and theory of mind.</ListItem>
                <ListItem>Safety, ethics, fairness, transparency and responsible behavior generation in the context of planning/scheduling systems.</ListItem>
                <ListItem>Representation and acquisition of human behavioral models.</ListItem>
                <ListItem>Theories and applications of human behavior models.</ListItem>
                <ListItem>Trust, communication, and collaboration in human-AI teams.</ListItem>
                <ListItem>Benchmarking planning/scheduling domains for human-AI interaction.</ListItem>
              </UnorderedList>
            </div>
          </div>
        </div>

        <div
          id="team"
          className="bx--grid bx--grid--full-width landing-page landing-page__banner">
          <div className="bx--row landing-page__tab-content">
            <div className="bx--col-lg-12 bx--offset-lg-2 xaip-tags">
              <h4>HAXP 2023 Organizing Team</h4>
              <hr />
              <Link href="mailto:haxp.workshop@gmail.com">
                <Button size="small" kind="secondary">
                  Contact
                </Button>
              </Link>

              <div className="bx--row publications-page__tab-content">
                {OrganizingTeamList.map((item, key) => (
                  <React.Fragment key={key}>
                    <Member props={item} />
                  </React.Fragment>
                ))}
              </div>

              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div
          id="team"
          className="bx--grid bx--grid--full-width landing-page landing-page__banner">
          <div className="bx--row landing-page__tab-content">
            <div className="bx--col-lg-12 bx--offset-lg-2 xaip-tags">
              <h4>HAXP 2023 Steering Committee</h4>
              <hr />
              <div className="bx--row publications-page__tab-content">
                {SteeringCommitteeList.map((item, key) => (
                  <React.Fragment key={key}>
                    <Member props={item} />
                  </React.Fragment>
                ))}
              </div>

              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <Modal
          iconDescription="Close"
          modalHeading="Additional Instructions"
          modalLabel="HAXP @ ICAPS 2023"
          passiveModal
          hasScrollingContent
          open={this.state.readme}
          onRequestClose={this.onClickModalClose.bind(this)}
          size="lg"
          aria-label=""
          style={{ height: '100%' }}>
          <StructuredListWrapper style={{ marginBottom: '20px' }}>
            <StructuredListHead>
              <StructuredListRow />
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow>
                <StructuredListCell>
                  Authors who are considering submitting to the workshop papers
                  rejected from the main conference, please ensure you do your
                  utmost to address the comments given by ICAPS reviewers.
                  Please do not submit papers that are already accepted for the
                  main conference to the workshop.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  Every submission will be reviewed by members of the program
                  committee according to the usual criteria such as relevance to
                  the workshop, the significance of the contribution, and
                  technical quality. Authors can choose for themselves if they
                  want their submissions to be single-blind or double-blind
                  (recommended for NeurIPS and IJCAI dual submissions) at the
                  time of submission.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  The workshop is meant to be an open and inclusive forum, and
                  we encourage papers that report on work in progress or that do
                  not fit the mold of a typical conference paper.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  At least one author of each accepted paper must attend the
                  workshop in order to present the paper. There will be no
                  separate registration required.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  Accepted papers will be compiled into post-workshop
                  proceedings and posted on this page. Workshop proceedings are
                  not archival and do not require the transfer of copyright.
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>
        </Modal>
      </div>
    );
  }
}

export default LandingPage;
