import React from 'react';
import Button from '../../shared/components/Button'
import FormInput from '../../shared/components/FormInput'

import styles from './Filter.module.scss'

const Filter = () => {
    return (
        <form className={styles.form}>
            <FormInput label='Buy advice exchange'/>
            <FormInput label='Buy advice currency'/>
            <FormInput label='Buy advice currency'/>
            <FormInput label='Sell advice currency'/>
            <Button>Filter Arbitrage</Button>
        </form>
    )
};

export default Filter;
