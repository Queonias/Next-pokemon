import Image from "next/image";

import styles from '../styles/About.module.css';

export default function About() {
    return(
        <div className={ styles.about }>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut sapien a dui egestas fermentum. Nulla semper lacus nec purus egestas ullamcorper. Praesent eu rutrum massa. Sed non hendrerit sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            <Image src="/images/charizard.png" width="250" height="250" alt="Pokemon"/>
        </div>
    )
}