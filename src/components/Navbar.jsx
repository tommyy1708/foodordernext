import styles from "../styles/Navbar.module.css"
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/manage/categorys')
            .then((res) => res.json())
            .then((data) => setCategory(data));
    }, [])

    return (
        <header className={styles.container}>
            <div className={styles.title}>
                <h2>Golden Rice Bowl</h2>
                <p>3276 FL-7,Frot Lauderdale, FL 33319</p>
            </div>
            <nav className={styles.menu}>
                {category.data?.map((item) => (
                    <Link key={item.key} href={`/${item.name}`}>{item.name}</Link>
                ))}
            </nav>
        </ header>
    )
}

export default Navbar;