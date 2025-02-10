import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gilberto!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Gilberto sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Analista de Tecnologia da Informação na Dataprev em Santa Catarina.
            </p>

            <p className={styles.paragrafo}>
                Atualmente trabalhando em alguns projetos da empresa em Java com Spring Boot.  
            </p>
          
        </PostModelo>
    )
}