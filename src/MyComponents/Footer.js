import React from 'react'

export const Footer = () => {
    const FooterStyle={
        position:"relative",
        top:"40vh",
        width:"100%",
        border:"2px groove"
    };
    
    /*we can also import external stylesheet*/
    return (
        <footer className="bg-dark text-white p-2" style={FooterStyle}> 
            <p>CopyRight&copy; Mytodolist.com</p>
        </footer>
    )
}
