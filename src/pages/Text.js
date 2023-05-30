import React, { useState, useEffect } from 'react'
import '../index.css'
import '../style/landing.css'
import '../style/base.css'
import Menu from '../components/Menu'

export default function Text() {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },[])

  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(true);
  const [bg, setBg] = useState(true);


  const handleMenu = () => {
    setToggle(!toggle)
    setIcon(!icon)
    setBg(!bg)
  }

  const bottomImg = {
    position: "relative",
    height: "10vh",
    left: "40%"
  }

  return (
    <>
    
    <div className="base">
      
      <h1>the text</h1>

      <p>(De)constructing family models is an attempt at uncovering the processes that hide behind the creation of social constructs, 
        and finding ways to influence these processes. The social construction of reality largely shapes how we behave as a society. 
        It is the idea that many of the things we do and rules we follow are essentially just <span className="hili">a figment of our shared imagination. </span>
        Over several hundreds of years, us humans defined certain standard ways of living, and we unknowingly or unreflectively still 
        live by these definitions. However, <span className="hili">they have no inherent meaning but the meaning we collectively give it.</span></p>

      <p>An example: pink is for girls, blue is for boys. Nothing in the material world attributes certain colours to certain genders. 
        This is something that society has collectively ‘agreed' on, and therefore it continues to exist and we continue to follow its rule. 
        <span className="hili"> If tomorrow we would all decide that now green was for girls and purple for boys, and as one shared mind believed in it, that would 
        be our new truth.</span></p>

      <p>So why do we behave in these manners, following rules that are not set in stone? If something different would have happened 
        over the course of history, however minor, these rules could have been completely different. What happened in history to make 
        a piece of fiction become an unavoidable fact, and <span className="hili">how might we change its course?</span></p>

      <p>Many social constructs are necessary for a functioning global society. Refer, for example, to money. We all agree that 
        some arbitrary numbers have a certain value, and that it can be exchanged for goods and services. This is not really based 
        on any concrete factual data anymore, but believing in it makes working and living together much easier. <span className="hili">So we believe.</span> There are, 
        however, many social constructs that hinder our experience of life, without much to get from it. Why is pink for girls, 
        when it’s a lovely colour that should be worn all around?</p>

      <p><span className="hili">Why is the (western) idea of a family that of a nuclear one?</span></p>

      <p>There is a long history behind the formation of our western definition of family. We have always put a lot of emphasis on 
        <span className="hili"> individualistic experiences.</span> Our general interpretation of the family reflects this.</p>

        <p>When the industrial revolution was underway, single people moved away from their family farms to pursue a better life in the city. 
          They stopped working together as one, and instead got their own jobs, their own spouses and their own children. 
          The newly found privacy and individualism were valued, but the safety, teamwork and companionship of a large family was gone, 
          and so the social group we relied on for emotional and pedagogical needs was too. In the fifties and sixties this was okay: 
          the community of a tight-knit neighbourhood provided the social life, and the women at home made sure everything in the house 
          was running smoothly.</p>

        <p><span className="hili">This period cemented our idea of a family</span>, the one that many of us still believe in, but the structure has been in steady decline. 
          Women are not at home anymore, but have rightfully started working, and neighbourhoods are much less involved since the invention 
          of television. <span className="hili">This version of a family is not sustainable for many</span>, both the kids and the adults don’t have all their needs met. 
          And yet we continue to define it like this. </p>

        <p>The family did not always have these boundaries. Tens of thousands of years ago, people lived in small bands, 
          which together formed tribes. The bands were made up of more or less twenty-five people, who relied on each other 
          not just for survival, but for a good, enjoyable life. They needed each other much like we did on the family farms 
          before the industrial revolution, but there is one key difference. <span className="hili"> They did not define kinship by biological relations. </span> 
          A group didn’t need to share DNA to consider each other family. The relations were just as much defined by outside factors. 
          There were many ways, in many cultures, for two people to become kin, like being someone’s namesake, or surviving together at sea. 
          <span className="hili"> These families, while not genetically related, were probably closer than a lot of families are today.</span></p>

        <p>So why do we define family so narrowly now?</p>

        <p><span className="hili">Social constructs are confirmed in the things we experience in our day-to-day life.</span> Our laws dictate certain requirements to be 
          considered a family. Our governments refer to families in a certain way. On tv, many families are genetically related, or if not, 
          portrayed as special or weird. We grow up with these symbols that confirm one belief, so we conclude that that must be the one true meaning. 
          <span className="hili"> Fiction turns into fact.</span></p>
      
        <p>At the same time, the word family carries some expectations, <span className="hili">of closeness, emotional support, love. </span> 
          Our definition means that we are somewhat ‘stuck' with our immediate families, even though they do not always fulfil these expectations. 
          It is possible to not feel a bond towards your biological family at all, and yet, we feel a responsibility towards them. 
          Because they are <span className="hili">‘our family’</span>. And no matter how individualistic we get as a society, 
          <span className="hili"> humans are social creatures</span>, and we need our social group.</p>
      
        <p>(De)constructing family models seeks to construct a newly revised meaning of family. 
          To bring back the <span className="hili">kinship</span> from prehistoric ages. </p>
      

      <img src="img/cer/7.png" style={bottomImg} className="cerImg" />

      <h3>references</h3>

      <p>
      Appadurai, A. (1986) <span className="hili">The Social Life of Things</span><br/>
      Berger, P.L. and Luckmann, T. (1966). <span className="hili">The Social Construction of Reality </span><br/>
      Echterhoff, G., Higgins, E.T. and Levine, J.M. (2009). <span className="hili">Shared Reality </span><br/>
      Harari, Y.N. (2011). <span className="hili">Sapiens: A Brief History of Humankind</span><br/>
      Pater, R. (2021). <span className="hili">CAPS LOCK</span><br/>
      Sahlins, M. (2013). <span className="hili">What Kinship Is - And Is Not</span><br/>
      Coontz, S. (1989). <span className="hili">The Social Origins of Private Life</span><br/>
      Brooks, D. (2020). <span className="hili">The Nuclear Family was a Mistake</span>. <a href="https://www.theatlantic.com/magazine/archive/2020/03/the-nuclear-family-was-a-mistake/605536/" target="_blank">link</a><br/>
      iResearchNet <span className="hili">Family and Community</span>. <a href="https://sociology.iresearchnet.com/sociology-of-family/family-and-community/" target="_blank">link</a><br/>
      </p>

    </div>
    
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className={ bg ? "toggle toggled" : "toggle nottoggled" } onClick={() => { handleMenu()}}><h4>{icon ? `≡` : `\u00d7`}</h4></div>
    </>
  )
}