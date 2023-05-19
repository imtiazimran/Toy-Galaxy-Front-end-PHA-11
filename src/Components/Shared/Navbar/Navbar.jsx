/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    <div className="gap-8">
        <Link to='/'>Home</Link>
        <Link to="/allToys">All Toy's</Link>
        <Link to="/myToys">My Toy's</Link>
        <Link to="/addToys">Add Toy's</Link>
        <Link to="/blogs">Blogs</Link>
    </div>
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
                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />
                <Navbar.Toggle />
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