
function FrontMenubar() {
    return (
        <div className='front-menubar'>
            <div
            onClick={() => {window.location = 'https://jryanshue.com'}}
            style={{cursor:'pointer', marginLeft:'10px', marginRight:'10px'}}
            >
            Home
            </div>
            <div 
            id="resume"
            onClick={() => {window.open('https://docs.google.com/document/d/12di_u-VAEeL1y3q44KheB3eU25YZYMiRr9ws9ffI_xQ/edit')}}
            onMouseHover={() => {document.getElementById('resume').style.color = '#ff0000'}}
            style={{cursor:'pointer', marginLeft:'10px', marginRight:'10px'}}
            >
                Resume
            </div>
        </div>
    )
}

export { FrontMenubar };