import styles from './page.module.css';
import Image from 'next/image';
import { getBreedsList } from '@/services/breeds';
import SearchInput from '@/components/SearchInput';
import DogsList from '@/components/DogsList';
import { ReadonlyURLSearchParams } from 'next/navigation';


interface IHomeProps {
  searchParams: { [key: string]: string | string[] | undefined }
}


export default async function Home({searchParams}: IHomeProps) {
const data: TDogBreed[] = await getBreedsList(String(searchParams.search));

  return (
    <main className={styles.main}>
      <Image src='/logo.svg' width={200} height={200} alt="Logo"/>
      <h1>The Dog app</h1>
      <i>React version</i>
      <SearchInput/>
      <DogsList data={data} />
  </main>
  );
}
