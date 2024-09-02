import React from 'react';
import styled from 'styled-components';
import SearchInputs from './components/SearchInputs.tsx';
import UserTable from './components/UserTable.tsx';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #2d3748;
  text-align: center;
  margin-bottom: 30px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Title>User Management System</Title>
      <SearchInputs />
      <UserTable />
    </AppContainer>
  );
};

export default App;