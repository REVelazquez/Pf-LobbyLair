import React from 'react';

const Response = ({ post, response }) => {
  // Accede a los datos de post y response para mostrarlos
  const { text: postText } = post;
  const { text: responseText } = response;

  return (
    <div>
      <p className="bg-gray-800">Post: {postText}</p>
      <p>Response: {responseText}</p>
    </div>
  );
};

export default Response;
