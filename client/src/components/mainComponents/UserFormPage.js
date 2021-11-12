import { Typography, TextField, Container, Box, Button, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import country from 'country-list-js';
import { URL_USERS, makeUserObj, postUser, editUser } from '../../tools';
import { actionDeleteData } from '../../redux/actionCreators';

const useStyles = makeStyles(() => ({
  container: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  birthday: {
    position: 'relative',
    width: '195px',
    bottom: '16px',
    margin: '0px 10px',
    '@media (max-width:460px)': {
      margin: '0',
      left: '10px',
    },
  },
  inputText: {
    margin: '0px 10px',
    marginBottom: '25px',
    '@media (max-width:460px)': {
      width: '80%',
    },
  },
  title: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    height: '230px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputLocation: {
    margin: '0px 10px',
    width: '195px',
    position: 'relative',
    marginBottom: '25px',
    '&:focus': {
      backgroundColor: 'white',
      transition: '0.2s',
    },
    '@media (max-width:460px)': {
      width: '80%',
    },
  },
  oneRow: {
    display: 'flex',
    '@media (max-width:460px)': {
      flexDirection: 'column',
    },
  },
}));

function UserFormPage() {
  const countries = country.names().sort();
  const classes = useStyles();
  const { name, email, birthday, id, location } = useSelector(state => state.editData);
  const [nameInput, changeName] = useState(name || '');
  const [emailInput, changeEmail] = useState(email || '');
  const [countryData, changeCountry] = useState(location || 'Ukraine');
  const [birthdayInput, changeBirthday] = useState(birthday || '2017-05-24');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = useCallback(async () => {
    if (id) {
      await editUser(id, { name: nameInput.toLowerCase(),
        email: emailInput.toLowerCase(),
        birthday: birthdayInput,
        location: countryData });
    } else {
      await postUser(URL_USERS, makeUserObj(nameInput.toLowerCase(),
        emailInput.toLowerCase(), birthdayInput, countryData));
    }
    navigate('/users');
  }, [nameInput, emailInput, birthdayInput, countryData]);

  const notCorrectEmail = emailInput.indexOf('@') === -1 || emailInput.length > 30 || emailInput.length < 10;
  const notCorrectName = nameInput.length > 20 || nameInput.length < 0;

  const emailHandler = useCallback((e) => changeEmail(e.target.value), []);
  const nameHandler = useCallback((e) => changeName(e.target.value), []);
  const birthdayHandler = useCallback((e) => changeBirthday(e.target.value), []);
  const countryHandler = useCallback((e) => changeCountry(e.target.value), []);

  useEffect(() => {
    return (() => dispatch(actionDeleteData()));
  }, []);

  return (
    <Container className={classes.container}>
      <Box className={classes.card}>
        <Typography className={classes.title} variant="h5">Form</Typography>
        <form className={classes.form}>
          <Box>
            <Box className={classes.oneRow}>
              <TextField value={nameInput} onChange={nameHandler} className={classes.inputText} placeholder="name" />
              <TextField
                onChange={birthdayHandler}
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
            <Box className={classes.oneRow}>
              <TextField value={emailInput} onChange={emailHandler} className={classes.inputText} placeholder="email" />
              <Select
                className={classes.inputLocation}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countryData}
                onChange={countryHandler}
              >
                {countries.map((item) => (
                  <MenuItem className={classes.location} key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Button disabled={notCorrectEmail || notCorrectName} onClick={clickHandler} variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default UserFormPage;
