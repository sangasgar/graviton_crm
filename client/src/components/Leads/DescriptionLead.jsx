import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import getDescriptionLeadThunk from '../../redux/thunks/getDescriptionLeadThunk'

function DescriptionLead(){
    const dispatch = useDispatch()
    const {id} = useParams()
    const dataLead = useSelector((store) => store.descriptionLead);
    useEffect(()=>{
        dispatch(getDescriptionLeadThunk(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div>{id} {dataLead}</div>
    );
}

export default DescriptionLead