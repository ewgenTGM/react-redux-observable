import React from 'react';
import {Language} from './Language';
import {PLanguage} from '../../GraphQl/GitHubGQ';
import {Card, CardContent, Paper, Typography} from '@mui/material';

type PropsType = {
  name: string;
  owner: string;
  languages: PLanguage[];
};

export const Repository: React.FC<PropsType> = props => {
  return (
    <Paper elevation={4} sx={{width: '300px'}}>
      <Card variant={'outlined'}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="h6" component="div">
            {props.owner}
          </Typography>
          <div className={'repository__languages_list'}>
            {props.languages.map((lang, index) => (
              <Language name={lang.name} color={lang.color} key={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};
