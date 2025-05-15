import React, { useState } from "react";
import "./App.scss";
import SkipPage from "./skip-page/SkipPage";

import { Container, Stepper, Step, StepLabel } from "@mui/material";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentIcon from "@mui/icons-material/Payment";

const steps = [
  { label: "Postcode",     icon: <LocationOnIcon /> },
  { label: "Waste Type",   icon: <DeleteIcon /> },
  { label: "Select Skip",  icon: <LocalShippingIcon /> },
  { label: "Permit Check", icon: <SecurityIcon /> },
  { label: "Choose Date",  icon: <CalendarMonthIcon /> },
  { label: "Payment",      icon: <PaymentIcon /> },
];

const ColorConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 10 },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#555",
    borderRadius: 1,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundColor: "#1976d2",
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundColor: "#1976d2",
  },
}));

export default function App() {
  const [activeStep] = useState(2);

  return (
    <Container maxWidth="lg">
      <div className="stepper-container">
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorConnector />}>  
          {steps.map(({ label, icon }, idx) => {
            const done    = idx <  activeStep;
            const current = idx === activeStep;
            const color   = done || current ? "#1976d2" : "#555";

            return (
              <Step key={label}>
                <StepLabel
                  icon={icon}
                  StepIconProps={{ sx: { color } }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // root text color
                    color,
                    // label styling
                    '& .MuiStepLabel-label': {
                      marginTop: '4px',
                      fontSize: '0.75rem',
                      textTransform: 'none',
                      color,
                    },
                    // ensure active/completed label picks color
                    '&.Mui-active .MuiStepLabel-label': {
                      color,
                    },
                    '&.Mui-completed .MuiStepLabel-label': {
                      color,
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <SkipPage />
    </Container>
  );
}
