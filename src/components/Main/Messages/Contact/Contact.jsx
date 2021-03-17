import React from 'react';
import {NavLink} from 'react-router-dom';
import ContactStyles from "./Contact.module.css";

const Contact = (props) => {
    const {id,name} = props;
    return (
        <div className={ContactStyles.contact}>
            <NavLink className={ContactStyles.contact__link} to={"/messages/" + id}>{name}</NavLink>
        </div>
    )
}

export default Contact;