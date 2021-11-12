import { Grid, Container, Paper, Typography, Button, LinearProgress, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as _ from 'lodash';
import { actionGetUsers, actionEditUser } from '../../redux/actionCreators';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    height: '100px',
    margin: '20px',
    marginTop: '60px',
    padding: '10px',
    justifyContent: 'space-around',
    position: 'relative',
  },
  wrapper: {
    marginTop: '50px',
  },
  search: {
    backgroundColor: '#7485e6',
    position: 'absolute',
    right: '15px',
    top: '-30px',
    width: '300px',
    borderRadius: '4px',
    padding: '0 5px',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#95a1e6',
      transition: '0.2s',
    },
  },
  parent: {
    position: 'relative',
    marginTop: '30px',
  },
  loader: {
    width: '100%',
    position: 'relative',
    top: '20px',
  },
  button: {
    position: 'absolute',
    top: '3px',
    right: '3px',
  },
}));

function UsersPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector(state => state.promise.data);
  const navigate = useNavigate();
  const loading = useSelector(state => state.promise.loading);
  const [query, changeQuery] = useState('');
  const clickHandler = (data) => {
    dispatch(actionEditUser(data));
    navigate('/edit');
  };
  useEffect(() => {
    dispatch(actionGetUsers(query));
  }, [query]);
  return (
    <Container className={classes.parent}>
      <InputBase
        className={classes.search}
        placeholder="Search…"
        onChange={(e) => changeQuery(e.target.value)}
      />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.wrapper}
      >
        {loading && <LinearProgress className={classes.loader} />}
        {!loading && users.length === 0 && <Typography>Sorry, no founded</Typography>}
        {users.length > 0 && users.map(({ name, email, id, birthday }) => (
          <Paper className={classes.card} key={id}>
            <Typography>
              <b>name: </b>
              { _.upperFirst(name) }
            </Typography>
            <Typography>
              <b>email: </b>
              {email}
            </Typography>
            <Typography>
              <b>birthday: </b>
              {birthday}
            </Typography>
            <Button onClick={() => clickHandler({ name, email, id, birthday })} size="small" variant="contained" color="primary" className={classes.button}> Edit </Button>
          </Paper>
        ))}
      </Grid>
    </Container>
  );
}

export default UsersPage;
