import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { fetchCountry } from '../service/countryApi';

const Country = () => {
  const { countryid } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    const getCountry = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const country = await fetchCountry(countryid);

        setCountryInfo(country);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getCountry();
  }, [countryid]);

  return (
    <Section>
      {isLoading && <Loader />}
      <Container>
        {isError ? <ErrorMessage /> : <CountryInfo {...countryInfo} />}
      </Container>
    </Section>
  );
};

export default Country;
