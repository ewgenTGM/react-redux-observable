import React from 'react';
import {PLanguage} from '../../GraphQl/GitHubGQ';

export const Language: React.FC<PLanguage> = props => {
  const {name, color} = props;
  return (
    <div style={{border: `1px solid ${color}`, padding: '3px'}}>
      <span style={{color, textTransform: 'uppercase'}}>{name}</span>
    </div>
  );
};
