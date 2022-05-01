
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
            onClick={() => {window.open('https://s3.amazonaws.com/jryanshue.com/Resume.pdf')}}
            onMouseHover={() => {document.getElementById('resume').style.color = '#ff0000'}}
            style={{cursor:'pointer', marginLeft:'10px', marginRight:'10px'}}
            >
                Resume (likely outdated)
            </div>
        </div>
    )
}

export { FrontMenubar };