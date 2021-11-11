import { Typography, TextField, Container, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { URL_USERS, makeUserObj, postUser, editUser } from '../../tools';
import { actionDeleteData } from '../../redux/actionCreators';

const useStyles = makeStyles(() => ({
  container: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  birthday: {
    position: 'relative',
    bottom: '16px',
    margin: '0px 25px',
  },
  inputText: {
    marginBottom: '25px',
  },
  title: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    height: '230px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

function FormPage() {
  const classes = useStyles();
  const { name, email, birthday, id } = useSelector(state => state.editData);
  const [nameInput, changeName] = useState(name || '');
  const [emailInput, changeEmail] = useState(email || '');
  const [birthdayInput, changeBirthday] = useState(birthday || '2017-05-24');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = useCallback(async () => {
    if (id) {
      await editUser(id, { name: nameInput.toLowerCase(),
        email: emailInput.toLowerCase(),
        birthday: birthdayInput });
    } else {
      await postUser(URL_USERS, makeUserObj(nameInput.toLowerCase(),
        emailInput.toLowerCase(), birthdayInput));
    }
    navigate('/');
  }, [nameInput, emailInput, birthdayInput]);

  const notCorrectEmail = emailInput.indexOf('@') === -1 || emailInput.length > 30 || emailInput.length < 10;
  const notCorrectName = nameInput.length > 20 || nameInput.length < 5;

  useEffect(() => {
    return (() => dispatch(actionDeleteData()));
  }, []);

  return (
    <Container className={classes.container}>
      <Box className={classes.card}>
        <Typography className={classes.title} variant="h5">Form</Typography>
        <form className={classes.form}>
          <Box>
            <Box className={classes.inputRow}>
              <TextField value={nameInput} onChange={(e) => changeName(e.target.value)} className={classes.inputText} placeholder="name" />
              <TextField
                onChange={(e) => changeBirthday(e.target.value)}
                className={classes.birthday}
                id="date"
                label="Birthday"
                type="date"
                defaultValue={birthdayInput}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box>
              <TextField value={emailInput} onChange={(e) => changeEmail(e.target.value)} className={classes.inputText} placeholder="email" />
            </Box>
          </Box>
          <Button disabled={notCorrectEmail || notCorrectName} onClick={() => clickHandler()} variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default FormPage;
