import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { toast } from 'react-toastify';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import useAuth from '../../hooks/useAuth'; // Import the custom useAuth hook
import useLogout from '../../hooks/useLogout'; // Import the custom useLogout hook

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const { state } = useAuth();
    const { isAuthenticated } = state; // Destructure isAuthenticated from state
    const { logout, isLoading } = useLogout();

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMobileMenu(prevState => !prevState);
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout error:", error);
            toast.error("An error occurred during logout");
        }
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <ScrollLink to='hero' smooth={true} offset={0} duration={500}>
                <img src={logo} alt="Logo" className='logo' />
            </ScrollLink>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li>
                    <ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink>
                </li>
                <li>
                    <ScrollLink to='program' smooth={true} offset={-260} duration={500}>Program</ScrollLink>
                </li>
                <li>
                    <ScrollLink to='about' smooth={true} offset={-150} duration={500}>About Us</ScrollLink>
                </li>
                <li>
                    <ScrollLink to='campus' smooth={true} offset={-260} duration={500}>Campus</ScrollLink>
                </li>
                <li>
                    <ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</ScrollLink>
                </li>
                <li>
                    <ScrollLink to='contact' smooth={true} offset={-260} duration={500}>Contact Us</ScrollLink>
                </li>
                {isAuthenticated ? (
                    <li>
                        <button onClick={handleLogout} className="text-black btn no-underline cursor-pointer" disabled={isLoading}>
                            {isLoading ? "Logging out..." : "Logout"}
                        </button>
                    </li>
                ) : (
                    <li>
                        <RouterLink to='/login'>Login</RouterLink>
                    </li>
                )}
            </ul>
            <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
