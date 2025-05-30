import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Toggle login state (for demo purposes)
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-teal-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="flex items-center">
                            <img src="https://s3u.tmimgcdn.com/u37752224/40b6d70b252d68b7bf449eb2804a627c.gif" alt="BMS Academey Logo" className="h-10 w-10 text-teal-500" />
                            <span className="ml-2 text-xl font-semibold text-teal-700">BMS Academey</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="/" className="text-teal-600 hover:text-teal-800 px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </a>
                            <a href="/courses" className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">
                                Courses
                            </a>
                            <a href="/about" className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </a>
                            <a href="/contact" className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        {isLoggedIn ? (
                            <>
                                <a href="/dashboard" className="flex items-center text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">
                                    <User size={18} className="mr-1" />
                                    Dashboard
                                </a>
                                <button
                                    onClick={toggleLogin}
                                    className="flex items-center text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    <LogOut size={18} className="mr-1" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <a href="/login" className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">
                                    LOG IN
                                </a>
                                <a
                                    href="/signup"
                                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    SIGN UP
                                </a>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-teal-600 hover:text-teal-800 hover:bg-teal-100 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                    <a
                        href="/"
                        className="text-teal-600 hover:bg-teal-50 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="/courses"
                        className="text-gray-600 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Courses
                    </a>
                    <a
                        href="/about"
                        className="text-gray-600 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="text-gray-600 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact
                    </a>

                    {/* Mobile Auth */}
                    <div className="border-t border-gray-200 pt-4 pb-2">
                        {isLoggedIn ? (
                            <>
                                <a
                                    href="/dashboard"
                                    className="flex items-center text-gray-600 hover:bg-teal-50 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <User size={18} className="mr-2" />
                                    Dashboard
                                </a>
                                <button
                                    onClick={toggleLogin}
                                    className="flex w-full items-center text-gray-600 hover:bg-teal-50 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <LogOut size={18} className="mr-2" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <a
                                    href="/login"
                                    className="block text-gray-600 hover:bg-teal-50 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium"
                                >
                                    LOG IN
                                </a>
                                <a
                                    href="/signup"
                                    className="block bg-teal-600 hover:bg-teal-700 text-white mt-2 px-3 py-2 rounded-md text-base font-medium text-center"
                                >
                                    SIGN UP
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;