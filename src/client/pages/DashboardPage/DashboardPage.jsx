import {useEffect, useState} from 'react';

import Filter from '../../Filter'
import DashboardProfitCurrency from '../../DashboardProfitCurrency'
import Table from '../../Table'
import Instances from '../../Instances'
import Section from '../../../shared/components/Section'
import currency from '../../../helpers/currency'
import Loader from '../../../shared/components/Loader'
// import DashboardSkeleton from '../../components/DashboardSkeleton'

import styles from './DashboardPage.module.scss'


const DashboardPage = () => {
    const [cryptoCurrency, setCryptoCurrency] = useState([])
    console.log(cryptoCurrency);

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
        setLoading(true)
        const timing = setTimeout(() => {
            setLoading(false)
            setSelectedType(type)
        }, 2000)
        return () => clearTimeout(timing)
    }

    return (
        <Section>
            {loading && <Loader/>}
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
