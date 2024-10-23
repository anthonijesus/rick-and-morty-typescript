import React from 'react'
import styles from './Home.module.scss'
import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'
import Main from '../Main/Main.tsx'
import Aside from '../Aside/Aside.tsx'

const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Main />
            <Aside />
            <Footer />
        </div>
    )
}

export default Home