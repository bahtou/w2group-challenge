import _ from 'lodash';
import React, { useEffect, useState }  from 'react';
import { Table } from 'semantic-ui-react';

function PriceTable({ marketData }) {
  if (!marketData) return null;
  if (Object.keys(marketData).length === 0) return null;

  const [column, setColumn] = useState(null);
  const [data, setData] = useState(marketData);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    setData(marketData);
  }, [marketData]);

  const handleSort = clickedColumn => () => {
    if (column !== clickedColumn) {
      setColumn(clickedColumn);
      setData(_.sortBy(data, [clickedColumn]));
      setDirection('ascending');
      return;
    }

    setData(data.reverse());
    setDirection(direction === 'ascending' ? 'descending' : 'ascending');
  }

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'date' ? direction : null}
            onClick={handleSort('date')}
          >
            Month
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'value' ? direction : null}
            onClick={handleSort('value')}
          >
            Avg Price (US$)
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {_.map(data, ({ date, value }) => (
          <Table.Row key={date}>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{`${value ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : ''} `}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default PriceTable;