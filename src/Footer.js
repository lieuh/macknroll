import React from 'react';

function Footer() {
    return (
        <footer className="footer footer-center p-8 bg-base-200 text-base-content rounded sticky">
            <nav className="grid grid-flow-col gap-4">
                <a href="./about" className="link link-hover">about</a>
                <a href="./portfolio" className="link link-hover">portfolio</a>
                <a href="./commissions" className="link link-hover">commissions</a>
                <a href="./blog" className="link link-hover">blog</a>
            </nav> 
            <nav className="grid grid-flow-col gap-4">
                <a href='https://instagram.com/macknrolll' target='_blank' rel='noopener noreferrer'>instagram</a><br />
                <a href='https://tiktok.com/@macknrolll' target='_blank' rel='noopener noreferrer'>tiktok</a><br />
                <a href='mailto:macknrollart@gmail.com'>email</a>
            </nav> 

            <aside>
                <p>macknroll's art website</p>
            </aside>
        </footer>
    );
}

export default Footer;
