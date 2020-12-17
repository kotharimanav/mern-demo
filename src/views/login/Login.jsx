import React from 'react';
import Login from '../../components/login/Login';
import { Header } from '../header/Header';
import { withRouter,Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
const { authActions } = actions;

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  return (
    <React.Fragment>
      {auth.isLogin ? (
        <Redirect to={'/dashboard'} />
      ) : (
        <div>
          <Header />
          <Login
            login={data => {
              dispatch(authActions.loginRequest(data));
              history.push('/dashboard');
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(LoginPage);
