import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateOrder = ({ children, ...rest }) => {
    const [userInfo] = useContext(userContext)

    return (
        <div>
              <Route
      {...rest}
      render={({ location }) =>
        userInfo.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateOrder;