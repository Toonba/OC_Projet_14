import styled from 'styled-components'

export const Table = styled.table`
  width: 90%;
  margin: 30px auto;
  text-align: center;
  border-collapse: collapse;
  border: solid 1px rgba(145, 175, 37, 0.8);
`

export const THead = styled.thead`
  tr {
    border-bottom: 1px solid rgba(145, 175, 37, 0.8);
  }

  th {
    margin: 1em;
    cursor: pointer;
    border-right: 1px solid rgba(145, 175, 37, 0.8);
  }
`

export const TBody = styled.tbody`
  tr {
    border-bottom: 1px solid rgba(145, 175, 37, 0.8);
  }

  tr:nth-child(odd) {
    background-color: rgba(145, 175, 37, 0.3);
  }

  td {
    padding: 0.3em 0;
    border-right: 1px solid rgba(145, 175, 37, 0.8);
  }
`

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Caret = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;

  .active {
    color: rgba(145, 175, 37, 0.8);
  }

  .unactive {
    color: lightgrey;
    opacity: 0.5;
  }
`
