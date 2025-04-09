import styles from "./Table.module.css";

interface TableProps<T> {
  data: T[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatData: (data: T) => Record<string, any>; // accepts raw data record and returns formatted record to use in Table row
  onRowClick?: (row: T) => void;
}

const Table = <T,>({ data, onRowClick, formatData }: TableProps<T>) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }
  const headers = Object.keys(formatData(data[0]));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className={`${onRowClick ? styles.clickableRow : ""}`}>
        {data.map((row, index) => {
          const formattedRow = formatData(row);
          return (
            <tr
              key={index}
              onClick={() => (onRowClick ? onRowClick(row) : undefined)}
            >
              {headers.map((header) => (
                <td key={header}>{formattedRow[header]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
