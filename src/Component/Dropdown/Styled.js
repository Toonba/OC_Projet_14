import styled from 'styled-components';



export const DropDownContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 10px;

 p {
  margin: 2px 0;
}
 .dropdown-selected {
  width: 200px;
  padding: 5px 5px;
  background-color: white;
  text-align: center;
  position: relative;
}

.closed {
  border: 1px solid black;
  border-radius: 5px;
}

.opened {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid black;
  border-bottom: none;
}

.dropdown-selected i {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}

.dropdown-item {
  width: 200px;
  position: absolute;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid black;
  border-top: none;
  height: 150px;
  overflow-y: scroll;
}

.dropdown-item .dropdown-item-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.dropdown-item span {
  width: 100%;
  text-align: center;
  padding: 5px;
  cursor: pointer;
}

.dropdown-item span:hover {
  background-color: rgba(145, 175, 37, 0.2);
}

.dropdown-item .active {
  background-color: rgba(145, 175, 37, 0.5);
}



.dropdown-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 10px;
}

.dropdown-container p {
  margin: 2px 0;
}

.dropdown-container .dropdown-selected {
  width: 200px;
  padding: 5px 5px;
  background-color: white;
  text-align: center;
  position: relative;
}

.dropdown-container .closed {
  border: 1px solid black;
  border-radius: 5px;
}

.dropdown-container .opened {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid black;
  border-bottom: none;
}

.dropdown-container .dropdown-selected i {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}

.dropdown-container .dropdown-item {
  width: 200px;
  position: absolute;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid black;
  border-top: none;
  height: 150px;
  overflow-y: scroll;
}

.dropdown-container .dropdown-item .dropdown-item-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.dropdown-container .dropdown-item span {
  width: 100%;
  text-align: center;
  padding: 5px;
  cursor: pointer;
}

.dropdown-container .dropdown-item span:hover {
  background-color: rgba(145, 175, 37, 0.2);
}

.dropdown-container .dropdown-item .active {
  background-color: rgba(145, 175, 37, 0.5);
}

.dropdown-container .hide {
  display: none;
}
.hide {
  display: none;
}
`