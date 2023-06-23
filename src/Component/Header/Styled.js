import styled from 'styled-components'

export const CustomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border-bottom: solid 2px #93ad18;

  .logo img {
    width: 150px;
    margin-left: 100px;
  }

  nav {
    margin-right: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
  }

  nav a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 24px;
    background-color: rgba(145, 175, 37, 0.8);
    padding: 10px 20px;
    border-radius: 10px;
  }

  nav a:hover {
    opacity: 0.8;
  }

  nav .active {
    text-decoration: underline;
  }
`
