import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Coins from "./routes/coins";
import Meteo from "./routes/meteo";
import Home from "./routes/home";
// import Homeworks from "./routes/homeworks";
// import ChatPage from "./routes/chatgpt";
import Navbar from './navbar';
import { Link } from "react-router-dom"
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import Box from '@mui/material/Box';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

function App() {
  const [currencies, setСurrencies] = React.useState();
  const [coins, setCoins] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [user, setUser] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);

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
    //fetchСurrencies();
    //fetchCoins();
  }, []);

  // if (loading) {
  //   return <h3>Loading...</h3>
  // }

  // if (error) {
  //   return <h3>Error fetching data...</h3>
  // }

  // useGoogleOneTapLogin({
  //   onSuccess: credentialResponse => {
  //     console.log(credentialResponse);
  //   },
  //   onError: () => {
  //     console.log('Login Failed');
  //   },
  // });

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log('Login Accepted:', codeResponse);
      loginWithGoogle(codeResponse.access_token).then((res) => {
        const temp = {
          ...res.data.data,
          ...res.data.user_info,
        };
        console.log(temp);
      });
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const logOut = () => {
    console.log(profile);
    googleLogout();
    setProfile(null);
  };

  return (
    <>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
              py={'0rem'}>
              <Navbar>
              </Navbar>
              <Button onClick={() => login()} variant="contained" startIcon={<LoginIcon />}>Log in with Google</Button>
              {profile ? (
                <div style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Link href="/profile"></Link>
                  <Button onClick={logOut} variant="outlined" startIcon={<LogoutIcon />}>Log out</Button>
                </div>
              ) : (
                <Button onClick={() => login()} variant="contained" startIcon={<LoginIcon />}>Log in with Google</Button>
              )}

            </Box>
            <Container>
              <Routes>
                <Route index path="/" element={<Home />} user={setUser} profile={setProfile} />
                <Route exact path="/meteo" element={<Meteo user={setUser} profile={setProfile} />} />
                {/* <Route exact path="/coins" element={<Coins coins={coins} currencies={currencies} />} /> */}
                {/* <Route exact path="/homeworks" element={<Homeworks />} /> */}
                {/* <Route exact path="/chatpage" element={<ChatPage />} /> */}
              </Routes>
              <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                py={'0rem'}><br></br>
                <a href={'https://github.com/corbenykt'} style={{ fontWeight: 'normal', textDecorationLine: '' }} >
                  By Dmitrii Artemev
                </a>
                <p style={{ fontSize: '0.75rem' }}>&copy; {(new Date().getFullYear())}</p>
              </Box>
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