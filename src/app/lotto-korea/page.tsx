import type { Metadata } from 'next';
import styles from './page.module.css';
import LottoClient from './LottoClient';

export const metadata: Metadata = {
    title: '로또 번호 생성기 (Lotto 6/45) | 무료 랜덤 번호 추천',
    description: '한국 로또 6/45 번호를 무료로 생성하세요. 과학적인 랜덤 알고리즘으로 행운의 번호를 추천해드립니다. 회원가입 없이 바로 사용 가능합니다.',
    keywords: ['로또 번호 생성기', '로또 추천', '무료 로또', 'lotto 6/45', '로또 자동'],
    openGraph: {
        title: '로또 번호 생성기 (Lotto 6/45) | minibell.com',
        description: '오늘의 행운의 로또 번호를 확인하세요!',
        type: 'website',
    }
};

export default function LottoKoreaPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>로또 번호 생성기</h1>
            <p className={styles.description}>
                Lotto 6/45 행운의 번호를 무료로 생성해드립니다.
            </p>

            <LottoClient />

            <section className={styles.seoSection}>
                <h2>로또 6/45 이용 방법</h2>
                <p>
                    1부터 45까지의 숫자 중 6개를 선택하는 한국의 대표적인 복권입니다. 매주 토요일 저녁에 추첨이 진행됩니다.
                </p>

                <h2>이 생성기의 특징</h2>
                <ul>
                    <li><strong>완벽한 랜덤:</strong> 브라우저의 암호화 수준 난수 생성기를 사용하여 공정합니다.</li>
                    <li><strong>중복 방지:</strong> 실제 로또와 동일하게 중복되지 않는 6개의 숫자를 뽑습니다.</li>
                    <li><strong>직관적인 디자인:</strong> 실제 로또 공 색상을 적용하여 보기 편합니다.</li>
                </ul>

                <h2>당첨 확률 높이는 팁?</h2>
                <p>
                    로또는 독립 시행이므로 수학적으로 당첨 확률을 높이는 방법은 없습니다. 하지만 자동 생성기를 통해 자신만의 고정관념에서 벗어난 새로운 번호 조합을 시도해보는 즐거움을 느낄 수 있습니다.
                </p>
            </section>
        </div>
    );
}
