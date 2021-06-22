import React, {useState} from 'react';
import SearchBar from "../Components/SearchBar";
import CoinList from "../Components/CoinList";
import Layout from "../Components/Layout"
import styles from "./index.module.css";

export default function Home({filteredCoins}) {

    const [search, setSearch] = useState('')

    const allCoins = filteredCoins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleChange = e => {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }
    return (
        <Layout>
            <div className={styles.coin_app}>
                <SearchBar type='text' placeholder="Поиск"
                onChange={handleChange}/>
                <CoinList filteredCoins={allCoins}/>
            </div>
        </Layout>
    );
}


export const getServerSideProps = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub&order=market_cap_desc&per_page=20&page=1&sparkline=false")
    const filteredCoins = await res.json()
    return {
        props: {
            filteredCoins
        }
    };
};



