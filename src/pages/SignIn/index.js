import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    // display: 'flex', // Define essa compartimento como Flex Content
  },
  image: {
    backgroundImage: 'url(/images/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  btn: {
    marginTop: theme.spacing(1),
  },
  box: {
    width: '100%',
    marginTop: theme.spacing(8),
  },
  form: {
    margin: theme.spacing(2, 4)
  }


  // left: {
  //   flexGrow: 0, // Define o tamanho do Flex Item.
  //   flexBasis: '58%', // Define a proporção.
  //   background: 'url(/images/background.jpg) no-repeat center center / cover ',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // right: {
  //   flexBasis: '42%',
  // },
  // form: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   margin: '64px 32px',
  // }
}))

function Copyright() {
  return (
    <Typography variant='body2' align='center'>
      {'Copyright © '}
      <a color='inherit' href='href="https://www.youtube.com/channel/UCVE9-HO_GzLtDK4IGKVSYXA"'>
        Lucas Nhimi
      </a>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

function SignIn(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Grid container className={ classes.root }>
      
      <Grid 
        item 
        container
        direction='column' // flexDirection
        justify='center' // justifyContent
        alignItems='center' // alignItems
        md={7}
        className={ classes.image }
      >
        <Typography style={{ color: '#fff', fontSize: 30, lineHeight: '45px'}}>
          <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
        </Typography>
        <Typography variant='body2' style={{ color: 'rgb(255, 250, 250, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
        </Typography>
      </Grid>

      <Grid 
        item 
        md={5} 
      >
        <Box 
          display='flex'
          flexDirection='column'
          alignItems='center'
          className={ classes.box }
        >
          <Avatar  className={ classes.avatar }>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>Acesso</Typography>

          <form className={ classes.form }>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='E-mail'
              autoComplete='email'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Senha'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <Button 
              variant='contained' 
              color='primary'
              fullWidth
              className={ classes.btn }
              onClick={() => navigate('/')}
            >
              ENTRAR
            </Button>
            <Grid container direction='row'>
              <Link>Esqueceu sua senha?</Link>
              <Link>Não tem uma conta? Registre-se</Link>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>

    </Grid>

    // // Flex Container
    // <div className={ classes.root }>

    //   {/* Flex Item e Flex Container */}
    //   <div className={ classes.left }>
    //     <Typography style={{ color: '#fff', fontSize: 30, lineHeight: '45px' }}>
    //       <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
    //     </Typography>
    //     <Typography variant='body2' style={{ color: 'rgb(255, 250, 250, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
    //       Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
    //     </Typography>
    //   </div>

    //   {/* Flex Item */}
    //   <div className={ classes.right }>

    //     <form className={ classes.form }>
    //       <h4>Registrar</h4>
    //       <input type='email' placeholder='E-mail *'/>
    //       <input type='password' placeholder='Senha *'/>
    //       <button type='submit'>ENTRAR</button>
    //     </form>
    //   </div>

    // </div>
  )
};

export default SignIn;