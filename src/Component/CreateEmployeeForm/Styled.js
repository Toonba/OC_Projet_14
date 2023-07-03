import styled from 'styled-components'

export const CustomeForm = styled.form`
  margin: 20px auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .employee,
  .address {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 40px 0;
    flex-direction: column;
    border: solid 2px #93ad18;
    border-radius: 5px;
  }
  legend {
    text-align: center;
  }

  .first-row,
  .second-row {
    width: 100%;
    display: flex;
    justify-content: space-around;
    column-gap: 20px;
  }

  .firstname,
  .lastname,
  .start-date,
  .birth-date,
  .street,
  .city,
  .zip,
  .state,
  .department {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }

  .employee input,
  .address input,
  .department select,
  .save {
    width: 200px;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    border: solid 1px black;
    text-align: center;
  }

  .employee input:focus,
  .address input:focus {
    outline: solid 1px #93ad18;
    border: solid 1px #93ad18;
  }

  .button {
    width: 5%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
  }

  .save:hover {
    background-color: #93ad18;
    border: solid 1px #93ad18;
  }
`
