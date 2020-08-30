import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';


export default function About() {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-sm">
                        <div className="p-3 bg-primary my-2 rounded">
                            <Toast>
                                <ToastHeader>
                                    Coding
                                </ToastHeader>
                                <ToastBody>
                                    ☯ I'm a Developer / Thinker / Creator / Learner
                                </ToastBody>
                            </Toast>
                        </div>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-12 col-md-6 col-sm">
                    <div className="p-3 bg-secondary my-2 rounded">
                    <Toast>
                        <ToastHeader>
                            Seeker
                        </ToastHeader>
                    <ToastBody>
                        🌱 Learning new things everyday.
                    </ToastBody>
                </Toast>
            </div>

                    </div>
                    

                </div>
                <div className="row"></div>
                <div className="row"></div>
                <div className="row"></div>
            </div>

            
            
            <div className="p-3 bg-success my-2 rounded">
                <Toast>
                    <ToastHeader>
                        Photography
              </ToastHeader>
                    <ToastBody>
                        📷 Love to take photos & edit them.
              </ToastBody>
                </Toast>
            </div>
            <div className="p-3 bg-danger my-2 rounded">
                <Toast>
                    <ToastHeader>
                        Science
              </ToastHeader>
                    <ToastBody>
                        🚀 Science Enthusiast who loves to learn the mysteries about the Universe.
              </ToastBody>
                </Toast>
            </div>
            <div className="p-3 bg-warning my-2 rounded">
                <Toast>
                    <ToastHeader>
                        FullStack Developer
              </ToastHeader>
                    <ToastBody>
                        👨‍💻 Full Stack developer who loves web development.
              </ToastBody>
                </Toast>
            </div>

        </div>
    );

}