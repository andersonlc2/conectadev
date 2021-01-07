import React, { useState, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useNavigate } from 'react-router-dom';

import { signOut } from '../../../../actions/accountActions';

function Account() {
  const account = useSelector(state => state.account);
  const ref = useRef();
  const [ isOpen, setOpen ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticate = !!account.user;

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const handleSignOut = () => {
    handleClose();

    // Logoff no App através de uma Action Redux
    dispatch(signOut());
    navigate('/');
  }

  return (
    <>
      <Avatar 
        ref={ ref }
        onClick={ handleOpen }
        alt={ account.user && account.user.name } 
        src={ account.user && account.user.avatar } 
      />
      {
        isAuthenticate
        ?
          <Menu
            anchorEl={ ref.current }
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            getContentAnchorEl={ null }
            open={ isOpen }
            onClose={ handleClose }
          >
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Meus Favoritos</MenuItem>
            <MenuItem>Meus Posts</MenuItem>
            <MenuItem>Minhas Conexões</MenuItem>
            <MenuItem onClick={ handleSignOut }>Sair</MenuItem>
          </Menu>
        :
          <Menu
            anchorEl={ ref.current }
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            getContentAnchorEl={ null }
            open={ isOpen }
            onClose={ handleClose }
          >
            <MenuItem>Registrar Gratis</MenuItem>
            <MenuItem onClick={() => navigate('/sign-in')} >Entrar</MenuItem>
          </Menu>
      }
    </>
  )
}

export default Account;