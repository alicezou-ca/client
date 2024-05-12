import React from "react";
import './styles.css'; // Path to your CSS file 


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
                <button className="icon">gmail</button>
                <button className="icon">linkedin</button>
                <button className="icon">github</button>
            </div>
        </>

        //include icons and stuff here too
    )
}

export default Intro;