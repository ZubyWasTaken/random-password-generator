
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';


interface DisplayAlertProps {
  title: string;
  description: string;
  show: boolean;
}

const DisplayAlert: React.FC<DisplayAlertProps> = ({ title, description, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        animation: "slideInFromBottom 0.5s ease-out forwards",
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
      }}
    >
      <Alert variant="default">
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
};

export default DisplayAlert;
