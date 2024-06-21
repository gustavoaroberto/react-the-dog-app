import React from 'react'
import Image from 'next/image';
import LoadingDots from '@/components/LoadingDots';
import styles from './DogsList.module.css';

interface IDogsList {
    data: TDogBreed[],
    loading?: boolean
}

const DogsList = ({ data, loading }: IDogsList) => {
    if(loading) {
        <LoadingDots/>
    }

    return (
        <section className={styles.dogsList}>
            {data.map(el => (
                <div key={el.name} className={styles.card}>
                    <Image src={el.image ? el.image.url : 'https://httpstatusdogs.com/img/404.jpg'} width={100} height={100} alt={el.name}/>
                    <div>
                    <h2>{el.name}</h2>
                    <p><b>Life Span:</b> {el.life_span}</p>
                    <p><b>Temperament:</b> {el.temperament}</p>
                    </div>
                </div>
            ))}
    </section> 
  )
}

export default DogsList