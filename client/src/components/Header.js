import { AppBar, Typography, Box } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px',
  },
  search: {
    backgroundColor: '#7485e6',
    borderRadius: '4px',
    padding: '0 5px',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#95a1e6',
      transition: '0.2s',
    },
  },
  leftBar: {
    display: 'flex',
  },
  links: {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'inherit',
  },
  input: {
    color: '#fff',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <ToolBar className={classes.root}>
        <Box className={classes.leftBar}>
          <Typography className={classes.links} variant="h6" noWrap>
            <Link className={classes.links} to="/users">
              All users
            </Link>
          </Typography>
          <Typography className={classes.links} variant="h6" noWrap>
            <Link className={classes.links} to="/users/create">
              Create
            </Link>
          </Typography>
        </Box>
      </ToolBar>
    </AppBar>
  );
}

export default Header;
