import React, { useEffect } from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { startMediaFetching } from '../actions/media';
import ContentScreen from '../screens/content/ContentScreen';
import DiagnosticoScreen from '../screens/content/DiagnosticoScreen';
import SharedScreen from '../screens/content/SharedScreen';
import FavoritesScreen from '../screens/content/FavoritesScreen';
import ConcienciaScreen from '../screens/content/ConcienciaScreen';

import '../App.css';
import SeguimientoScreen from '../screens/content/SeguimientoScreen';

const ContentRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMediaFetching());
    }, [dispatch]);

    return (
        <Switch>
            <Route exact path='/contenido-para-todos' component={ContentScreen} />
            <Route exact path='/contenido-para-todos/diagnostico' component={DiagnosticoScreen} />
            <Route exact path='/contenido-para-todos/conciencia' component={ConcienciaScreen} />
            <Route exact path='/contenido-para-todos/seguimiento' component={SeguimientoScreen} />
            <Route exact path='/contenido-para-todos/mis-favoritos' component={FavoritesScreen} />
            <Route exact path='/contenido-para-todos/compartido/:id' component={SharedScreen} />
            

            <Redirect to='/contenido-para-todos' />
        </Switch>
    );
}

export default ContentRouter;