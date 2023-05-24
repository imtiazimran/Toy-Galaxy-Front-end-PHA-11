import { Accordion } from 'flowbite-react';
import { title } from '../../CustomHook/ChangeTitle';

const Blog = () => {
    title("Blog")
    return (
        <div className='bg-white mt-5 w-10/12 mx-auto'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </Accordion.Title>
                    <Accordion.Content className='capitalize'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            token is kind of some secret codes which is use for validating user. there are two type of token. Access token and Refresh token. When a user Log in on site or on a app the server give the user 2 token a Access token & a Refresh token The Access token could be expire after some time or some day based on condition, and when it does user can be access data again by using the refresh token.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            When a user request for data the browser send the token to the server to varify user Authorizations. the server then do varification and check wether to give the requested data or not based on the authenticaion conditions.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            we must should the access token on HTTP ONLY COKIES if possible all though it's not highly secure place to store that but apparenty it is the place to store access token
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Compare SQL and NoSQL databases
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            SQL Stands for Structured Query Language.  and NoSQL stands for Not Only SQL databases. they are two different types of database management systems
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established using primary and foreign keys.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            On the other hand NoSQL databases use various data models, including key-value, document, columnar, and graph. They offer more flexibility in schema design and allow for storing unstructured or semi-structured data. In My opinion NoSQL gives developer more flexibility then SQL
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is express js? What is Nest JS ?
                    </Accordion.Title>
                    <Accordion.Content>

                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Express.js is a flexible Backend framework for node.js, it provite some feature and utilities that simplify the process of building API for web applicaion.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Express.js is known for its simplicity, lightweight nature, and extensive ecosystem of plugins and middleware modules, making it popular among Node.js developers.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            and on the other hand NestJS is a progressive, opinionated, and extensible Node.js framework for building efficient and scalable server-side applications. It is built with TypeScript and takes advantage of modern JavaScript features, decorators, and dependency injection
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            It provides a solid foundation for building structured and maintainable applications using a modular approach. NestJS focuses on developer productivity, code reusability, and testability, making it suitable for large-scale enterprise applications. It also has built-in support for various modules and libraries, including Express.js, allowing developers to leverage the benefits of both frameworks.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Over All, while Express.js is a lightweight and flexible web application framework for Node.js, NestJS is a more opinionated and structured framework built on top of Express.js, providing a modular and scalable architecture for building server-side applications.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    What is MongoDB aggregate and how does it work 
                    </Accordion.Title>
                    <Accordion.Content>

                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        MongoDB aggregate is a special command that helps you do clever stuff with your data in MongoDB. It's like a toolbox that allows you to analyze and change your documents in cool ways. With aggregate, you can do complex operations by linking multiple steps together.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Imagine you have a collection of documents, and you want to do more than just simple queries. You want to do things like counting, grouping, sorting, and performing calculations on your data. That's where aggregate comes in. It lets you create a series of stages, each with a different task, and MongoDB will process your data according to those stages.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Aggregate is powerful because it allows you to combine different operations and manipulate your data in ways that simple queries can't achieve. It's like having a magic wand to transform your data and get the insights you need.</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;