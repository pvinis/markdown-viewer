import React from 'react';
import { SkewLoader, CircleLoader, BeatLoader } from 'react-spinners';

const spinnerOptions = [
  { spinner: SkewLoader, props: {} },
  { spinner: CircleLoader, props: {} },
  { spinner: BeatLoader, props: {} },
  { spinner: () => <span className="text-7xl">M</span>, props: {} }, // Original "M" character spinner
];

export const RandomLoader = () => {
  const randomSpinnerIndex = Math.floor(Math.random() * spinnerOptions.length);
  const SelectedSpinner = spinnerOptions[randomSpinnerIndex].spinner;
  const spinnerProps = spinnerOptions[randomSpinnerIndex].props;

  return <SelectedSpinner {...spinnerProps} />;
};
