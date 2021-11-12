import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import upperFirst from 'lodash/upperFirst';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionEditUser } from '../../redux/actionCreators';

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
  button: {
    position: 'absolute',
    top: '3px',
    right: '3px',
  },
}));

function UserCard({ name, email, id, birthday, location }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const clickHandler = useCallback(() => {
    dispatch(actionEditUser({ name, email, id, birthday, location }));
    navigate(`/users/${id}/edit`);
  }, [name, email, id, birthday]);
  return (
    <Paper className={classes.card} key={id}>
      <Typography>
        <b>name: </b>
        { upperFirst(name) }
      </Typography>
      <Typography>
        <b>email: </b>
        {email}
      </Typography>
      <Typography>
        <b>birthday: </b>
        {birthday}
      </Typography>
      <Typography>
        <b>location: </b>
        {location}
      </Typography>
      <Button onClick={clickHandler} size="small" variant="contained" color="primary" className={classes.button}> Edit </Button>
    </Paper>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  birthday: PropTypes.string,
  location: PropTypes.string,
};
UserCard.defaultProps = {
  name: '',
  email: '',
  id: 0,
  birthday: '',
  location: 'Ukraine',
};

export default UserCard;
