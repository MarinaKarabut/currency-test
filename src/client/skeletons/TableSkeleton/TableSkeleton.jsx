import Skeleton from 'react-loading-skeleton'
import { v4 } from 'uuid'


const TableSkeleton = ({ colCount, rowsCount }) => {
    const columns = Array(colCount).fill().map((el) => {
        return (
            <th key={v4()}>
                <h1>
                    <Skeleton height={60} />
                </h1>
            </th>
        );
    });

    const rowColumns = Array(colCount).fill().map((el) => {
        return (
            <td key={v4()}>
                <Skeleton height={40}/>
            </td>
        );
    })
    
    const rows = Array(rowsCount).fill().map((el) => {
        return <tr key={v4()}>{rowColumns}</tr>
    })
    
    return (
        <table >
            <thead>
                <tr>{columns}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default TableSkeleton;
