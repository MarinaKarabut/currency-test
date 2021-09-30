import {useState, useEffect} from 'react';
import PropTypes from 'prop-types'

import styles from './Table.module.scss'

const Table = ({ items, type, query }) => {
    // console.log(query);
    const selectedItems = items.filter(item => item.type.includes(type))

    const [filteredData, setFilteredData] = useState([]);
    // console.log(filteredData);
    
    const filterData = (query) => {
        console.log(query);
        const { sellAdviceExchange, buyAdviceExchange, buyAdviceCurrency, sellAdviceCurrency } = query
        
        let newArray = []
        if (sellAdviceExchange) {
            newArray = selectedItems.filter(el => el.sellExchange === sellAdviceExchange)
        }
        if (buyAdviceExchange) {
            newArray = selectedItems.filter(el => el.pair.toLowerCase() === buyAdviceExchange.toLowerCase())
        }
        if (buyAdviceCurrency) {
            newArray = selectedItems.filter(el => el.type.toLowerCase() === buyAdviceCurrency.toLowerCase())
        }
        if (sellAdviceCurrency) {
            newArray = selectedItems.filter(el => el.type.toLowerCase() === sellAdviceCurrency.toLowerCase())
        } else {
            return setFilteredData(newArray)
        }

        return setFilteredData(newArray)
    }
    
    useEffect(() => {
        filterData(query)
    }, [query])


    const array = !filteredData.length? selectedItems : filteredData

    function selectedArray(array) {
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
