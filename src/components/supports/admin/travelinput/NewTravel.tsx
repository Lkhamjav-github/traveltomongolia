import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { GeneralAdmin } from "./GeneralAdmin";
import { FoodAdmin } from "./FoodAdmin";
import { CategoryAdmin } from "./CategoryAdmin";
import { PictureAdmin } from "./PictureAdmin";
import { RouteAdmin } from "./RouteAdmin";
import { CalendarAdmin } from "./CalendarAdmin";
import { LoadingAdmin } from "./LoadingAdmin";
import { SuccessAdmin } from "./SuccessAdmin";

const steps = [
  {
    label: "*Ерөнхий мэдээлэл",
    description: <GeneralAdmin />,
  },
  {
    label: "Аялалын хоол болон тээврийн хэрэгслийн мэдээлэл",
    description: <FoodAdmin />,
  },
  {
    label: "Аялалын төрөл, ангилал",
    description: <CategoryAdmin />,
  },
  {
    label: "Аялалын дэлгэрэнгүй мэдээлэл, зураг оруулах хэсэг",
    description: <PictureAdmin />,
  },
  {
    label: "Аялалын маршрут",
    description: <RouteAdmin />,
  },
  {
    label: "Аялалын календар",
    description: <CalendarAdmin />,
  },
  {
    label: "Аялалын мэдээлэл шалгах хэсэг",
    description: <LoadingAdmin />,
  },
];

export const NewTravel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>
          <strong>{steps[activeStep].label}</strong>
        </Typography>
      </Paper>
      <Box sx={{ height: "100%", width: "100%", p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};
