/* eslint-disable react/no-unescaped-entities */
import { Avatar, Badge, Button, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authorization/AuthProvider';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import './../../../App.css'
import useCartGet from '../../../CustomHook/useCartGet';
import { HiShoppingCart } from 'react-icons/hi';
import { BiExit } from 'react-icons/bi';

const Navigation = () => {

    const { user, logOut } = useContext(AuthContext)

    const { cart } = useCartGet()

    const singOut = () => {
        logOut()
    }
    return (
        <Navbar
        className='mb-5'
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
            <div className="flex md:order-2 gap-4 justify-center items-center">
                <Link to={"/cart"}>
                    <div
                    className='flex items-center justify-center'
                    >
                    <HiShoppingCart className=" md:h-5 md:w-5" />
                        <sup>
                            <span color="info">
                                {cart.length}
                            </span>
                        </sup>
                    </div>
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

                        <Tooltip content={"Log Out"} >
                            <div onClick={singOut} gradientMonochrome="failure">
                                <BiExit />
                            </div>
                        </Tooltip>


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