import React from 'react';

const formatJsonText = (input: string) => {
  const description = input.split('[nl]');
  return description.map((line, index) => (
    <>
      <p key={index}>{line}</p>
    </>
  ));
};

export { formatJsonText };
