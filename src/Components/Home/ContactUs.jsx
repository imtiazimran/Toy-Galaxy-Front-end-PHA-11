import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailImg from '../../assets/invite-concept-illustration_114360-477-removebg-preview.png'
import { toast } from 'react-toastify';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fpccspv', 'template_pk1k3dk', form.current, 'TpXZV3V4tF7GyeJCY')
            .then((result) => {
                form.current.reset()
                toast.success("Email sended Successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div data-aos="zoom-in-up">

            <h1 className="flex justify-center p-5 text-5xl bg-gray-800  text-amber-300  font-bold">Contact Us</h1>

            <div className='flex justify-center'>
                <form ref={form} onSubmit={sendEmail} className="flex flex-1 max-w-md flex-col gap-4 py-10 ">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                className='text-white'
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            placeholder="Your Name"
                            required
                            type="text"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                className='text-white'
                                htmlFor="email"
                                value="Your Email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            required
                            type="text"
                            placeholder='Your Email'
                        />
                    </div>
                    <div
                        className="max-w-md"
                        id="textarea"
                    >
                        <div className="mb-2 block">
                            <Label
                                className='text-white'
                                htmlFor="comment"
                                value="Your message"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Leave a comment..."
                            required
                            rows={4}
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                <div className='flex-1 flex justify-end'>
                    <img src={EmailImg} alt="" />
                </div>
            </div>


        </div>
    );
};

export default ContactUs;