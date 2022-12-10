import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import getDescriptionLeadThunk from '../../redux/thunks/getDescriptionLeadThunk'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import deleteLeadThunk from '../../redux/thunks/deleteLeadThunk';
import ChangeStatusModal from './ChangeCompanyModal';

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 600,
    border: 'thick double grey',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DescriptionLead() {
  const [changeCompanyVisible, setChangeCompanyVisible] = useState(false)
    const dispatch = useDispatch()
    const {id} = useParams()
    const dataLead = useSelector((store) => store.descriptionLead);
    const navigate = useNavigate();
    const deleteHandler = (id) => {
        dispatch(deleteLeadThunk(id))
        navigate('/leads')
    }
    useEffect(()=>{
        dispatch(getDescriptionLeadThunk(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  const classes = useStyles();

  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Название: {dataLead?.lead_name}
        </Typography>
        <Typography variant="h5" component="h2">
          Тип лида: {dataLead?.Leads_type?.name}
        </Typography>
        <Typography className={classes?.pos} color="textSecondary">
          Какой компании передан: {dataLead?.Company?.name}
        </Typography>
        <Typography variant="body2" component="p">
          Статус: {dataLead?.Status?.name}
        </Typography>
        <Typography variant="body2" component="p">
          Комментарий: {dataLead?.comment}
        </Typography>
        {dataLead?.Status?.name !== 'Активный' ? <Button variant="outlined" onClick={()=> setChangeCompanyVisible(true)}>Изменить статус лида</Button> : <div></div>}
        <ChangeStatusModal show={changeCompanyVisible} onHide={() => setChangeCompanyVisible(false)} idLead={id}/>
      </CardContent>
      <CardActions>
        <Button style={{border: '1px solid red'}} size="small" onClick={()=> deleteHandler(id)}>Удалить</Button>
      </CardActions>
    </Card>
    </div>
  );
}
