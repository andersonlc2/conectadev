import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

function WritePost() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/post/new');
  };

  return (
    <Button variant="contained" color="primary" onClick={ handleClick }>
      NOVO POST
    </Button>
  )
};

export default WritePost;