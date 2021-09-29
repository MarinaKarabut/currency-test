import {useState, useEffect} from 'react';
import PropTypes from 'prop-types'

import styles from './Table.module.scss'

const Table = ({ items, type}) => {
    const selectedItems = items.filter(item => item.type.includes(type))

    const [filteredData, setFilteredData] = useState([]);
    
    const filterDataByType = (value) => {
        const newArray = selectedItems.filter(item => item.type.toLowerCase().includes(value.toLowerCase()))
        return setFilteredData(newArray)
    }
    
    useEffect(() => {
        filterDataByType(type)
    }, [type])


    const array = filteredData === []? selectedItems : filteredData
    console.log(array);

    function selectedArray(array){
        const selectedEl = array.map(item => (
            <tr key={item.id} >
                <td className={`${styles.tableBody} ${styles.pair}`}>{item.pair}</td>
                <td className={styles.tableBody}>{item.buyPrice}</td>
                <td className={`${styles.tableBody} ${styles.sell}`}>{item.sellExchange}</td>
                <td className={styles.tableBody}>{item.sellPrise}</td>
                <td className={styles.tableBody}>{item.tradeAmount}</td>
                <td className={styles.tableBody}>{ item.arb}</td>
                <td className={styles.tableBody}>{item.profit}</td>
                <td className={styles.tableBody}>{ item.fees}</td>
            </tr>
        ))
        return selectedEl
    }

    const selectedElement = selectedArray(array)
    console.log(selectedElement);

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.tableHade}>Buy exchange pair</th>
                    <th className={styles.tableHade}>Buy price</th>
                    <th className={styles.tableHade}>Sell exchange</th>
                    <th className={styles.tableHade}>Sell Prise</th>
                    <th className={styles.tableHade}>Trade Amount</th>
                    <th className={styles.tableHade}>Arb%[Free%]</th>
                    <th className={styles.tableHade}>Exp.profit USD</th>
                    <th className={styles.tableHade}>Exp.fees USD</th>
                </tr>
            </thead>
            <tbody>{ selectedElement }</tbody>
        </table>
    )
};

export default Table;

Table.defaultProps = {
    type: 'USD',
    items:[]
}

Table.propTypes = {
    type: PropTypes.string,
    items: PropTypes.array,
}