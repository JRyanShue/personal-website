
import { FrontMenubar } from "./FrontMenubar";
import { FrontAbout } from "./FrontAbout";
import { FrontTitle } from "./FrontTitle";

function FrontPage() {
    return (
        <div className="front-page">
            <FrontMenubar />
            <FrontTitle />
            <FrontAbout />
        </div>
    )
}

export { FrontPage };
