/* eslint-disable react/no-unescaped-entities */
import { Avatar, Badge, Button, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authorization/AuthProvider';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import './../../../App.css'
import useCartGet from '../../../CustomHook/useCartGet';
import { HiShoppingCart } from 'react-icons/hi';

const Navigation = () => {

    const { user, logOut } = useContext(AuthContext)

    const {cart} = useCartGet()

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
            <div className="flex md:order-2 gap-4">
                <Link to={"/cart"}>
                    <Button
                    >
                        <HiShoppingCart className="mr-2 h-5 w-5" />
                        <sup>
                            <Badge color="info">
                                {cart.length}
                            </Badge>
                        </sup>
                    </Button>
                </Link>
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