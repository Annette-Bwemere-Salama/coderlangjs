import React from 'react';
import { getUser } from './getUser';

export const element = () => {
  return<div>
    <div>
     Welcome on board
    </div>
    {/* <h2>{ {...getUser}}</h2> */}
    <h2>{getUser.firstName} {getUser.lastName}</h2>
  </div>;
};
