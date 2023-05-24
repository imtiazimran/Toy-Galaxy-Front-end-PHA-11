import { Footer } from "flowbite-react";




const Foot = () => {
    return (
        <Footer className="mt-5 py-5" container={true}>
            <div className="w-full text-center ">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="#"
                        src="https://i.ibb.co/CsjdDHv/1866453-1-removebg-preview.png"
                        alt="Flowbite Logo"
                        name="ToyGalaxy"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                    href="#"
                    by="ToyGalaxy"
                    year={2022}
                />
            </div>
        </Footer>
    );
};

export default Foot;