import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { getCountries } from '../service/countryApi';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [countryList, setCountryList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCountryList = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const countries = await getCountries();

        setCountryList(countries);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getCountryList();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {isLoading && <Loader />}
        {isError ? <ErrorMessage /> : <CountryList countries={countryList} />}
      </Container>
    </Section>
  );
};
export default Home;
