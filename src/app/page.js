import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
    const [linhas, setLinhas] = useState(5);
    const [colunas, setColunas] = useState(5);
    const [posicaoTesouro, setPosicaoTesouro] = useState({
        linha: 2,
        coluna: 3,
    });

    return (
        <div>
            <Head>
                <title>Onde está o Tesouro?</title>
                <meta
                    name="description"
                    content="Um jogo simples de caça ao tesouro"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Onde está o Tesouro?</h1>
            </main>
        </div>
    );
}
