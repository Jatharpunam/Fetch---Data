import React, { useEffect } from 'react';

function WelcomeGreetings({ name }) {
  const msg = `Hi, ${name}!`;

  useEffect(() => {
    document.title = `Welcome to you ${name}...`;
  }, [name]);

  return (
    <h4 className="text-success">{msg}</h4>
  );
}

export default WelcomeGreetings;
