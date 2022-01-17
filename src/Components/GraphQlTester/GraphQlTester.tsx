import React, {useState} from 'react';
import {Box, Button, CircularProgress} from '@mui/material';
import {getUserByLogin, GitHubUserType} from '../../GraphQl/GitHubGQ';
import {Repository} from '../GitHubUser/Repository';

export const GraphQlTester: React.VFC = () => {
  //const [repos, setRepos] = useState<string>('');
  const [user, setUser] = useState<GitHubUserType | null>(null);
  const [userLogin, setUserLogin] = useState<string>('ewgenTGM');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // const getRepos = async () => {
  //   const result = await getRepositories();
  //   setUser(result.data);
  // };

  const findUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await getUserByLogin(userLogin);
      setUser(result.data);
    } catch (e) {
      setError(e?.message);
    } finally {
      setLoading(false);
    }
  };

  const errorBlock = error && (
    <pre>
      <code>{JSON.stringify(error, null, 2)}</code>
    </pre>
  );

  const repositories = user?.user.repositories.nodes.map((repo, index) => (
    <Repository name={repo.name} owner={user.user.name} languages={repo.languages.nodes} key={index} />
  ));

  const userRepos = user && (
    <>
      <p>
        <span>User name: {user.user.name}</span>
      </p>
      <img className={'user__avatar'} src={user.user.avatarUrl} alt="avatar" width={250} height={250} />
      {user.user.repositories.nodes.length > 0 && <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '15px'}}>{repositories}</Box>}
    </>
  );

  return (
    <div>
      <input value={userLogin} onChange={e => setUserLogin(e.currentTarget.value)} />
      <Button onClick={findUser}>Find user</Button>
      {errorBlock}
      {loading ? <CircularProgress /> : userRepos}
    </div>
  );
};
