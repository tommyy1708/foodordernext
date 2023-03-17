import React from 'react';
import Link from 'next/link';
import styles from '../styles/Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner}>
                <Link href={'/appertizer'}>
                    Start Order
                </Link>
        </div>
    );
}

export default Banner;
