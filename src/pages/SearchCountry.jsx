import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';
import { fetchByRegion } from '../service/countryApi';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const SearchCountry = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [countriesList, setCountriesList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const region = searchParam.get('region');
  useEffect(() => {
    if (!region) {
      return;
    }

    const getCountriesByRegion = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const countries = await fetchByRegion(region);
        setCountriesList(countries);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getCountriesByRegion();
  }, [region]);

  const handleSearch = region => {
    searchParam.set('region', region);
    setSearchParam(searchParam);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSearch} value={region} />

        {isLoading && <Loader />}
        {isError ? (
          <ErrorMessage />
        ) : (
          countriesList && <CountryList countries={countriesList} />
        )}
      </Container>
    </Section>
  );
};

export default SearchCountry;
