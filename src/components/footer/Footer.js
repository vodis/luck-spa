import React from 'react';
import moment from 'moment';

const Footer = () => {
    const todayDate = new Date();
    const date = moment(todayDate).format('YYYY-MM-DD');

    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    {date}
                    <a className="grey-text text-lighten-4 right" href="https://github.com/vodis/luck-spa">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;