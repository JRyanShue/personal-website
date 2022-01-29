
import {useEffect, useState} from 'react';

function FrontAbout() {

    useEffect(() => {handleResize()})

    console.log(window.innerWidth)
    const [textWidth, setTextWidth] = useState('600px');

    function handleResize() {
        console.log('resize')
        if (window.innerWidth > 600) {
            setTextWidth('600px');
        } else {
            setTextWidth('calc(100% - 60px)');
        }
    }

    window.addEventListener('resize', handleResize)
    
    return (
        <div>
            <div className="front-about" style={{width: textWidth}}>
                <i class="fab fa-github"></i>
                I'm Ryan Shue, a high school junior at Milton Academy. I'm a co-head of our Robotics Team and a News Editor for our school paper. 
                I'm currently working with some really talented collaborators via the Machine 
                Learning Collective on an AI research project applying Transformers to generating Mesh Implicit Neural Representations. 
                <br/><br/>
                I'm passionate about building software and hardware that matters. 
                In the past, I've worked on a novel 3D printer for automated part production (called "<a href="https://jryanshue.github.io/ZengerWriterV1/" style={{color:'rgb(214, 214, 214)'}}>The Zenger</a>") 
                and co-founded the creation of a stackable hydroponic system (called "<a href="https://www.kickstarter.com/projects/thecanopy/the-canopy-smart-vertical-farm" style={{color:'rgb(214, 214, 214)'}}>The Canopy</a>"), which we successfully funded on Kickstarter. I've previously also had the opportunity to work at <></>
                <a href="https://ubiik.com" style={{color:'rgb(214, 214, 214)'}}>Ubiik Inc.</a>, first as an intern and later as an Industrial Engineer.  
                <br/><br/>
                I'm pretty well-versed in the literatures of Supervised and Unsupervised Learning. I have experience with Python/Tensorflow, Solidworks CAD, full-stack web development, and FDM 3D printing. 
                <br/><br/>
                Feel free to reach out to me for anything!
                <br/>
            </div>
        </div>
    )
}

export { FrontAbout };