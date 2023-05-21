/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Avatar, Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authorization/AuthProvider';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import './../../../App.css'

const Navigation = () => {

    const { user, logOut } = useContext(AuthContext)

    const singOut = () => {
        logOut()
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    ToyGalaxy
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {
                    user ? <div className='flex gap-5 flex-row-reverse'>
                        {user.photoURL ? (
                            <Avatar img={user.photoURL} rounded={true} />
                        ) : (
                            <Avatar rounded={true} />
                        )}
                        <Button onClick={singOut} gradientMonochrome="failure">
                            Log Out
                        </Button>
                    </div>
                        : <Button gradientMonochrome="success">
                            <Link to="/login">Log In</Link>
                        </Button>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <ActiveLink to="/">
                    Home
                </ActiveLink>
                <ActiveLink to="/allToys">
                    All Toy
                </ActiveLink>
                {
                    user && <ActiveLink to="/myToys">
                        My Toy
                    </ActiveLink>
                }
                <ActiveLink to="/addToys">
                    Add Toy
                </ActiveLink>
                <ActiveLink to="/blogs">
                    Blogs
                </ActiveLink>

            </Navbar.Collapse>

        </Navbar>

    );
};

export default Navigation;