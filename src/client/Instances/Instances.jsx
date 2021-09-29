import React from 'react';
import PropTypes from 'prop-types'


import styles from './Instances.module.scss'

const Instances = ({ type, items }) => {
    const selectedItems = items.filter(item => type === item.type)
    const instance = selectedItems.length
    
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Instances</h2>
            <table >
                <thead>
                    <tr>
                        <th className={styles.tableHead}>Most profit instance</th>
                        <th className={styles.tableHead}>Active instance</th>
                        <th className={styles.tableHead}>Total instance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.tableBody}>BTS-{type}</td>
                        <td className={styles.tableBody}>{ instance }</td>
                        <td className={styles.tableBody}>7</td>
                    </tr>
                </tbody>
            </table>
         </div>
    )
};

export default Instances;

Instances.defaultProps = {
    type: 'USD',
}

Instances.propTypes = {
    type: PropTypes.string,
}
