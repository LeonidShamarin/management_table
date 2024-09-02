import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/usersSlice.ts';
import { RootState, AppDispatch } from '../store/store';

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
`;

const Th = styled.th`
  background-color: #f7fafc;
  color: #4a5568;
  font-weight: 600;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #e2e8f0;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
  color: #2d3748;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #f1f5f9;
  }

  &:last-child td {
    border-bottom: none;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #4a5568;
`;

const ErrorMessage = styled(LoadingMessage)`
  color: #e53e3e;
`;

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, status, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <LoadingMessage>Loading users...</LoadingMessage>;
  }

  if (status === 'failed') {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;