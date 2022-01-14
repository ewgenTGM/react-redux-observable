import React, {useState} from 'react';
import {Button} from '@mui/material';
import {getUserByLogin, GitHubUserType} from '../../GraphQl/GitHubGQ';
import {Repository} from '../GitHubUser/Repository';

export const GraphQlTester: React.VFC = () => {
  //const [repos, setRepos] = useState<string>('');
  const [user, setUser] = useState<GitHubUserType | null>(null);
  const [userLogin, setUserLogin] = useState<string>('ewgenTGM');

  // const getRepos = async () => {
  //   const result = await getRepositories();
  //   setUser(result.data);
  // };

  const findUser = async () => {
    const result = await getUserByLogin(userLogin);
    setUser(result.data);
    console.log(user);
  };

  const repositories = user?.user.repositories.nodes.map((repo, index) => (
    <Repository name={repo.name} owner={user.user.name} languages={repo.languages.nodes} key={index} />
  ));

  return (
    <div>
      <input value={userLogin} onChange={e => setUserLogin(e.currentTarget.value)} />
      <Button onClick={findUser}>Find user</Button>
      {user && (
        <>
          <p>
            <span>User name: {user.user.name}</span>
          </p>
          <img className={'user__avatar'} src={user.user.avatarUrl} alt="avatar" width={250} height={250} />
          {user.user.repositories.nodes.length > 0 && <div className={'repository__list'}>{repositories}</div>}
        </>
      )}
    </div>
  );
};
