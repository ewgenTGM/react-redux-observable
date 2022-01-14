import React from 'react';
import {Language} from './Language';
import {PLanguage} from '../../GraphQl/GitHubGQ';

type PropsType = {
  name: string;
  owner: string;
  languages: PLanguage[];
};

export const Repository: React.FC<PropsType> = props => {
  return (
    <div className={'repository'}>
      <div>
        <span>{props.name}</span>
      </div>
      <div>{props.owner}</div>
      <div className={'repository__languages_list'}>
        {props.languages.map((lang, index) => (
          <Language name={lang.name} color={lang.color} key={index} />
        ))}
      </div>
    </div>
  );
};
