import { Typography, TextField, Container, Box, Button, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import country from 'country-list-js';
import { actionCreateUser, actionDeleteData, actionEditUser, actionGetOneUser, actionSaveChanges } from '../../redux/actionCreators';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(actionGetOneUser(id));
    }
    return (() => dispatch(actionDeleteData()));
  }, [id]);
  const { name, email, birthday, location } = useSelector(state => state.editData.data);

  const handleChange = useCallback((e) => {
    dispatch(actionEditUser({ [e.target.name]: e.target.value }));
  }, []);
  const handleSubmit = useCallback(() => {
    if (id) {
      dispatch(actionSaveChanges({ id, data: { name, email, birthday, location } }));
    } else {
      dispatch(actionCreateUser({ name, email, birthday, location }));
    }
    navigate('/users');
  });
  const lastDate = Date.now();
  const isLoading = useSelector(state => state.editData.loading);
  const isCorrectName = name.length > 0;
  const isCorrectEmail = email.length > 10 && email.length < 30 && email.indexOf('@') !== -1;
  const isCorrectDate = Date.parse(birthday) < lastDate;

  return (
    <Container className={classes.container}>
      <Box className={classes.card}>
        <Typography className={classes.title} variant="h5">Form</Typography>
        <form className={classes.form}>
          <Box>
            <Box className={classes.oneRow}>
              <TextField disabled={isLoading} onChange={handleChange} name="name" value={name} className={classes.inputText} placeholder="name" />
              <TextField
                disabled={isLoading}
                onChange={handleChange}
                name="birthday"
                value={birthday}
                className={classes.birthday}
                id="date"
                label="Birthday"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box className={classes.oneRow}>
              <TextField disabled={isLoading} value={email} onChange={handleChange} name="email" className={classes.inputText} placeholder="email" />
              <Select
                className={classes.inputLocation}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                name="location"
                disabled={isLoading}
                value={location}
              >
                {countries.map((item) => (
                  <MenuItem className={classes.location} key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Button disabled={isLoading || !isCorrectName || !isCorrectEmail || !isCorrectDate} onClick={handleSubmit} variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Box>

    </Container>
  );
}

export default UserFormPage;
