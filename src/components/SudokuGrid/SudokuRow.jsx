import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@material-ui/core';

import useStyles from './styles';

const SudokuRow = ({ firstIndex, digits, onChange }) => {
  const classes = useStyles();

  const handleChange = (secondIndex) => (e) => {
    onChange({
      firstIndex,
      secondIndex,
      value: e.target.value,
    });
  };

  return (
    <Grid container wrap="nowrap">
      {digits.map((digit, index) => (
        <Grid key={index} item>
          <TextField
            type="text"
            variant="outlined"
            size="small"
            value={digit === '_' ? '' : digit}
            InputProps={{
              className: classes.textInput,
            }}
            onChange={handleChange(index)}
            fullWidth
          />
        </Grid>
      ))}
    </Grid>
  );
};

SudokuRow.propTypes = {
  firstIndex: PropTypes.number.isRequired,
  digits: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SudokuRow;
