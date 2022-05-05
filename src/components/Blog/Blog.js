import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import {Container} from 'react-bootstrap';
const Blog = () => {
    return (
        <Container>
            <PageTitle title="Blog" />
            <h2 className='text-center my-8'>Blog</h2>
            <div>
                <h2>1) Difference between javascript and nodejs?</h2>
                <p>Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development. It is an interpreted scripting language, and the code can only be executed and run in a web browser.It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. .On the otherhand,
                We can use Node.js to execute and run the code outside of the browser. It's also known as a browser's language, and it can be used for both client-side and server-side development.Nodejs is written in C, C++ and Javascript.</p>
            </div>
            <div>
                <h2>2) When should you use nodejs and when should you use mongodb?</h2>
           
                <ul className='list-decimal text-lg my-5'>
                    <li>
                        Nodejs is a Javascript engine that we can write any application we want with (by programming in the Javascript language). It runs our Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                    </li>
                    <li>
                        MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                    </li>
                    <li>
                        Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                        So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it
                    </li>
                </ul>
                
            </div>
            <div>
                <h2>3) Differences between sql and nosql databases?</h2>
                <ul className='text-lg list-decimal'>
                    <li>
                        Type-  <br />
                        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. 
                    </li>
                    <li>
                        Language-  <br />
                        SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. 
                    </li>
                    <li>
                        The Structure - <br />
                        SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 
                    </li>
                </ul>
            </div>
    <div>
        <h2>4) What is the purpose of jwt and how does it work?</h2>
        <ul className='text-lg'>
            <li>
            JWTs are used as a secure way to authenticate users and share information.
            <br />
            JWT are mainly used for authentication. After a user logs in to an application, the application will create a JWT and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access. JWT can be easily used across multiple domains so they are often used for Single Sign On.
            <br />
                Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn't been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
                <br />
                Not all signing algorithms are created equal though. For example, some signing algorithms use a secret value that is shared between the issuer and the party that verifies the JWT. Other algorithms use a public and private key. The private key is known only to the issuer, while the public key can be widely distributed. The public key can be used to verify the signature, but only the private key can be used to create the signature. This is more secure than a shared secret because the private key only needs to exist in one place.
            </li>
        </ul>
    </div>
        </Container>
    );
};

export default Blog;