import React, { useState } from 'react';

const TourContext = React.createContext();

export const TourProvider = ({ children }) => {
  const [currentTour, setCurrentTour] = useState(null);
  const [tours, setTours] = useState(null);
  return (
    <TourContext.Provider
      value={{ currentTour, setCurrentTour, tours, setTours }}
    >
      {children}
    </TourContext.Provider>
  );
};

export default TourContext;
