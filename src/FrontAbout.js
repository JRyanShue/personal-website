
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
                I'm a high school junior at Milton Academy, where I'm a co-head of our Robotics Team and a News Editor for our school paper. 
                I'm currently working with collaborators on an AI research project applying vanilla transformers (Vision Transformer style) to single-shot 3D neural field generation. Neural fields already have many applications, but I'm most excited about the promise they hold as more perfect representations of data, and what this means for AI as a whole. 
                <br/><br/>
                I'm passionate about building software and hardware that matters. 
                In the past, I've worked on a novel 3D printer (and its corresponding software) for automated part production (called "<a href="https://jryanshue.github.io/ZengerWriterV1/" style={{color:'rgb(214, 214, 214)'}}>The Zenger</a>"), with the purpose of making 3D printing viable for economic small-scale production. 
                I also co-founded the creation of a stackable hydroponic system (called "<a href="https://www.kickstarter.com/projects/thecanopy/the-canopy-smart-vertical-farm" style={{color:'rgb(214, 214, 214)'}}>The Canopy</a>"), aimed at allowing consumers to grow their own food in small indoor spaces. The project was funded on Kickstarter last year, and we've been working on production. I've previously also had the opportunity to work at <></>
                <a href="https://ubiik.com" style={{color:'rgb(214, 214, 214)'}}>Ubiik Inc.</a>, designing and prototyping parts first as an intern and later as a contract-based Industrial Engineer.  
                <br/><br/>
                I'm pretty well-versed in the deep learning literatures of Neural Fields, Natural Language Processing, and Computer Vision. I have experience with Python and PyTorch/TensorFlow, Solidworks CAD and Industrial/Mechanical Design, full-stack web development, and FDM 3D printing. 
                <br/><br/>
                Feel free to reach out to me for anything! My email is jryanshue [at] gmail [dot] com.
                <br/>
            </div>
        </div>
    )
}

export { FrontAbout };