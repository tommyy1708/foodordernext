import styles from "../styles/Navbar.module.css"
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://tommyy1708.github.io/foodapi.io/categorys.json')
            .then((res) => res.json())
            .then((data) => setCategory(data));
            
    }, [])

    return (
        <header className={styles.container}>
            <div className={styles.title}>
                <h2></h2>
                <p></p>
            </div>
            <nav className={styles.menu}>
                {category?.map((item) => (
                    <Link key={item.key} href={`/${item.name}`}>{item.name}</Link>
                ))}
            </nav>
        </ header>
    )
}

export default Navbar;