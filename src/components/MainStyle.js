import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
`;
export const Content = styled.form`
  width: 31.25rem;
  height: 6.25rem;
  padding: 0 1rem;
  background: var(--gray-400);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;
export const Input = styled.input`
  width: 24.6rem;
  height: 2.8rem;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  background: var(--gray-500);
  color: var(--white);
  font-family: "Poppins", sans-serif;
  outline: none;
`;
export const Button = styled.button`
  height: 3.2rem;
  width: 3.2rem;
  background: var(--yellow);
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
