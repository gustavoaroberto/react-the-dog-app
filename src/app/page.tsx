import styles from './page.module.css';
import Image from 'next/image';
import { getBreedsList } from '@/services/breeds';

export default async function Home() {
  const data: TDogBreed[] = await getBreedsList();
  
  console.log('data: ', data);

  return (
    <main className={styles.main}>
      <Image src='/logo.svg' width={200} height={200} alt="Logo"/>
      <h1>The Dog app</h1>
      <p>React version</p>
      <form>
        <fieldset>
          <label htmlFor="search">Search your breed</label>
          <input id="search" name="search" type="search"/>
        </fieldset>
      </form>
      <section>
        {data.map(el => (
          <div className={styles.card}>
            <Image src={el.image.url} width={100} height={100} alt={el.name}/>
            <div>
              <h2>{el.name}</h2>
              <p><b>Life Span:</b> {el.life_span}</p>
              <p><b>Temperament:</b> {el.temperament}</p>
            </div>
          </div>
        ))}
      </section> 
  </main>
  );
}
