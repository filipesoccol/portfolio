import React from 'react'
import styles from '@/styles/Home.module.scss'
import Icons from './icons'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <hr />
            <div className={styles.social}>
                <a href="https://github.com/filipesoccol" target='_blank'><Icons name="github" size={24} /></a>
                <a href="https://www.linkedin.com/in/filipesoccol" target='_blank'><Icons name="linkedin" size={24} /></a>
                <a href="https://twitter.com/filipesoccol" target='_blank'><Icons name="twitter" size={24} /></a>
            </div>
            <p>LONDRINA - PARANA - BRAZIL</p>
        </div>
    )
}