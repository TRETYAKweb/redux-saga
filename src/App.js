import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCount } from './store/selectots/count';

import { countActions } from './store/actions/count';
import { usersActions } from './store/actions/users'
import { getUsers } from './store/selectots/users';


function App() {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  const users = useSelector(getUsers);

  console.log(users);

  const handleIncrementBtn = () => {
    dispatch(countActions.asyncIncrement());
  }

  const handleDecrementBtn = () => {
    dispatch(countActions.asyncDecrement());
  }

  const handleClientsBtn = () => {
    dispatch(usersActions.fetchUsers());
  }

  return (

    <div className="app">

      <div>{count}</div>

      <div style={{display: 'flex'}}>
        <button onClick={handleIncrementBtn}>Инкремент</button>
        <button onClick={handleDecrementBtn}>Декремент</button>
        <button onClick={handleClientsBtn}>Получить клиентов из базы</button>
      </div>

      {users.length > 0 ?
      
        <div>
          {users.map(user => 
            <div key={user.id}>
              {user.name}
            </div>
          )}
        </div>
        :
        <div>Клиентов нету!</div>
      }

    </div>

  );
}

export default App;
