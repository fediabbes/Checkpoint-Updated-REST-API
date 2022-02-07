import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addActor, getOneActor, editActor } from '../redux/Actions/ActorsActions';


function AddEdit() {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [occupation, setOccupation] = useState('')
    const [oscars, setOscars] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const editAct = useSelector(state => state.ActorsReducer.edit)
    const oneActor = useSelector(state => state.ActorsReducer.actor)


    const handleAddActor = (e) => {
        e.preventDefault()
        dispatch(addActor({ name, image, occupation, oscars }))
        navigate('/actors')
    }
    const handleEditActor = (e) => {
        e.preventDefault()
         dispatch(editActor(oneActor._id, { name, image, occupation, oscars }))
        navigate('/actors')

    }

    useEffect(() => {
        if (editAct) {
            { setName(oneActor && oneActor.name); setImage(oneActor && oneActor.image); setOccupation(oneActor && oneActor.occupation); setOscars(oneActor.oscars) }
        }
        else { setName(""); setImage(""); setOccupation(""); setOscars(0) }
    }, [oneActor])


    return <div className='FormBody'>
        <Form className='FormMain'>
        <h1 className='FormTitle'>Actor's Form </h1>
            <Form.Group className="mb-3">
                <Form.Label>Name of Actor </Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter the Actor's Name" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Picture of Actor </Form.Label>
                <Form.Control onChange={(e) => setImage(e.target.value)} value={image} type="text" placeholder="Enter the Actor's Picture" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Occupation of Actor </Form.Label>
                <Form.Control onChange={(e) => setOccupation(e.target.value)} value={occupation} type="text" placeholder="Enter the Actor's Occupation" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Oscars of Actor </Form.Label>
                <Form.Control onChange={(e) => setOscars(e.target.value)} value={oscars} type="text" placeholder="Enter the Actor's Oscars" />
            </Form.Group>
            {editAct && editAct ? <Button onClick={handleEditActor} variant="secondary" type="submit">
                Edit an Actor
            </Button> :
                <Button onClick={handleAddActor} variant="primary" type="submit">
                    Add an Actor
                </Button>}

        </Form>
    </div>;
}

export default AddEdit;
