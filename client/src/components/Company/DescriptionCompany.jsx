import getDescriptionCompanyThunk from '../../redux/thunks/getDescriptionCompanyThunk'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import deleteCompanyThunk from '../../redux/thunks/deleteCompanyThunk';

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

export default function DescriptionCompany() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const dataCompany = useSelector((store) => store.descriptionCompany);
    const navigate = useNavigate();
    
  const deleteHandler = (id) => {
        dispatch(deleteCompanyThunk(id))
        navigate('/company')
    }
    useEffect(()=>{
        dispatch(getDescriptionCompanyThunk(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  const classes = useStyles();

  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Название: {dataCompany?.name}
        </Typography>
        <Typography variant="h5" component="h2">
          Телефон: {dataCompany?.phone}
        </Typography>
        <Typography variant="body2" component="p">
          Email: {dataCompany?.email}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Баланс: {dataCompany?.balance}
        </Typography>
        <Typography variant="body2" component="p">
          Комментарий: {dataCompany?.comment}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{border: '1px solid red'}} size="small" onClick={()=> deleteHandler(id)}>Удалить</Button>
      </CardActions>
    </Card>
    </div>
  );
}