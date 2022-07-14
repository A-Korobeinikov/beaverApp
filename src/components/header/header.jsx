import './header.scss';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className='header'>
    <Link to='/' className='logo'>
      Beaver App
    </Link>
    <Avatar>H</Avatar>
  </header>
);
