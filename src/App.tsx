import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Notifi } from './Notifi';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import RatingBar from './RatingBar';

function App() {
  let [emailcheck, setEmailChecked] = useState(false);

  let [pushcheck, setPushChecked] = useState(false);

  let [monthycheck, setMonthyChecked] = useState(false);

  let [quatercheck, setQuaterChecked] = useState(false);

  const [rating, setRating] = useState(8);

  const handleChange = (value: number) => {
    setRating(value);
  };
  return (
    <div className='App'>
      <h2 className='ramdom'>Rating bar</h2>
      <RatingBar
        size={50}
        value={rating}
        activeColor={'yellow'}
        inactiveColor={'#ddd'}
        onChange={handleChange}
      />

      <div className='Notifi-container'>
        <ListGroup>
          <h2>Notifications</h2>
          <p>Control your notifications and auto-follow settings</p>
          <div className='small-notifi'>
            <ListGroupItem>
            <Notifi
              id={'email'}
              name={'Email Notfications'}
              content={'Conmmits data and history'}
              checked={emailcheck}
              onChange={setEmailChecked}
            />
             </ListGroupItem>
          </div>
         
          <div>
            <ListGroupItem>
            <Notifi
              id='Push'
              name={'Push Notfications'}
              content={'Conmmits data and history'}
              checked={pushcheck}
              onChange={setPushChecked}
            />
            </ListGroupItem>
          </div>
          <div>
            <ListGroupItem>
            <Notifi
              id='Monthy'
              name={'Monthy Notfications'}
              content={'Conmmits data and history'}
              checked={monthycheck}
              onChange={setMonthyChecked}
            />
            </ListGroupItem>
          </div>
          <div>
            <ListGroupItem>
            <Notifi
              id='Quater'
              name={'Quater Notfications'}
              content={'Conmmits data and history'}
              checked={quatercheck}
              onChange={setQuaterChecked}
            />
            </ListGroupItem>
          </div>
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
