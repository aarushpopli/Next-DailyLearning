import React from 'react'
import f from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={f.footer}>
            <div className={f.name}>
                <span className={f.text}>Created By: Aarush Popli </span>
            </div>

            <ul className={f.links}>
                <li style={{ marginRight: "10px" }}><a className={f.text} href="https://linkedin.com/in/aarushpopli" target={'_blank'} rel="noreferrer"><i className="bi bi-linkedin mx-2" style={{ fontSize: "25px" }}></i></a></li>
                <li style={{ marginLeft: "10px" }}><a className={f.text} href="https://github.com/Aarush-Popli" target={'_blank'} rel="noreferrer"><i className="bi bi-github mx-2" style={{ fontSize: "25px" }}></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer