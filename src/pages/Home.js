import React, { useEffect } from 'react'
import '../index.css'
import '../style/landing.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },[])
  
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   document.body.style.overflow = "visible";
  //   document.body.style.height = window.innerHeight;
  //   document.body.style.maxHeight = "";
  // }, []);

  return (
    <div className="landing">

      <div className="header">
      <img src="person.png"/>
      <h3 style={{textAlign: "center"}}>(de)constructing family models</h3>
      </div>

      <div className="paragraph">
      <img src="img/1.png" id="one" />
      <p>This project stems from a personal interest in the process of social constructs
         coming into existence and defining the invisible rules we live by.</p>
      </div>

      <div className="paragraph">
      <p>The social construction of reality as I understand it makes up a major part of 
        the world we inhabit. It is the idea that many of the things we believe in are 
        essentially a figment of our shared imagination. </p>
      <img src="img/synergy.png" id="synergy"/>
      </div>

      <div className="paragraph">
      <img src="img/2.png" id="two" />
      <img src="img/2.png" id="three" />
      <p>We, as humans, have defined certain things to be a certain way, a very long 
        time ago, and still unknowingly live by these definitions now. These things have 
        no inherent meaning but the meaning that we collectively give to it.</p>
        
      <p>A simple example: pink is for girls, blue is for boys.</p>

      <p>Nothing in the material world attributes a certain colour to a certain gender. 
        This is something that we, as a society, have collectively agreed on, and 
        therefore it continues to exist.</p>

      <p>If tomorrow we would all say: ‘green is for girls and purple is for boys’, 
        and as one shared mind believed in that fact, then that would be our new truth.</p>
      <img src="img/2.png" id="four" />
      </div>

      <div className="paragraph">
      <p style={{marginTop:"6rem"}}>I am interested in the process by which these social constructs 
      become cemented in our lives.</p>

      <p>Why do we believe certain things, when they could have been something completely different if our 
        history was changed only slightly? What happened in our history to make this piece of fiction an 
        unavoidable fact? And is there a way to change it?</p>
      </div>

      <div className="paragraph">
      <p>Many social constructs are necessary for our co-existence as one global community. 
        An example of this could be: money. </p>

      <p>We decided that an intricate red piece of paper is worth ten euros, and that we 
        can exchange it for a certain amount of goods. Were we all to collectively decide 
        that that piece of paper was now a hundred euros, or nothing, then it would be that way. 
        But believing in money makes working together as one much simpler. So we believe.</p>

      <p>However, there are plenty of social constructs that actually hinder our experience of life. </p>

      <p>Why is pink for girls? If a young boy, unaware still of these constructs, really likes 
        a pink shirt, why is he questioned, ridiculed, corrected, when it really does not matter?</p>
      </div>

      <div className="paragraph">
      <p>I have this same feeling about the social construct of family.</p>
      </div>

      <div className="paragraph">
      <p>Preface: this is not an academic paper. 
      These are simply the thoughts that zoomed around in my head during this half year (and long before). 
      It is a very simplified document about a very large and complex sociological concept. People may not agree. 
      You may not agree. And it is not the objective truth. It is simply an attempt at cracking the boundaries we 
      define around social constructs, in this case the family, but applicable to any construct you can think of. 
      Why do we believe? Is it personal or societal? Do these beliefs hinder me in my enjoyment of life? 
      Is there another way to approach this belief system?</p>
      <p>Preface 2: This is based on the western experience of family.</p>
      </div>

      <div className="footer">
      <h3 onClick={() => {navigate('/mug')}}>{'>>>>'}enter{'>>>>'}</h3>
      <img src="img/end.png" id="end" />
      </div>
    </div>
  )
}
