import getDescriptionCompanyThunk from '../../redux/thunks/getDescriptionCompanyThunk'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import deleteCompanyThunk from '../../redux/thunks/deleteCompanyThunk';
import AddBalanceModal from './AddBalanceModal';
import getLastPaymentThunk from '../../redux/thunks/getLastPaymentThunk';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: 1300,
    height: 600,
    backgroundColor:'#C1F7EE',
    margin: '50px',
    flexWrap: 'wrap'
  },
  title: {
    margin: '10px',
    height: 500,
    width: 600
  },
  button: {
    position:'absolute',
    bottom: '20%',
    right: '50%'
  },
  root: {
  background: '#188A77',
  position: 'absolute',
  top: '4em',
  right: '0px',
  bottom: '0px',
  left: '0px',
  display: 'flex',
  justifyContent: 'center'
  },
  content: {
    margin: '30px',
    fontFamily: 'Impact, fantasy',
    fontSize: '24px',
    color: '#188A77'
  }
});


export default function DescriptionCompany() {
  const [addBalanceVisible, setAddBalanceVisible] = useState(false)
    const dispatch = useDispatch()
    const {id} = useParams()
    const dataCompany = useSelector((store) => store.descriptionCompany);
    const allPayments = useSelector((store) => store.allPaymentsCompany)
    const navigate = useNavigate();
    
  const deleteHandler = (id) => {
        dispatch(deleteCompanyThunk(id))
        navigate('/company')
    }
    useEffect(()=>{
        dispatch(getLastPaymentThunk(id))
        dispatch(getDescriptionCompanyThunk(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div className={classes.container}>
      <div className={classes.title}>
        <div className={classes.content}>
          Название: {dataCompany?.name}
        </div>
        <div className={classes.content}>
          Телефон: {dataCompany?.phone}
        </div>
        <div className={classes.content}>
          Email: {dataCompany?.email}
        </div>
        <div className={classes.content}>
          Комментарий: {dataCompany?.comment}
        </div>
        </div>
        <div className={classes.title}>
          <div className={classes.content}>
          Баланс: {dataCompany?.balance}
          </div>
          <div className={classes.content}>
       <Button variant="outlined" onClick={()=> setAddBalanceVisible(true)}>Пополнить баланс</Button>
          </div>
          <div>
        <table class="table">
	          <thead>
		          <tr>
                <th>Сумма</th>
                <th>Комментарий</th>
                <th>Дата пополнения</th>
		            </tr>
	          </thead>
	        <tbody>
            {allPayments.map(el => <tr>
                <td>{el.price}</td>
                <td>{el.comment}</td>
                <td>{el.createdAt}</td>
		          </tr>)}
	            </tbody>
        </table>
          </div>
          </div>
      </div>
        <AddBalanceModal show={addBalanceVisible} onHide={() => setAddBalanceVisible(false)} companyId={dataCompany?.id}/>
      <div className={classes.button}>
        <Button style={{border: '1px solid red'}} size="small" onClick={()=> deleteHandler(id)}>Удалить</Button>
      </div>
    </div>
  );
}