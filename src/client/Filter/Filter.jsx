import Button from '../../shared/components/Button'
import FormInput from '../../shared/components/FormInput'

import styles from './Filter.module.scss'

const Filter = ({ onChange }) => {

    return (
        <div className={styles.formWrapper}>
            <div className={styles.btnWrapper}>
                <span className={styles.resetBtn}>Clear filter</span>
            </div>
            <form className={styles.form}>
                <FormInput type="text" onChange={(e) => onChange(e.target.value)} label='Buy advice exchange'/>
                <FormInput type="text" label='Buy advice currency'/>
                <FormInput type="text" label='Buy advice currency'/>
                <FormInput type="text" label='Sell advice currency'/>
                <Button>Filter Arbitrage</Button>       
            </form>
            
        </div>
    )
};

export default Filter;
