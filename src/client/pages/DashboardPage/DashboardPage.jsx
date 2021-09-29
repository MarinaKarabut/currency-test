import {useState} from 'react';

import Filter from '../../Filter'
import DashboardProfitCurrency from '../../DashboardProfitCurrency'
import Table from '../../Table'
import Instances from '../../Instances'
import Section from '../../../shared/components/Section'
import currency from '../../../helpers/currency.json'

import styles from './DashboardPage.module.scss'

const DashboardPage = () => {
    const [selectedType, setSelectedType] = useState()

    const handleChange = (type) => {
        setSelectedType(type)
    }

    return (
        <Section>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Filter />
                    <Table items={currency} type={selectedType}/>
                </div>
                <div>
                    <DashboardProfitCurrency onChange={handleChange}/>
                    <Instances items={currency} type={selectedType}/>
                </div>
            </div>
        </Section>
        
    )
};

export default DashboardPage;
