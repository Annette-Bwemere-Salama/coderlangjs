import React from 'react';

export const element = (target) => {
  return <a href='google.com' target={target ? target : "_self"}>Google</a>;
};
