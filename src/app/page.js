'use client';

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
    const [linhas, setLinhas] = useState(5);
    const [colunas, setColunas] = useState(5);
    const [posicaoTesouro, setPosicaoTesouro] = useState({
        linha: 2,
        coluna: 3,
    });

    const arrayLinhas = Array.from({ length: linhas }, (_, i) => i);
    const arrayColunas = Array.from({ length: colunas }, (_, i) => i);

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

                <div
                    className="tabuleiro"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${colunas}, 50px)`,
                        gap: '20px',
                        margin: '20px auto',
                        width: `${colunas * 50 + (colunas - 1) * 2}px}`,
                        border: '2px solid #000',
                    }}
                >
                    {arrayLinhas.map((linhaIndex) => (
                        <div
                            key={linhaIndex}
                            className="linha-tabuleiro"
                            style={{
                                display: 'contents',
                            }}
                        >
                            {arrayColunas.map((colunaIndex) => (
                                <div
                                    key={`${linhaIndex}-${colunaIndex}`}
                                    className="celula"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        border: '1px solid gray',
                                        backgroundColor: 'lightgray',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                    }}
                                ></div>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
