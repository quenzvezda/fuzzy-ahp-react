import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HomePageContent = () => {
    return (
        <div className="space-y-4">
            <Card>
                <Title level={2}>FUZZY ANALYTICAL HIERARCY PROCESS (FAHP)</Title>
                <Paragraph>
                    Terdapat banyak literatur yang menyebutkan ketidaktepatan keputusan dalam penggunaan perbandingan rasio. Secara umum kebanyakan manusia tidak dapat membuat perkiraan kuantitatif. Ketidakjelasan keputusan pilihan membuatn ketidakkonsistenan dalam menetapkan keputusan.
                </Paragraph>
                <Paragraph>
                    Fuzzy AHP adalah metode analisis yang dikembangkan dari AHP tradisional. Walaupun AHP biasa digunakan dalam menangani kriteria kualitatif dan kuantitatif pada MCDM namun fuzzy AHP dianggap lebih baik dalam mendeskripsikan keputusan yang samar-samar daripada AHP tradisional. (Boender et all, 1989; Buckley, 1985/a, 1985/b, Chang, 1996; Laarhoven dan Pedrycz, 1983; Lootsma, 1997; Ribeiro, 1996).
                </Paragraph>
                <Paragraph>
                    Dalam system yang lebih kompleks, pengalaman dan penilaian manusia sering digambarkan dalam bentuk linguistic dan pola yang tidak jelas. Oleh karena itu, gambaran yang lebih baik dapat dikembangkan ke dalam bentuk data kuantitatif dengan menggunakan teori fuzzy. Di sisi lain, metode AHP sering digunakan pada aplikasi yang bersifat crisp. AHP tradisional masih tidak dapat mewakili penilaian manusia. Untuk menghindari risiko tersebut, fuzzy AHP dikembangkan untuk memecahkan masalah fuzzy berhirarki. Witjaksono (2009)
                </Paragraph>
            </Card>
            <Card>
                <Title level={2}>TRIANGULAR FUZZY NUMBER (TFN)</Title>
                <Paragraph>
                    Bilangan triangular fuzzy number (TFN) merupakan teori himpunan fuzzy membantu dalam pengukuran yang berhubungan dengan penilaian subjektif manusia memakai bahasa atau linguistik. Inti dari fuzzy AHP terletak pada perbandingan berpasangan yang digambarkan dengan skala rasio yang berhubungan dengan skala fuzzy. Bilangan triangular fuzzy disimbolkan dan berikut ketentuan fungsi keanggotaan untuk 5 skala variabel linguistik, lihat tabel 2.9 (Shega et all 2012)
                </Paragraph>
            </Card>
        </div>
    );
};

export default HomePageContent;
