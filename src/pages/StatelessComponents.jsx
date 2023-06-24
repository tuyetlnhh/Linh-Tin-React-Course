import React from 'react';

import Button from '../components/Button';
import ButtonState from '../components/ButtonState';

function StatelessComponents() {
  return (
    <div>
      <h3>Banner</h3>
      <Button buttonText="Increment" type="button"  />

      <h3>aside</h3>
      <Button buttonText="Decrement" />

      <h3>Bottom</h3>
      <Button buttonText="Scroll to top" type="submit"  />
      <ButtonState />

    </div>
  )
}

export default StatelessComponents