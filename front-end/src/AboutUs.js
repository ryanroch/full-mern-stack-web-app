import './AboutUs.css'
import ryan from "./ryan.JPG"

/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  // this component expects to be passed all the details of the message it should display
  // format the date of the message nicely

  return (
    <>
      <article className="Message-article">
        <h1>About Us</h1>
        <img className="ryan-image" src={ryan} alt="Ryan"/>
        <p>Hi, my name is Ryan Rochmanofenna and I am a current Junior at NYU majoring in CS and Math.</p> 
        <p>This project is for a Agile and DevOps Class.</p>
        <p>I really enjoy my major and what I am learning because it allows me use my creativity in a productive way.</p>
        <p>This page was built using React, HTML, and CSS. I hope you like my page!</p>
        <p>A little more about myself, I really enjoy rock climbing and learning new things.</p>
        <p>My favorite CS class has been all intro to computer science because it was where I started learning programming!</p>
      </article>
    </>
  )
}

// make this component available to be imported into any other file
export default About