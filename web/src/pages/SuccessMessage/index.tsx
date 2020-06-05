import React from 'react';
import { FiUserCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './styles.css';

const SuccessMessage = () => {
   const history = useHistory();

   setTimeout(() => {
      history.push('/');
   }, 2500);

   return (
      <div id="page-success">
         <div className="content">
            <FiUserCheck size={48} color='#2FB86E' />
            <h2>Collect Point Registered!</h2>
         </div>
      </div>
   );
}

export default SuccessMessage;