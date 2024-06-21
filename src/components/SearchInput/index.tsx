'use client';

import React from 'react'
import styles from './SearchInput.module.css';
import useCreateQueryString from '@/utils/searchParams';
import { usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchInput = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { createQueryString } = useCreateQueryString();

    const handleSearchInputChange = useDebouncedCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            router.push(pathname + '?' + createQueryString('search', e.target.value));
        },
        1000
    );

    return (
        <form className={styles.searchInput}>
            <fieldset>
            <label htmlFor="search">Search your breed</label>
            <input id="search" name="search" type="search" onChange={e => handleSearchInputChange(e)}/>
            </fieldset>
        </form>
    )
}

export default SearchInput