
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActors } from '../redux/Actions/ActorsActions';
import CardActors from './CardActors';

function ListActors() {
    const dispatch = useDispatch()
    const actorsSelector = useSelector(state => state.ActorsReducer.actors)

    useEffect(() => {
        dispatch(getActors())
    }, [])
    return <div style={{ display: "flex", justifyContent: "space-around", flexWrap: 'wrap' }}>
        {actorsSelector.map(el => <CardActors el={el} key={el._id} />)}
    </div>;
}

export default ListActors;
