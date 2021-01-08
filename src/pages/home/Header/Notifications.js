import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Bell as BellIcon,
  Star as StarIcon,
  MessageCircle as MessageIcon,
  Heart as HeartIcon,
  Users as ConnectionIcon
} from 'react-feather';
// Imposts Material UI
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles'

import { getNotifications } from '../../../actions/notificationsActions';

const IconsMap = {
  reviews: StarIcon,
  new_comment: MessageIcon,
  like: HeartIcon,
  connection: ConnectionIcon
};

const useStyles = makeStyles((theme) => ({
  icon: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}))

function Notifications() {
  const classes = useStyles();
  const account = useSelector(state => state.account);
  const notifications = useSelector(state => state.notifications.notifications);
  const ref = useRef();
  const [ isOpen, setOpen ] = useState(false);
  const isAuthenticate = !!account.user;
  const dispatch = useDispatch();


  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  
  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch])

  return (
    isAuthenticate && (
      <>
        <IconButton ref={ ref } onClick={ handleOpen }>
          <SvgIcon>
            <BellIcon />
          </SvgIcon>
        </IconButton>
        <Popover
          open={ isOpen }
          onClose={ handleClose }
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          anchorEl={ ref.current }
        >
          <Box p={2}>
            <Typography variant='h6' color='textPrimary'>
              Notificações
            </Typography>
          </Box>
          <List>
            {
              notifications.map((notification) => {
                const Icon = IconsMap[notification.type];
                return (
                  <ListItem>
                    <ListItemAvatar >
                      <Avatar className={ classes.icon }>
                        <SvgIcon >
                          <Icon />
                        </SvgIcon>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                      primary={ notification.title }
                      primaryTypographyProps={{ variant:'subtitle2', color:'textPrimary' }} 
                      secondary={ notification.description }
                    />
                  </ListItem>
                )
              })
            }
          </List>
        </Popover>
    </>
    )
  )
}

export default Notifications;