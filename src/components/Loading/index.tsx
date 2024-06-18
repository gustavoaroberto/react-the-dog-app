import React from 'react'
import Image from 'next/image';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
        <Image src='/logo.svg' width={300} height={300} alt='Logo'/>
        <div className={styles.loader}></div>
    </div>
  )
}

export default Loading