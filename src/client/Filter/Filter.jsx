import { useState } from 'react'

import Button from '../../shared/components/Button'
import FormInput from '../../shared/components/FormInput'
import {initialState} from './initialState'

import styles from './Filter.module.scss'

const Filter = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState(initialState)

    const handleChange = ({ target: { name, value } }) => {
        setSearchQuery(prev => ({ ...prev, [name]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(searchQuery)
    }

    const reset = () => {   
        setSearchQuery(initialState)
    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.btnWrapper}>
                <span className={styles.resetBtn} onClick = {reset} >Clear filter</span>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <FormInput type="text" value={searchQuery.buyAdviceExchange} name="buyAdviceExchange" onChange={handleChange} label='Buy advice exchange'/>
                <FormInput type="text" value={searchQuery.buyAdviceCurrency}  name = "buyAdviceCurrency" onChange={handleChange}  label='Buy advice currency'/>
                <FormInput type="text" value={searchQuery.sellAdviceExchange}  name = "sellAdviceExchange" onChange={handleChange}  label='Buy advice currency'/>
                <FormInput type="text" value={searchQuery.sellAdviceCurrency} name = "sellAdviceCurrency" onChange={handleChange}  label='Sell advice currency' />
                <Button type='submit'>Filter Arbitrage</Button>       
            </form>
            
        </div>
    )
};

export default Filter;