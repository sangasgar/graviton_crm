import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import getDescriptionCompanyThunk from '../../redux/thunks/getDescriptionCompanyThunk'

function DescriptionCompany(){
    const dispatch = useDispatch()
    const {id} = useParams()
    const dataCompany = useSelector((store) => store.DescriptionCompany);
    useEffect(()=>{
        dispatch(getDescriptionCompanyThunk(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div>{id} {dataCompany}</div>
    );
}

export default DescriptionCompany