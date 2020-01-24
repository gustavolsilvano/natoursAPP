import React, { useState } from 'react';

const TourContext = React.createContext();

export const TourProvider = ({ children }) => {
  const [currentTour, setCurrentTour] = useState(null);
  return (
    <TourContext.Provider value={{ currentTour, setCurrentTour }}>
      {children}
    </TourContext.Provider>
  );
};

export default TourContext;
