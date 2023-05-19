/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Avatar, Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authorization/AuthProvider';
import { IconBase } from 'react-icons';
import { Link } from 'react-router-dom';

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

            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/allToys">
                    All Toy
                </Navbar.Link>
                <Navbar.Link href="/myToys">
                    My Toy
                </Navbar.Link>
                <Navbar.Link href="/addToys">
                    Add Toy
                </Navbar.Link>
                <Navbar.Link href="/blogs">
                    Blogs
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default Navigation;