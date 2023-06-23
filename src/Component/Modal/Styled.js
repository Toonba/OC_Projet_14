import styled from 'styled-components'

export const CustomModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.8);

  .modal {
    width: 25%;
    background-color: white;
    position: relative;
    opacity: 1;
    border-radius: 10px;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
    background-color: black;
    padding: 5px 7px;
    border-radius: 50%;
    color: white;
  }

  .modal p {
    margin-left: 10px;
  }
`
