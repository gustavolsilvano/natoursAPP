import React, { useState } from 'react';

const ReviewContext = React.createContext();

export const ReviewProvider = ({ children }) => {
  const [currentReviews, setCurrentReviews] = useState(null);

  return (
    <ReviewContext.Provider value={{ currentReviews, setCurrentReviews }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
