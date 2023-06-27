import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FeedbackComponent() {
  const { userId, amount, currency, type } = useParams();
  const [apiData, setApiData] = useState(null);

  
    
  return (
    <div>
      <h1>Feedback Component</h1>
      <p>User ID: {userId}</p>
      <p>Amount: {amount}</p>
      <p>Currency: {currency}</p>
      <p>Type: {type}</p>

      {apiData && (
        <div>
          <h2>:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default FeedbackComponent;
