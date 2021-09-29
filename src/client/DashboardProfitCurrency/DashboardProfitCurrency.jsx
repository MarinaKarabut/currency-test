import PropTypes from 'prop-types'
import { options } from '../../helpers/options'

import styles from './DashboardProfitCurrency.module.scss'

const DashboardProfitCurrency = ({onChange}) => {
    const optionEl = options.map(({ id, type }) => <option key={id} value={type}>{type}</option>)
    
    return (
        <div className={styles.dashboardWrapper}>
            <h2 className={styles.dashboardTitle}>Dashboard Profit Currency</h2>
            <div className={styles.wrapper}>
                <select className={styles.list} onChange={(e)=>onChange(e.target.value)}>{ optionEl }</select>
                <p className={styles.text}>Selected currency will affect all profit in dashboard</p>
            </div> 
        </div>
    )
};

export default DashboardProfitCurrency;

DashboardProfitCurrency.defaultProps = {
    onChange: () => {},
}

DashboardProfitCurrency.propTypes = {
    onChange: PropTypes.func,
}
