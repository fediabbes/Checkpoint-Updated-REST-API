import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteActor, getOneActor, toggleTrue } from '../redux/Actions/ActorsActions';

function CardActors({ el }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteActor = () => {
        if (window.confirm('Are you sure you want to delete an Actor'))
            dispatch(deleteActor(el._id))
    }

    return <div>
        <Card className="bg-dark text-white">
            <Card.Img src={el.image} alt="Actor" />
            <Card.ImgOverlay>
                <Card.Title> {el.name}  </Card.Title>
                <Card.Text>
                    {el.occupation}
                </Card.Text>
                <Card.Text> Oscars : {el.oscars}  </Card.Text>
                <div className='CardButtons'>
                    <Button onClick={() => { dispatch(toggleTrue()); dispatch(getOneActor(el._id)); navigate('/addActor') }} variant="outline-light">Edit an Actor</Button>
                    <Button onClick={handleDeleteActor} variant="outline-danger" >Delete an Actor</Button>
                </div>
            </Card.ImgOverlay>
        </Card>
    </div>;
}

export default CardActors;
