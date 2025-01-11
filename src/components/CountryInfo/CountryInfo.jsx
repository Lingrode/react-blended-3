import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import styles from './CountryInfo.module.css';

const CountryInfo = ({
  flag,
  capital,
  countryName,
  languages = [],
  population,
}) => {
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/');

  return (
    <>
      <GoBackBtn link={goBackRef.current} />
      <div className={styles.wrapper}>
        <div className={styles.flag}>
          <img className={styles.img} src={flag} alt={countryName} />
        </div>
        <div className={styles.box}>
          <h3 className={styles.capital}>
            Capital: <span className={styles.accent}>{capital}</span>
          </h3>

          <h1 className={styles.title}>
            {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
          </h1>

          <p className={styles.details}>
            Population: <span className={styles.accent}>{population}</span>
          </p>

          <p className={styles.details}>
            Languages:
            <span className={styles.accent}>
              <span> </span>
              {languages.join(', ') ?? languages}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
