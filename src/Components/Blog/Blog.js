import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <span className='p-2 fw-semibold font-monospace fs-5 text-primary'>Question: </span> <span className=' fs-5 font-monospace'>What is the purpose of react router?</span> </Accordion.Header>
                    <Accordion.Body>
                        <span className='fs-5 fw-semibold font-monospace text-primary p-2'>Answer:</span>
                        <span className='fs-5 font-monospace'>
                            ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <span className='p-2 fw-semibold font-monospace fs-5 text-primary'>Question: </span> <span className=' fs-5 font-monospace'>How does content API works?</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <span className='fs-5 fw-semibold font-monospace text-primary p-2'>Answer:</span>
                        <span className='fs-5 font-monospace'>
                            The Content API  allows apps to interact directly with the Center platform, vastly increasing the efficiency of managing large or complex accounts. The Content API can be used as an input source for product data .Directly delivering  data as it's updated on site.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <span className='p-2 fw-semibold font-monospace fs-5 text-primary'>Question: </span> <span className=' fs-5 font-monospace'>Explanation of useRef</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <span className='fs-5 fw-semibold font-monospace text-primary p-2'>Answer:</span>
                        <span className='fs-5 font-monospace'>
                            The useRef Hook allow to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.
                            The useRef allows to directly create a reference to the DOM element in the functional component. Syntax: <code>const refContainer = useRef(initialValue);</code>
                            The useRef returns a mutable ref object.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;