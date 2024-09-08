/* eslint-disable react/prop-types */
import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';

// Custom TextField component
const CTextField = ({
  label,
  topLabel,
  value,
  onChange,
  name,
  variant,
  fullWidth = true,
  error = false,
  helperText = '',
  ...props
}) => {
  return (
    <Stack>
      {topLabel && <Typography>{topLabel}</Typography>}
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        variant={variant}
        fullWidth={fullWidth}
        error={error}
        helperText={helperText}
        {...props}
      />
    </Stack>
  );
};

export default CTextField;
