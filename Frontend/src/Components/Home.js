import { useState } from "react";
import { Accordion, Button, Carousel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getActors, toggleFalse } from "../redux/Actions/ActorsActions";

function Home() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => { setIndex(selectedIndex) }
    const dispatch = useDispatch()
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.cnet.com/a/img/E-FVmLn16iYLCcnb4RvGDVNokXs=/940x528/2020/07/09/ccbe4c91-404b-4811-be6f-c5b48c9db9dc/vudu-free-movies-july-2020.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://miro.medium.com/max/1120/0*ckAOzr7BW6fhFeGK.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.regmovies.com/static/dam/jcr:4e43319d-768a-436c-93fe-487556eeb337"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>







            <div className="HomePartOne">
                {/* <Link to='/homeTwo' ><Button variant="outline-secondary">Home two</Button></Link> */}
                <div className="HomePartOneAccordion">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>50 actors who didn't live to see their final films</Accordion.Header>
                            <Accordion.Body>
                                Any film that features an actor who the world has recently lost will undoubtedly inspire intrigue. Whether they intended this to be the case or not, their last work acts as a final statement on their work ethic and talent, and a final chance for their fans to spend some time with them.
                                You can View our List of Actors Here : <Link to='/actors' > <Button onClick={() => getActors()} variant="outline-primary">List of Actors</Button> </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Acting is not all there is to being an actor.</Accordion.Header>
                            <Accordion.Body>
                                There are various trials and competitions such as auditions and casting calls to go through prior to even being able to capture a job. After that, having the title of “actor” means hours devoted to memorizing lines and cues (Encyclopedia of Careers, 16).
                                You can Add an Actor Here : <Link to='/addActor' > <Button onClick={() => dispatch(toggleFalse())} variant="outline-secondary">Add a new Actor</Button></Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>




        </div>
    )
}

export default Home