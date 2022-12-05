import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import getAllLeadsThunk from '../../redux/thunks/allLeadsThunk';
import OneLead from './OneLead';
function Leads () {
    const dispatch = useDispatch()
    const allLeads = useSelector((store) => store.allLeads);
    useEffect(()=>{
    dispatch(getAllLeadsThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            <OneLead rows={allLeads}/>
        </div>
    )
}

export default Leads