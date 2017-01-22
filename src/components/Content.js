import React, { Component } from 'react';
import './Content.css';
import Paper from 'material-ui/Paper';
import {Card,CardHeader,CardText} from 'material-ui/Card';
import MainImg from '../img/cover.png';
import ContrImg from '../img/contribution.gif';
import CollaborizmLogo from '../img/CollaborizmLogo.png';
import Scroll from 'react-scroll';


const Link       = Scroll.Link;
const Element    = Scroll.Element;

import injectTapEventPlugin from'react-tap-event-plugin';
const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};
class Content extends Component {
    render() {
        injectTapEventPlugin();
        return (
          <div className="background">

{/*HEADER IMAGE AND TEXT*/}
              <img src={MainImg} className="Top-Image"/>
              <div className="Image-Box">
                  <p className="HeaderMain">
                      About Us
                  </p>
                  <p className="HeaderCollab">
                      Col•lab•or•izm
                  </p>
                  <p className="HeaderReg">
                      kəˌlabəˈrizəm/3
                  </p>
                  <p  className="HeaderReg"> noun</p>

                 <b> <p  className="HeaderReg"> an online collaborative workspace for aspiring Entrepreneurs, Engineers, and Creatives.
                 </p></b>
              </div>
{/*TOC*/}
              <center style={{marginTop:"3%", marginLeft: "18%",marginRight:"18%"}}><h2 className="Middle-Text"><span className="Middle-Span">
                 Table of Contents</span></h2></center>
              <Link activeClass="active" className="test1" to="Mission" spy={true} smooth={true} duration={500} >Mission</Link>
 <Link activeClass="active" className="test1" to="power" spy={true} smooth={true} duration={500} >power</Link>
 <Link activeClass="active" className="test1" to="talent" spy={true} smooth={true} duration={500} >Talent</Link>
 <Link activeClass="active" className="test1" to="gig" spy={true} smooth={true} duration={500} >gig</Link>
 <Link activeClass="active" className="test1" to="questions" spy={true} smooth={true} duration={500} >questions</Link>
 <Link activeClass="active" className="test1" to="success" spy={true} smooth={true} duration={500} >success</Link>
 <Link activeClass="active" className="test1" to="works" spy={true} smooth={true} duration={500} >works</Link>

{/*Mission*/}
              <Element name="mission">
              <Paper className="Paper-Column" zDepth={1} rounded={true}>
                  <h2 className="Head-Text"> Our Mission</h2>
                  <p className="Sub-Text">
                      Our mission is to build a vibrant collaboration community where makers, innovators and creatives can network, share knowledge and inspire one another by working together across different geographies.
                  </p>
                  <p className="Sub-Text">
                      Long term we set out to create a virtual workspace that will dramatically enhance human creative output, and break down the significant skill and cultural barriers that exist in the world today through a unique collaborative process.
                  </p>
              </Paper>
              </Element>

{/*Power of Contribution*/}
              <Element name="power">
              <Paper className="Paper-Column" zDepth={1} rounded={true}>
                  <h2 className="Head-Text"> The Power of Contribution</h2>

                  <img className="Image-Contribution" src={ContrImg} />
                      <div style={{margin: "1%"}}>
                          <p className="Sub-Text">
                              Contributions sit at the epicenter of Collaborizm. Contributions allow users from all skill sets and backgrounds to show off their skills as they help others in the community.
                          </p>
                          <p className="Sub-Text">
                              As users do this, other trusted members of the community can review these contributions, providing incredibly rich, pinpointed, peer to peer reviews, which provide clarity on the skill level and interpersonal qualities of users and freelancers within the Collaborizm network.
                          </p>

                  </div>
              </Paper>
              </Element>
{/*Working with our Talent*/}
              <Element name="talent">
              <Paper className="Paper-Column" zDepth={1} rounded={true}>
                  <h2 className="Head-Text"> The Power of Contribution</h2>
<div>
                      <b className="Head-Text"> Why Work with Freelancers on Collaborizm</b>
                      <p className="Sub-Text">
                          Collaborizm has begun to roll out it’s paid gigs initiative on the platform, and it is our most important initiative to date. The program focuses on pairing Collaborizm’s top talent with clientele from around the world looking for trustable, hard working, young, freelance talent.
                      </p>
                      <p className="Sub-Text">
                          By working with our young, emerging market, talent force, you are not only bringing your ideas to life for a discount, you are enabling tech talent from around the world to enter the workforce, bring life to the global economy, and improve the lives of many.
                      </p>

                      <b className="Head-Text"> Why Freelancing is Special on Collaborizm</b>
                      <p className="Sub-Text">
                          1)	You are tapping into an extraordinarily talented and hungry tech workforce from emerging markets around the globe. </p>
                      <p className="Sub-Text">
                          2)	Freelance talent on Collaborizm are heavily incentivized by building their resume, as much as cash -- so naturally, work performed by our talent force will be dramatically discounted as long as proper recommendations and reviews are written for completed work.  </p>
                      <p className="Sub-Text">
                          3)	You are participating in the world’s first public freelance environment -- meaning -- any gig you are working on can also be aided by the rest of the global community.
                      </p>

                      <b className="Head-Text"> Trusting Our Talent</b>
                      <p className="Sub-Text">
                          What is most unique about Collaborizm is our ability to showcase user talent through the contributions they make on Collaborizm. These contributions are reviews written by other trusted users in our community that attest to users skills, quality of work, effort, and ability to work in a distributed team.   </p>
                      <p className="Sub-Text">
                          These reviews, backed by real work, and team participation, combined with previous work experience on and off the platform, and site administrator endorsements, make our workforce a place you can trust.
                      </p>
</div>
                  </Paper>
              </Element>

{/*Gig & Hire*/}
              <Element name="gig">
              <Paper className="Paper-Column" zDepth={1} rounded={true} style={{marginTop: "3%"}}>
                  <h2 className="Head-Text"> How to Post a Gig and Hire a Freelancer</h2>
                  <p className="Sub-Text">
                      Post a gig, and let our talent pool get the job done. Gigs can be posted from any discussion (from your own profile, or a project). Gigs range from CAD Design, Electrical Engineering, Robotics, to Design Tasks, and everything in between.                           </p>
                  <Card style={{marginTop:"3%", width:"80%"}}>
                      <CardHeader
                          title="How it Works"
                          actAsExpander={true}
                          showExpandableButton={true}
                          titleColor ="#454c7d"
                          titleStyle={{fontWeight: "bold"}}
                      />
                      <CardText expandable={true}>
                          <p className="Sub-Text">
                              1)	Post a New Discussion under the Task Category that describes what you need done -- describe it in as much detail as you're comfortable presenting in the public domain.         </p>
                          <p className="Sub-Text">
                              2)	Fund your wallet with the amount you are willing to pay for the Gig (this is alterable as you negotiate with freelancers on the platform)
                          </p>
                          <p className="Sub-Text">
                              3)	Click the cash icon and fund your gig     </p>
                      </CardText>

                  </Card>
                  <Card style={{width:"80%"}}>
                      <CardHeader
                          title="Application Process"
                          actAsExpander={true}
                          showExpandableButton={true}
                          titleColor ="#454c7d"
                          titleStyle={{fontWeight: "bold"}}
                      />
                      <CardText expandable={true}>
                          <p className="Sub-Text">
                              1)	Freelancers can now apply to your gig </p>
                          <p className="Sub-Text">
                              2)	Approve the Freelancer of your choosing
                          </p>
                          <p className="Sub-Text">
                              3)	Collaborizm.com/Freelancers can be used to search for talent ranked by reputation on the platform -- mixed with a little bit of serendipity    </p>
                      </CardText>

                  </Card>
                  <Card style={{width:"80%"}}>
                      <CardHeader
                          title="Working with your Freelancer"
                          actAsExpander={true}
                          showExpandableButton={true}
                          titleColor ="#454c7d"
                          titleStyle={{fontWeight: "bold",alignSelf:"center"}}
                      />
                      <CardText expandable={true}>
                          <p className="Sub-Text">
                              1)	Use Collaborizm Discussions to publically interact with freelancers
                          </p>
                          <p className="Sub-Text">
                              2)	Use Private chat to privately interact with freelancers
                          </p>

                      </CardText>

                  </Card>
                  <Card style={{width:"80%"}}>
                      <CardHeader
                          title="Completion of Work"
                          actAsExpander={true}
                          showExpandableButton={true}
                          titleColor ="#454c7d"
                          titleStyle={{fontWeight: "bold"}}
                      />
                      <CardText expandable={true}>
                          <p className="Sub-Text">
                              1)	Client will mark task as complete upon completion of work
                          </p>
                          <p className="Sub-Text">
                              2)	Collaborizm inhouse team will manually vet all completed work and perform transactions     </p>

                      </CardText>

                  </Card>
                  <Card style={{width:"80%"}}>
                      <CardHeader
                          title="Refunds and Work Quality"
                          actAsExpander={true}
                          showExpandableButton={true}
                          titleColor ="#454c7d"
                          titleStyle={{fontWeight: "bold"}}
                      />
                      <CardText expandable={true}>
                          <p className="Sub-Text">
                              1)	If work is not to satisfaction a FULL REFUND will be provided
                          </p>
                          <p className="Sub-Text">
                              2)	Collaborizm inhouse team will be giving favor to clients at the beginning to ensure work quality!   </p>

                      </CardText>

                  </Card>
              </Paper>
              </Element>

{/*Other Questions*/}
              <Element name="questions">
              <Paper className="Paper-Column" zDepth={1} rounded={true}>
                  <h2 className="Head-Text"> Other Questions</h2>
                  <div>
                      <p className="Question-Text">
                          Why post a gig from your profile?
                      </p>
                      <p className="Sub-Text">
                          Get something done quick, that is unrelated to an ongoing project.
                      </p>
                      <p className="Question-Text">
                          Why post a gig from your project?
                      </p>
                      <p className="Sub-Text">
                          Get the full value and structure of Collaborizm Projects. You post gigs here when you are working on an ongoing project or initiative.
                      </p>
                      <p className="Question-Text">
                          What are Hiring Challenges?
                      </p>
                      <p className="Sub-Text">
                          A hiring challenge is a paid challenge where a company looking to hire full time, part time, etc, will post a task for selected user(s) to complete. The paid assignment will be used to assess worker skills/talent -- to potentially earn a job.
                      </p>
                     <p className="Question-Text">
                          Companies looking to post hiring challenges can do so by messaging any of our community moderators: steven@collaborizm.com, rob@collaborizm.com, anton@collaborizm.com.
                      </p>
                  </div>
              </Paper>
              </Element>
{/*Gig Success Stories*/}
              <Element name="success">
              <center style={{marginTop:"3%", marginLeft: "18%",marginRight:"18%"}}><h2 className="Middle-Text"><span className="Middle-Span">
                  See some of our Gig success stories here</span></h2></center>
              <div className="Middle-Pane2">

              </div>
              </Element>

{/*How Collaborizm Works*/}
              <Element name="works">
              <Paper className="Paper-Column" zDepth={1} rounded={true}>
                  <h2 className="Head-Text"> How Collaborizm Works</h2>
                  <div>

                      <b className="Head-Text">Contribute and Earn Reputation</b>
                      <p className="Sub-Text">
                          You can participate in any discussion or Project, even without being a team member, just by contributing in Collaborizm Discussions. When you make a valuable contribution, our top users will add you as a contributor, which acts as an official endorsement to your skill set, which helps build your reputation, and get you paid work in the future!    </p>

                      <b className="Head-Text"> Freelance and Get Paid</b>
                      <p className="Sub-Text">
                          Users that have built up a strong contribution base on their profiles will start to have the opportunity to tackle paid gigs on the platform. All paid gigs are currently listed on our homepage. Stay tuned for updates.     </p>

                      <b className="Head-Text"> Start a Project and Bring Ideas to Life</b>
                      <p className="Sub-Text">
                          Have an amazing idea? A new drone? A new app? Then start your project and being recruiting teammates, receiving contributions from the community and bringing your Project to life. Projects can be passion, learning, or commercial in intent. </p>


                      <b className="Head-Text">Join a Project and Help Bring Ideas to Life</b>
                      <p className="Sub-Text">
                          Looking to join an amazing team? Look no further. Join teams, meet your teammates, and begin participating and contributing to your Project.
                      </p>

                      <b className="Head-Text"> Participate in a Hackathon</b>
                      <p className="Sub-Text">
                          Collaborizm is an amazing place to join or start a team for one of our tech hackathons. Team up, meet new people, and compete for prizes year round!
                      </p>
                  </div>

                  </Paper>
              </Element>
{/*Developed By*/}
            <div className="Credit">
                 <p>Designed By Collaborizm User Tejas Ozarkar</p>
            </div>
{/*Footer*/}
            <div className="footer">
                <center>
                    <img src={CollaborizmLogo}/>
                <p style={{color: "#aaa"}}>Relative Emotion Enterprises, Inc. 2017</p>
                <p style={{color: "#FFF",margin: "0%"}}>About Us</p>
                <p style={{color: "#FFF"}}>Community Status</p>
                <p style={{color: "#FFF"}}>Contact Us</p>
                <p style={{color: "#FFF"}}>FAQ</p>
                <p style={{color: "#FFF"}}>Project Resource Center</p>
                <p style={{color: "#FFF"}}>Terms of User</p>
                <p style={{color: "#FFF"}}>Privacy Policy</p>

                </center>
            </div>
          </div>
        );
    }
}

export default Content;
