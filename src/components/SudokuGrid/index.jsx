import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import { sudokuStrings } from '../../utils/data';
import SudokuRow from './SudokuRow';

const SudokuGrid = () => {
  const [stringsArrays, setStringsArrays] = useState(sudokuStrings.map(item => item.split('')));

  const handleChange = ({ firstIndex, secondIndex, value }) => {
    const _stringsArrays = stringsArrays;

    if (
      !_stringsArrays[firstIndex].includes(value) &&
      stringsArrays.every(item => item[0] != value)
    ) {
      _stringsArrays[firstIndex][secondIndex] = value;
      setStringsArrays([..._stringsArrays]);
    }
  };

  return (
    <Grid container wrap="wrap" direction="column">
      {stringsArrays.map((stringArr, index) => (
        <Grid key={index} item xs={4}>
          <SudokuRow
            firstIndex={index}
            digits={stringArr}
            onChange={handleChange}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SudokuGrid;
