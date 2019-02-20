import React from 'react';

const Footer = () => {
    const todayDate = new Date().toISOString().split('T')[0];

    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    {todayDate}
                    <a className="grey-text text-lighten-4 right" href="#!">Git Hub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;