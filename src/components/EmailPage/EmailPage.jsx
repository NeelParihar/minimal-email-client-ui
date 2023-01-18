import React from 'react';
import './EmailPage.css';
import Navbar from '../Navbar/Navbar';
import EmailList from '../EmailList/EmailList';

export default function EmailPage(){
    return (
        <>
        <Navbar/>
        <EmailList/>
        </>
    )
}
