import React from "react";
import styles from './Coin.module.css';
import Link from 'next/link';
import Image from "next/image";


const Coins = ({
                   name,
                   price,
                   symbol,
                   marketcap,
                   volume,
                   img,
                   id,
                   priceChange
               }) => {
    return (
               <Link href='/coin/[id]' as={`/coin/${id}`}>
            <a>
                <div className={styles.coin_container}>
                    <div className={styles.coin_row}>
                        <div className={styles.coin}>
                            <p className={styles.coin_img}>
                                <Image src={img} alt={name} className={styles.coin_img} width='30px' height='30px' margin-right='10px' />
                            </p>
                                                        {/*<img src={img} alt={name} className={styles.coin_img}/>*/}
                            <h1 className={styles.coin_h1}> {name}</h1>
                            <p className={styles.coin_symbol}>{symbol}</p>
                        </div>
                        <div className={styles.coin_data}>
                            <p className={styles.coin_price}>{price.toLocaleString()} </p>
                            <p className={styles.coin_volume}>{volume.toLocaleString()} </p>

                            {priceChange < 0 ? (
                                <p className={styles.coin_percent_red}>
                                    {priceChange.toFixed(2)}%
                                </p>
                            ) : (
                                <p className={styles.coin_percent_green}>
                                    {priceChange.toFixed(2)}%
                                </p>
                            )}
                            <p className={styles.coin_marketcap}>{marketcap.toLocaleString()}  </p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
          )
}
export default Coins;
