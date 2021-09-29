import {useEffect, useState} from 'react';

import Filter from '../../Filter'
import DashboardProfitCurrency from '../../DashboardProfitCurrency'
import Table from '../../Table'
import Instances from '../../Instances'
import Section from '../../../shared/components/Section'
import currency from '../../../helpers/currency'
import DashboardSkeleton from '../../skeletons/DashboardSkeleton'

import styles from './DashboardPage.module.scss'


const DashboardPage = () => {
    const [cryptoCurrency, setCryptoCurrency] = useState([])

    const [selectedType, setSelectedType] = useState()

    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        const timing = setTimeout(() => {
            setCryptoCurrency(currency)
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timing)
    }, [])



    const handleChange = (type) => {
            setSelectedType(type)
    }


    return (
        <Section>
            {loading && <DashboardSkeleton/>}
            {!loading &&
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <Filter onChange={handleChange} />
                        <Table items={cryptoCurrency} type={selectedType} />
                    </div>
                    <div>
                        <DashboardProfitCurrency onChange={handleChange} />
                        <Instances items={cryptoCurrency} type={selectedType} />
                    </div>
                </div>
            }
        </Section>
        
    )
};

export default DashboardPage;
