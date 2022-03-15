
import { SocialIcon } from 'react-social-icons';

function FrontLinks() {
    return (
        <div className='front-links'>
            <SocialIcon url='https://github.com/JRyanShue' style={{width:'40px', height:'40px', margin:'5px'}}/>
            <SocialIcon url='https://www.linkedin.com/in/j-ryan-shue-27656120b/' style={{width:'40px', height:'40px', margin:'5px'}}/>
            <SocialIcon url='mailto:ryan_shue23@milton.edu' style={{width:'40px', height:'40px', margin:'5px'}}/>
        </div>
    )
}

export { FrontLinks };