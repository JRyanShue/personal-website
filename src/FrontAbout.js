
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
                I'm a high school senior at Milton Academy. 
                I'm currently doing A.I. research at Stanford on denoising diffusion models, advised by Eric Chan and Professors Gordon Wetzstein and Jiajun Wu. 
                <br/><br/>
                I'm involved with my school as a manager of our paper's Opinion section, co-head of peer tutoring, and a former co-captain of our robotics team. 
                Outside of school I enjoy research, teaching, industrial and mechanical engineering, and being involved with some side projects.
                <br/><br/>
                Feel free to reach out to me for anything! My email is ryan_shue [at] milton [dot] edu.
                <br/>
            </div>
        </div>
    )
}

export { FrontAbout };