import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import About from "./routes/about";
import Meteo from "./routes/meteo";
import Home from "./routes/home";
import Navbar from './navbar';
import { Link } from "react-router-dom"
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';

function App() {
  const [currencies, setСurrencies] = React.useState();
  const [coins, setCoins] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  async function fetchСurrencies() {
    const encodedParams = new URLSearchParams();
    encodedParams.append("my-url", "https://currate.ru/api/?get=rates&pairs=USDRUB,EURRUB,RUBKZT,USDKZT&key=20ea09d780dc8e817b0d11ec03d6c9e5");

    const options = {
      method: 'POST',
      url: 'https://cors-proxy3.p.rapidapi.com/api',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '7615bbafd1msh92c37a9e2b8f1a7p121251jsn171bd390d93d',
        'X-RapidAPI-Host': 'cors-proxy3.p.rapidapi.com'
      },
      data: encodedParams
    };

    axios.request(options).then(function (response) {
      setСurrencies(response.data.data);
    }).catch(function (error) {
      setError(true);
      console.error(error);
    }).finally(function () {
      setLoading(false)
    });
  }

  async function fetchCoins() {
    try {
      const { data } = await axios.get('https://api.coinstats.app/public/v1/coins?limit=10');
      //console.log(coinsdata.coins);
      setCoins(data.coins);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchСurrencies();
    fetchCoins();
  }, []);

  if (loading) {
    return <h3>Идет загрузка...</h3>
  }

  if (error) {
    return <h3>Ошибка при получении данных</h3>
  }

  return (
    <>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Navbar></Navbar>
            <Container>
              <Routes>
                <Route index path="/" element={<Home coins={coins} currencies={currencies} />} />
                <Route exact path="/meteo" element={<Meteo />} />
                <Route exact path="/about" element={<About />} />
              </Routes>
            </Container>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>

      </div>
    </>
  );
}

export default App;
