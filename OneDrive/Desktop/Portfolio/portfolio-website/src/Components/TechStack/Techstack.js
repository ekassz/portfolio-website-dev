import { Icon, InlineIcon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import javaIcon from '@iconify/icons-logos/java';
import pythonIcon from '@iconify/icons-logos/python';
import figmaIcon from '@iconify/icons-logos/figma';
import "./Techstack.css";
// Add more as needed

export default function Techstack() {
    return (
        <div className="tech-stack">
            <h2>Tech Stack</h2>
            <div className="icons">
                <Icon icon={javaIcon} width="120" height="120" />
                <Icon icon={pythonIcon} width="120" height="120" />
                <Icon icon={reactIcon} width="120" height="120" />
                <Icon icon={figmaIcon} width="120" height="120" />
                <Icon icon="devicon:rstudio" width="120" height="120" />
                <Icon icon="logos:git" width="150" height="100" />
                <Icon icon="skill-icons:javascript" width="120" height="120" />
                <Icon icon="devicon:postman" width="120" height="120" />
                <Icon icon="devicon:linux" width="120" height="120" />
                <Icon icon="vscode-icons:file-type-css" width="120" height="120" />
                <Icon icon="vscode-icons:file-type-html" width="120" height="120" />
                <Icon icon="logos:jenkins" width="120" height="120" />
                <Icon icon="simple-icons:testrail" width="120" height="120" />
                <Icon icon="devicon:npm-wordmark" width="120" height="120" />
                <Icon icon="devicon:kotlin" width="120" height="120" />
            </div>
        </div>
    );
}
