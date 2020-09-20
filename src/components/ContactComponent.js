import React from 'react';
import {ImTwitter,ImGithub,ImLinkedin, ImInstagram} from 'react-icons/im'

function Contact() {
    return (
        <div>
            <div id="contact" className="row section">
                <div className="offset-4"><hr class="padding-bottom-large margin-none"/></div>
                    <div className="">
                        <h2 className="text-center">Contact</h2>
                        <p className="text-center text-medium">
                            <a title="Twitter" href="https://twitter.com/pawar2467"><ImTwitter /></a>&nbsp;&nbsp;
                            <a title="LinkedIn" href="https://www.linkedin.com/in/abhijeet-pawar-b96237130/"><ImLinkedin /></a>&nbsp;&nbsp;
                            <a title="GitHub" href="https://github.com/ashler24"><ImGithub /></a>&nbsp;&nbsp;
                            <a title="instagram" href="https://instagram.com/lone_w_olf"><ImInstagram /></a>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;