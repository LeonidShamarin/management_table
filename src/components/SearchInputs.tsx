import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { filterUsers } from "../store/usersSlice.ts";
import { AppDispatch } from "../store/store.ts";

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #4a5568;
`;

const Input = styled.input`
  width: 91%;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
`;

const SearchInputs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(filterUsers({ field, value: e.target.value }));
    };

  return (
    <SearchContainer>
      <InputWrapper>
        <Label htmlFor="nameSearch">Name</Label>
        <Input
          id="nameSearch"
          type="text"
          placeholder="Search by name"
          onChange={handleInputChange("name")}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="usernameSearch">Username</Label>
        <Input
          id="usernameSearch"
          type="text"
          placeholder="Search by username"
          onChange={handleInputChange("username")}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="emailSearch">Email</Label>
        <Input
          id="emailSearch"
          type="text"
          placeholder="Search by email"
          onChange={handleInputChange("email")}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="phoneSearch">Phone</Label>
        <Input
          id="phoneSearch"
          type="text"
          placeholder="Search by phone"
          onChange={handleInputChange("phone")}
        />
      </InputWrapper>
    </SearchContainer>
  );
};

export default SearchInputs;
