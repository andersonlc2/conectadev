import React from 'react';
import { useSelector } from 'react-redux';
import { Bell } from 'react-feather';
// Imposts Material UI
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Popover from '@material-ui/core/Popover'; /// parei aquiiii


function Notifications() {
  const account = useSelector(state => state.account);
  const isAuthenticate = !!account.user;
  
  return (
    isAuthenticate && (
      <IconButton>
        <SvgIcon>
          <Bell />
        </SvgIcon>
      </IconButton>
    )
  )
}

export default Notifications;