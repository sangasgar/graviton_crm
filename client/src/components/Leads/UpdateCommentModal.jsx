/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import updateCommentLeadThunk from '../../redux/thunks/updateCommentLeadThunk';

export default function UpdateCommentModal({
  value, setValue, open, onClose, idLead,
}) {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const updateCommentHandler = (id, commentUpdate) => {
    dispatch(updateCommentLeadThunk(id, commentUpdate));
    setValue(!value);
    onClose();
  };
  const style = {
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      height: 300,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    },
    form: {
      width: '400px',
      height: '40px',
    },
    button: {
      border: '1px solid black',
      position: 'relative',
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 0)',
    },
    select: {
      width: '400px',
      margin: '10px',
      display: 'flex',
      justifyContent: 'center',
    },
    p: {
      margin: '0 auto',
      fontWeight: 'bolder',
    },
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      size="lg"
      centered
    >
      <Box sx={style.box}>
        <div style={style.select}><div style={style.p}>Изменить комментарий</div></div>
        <FormControl sx={style.form}>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={style.select}
            placeholder="Введите комментарий"
            type="text"
          />
          <Button sx={style.button} onClick={onClose}>Закрыть</Button>
          <Button sx={style.button} onClick={() => updateCommentHandler(idLead, comment)}>Изменить</Button>
        </FormControl>
      </Box>
    </Modal>
  );
}
