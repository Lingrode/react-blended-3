import { Link, useLocation } from 'react-router-dom';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map((item, i) => {
        return (
          <GridItem key={i}>
            <Link to={`/country/${item.id.toString()}`} state={location}>
              <img src={item.flag} alt={item.country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
export default CountryList;
