import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  Link,
  Tag,
  Tile,
} from 'carbon-components-react';

const LandscapePage = () => {
  return (
    <div
      className="bx--grid bx--grid--full-width landing-page landing-page__banner"
      style={{ minHeight: '100vh' }}>
      <div className="bx--col-lg-16">
        <div className="bx--row publications-page__tab-content">
          <StructuredListWrapper>
            <StructuredListHead>
              <StructuredListRow>
                <StructuredListCell head>
                  The Landscape of XAIP
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>

            <StructuredListBody>
              <StructuredListRow className="no-border roof">
                <StructuredListCell>Explainable Planning</StructuredListCell>
                <StructuredListCell>Explanations</StructuredListCell>
                <StructuredListCell>
                  The world of Explainable AI is rapidly expanding in scope from
                  classification tasks to more complex longer-term
                  decision-making processes where automated algorithms play an
                  outsized role. Explanations for plans span the entire gamut of
                  planning artifacts: the domain model, the search algorithm
                  used to generate the plan and the solution itself.
                  <div className="pub-margin">
                    Tathagata Chakraborti, Sarath Sreedharan, and Subbarao
                    Kambhampati. The Emerging Landscape of Explainable Automated
                    Planning & Decision Making. IJCAI 2020.
                  </div>
                  <div className="pub-margin">
                    Sule Anjomshoae, Amro Najjar, Davide Calvaresi, and Kary
                    Framling. Explainable Agents and Robots: Results from a
                    Systematic Literature Review. AAMAS 2019.
                  </div>
                  <div className="pub-margin">
                    Michael Cashmore, Anna Collins, Benjamin Krarup, Senka
                    Krivic, Daniele Magazzeni, and David Smith. Towards
                    Explainable AI Planning as a Service. XAIP 2019.
                  </div>
                  <div className="pub-margin">
                    Pat Langley. Varieties of Explainable Agency. XAIP 2019.
                  </div>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell />
                <StructuredListCell>
                  <StructuredListWrapper className="low-margin">
                    <StructuredListBody>
                      <StructuredListRow className="roof">
                        <StructuredListCell>Algorithms</StructuredListCell>
                        <StructuredListCell>
                          Unlike the rest of the approaches in this category,
                          these explanations depend on the planning algorithm.
                          They take the explainee through the choices made
                          during the search for a solution.
                          <div className="pub-margin">
                            Mauricio Magnaguagno, Ramon Pereira, Martin More,
                            and Felipe Meneguzzi. Web Planner: A Tool to Develop
                            Classical Planning Domains and Visualize Heuristic
                            State-Space Search. Knowledge Engineering Tools and
                            Techniques for AI Planning 2020.
                          </div>
                          <div className="pub-margin">
                            Anurag Koul, Sam Greydanus, and Alan Fern. Learning
                            Finite State Representations of Recurrent Policy
                            Networks. ICLR 2018.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow className="no-border">
                        <StructuredListCell>Models</StructuredListCell>
                        <StructuredListCell>
                          The most popular form of explanations in planning are
                          model-based, i.e. these explanations are derived from
                          the underlying model that generated the plan, and are
                          agnostic of the generator. They try to address
                          differences with the mental model of the user or their
                          inferential capability.
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow>
                        <StructuredListCell />
                        <StructuredListCell>
                          <StructuredListWrapper className="low-margin">
                            <StructuredListBody>
                              <StructuredListRow className="roof">
                                <StructuredListCell>
                                  Inference Reconciliation
                                </StructuredListCell>
                                <StructuredListCell>
                                  These walk the explainee through the model
                                  information known to the planner in how
                                  different domain artifacts contributed to the
                                  solution.
                                  <div className="pub-margin">
                                    Rebecca Eifler, Michael Cashmore, Joerg
                                    Hoffmann, Daniele Magazzeni, and Marcel
                                    Steinmetz. A New Approach to Plan-Space
                                    Explanation: Analyzing Plan-Property
                                    Dependencies in Oversubscription Planning.
                                    AAAI 2020.
                                  </div>
                                  <div className="pub-margin">
                                    Prashan Madumal, Tim Miller, Liz Sonenberg,
                                    and Frank Vetere. Explainable Reinforcement
                                    Learning Through a Causal Lens. AAAI 2020.
                                  </div>
                                  <div className="pub-margin">
                                    Benjamin Krarup, Michael Cashmore, Daniele
                                    Magazzeni, and Tim Miller. Model-Based
                                    Contrastive Explanations for Explainable
                                    Planning. XAIP 2019.
                                  </div>
                                  <div className="pub-margin">
                                    Michael Winikoff. Debugging Agent Programs
                                    with "Why?" Questions. AAMAS 2017.
                                  </div>
                                  <div className="pub-margin">
                                    Bastian Seegebarth, Felix Muller, Bernd
                                    Schattenberg, and Susanne Biundo. Making
                                    Hybrid Plans More Clearto Human Users -- A
                                    Formal Approach for Generating Sound
                                    Explanations. ICAPS 2012.
                                  </div>
                                </StructuredListCell>
                              </StructuredListRow>

                              <StructuredListRow className="no-border">
                                <StructuredListCell>
                                  Model Reconciliation
                                </StructuredListCell>
                                <StructuredListCell>
                                  Approaches in this category cast the
                                  explanation process as one of reconciling of
                                  the differences in the planner model and the
                                  mental model of the explainee.
                                  <div className="pub-margin">
                                    Sarath Sreedharan, Siddharth Srivastava, and
                                    Subbarao Kambhampati. Hierarchical Expertise
                                    Level Modeling for User Specific Contrastive
                                    Explanations. IJCAI 2018.
                                  </div>
                                  <div className="pub-margin">
                                    Tathagata Chakraborti, Sarath Sreedharan, Yu
                                    Zhang, and Subbarao Kambhampati. Plan
                                    Explanations as Model Reconciliation: Moving
                                    Beyond Explanation as Soliloquy. IJCAI 2017.
                                  </div>
                                </StructuredListCell>
                              </StructuredListRow>
                            </StructuredListBody>
                          </StructuredListWrapper>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow>
                        <StructuredListCell>Plans</StructuredListCell>
                        <StructuredListCell>
                          Plan-based explanations take the user through
                          abstractions of the plan, e.g. summaries, or contrast
                          them with other possible plans.
                          <div className="pub-margin">
                            Isaac Lage, Daphna Lifschitz, Finale Doshi-Velez,
                            and Ofra Amir. Exploring Computational User Models
                            for Agent Policy Summarization. IJCAI 2019.
                          </div>
                          <div className="pub-margin">
                            Joseph Kim, Christian Muise, Ankit Shah, Shubham
                            Agarwal, and Julie Shah. Bayesian Inference of
                            Linear Temporal Logic Specifications for Contrastive
                            Explanations. IJCAI 2019.
                          </div>
                          <div className="pub-margin">
                            Stephanie Rosenthal, Sai Selvaraj, and Manuela
                            Veloso. Verbalization: Narration of Autonomous Robot
                            Experience. IJCAI 2016.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow>
                        <StructuredListCell>Execution</StructuredListCell>
                        <StructuredListCell>
                          Of course, the explainable planning problem extends
                          beyond the reasoning time to the actual execution as
                          well, and choices made thereof.
                          <div className="pub-margin">
                            Pat Langley, Ben Meadows, Mohan Sridharan, and
                            Dongkyu Choi. Explainable Agency for Intelligent
                            Autonomous Systems. IAAI 2017.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow>
                        <StructuredListCell>Authoring</StructuredListCell>
                        <StructuredListCell>
                          Model-based explanations also come in handy during the
                          domain authoring process in being able to guide the
                          domain author through mistakes they have made and how
                          they can be mitigated.
                          <div className="pub-margin">
                            Sarath Sreedharan, Tathagata Chakraborti, Christian
                            Muise, Yasaman Khazaeni, and Subbarao Kambhampati.
                            D3WA+: A Case Study of XAIP in a Model Acquisition
                            Task. ICAPS 2020.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow>
                        <StructuredListCell>Unsolvability</StructuredListCell>
                        <StructuredListCell>
                          Explanations can also be used to navigate unsolvable
                          planning problems; these provide directives on how to
                          modify the model in order to make it solvable.
                          <div className="pub-margin">
                            Sarath Sreedharan, Siddharth Srivastava, David
                            Smith, and Subbarao Kambhampati. Why Can't You Do
                            That HAL? Explaining Unsolvability of Planning
                            Tasks. IJCAI 2019.
                          </div>
                          <div className="pub-margin">
                            Moritz Gobelbecker, Thomas Keller, Patrick Eyerich,
                            Michael Brenner, and Bernhard Nebel. Coming Up with
                            Good Excuses: What to Do When No Plan Canbe Found.
                            ICAPS 2010.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow className="no-border">
                        <StructuredListCell>Lies</StructuredListCell>
                        <StructuredListCell>
                          Model reconciliation techniques can be hijacked to
                          produce false explanations or lies that an agent knows
                          to be not true but will satisfy all the computational
                          properties of explanations.
                          <div className="pub-margin">
                            Tathagata Chakraborti and Subbarao Kambhampati.
                            (How) Can Bots Lie? XAIP 2019.
                          </div>
                          <div className="pub-margin">
                            Tathagata Chakraborti and Subbarao Kambhampati.
                            (When) Can Bots Lie? AIES 2019.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>
                    </StructuredListBody>
                  </StructuredListWrapper>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow className="no-border">
                <StructuredListCell />
                <StructuredListCell>Interpretability</StructuredListCell>
                <StructuredListCell>
                  An agent can also generate plans that are easier to interpret
                  for the human in the loop. Interpretability can be in terms of
                  requiring less explanations, or in the general sense,
                  complements of some abductive process on the part of the
                  observer.
                  <div className="pub-margin">
                    Explicability? Legibility? Predictability? Transparency?
                    Privacy? Security? The Emerging Landscape of Interpretable
                    Agent Behavior. Tathagata Chakraborti, Anagha Kulkarni,
                    Sarath Sreedharan, David E. Smith, and Subbarao Kambhampati.
                    ICAPS 2019.
                  </div>
                  <div className="pub-margin">
                    Anca Dragan. Robot Planning with Mathematical Models of
                    Human State and Action. 2017 Technical Report.
                  </div>
                  <div className="pub-margin">
                    Anca Dragan, Shira Bauman, Jodi Forlizzi, and Siddhartha
                    Srinivasa. Effects of Robot Motion on Human-Robot
                    Collaboration. HRI 2015.
                  </div>
                  <div className="pub-margin">
                    Shirin Sohrabi, Jorge Baier, and Sheila McIlraith. Preferred
                    Explanations: Theory and Generation via Planning. AAAI 2011.
                  </div>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell />
                <StructuredListCell>
                  <StructuredListWrapper className="low-margin">
                    <StructuredListBody>
                      <StructuredListRow className="roof">
                        <StructuredListCell>Explicability</StructuredListCell>
                        <StructuredListCell>
                          Explicable planning involves generating plans that
                          conform to expected behavior. A fully explicable plan
                          requires no explanation.
                          <div className="pub-margin">
                            Anagha Kulkarni, Tathagata Chakraborti, Yantian Zha,
                            Satya Vadlamudi, Yu Zhang, and Subbarao Kambhampati.
                            Explicable Robot Planning as Minimizing Distance
                            from Expected Behavior. AAMAS 2019 Extended
                            Abstract.
                          </div>
                          <div className="pub-margin">
                            Plan Explicability and Predictability for Robot Task
                            Planning. Yu Zhang, Sarath Sreedharan, Anagha
                            Kulkarni, Tathagata Chakraborti, Hankz Hankui Zhuo,
                            and Subbarao Kambhampati. ICRA 2017.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow>
                        <StructuredListCell>Legibility</StructuredListCell>
                        <StructuredListCell>
                          Legible plans make it easier for the observer to
                          identify the goal, and more generally, the model of
                          the agent. Thus, this is the complement of the goal or
                          model recognition problem.
                          <div className="pub-margin">
                            Aleck MacNally, Nir Lipovetzky, Miquel Ramirez, and
                            Adrian R Pearce. Action Selection for Transparent
                            Planning. AAMAS 2018.
                          </div>
                          <div className="pub-margin">
                            Anca Dragan and Siddhartha Srinivasa. Generating
                            Legible Motion. RSS 2013.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow>
                        <StructuredListCell>Predictability</StructuredListCell>
                        <StructuredListCell>
                          Predictable plans are easier to complete for the
                          observer given a partial observation of prefix.
                          Contrary to goal recognition and legibility, this is
                          the complement of the plan recognition problem.
                          <div className="pub-margin">
                            Jaime Fisac, Chang Liu, Jessica Hamrick, Shankar
                            Sastry, J. Karl Hedrick, Thomas Griffiths, and Anca
                            Dragan. Generating Plans that Predict Themselves.
                            WAFR 2018.
                          </div>
                          <div className="pub-margin">
                            Anca Dragan, Kenton Lee, and Siddharth Srinivasa.
                            Legibility and Predictability of Robot Motion. HRI
                            2013.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow>
                        <StructuredListCell>Obfuscation</StructuredListCell>
                        <StructuredListCell>
                          Goal and plan obfuscation, or privacy preserving plans
                          in general, are the inverse of the legibility and
                          predictability problems respectively. These behaviors
                          can involve more nuanced concepts like deception and
                          simulation depending on whether the real behavior is
                          explicitly hidden or not.
                          <div className="pub-margin">
                            Anagha Kulkarni, Siddharth Srivastava, and Subbarao
                            Kambhampati. A Unified Framework for Planning in
                            Adversarial and Cooperative Environments. AAAI 2019.
                          </div>
                          <div className="pub-margin">
                            Peta Masters, and Sebastian Sardina. Deceptive Path
                            Planning. IJCAI 2017.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow className="no-border">
                        <StructuredListCell>Security</StructuredListCell>
                        <StructuredListCell>
                          Deceptive behavior can also borrow from concepts of
                          cybersecurity to provide stronger guarantees on how
                          behavior can be obfuscated even when, for example, the
                          observer has access to and can run the generative
                          algorithm multiple times .
                          <div className="pub-margin">
                            Anagha Kulkarni, Matthew Klenk, Shantanu Rane, and
                            Hamed Soroush. Resource Bounded Secure Goal
                            Obfuscation. AAAI 2018 Fall Sympoosium.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>
                    </StructuredListBody>
                  </StructuredListWrapper>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell>Design</StructuredListCell>
                <StructuredListCell>
                  A third route to take is to design the environment in a manner
                  to incentivize one or more of these behaviors. This is done
                  offline and has long term impact on the agents in the
                  environment. However, the cost of design is one time and may
                  help in reducing the planning cost and complexity in the
                  longer term.
                  <div className="pub-margin">
                    Anagha Kulkarni, Sarath Sreedharan, Sarah Keren, Tathagata
                    Chakraborti, David E. Smith, and Subbarao Kambhampati.
                    Designing Environments Conducive to Interpretable Robot
                    Behavior. IROS 2020.
                  </div>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell>Porque no los dos?</StructuredListCell>
                <StructuredListCell>
                  It turns out that it is possible to model two (or more) of
                  these behaviors together. This gives an agent the ability to
                  generate novel behaviors such as generating explanations that
                  are shorter than those using explanation only approaches, by
                  opting for plans that are easier to explain!
                  <div className="pub-margin">
                    Sarath Sreedharan, Tathagata Chakraborti, ChristianMuise,
                    and Subbarao Kambhampati. Expectation-Aware Planning: A
                    Unifying Framework or Synthesizing and Executing
                    Self-Explaining Plans for Human-Aware Planning. AAAI 2020.
                  </div>
                  <div className="pub-margin">
                    Tathagata Chakraborti, Sarath Sreedharan, and Subarao
                    Kambhampati. Balancing Explanations and Explicability in
                    Human-Aware Planning. IJCAI 2019.
                  </div>
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>

          <StructuredListWrapper className="low-margin">
            <StructuredListHead>
              <StructuredListRow>
                <StructuredListCell head>The UX of XAIP</StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>

            <StructuredListBody>
              <StructuredListRow>
                <StructuredListCell>
                  XAIP and user experience (UX) design are inseparable topics
                  going forward as planning and technologies mature and come
                  into contact with end users. XAIP 2020 oversees a joint effort
                  with the organizers of the formerly User Interfaces and
                  Scheduling and Planning (UISP) Workshop at ICAPS and the team
                  from previous editions of the XAIP Workshop at ICAPS.
                  <div className="pub-margin">
                    Richard Freedman, Tathagata Chakraborti, Kartik
                    Talamadupula, Daniele Magazzeni, and Jeremy Frank. User
                    Interfaces and Scheduling and Planning: Workshop Summary and
                    Proposed Challenges. In AAAI 2018 Spring Symposium on
                    Designing the User Experience of Artificial Intelligence.
                  </div>
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  <StructuredListWrapper className="low-margin">
                    <StructuredListBody>
                      <StructuredListRow>
                        <StructuredListCell>
                          Natural Language
                        </StructuredListCell>
                        <StructuredListCell>
                          The medium of natural language is particularly suited
                          for tasks such as summarization of plans and providing
                          model artifacts to the end user.
                          <div className="pub-margin">
                            Prashan Madumal, Tim Miller, Liz Sonenberg, and
                            Frank Vetere. A Grounded Interaction Protocol for
                            Explainable Artificial Intelligence. AAMAS 2019.
                          </div>
                          <div className="pub-margin">
                            Stephanie Rosenthal, Sai Selvaraj, and Manuela
                            Veloso. Verbalization: Narration of Autonomous Robot
                            Experience. IJCAI 2016.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow>
                        <StructuredListCell>
                          Graphical Interfaces
                        </StructuredListCell>
                        <StructuredListCell>
                          Perhaps more suited to XAIP tasks, GUIs have been
                          extensively explored to surface model, plan, and
                          search information to the end user.
                          <div className="pub-margin">
                            Mauricio Magnaguagno, Ramon Pereira, Martin More,
                            and Felipe Meneguzzi. Web Planner: A Tool to Develop
                            Classical Planning Domains and Visualize Heuristic
                            State-Space Search. Knowledge Engineering Tools and
                            Techniques for AI Planning 2020.
                          </div>
                          <div className="pub-margin">
                            Tobias Huber, Katharina Weitz, Elisabeth Andre, and
                            Ofra Amir. Local and Global Explanations of Agent
                            Behavior: Integrating Strategy Summaries with
                            Saliency Maps. 2020 Technical Report.
                          </div>
                          <div className="pub-margin">
                            Tathagata Chakraborti, Kshitij Fadnis, Kartik
                            Talamadupula, Mishal Dholakia, Biplav Srivastava,
                            Jeffrey Kephart, and Rachel Bellamy. Planning and
                            Visualization for a Smart Meeting Room Assistant -–
                            A Case Study in the Cognitive Environments
                            Laboratory at IBM T.J. Watson Research Center,
                            Yorktown. AI Communications 2019.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>

                      <StructuredListRow className="no-border">
                        <StructuredListCell>Mixed Reality</StructuredListCell>
                        <StructuredListCell>
                          Recent advancements in mixed-reality technologies has
                          also seen impact in communication for planning tasks,
                          including explanations, in the form of virtual symbols
                          that ground to the underlying planning model.
                          <div className="pub-margin">
                            Tathagata Chakraborti, Sarath Sreedharan, Anagha
                            Kulkarni, and Subbarao Kambhampati. Projection-Aware
                            Task Planning and Execution for Human-in-the-Loop
                            Operation of Robots in a Mixed-Reality Workspace.
                            IROS 2018.
                          </div>
                          <div className="pub-margin">
                            Sailik Sengupta, Tathagata Chakraborti, and Subbarao
                            Kambhampati. MA-RADAR -- A Mixed-Reality Interface
                            for Collaborative Decision Making. UISP 2018.
                          </div>
                        </StructuredListCell>
                      </StructuredListRow>
                    </StructuredListBody>
                  </StructuredListWrapper>
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>

          <div style={{ marginBottom: '20px' }} className="bx--col-lg-16">
            <Tile style={{ color: 'silver' }}> Last Updated June 2020 </Tile>
          </div>

          <Link
            href="https://www.ijcai.org/Proceedings/2020/669"
            target="_blank">
            <Tag type="purple" style={{ cursor: 'pointer' }}>
              {' '}
              Read More{' '}
            </Tag>
          </Link>
          <Link
            href="https://aaai.org/ojs/index.php/ICAPS/article/view/3463"
            target="_blank">
            <Tag type="blue" style={{ cursor: 'pointer' }}>
              {' '}
              Read More{' '}
            </Tag>
          </Link>
          <Link
            href="https://www.sciencedirect.com/science/article/pii/S0004370218305988"
            target="_blank">
            <Tag type="green" style={{ cursor: 'pointer' }}>
              {' '}
              Read More{' '}
            </Tag>
          </Link>
          <Link
            href="https://yochan-lab.github.io/tutorial/AAAI-2020/"
            target="_blank">
            <Tag type="teal" style={{ cursor: 'pointer' }}>
              {' '}
              AAAI 2020 Tutorial{' '}
            </Tag>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandscapePage;
