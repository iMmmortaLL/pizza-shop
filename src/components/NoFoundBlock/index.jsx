import React from "react";

import styles from "./not_found_block.module.scss";

const NoFoundBlock = () => {
    return(
        <div className={styles.root}>
            <h1>Not Found
                😭
            </h1>
            <p className={styles.discription}>Нажаль ця сторінка відсутня у нашому магазині</p>
            <p className={styles.discription}>Перевірте інтернет з'єдняння або перезавантажне сторінку</p>
        </div>
    )
}
export default NoFoundBlock;