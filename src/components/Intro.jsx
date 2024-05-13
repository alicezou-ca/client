import './styles.css'; // Path to your CSS file 
import React from "react";
import wecs from "./images/wecs.png"

const Intro =() => {



    return (
        <>
            <h3>- Hey. 👋 I’m Alice Zou</h3>
            <h2>Passionate and curious, I’m a second year student at the University of Victoria studying Computer Science 
                with a specification in Software Systems. I'm enthusiastic about leveraging technology to create innovative 
                solutions that make a positive impact! My academic journey has equipped me with a strong foundation in programming 
                languages such as Java, Python, HTML, CSS, and JavaScript, along with hands-on experience in software development 
                methodologies.</h2>
            <div className="icon-group">
            <a href="mailto:alicezou.ca@gmail.com" target="_blank" rel="noopener noreferrer" >
                    <button className="icon">gmail</button>
                </a>
                <a href="https://linkedin.com/in/alice-zou1"target="_blank" rel="noopener noreferrer" >
                    <button className="icon">linkedin</button>
                </a>
                <a href="https://github.com/alicezou-ca"target="_blank" rel="noopener noreferrer" >
                    <button className="icon"><image>{wecs}</image></button>
                </a>
            </div>
        </>
        //include icons and stuff here too
    )
}

export default Intro;