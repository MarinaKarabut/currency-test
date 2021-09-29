import Skeleton from 'react-loading-skeleton'

import TableSkeleton from '../TableSkeleton'

import styles from './DashboardSkeleton.module.scss'

const DashboardSkeleton = () => {
    return (
            <div className={styles.skeletonContainer}>
                <div className ={styles.wrapper}>
                    <Skeleton height={90}/>
                    <TableSkeleton colCount={3} rowsCount={5} />
                </div>
                <div >
                    <div className={styles.skeleton}>
                        <Skeleton height={110} width={500} />
                    </div>
                    <Skeleton height={110} width={500} />
                </div>
            </div>
    )
}

export default DashboardSkeleton


