import React from 'react';
import {
  Link,
  ListItem,
  UnorderedList,
  Tag,
  Button,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  ProgressIndicator,
  ProgressStep,
  Modal,
} from 'carbon-components-react';

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
        <div
          className="bx--grid bx--grid--full-width landing-page"
          style={{ height: '100vh' }}>
          <div
            className="bx--row"
            style={{ padding: '50px', marginTop: '100px' }}>
            <div className="bx--col-lg-8">
              <h1 className="landing-page__heading">
                XAIP @{' '}
                <Link
                  href="https://icaps21.icaps-conference.org/"
                  target="_blank"
                  style={{ fontSize: 'inherit' }}>
                  ICAPS 2021
                </Link>
              </h1>
              <p style={{ paddingTop: '5px', color: 'grey' }}>
                Guangzhou, June 7-12
              </p>
              <br />
              <br />
              <p className="participation-page__p">
                The world of Explainable AI is rapidly expanding in scope from
                classification tasks to more complex decision-making processes
                where automated algorithms play an outsized role. The
                International Workshop of Explainable AI Planning (XAIP) brings
                together the latest and best in the field of explainable
                planning and sequential decision-making. The workshop is
                collocated with ICAPS, the premier conference on automated
                planning and scheduling.{' '}
                <Link
                  href="https://www.ijcai.org/Proceedings/2020/669"
                  target="_blank">
                  Read more
                </Link>
              </p>
              <br />
              <br />
              <Link href="#program" style={{ marginRight: '10px' }}>
                <Button
                  kind="primary"
                  size="field"
                  style={{ marginBottom: '20px', minWidth: '175px' }}>
                  Call for Papers
                </Button>
              </Link>
              <Link
                href="https://github.com/TathagataChakraborti/xaip"
                target="_blank"
                style={{ marginRight: '10px' }}>
                <Button
                  kind="secondary"
                  size="field"
                  style={{ minWidth: '175px' }}>
                  Community
                </Button>
              </Link>
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

        <div className="bx--row landing-page__tab-content" id="program">
          <div className="bx--col-lg-8 bx--offset-lg-2">
            <StructuredListWrapper style={{ marginBottom: '20px' }}>
              <StructuredListHead>
                <StructuredListRow>
                  <StructuredListCell>
                    <h2 className="landing-page__subheading">
                      Call for Contributions.
                    </h2>
                    <br />
                    This year, in addition to the core XAIP topics, we welcome
                    submissions on user interfaces in XAIP, acknowledging the
                    inseparable role of interfacing in explanations. We invite
                    submissions of the following types relevant to the topics
                    listed below.
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
                    proposing XAIP challenges, outlining XAIP ideas, debating
                    issues relevant to XAIP; up to 5 pages including references.
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListBody>
            </StructuredListWrapper>

            <Button size="small" kind="ghost" style={{ cursor: 'not-allowed' }}>
              Submit
            </Button>

            <Link
              href="https://www.aaai.org/Publications/Templates/AuthorKit20.zip"
              target="_blank">
              <Button size="small" kind="ghost">
                Template
              </Button>
            </Link>

            <Button
              size="small"
              kind="ghost"
              onClick={this.onClickREADME.bind(this)}>
              README
            </Button>
          </div>

          <div className="bx--col-lg-4 xaip-tags">
            <div className="some-container" style={{ marginTop: '70px' }}>
              <ProgressIndicator vertical currentIndex={1}>
                <ProgressStep label="The submission portal will open soon" />
                <ProgressStep
                  invalid
                  label={
                    <span style={{ color: 'red' }}>Submission Deadline</span>
                  }
                  secondaryLabel="??? ?? UTC-12"
                />
                <ProgressStep
                  label="Author Notification"
                  secondaryLabel="??? ?? UTC-12"
                />
                <ProgressStep
                  disabled
                  label="Camera Ready Deadline"
                  secondaryLabel="??? ?? UTC-12"
                />
                <ProgressStep
                  disabled
                  label="ICAPS 2020 Workshops"
                  secondaryLabel="June 7 - 12"
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
            <div className="bx--col-lg-6 bx--offset-lg-2 xaip-tags">
              <Tag type="magenta" title="Clear Filter">
                {' '}
                Core XAIP{' '}
              </Tag>

              <br />
              <br />

              <UnorderedList>
                <ListItem>
                  Representation, organization, and memory content used in
                  explanation
                </ListItem>
                <ListItem>
                  The creation of such content during plan generation or
                  understanding
                </ListItem>
                <ListItem>Generation and evaluation of explanations</ListItem>
                <ListItem>Contrastive explanations</ListItem>
                <ListItem>
                  The way in which explanations are communicated and
                  personalized to humans (e.g., plan summaries, answers to
                  questions)
                </ListItem>
                <ListItem>
                  The role of knowledge and learning in explainable planners
                </ListItem>
                <ListItem>Human vs AI models in explanations</ListItem>
                <ListItem>
                  Links between explainable planning and other disciplines
                  (e.g., social science, argumentation)
                </ListItem>
                <ListItem>
                  Use cases and applications of explainable planning
                </ListItem>
              </UnorderedList>

              <br />
              <br />
            </div>

            <div className="bx--col-lg-6 xaip-tags">
              <Tag type="purple" title="Clear Filter">
                {' '}
                The UX of XAIP{' '}
              </Tag>

              <br />
              <br />

              <UnorderedList>
                <ListItem>
                  User interfaces for explainable automated planning and
                  scheduling
                  <UnorderedList nested>
                    <ListItem>Plan and schedule visualization</ListItem>
                    <ListItem>
                      Mixed initiative planning and scheduling
                    </ListItem>
                    <ListItem>
                      Emerging technology for human-planner interaction
                    </ListItem>
                    <ListItem>
                      Metrics for human readability or comprehensibility of
                      plans and schedules
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  Explainable automated planning and scheduling for user
                  interfaces
                  <UnorderedList nested>
                    <ListItem>
                      Representing and solving planning domains for user
                      interface creation and design tasks
                    </ListItem>
                    <ListItem>
                      Plan, activity, and intent recognition of users’
                      interactions with interfaces
                    </ListItem>
                    <ListItem>
                      Developing user (mental) models with description languages
                      and decision processes
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </div>
          </div>
        </div>

        <Modal
          iconDescription="Close"
          modalHeading="Additional Instructions"
          modalLabel="XAIP @ ICAPS 2021"
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
                  (recommended for NeurIPS and AAAI dual submissions) at the
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
                  registration required.
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
