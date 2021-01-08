import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router-dom';

// import components
import Header from './Header';
import NewPost from '../Post/New';
import Feed from '../Feed';


// Hook para estilizar os componentes com o Material UI
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: '100vh',
        padding: 24,
    },
    toolbar: {
        minHeight: 64,
    }
})

function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar} />
            <main className={classes.main}>
                <Routes>
                    <Route path='/' element={ <Feed /> }/>
                    <Route path='/feed' element={ <Feed /> }/>
                    <Route path='/post/new' element={ <NewPost /> }/>
                    <Route path="*" element={<h4>Not Found: 404 !</h4> } />
                </Routes>
            </main>
        </div>
    )
}

export default Home;