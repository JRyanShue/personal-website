
import { FrontMenubar } from "./FrontMenubar";
import { FrontLinks } from "./FrontLinks";
import { FrontAbout } from "./FrontAbout";
import { FrontTitle } from "./FrontTitle";

function FrontPage() {
    return (
        <div className="front-page">
            <FrontMenubar />
            <FrontTitle />
            <FrontLinks />
            <FrontAbout />
        </div>
    )
}

export { FrontPage };
