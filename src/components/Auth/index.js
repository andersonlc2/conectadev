import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import authService from '../../services/authService';
import { setUserData } from '../../actions/accountActions';

function Auth({ children }) {
  const dispatch = useDispatch();
  
  const initAuth = useCallback(async () => {
    if(authService.isAuthenticate()) {
      // Recuperar os dados novamente do usuário logado.
      await dispatch(setUserData());
    }

  }, [dispatch])

  useEffect(() => {
    initAuth();
  }, [initAuth])

  return children
}

export default Auth;