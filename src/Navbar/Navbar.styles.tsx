import { makeStyles } from '@material-ui/core/styles';

const NavbarStyles = makeStyles({
  nav: {
    'background-color': 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
  },
  logo: {
    'max-height': '50px',
    'padding-top': '15px',
  },
});

export { NavbarStyles };
