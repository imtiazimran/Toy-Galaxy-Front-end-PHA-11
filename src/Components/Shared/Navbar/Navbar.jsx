/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authorization/AuthProvider';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { BiCart } from 'react-icons/bi';
import './../../../App.css'
import useCartGet from '../../../CustomHook/useCartGet';

const Navigation = () => {

    const { user, logOut } = useContext(AuthContext)

    const cartData = useCartGet()


    const singOut = () => {
        logOut()
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand>
                <Link className='flex' to="/">
                    <img
                        src="https://i.ibb.co/CsjdDHv/1866453-1-removebg-preview.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Website Logo"
                    />

                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        ToyGalaxy
                    </span>
                </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {
                    user ? <div className='flex gap-5 flex-row-reverse items-center'>
                        <Tooltip
                            content={user.displayName ? user.displayName : user.email}
                            animation="duration-500"
                        >
                            {user.photoURL ? (
                                <Avatar img={user.photoURL} rounded={true} />
                            ) : (
                                <Avatar rounded={true} />
                            )}

                        </Tooltip>
                        <Button onClick={singOut} gradientMonochrome="failure">
                        Log Out
                        </Button>
                        <Button className='flex btn'><BiCart className='text-2xl'/> <sup className='text-lg text-gray-100'>{cartData.length}</sup></Button>
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