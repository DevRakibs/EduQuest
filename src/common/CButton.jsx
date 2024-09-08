/* eslint-disable react/prop-types */
import React from "react";
import { Button, CircularProgress } from "@mui/material";

const CButton = (props) => {
  return (
    <Button
      className="btn41-43 btn-43"
      sx={{
        textTransform: "none",
        boxShadow: "none",
        borderRadius: props.rounded ? '50px' : '4px',
        whiteSpace: 'nowrap',
        position: "relative",
        ...props.style,
      }}
      {...props}
      // disableRipple
      size={props.small ? 'small' : props.large ? 'large' : ''}
      variant={props.contained ? 'contained' : props.outlined ? 'outlined' : ''}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      onClick={props.onClick}
      disabled={
        props.isLoading || props.disable
          ? props.isLoading || props.disable
          : false
      }
      color={props.color}
      onSubmit={props.onSubmit}
    >
      {props.children}
      {props.isLoading && (
        <CircularProgress
          size={24}
          sx={{
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
    </Button>
  );
};

export default CButton;
