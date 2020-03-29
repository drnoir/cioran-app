import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Row, Col, Container} from 'reactstrap'
import CioranPic from './Cioran_in_Romania.jpg'
import { render } from 'react-dom';

class App extends Component {

constructor(props) {
  super(props);
  this.state ={
    mood: '',
    quote: 'Select a mood to see a quote'
  };
    // this.handleQuoteClick = this.handleQuoteClick.bind(this);
    this.ChangetoM = this.ChangetoM.bind(this);
    this.ChangetoA = this.ChangetoA.bind(this);
    this.ChangetoT = this.ChangetoT.bind(this);
    this.ChangetoS = this.ChangetoS.bind(this);
    this.ChangetoN = this.ChangetoN.bind(this);
    this.ChangetoP = this.ChangetoP.bind(this);
    this.generateQuote = this.generateQuote.bind(this);
  }

  generateQuote(){
    switch(this.state.mood){
    case 'meloncholic': 
    const melonquotes = 
    [
      "In a world without melancholy, nightingales would start burping", 
     "Knowledge Is Like A Melancholy Sunset…","Melancholy is a kind of boredom refined, the feeling that one does not belong to this world. It's a sensation of irremediable exile, without immediate cause. Melancholy is a feeling deeply autonomous, also independent of the failure of those great personal successes",
     "Man starts over again everyday, in spite of all he knows, against all he knows.", "Melancholy: an appetite no misery satisfies."
    ]
       const randQuote = melonquotes[Math.floor(Math.random()*melonquotes.length)]

        this.setState({
          quote: randQuote 
          })
    break; 
    case 'angry': 
    const angryquotes = 
    [
      "Man is a robot with defects.", 
     "Skepticism is the sadism of embittered souls.","So long as man is protected by madness, he functions and flourishes.",
     "Insomnia is a vertiginous lucidity that can convert paradise itself into a place of torture.", "As far as I am concerned, I resign from humanity. I no longer want to be, nor can still be, a man. What should I do? Work for a social and political system, make a girl miserable? Hunt for weaknesses in philosophical systems, fight for moral and esthetic ideals? It’s all too little. I renounce my humanity even though I may find myself alone. But am I not already alone in this world from which I no longer expect anything?",
     "True confessions are written with tears only. But my tears would drown the world, as my inner fire would reduce it to ashes.", "“We must learn how to explode! Any disease is healthier than the one provoked by a hoarded rage.” "
    ]
       const randQuote2 = angryquotes[Math.floor(Math.random()*angryquotes.length)]

        this.setState({
          quote: randQuote2
          })
    break;
    case 'thoughtful': 
    const thoughtfulquotes = 
    [
      "Negation is the mind's first freedom, yet a negative habit is fruitful only so long as we exert ourselves to overcome it, adapt it to our needs; once acquired it can imprison us.", 
     "When you have understood that nothing is, that things do not even deserve the status of appearances, you no longer need to be saved, you are saved, and miserable forever.",
     "	Torment, for some men, is a need, an appetite, and an accomplishment."
    ]
       const randQuote3 = thoughtfulquotes[Math.floor(Math.random()*thoughtfulquotes.length)]

        this.setState({
          quote: randQuote3
          })
    break;
    case 'sombre': 
    const sombrequotes = 
    [
      "The mind is the result of the torments the flesh undergoes or inflicts upon itself.", 
      "Music is the refuge of souls ulcerated by happiness",
      "	Consciousness is much more than the thorn, it is the dagger in the flesh.", "	It is not worth the bother of killing yourself, since you always kill yourself too late."
    ]
        const randQuote4 = sombrequotes[Math.floor(Math.random()*sombrequotes.length)]

        this.setState({
          quote: randQuote4
          })     
    break;
    case 'nihilisitic': 
    const nihilistquotes = 
    [
      "However much I have frequented the mystics, deep down I have always sided with the Devil; unable to equal him in power, I have tried to be worthy of him, at least, in insolence, acrimony, arbitrariness and caprice.", 
      "Show me one thing here on earth which has begun well and not ended badly. The proudest palpitations are engulfed in a sewer, where they cease throbbing, as though having reached their natural term: this downfall constitutes the heart's drama and the negative meaning of history.",
      "Sperm is a bandit in its pure state.","The fact that life has no meaning is a reason to live --moreover, the only one.", "To exist is a habit I do not despair of acquiring.","To exist is equivalent to an act of faith, a protest against the truth, an interminable prayer. As soon as they consent to live, the unbeliever and the man of faith are fundamentally the same, since both have made the only decision that defines a being."
    ,"Tyranny destroys or strengthens the individual; freedom enervates him, until he becomes no more than a puppet. Man has more chances of saving himself by hell than by paradise."
    ]
        const randQuote5 = nihilistquotes[Math.floor(Math.random()*nihilistquotes.length)]

        this.setState({
          quote: randQuote5
          })     
    break;
    case 'pessimistic': 
    const pessimistquotes = 
    [
      "I saw that philosophy had no power to make my life more bearable. Thus I lost my belief in philosophy.", 
      "	The fanatic is incorruptible: if he kills for an idea, he can just as well get himself killed for one; in either case, tyrant or martyr, he is a monster.",
      "God: a disease we imagine we are cured of because no one dies of it nowadays", "Progress is the injustice each generation commits with regard to its predecessors.", "	Those who believe in their truth -- the only ones whose imprint is retained by the memory of men -- leave the earth behind them strewn with corpses. Religions number in their ledgers more murders than the bloodiest tyrannies account for, and those whom humanity has called divine far surpass the most conscientious murderers in their thirst for slaughter."
    ]
        const randQuote6 = pessimistquotes[Math.floor(Math.random()*pessimistquotes.length)]

        this.setState({
          quote: randQuote6
          })     
    break;
    default:
    console.log("nothing here") 
  }
}

  ChangetoM(){
    const meloncholic = "meloncholic";
    this.setState({
      mood: meloncholic
    })
  }

  
  ChangetoA(){
    const angry = "angry";
    this.setState({
      mood: angry
    })
  }

  ChangetoT(){
    const thoughtful = "thoughtful";
    this.setState({
      mood: thoughtful
    })
  }

  ChangetoS(){
    const sombre = "sombre";
    this.setState({
      mood: sombre
    })
  }

  ChangetoN(){
    const nihilisitic = "nihilisitic";
    this.setState({
      mood: nihilisitic
    })
  }

  ChangetoP(){
    const pessimistic = "pessimistic";
    this.setState({
      mood: pessimistic
    })
  }

  
  // ChangetoM(){
  //   alert('meloncholic');
  //   const meloncholic = "meloncholic";
  //   this.setState({
  //     mood: meloncholic
  //   })
  // }
  render() {


const quotes = []

return (
  <Container className="themed-container main" fluid={true}>
      {/* <header className="App-header"> */}
      <Row>
      <Col className="col-4 m-4">
        <h2>Cioran Quote Generator</h2>

        <img src={CioranPic} className="App-logo" alt="logo" />
  
      </Col>
    <Col className = "col-6 m-4">
       <h3>Mood</h3>
    
       <Button className="m-2" onClick={this.ChangetoM}>Meloncholic</Button>
       <Button  className="m-2"onClick={this.ChangetoA}>Angry</Button>
       <Button  className="m-2" onClick={this.ChangetoT}>Thoughtful</Button>
       <Button className="m-2" onClick={this.ChangetoS}>Sombre</Button>
       <Button  className="m-2" onClick={this.ChangetoN}>Nihilistic</Button>
       <Button className="m-2"  onClick={this.ChangetoP}>Pessimistic</Button>
       <p>Emil Cioran - (8 April 1911 – 20 June 1995) was a Romanian philosopher and essayist, who published works in both Romanian and French. His work has been noted for its pervasive philosophical pessimism, and frequently engages with issues of suffering, decay, and nihilism. Among his best-known works are On the Heights of Despair (1934) and The Trouble with Being Born (1973). Cioran's first French book, A Short History of Decay, was awarded the prestigious Rivarol Prize in 1950. The Latin Quarter of Paris was his permanent residence and he lived much of his life in isolation with his partner Simone Boué.</p>
       
       <Button color="danger" size ="lg" className="m-4" onClick={this.generateQuote}>Generate a Quote</Button>
       <div className ="Quote-bubble">
          <p>The Mood is <strong>{this.state.mood}</strong></p>
          <p>{this.state.quote}</p>

        </div>
       </Col>

       </Row>
      {/* </header> */}
    </Container>
  );
}}
export default App;
