import React from "react";
import './Projects.scss';

const Projects = () => {
    return (
        <div>
            <div className="projects-container">
                <div className={'projects-title'}>
                    <h1>React Projects</h1>
                </div>
                <div className="flex-box">
                    <div className="flex-item">
                        <h2>Quiz Builder</h2>
                        <hr/>
                        <p>
                            Allows users to create their own quiz and share them with their friends
                            to play.
                        </p>
                        <button className={'button'}>Demo</button>
                        <button style={{marginLeft: 10, background: "black"}} className={'button'}>GitHub</button>
                    </div>
                    <div className="flex-item">
                        <h2>Task List</h2>
                        <hr/>
                        <p>
                            A tasks manager where users can create, mark complete, or remove tasks
                            to complete.
                        </p>
                        <button className={'button'}>Demo</button>
                        <button style={{marginLeft: 10, background: "black"}} className={'button'}>GitHub</button>
                    </div>
                    <div className="flex-item">
                        <h2>HR Dash</h2>
                        <hr/>
                        <p>
                            A dashboard for HR Admins allowing them to upload and store employee
                            information.
                        </p>
                        <button className={'button'}>Demo</button>
                        <button style={{marginLeft: 10, background: "black"}} className={'button'}>GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;