import { Grid, Container, Typography, LinearProgress, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { actionGetUsers } from '../../redux/actionCreators';
import UserCard from './UserCard';

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
  const users = useSelector(state => state.users.data);
  const loading = useSelector(state => state.users.loading);
  const [query, changeQuery] = useState('');

  const searchHandler = useCallback((e) => changeQuery(e.target.value), []);
  useEffect(() => {
    dispatch(actionGetUsers(query));
  }, [query]);
  return (
    <Container className={classes.parent}>
      <InputBase
        className={classes.search}
        placeholder="Search…"
        onChange={searchHandler}
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
          <UserCard key={id} name={name} email={email} id={id} birthday={birthday} />
        ))}
      </Grid>
    </Container>
  );
}

export default UsersPage;
