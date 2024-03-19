import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';


export const MainLayout = ({children}) => {
  return (
   <>
   <Helmet>
    <title>Lelandizz</title>
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<meta name="viewport" content="initial-scale=1, width=device-width" />
   </Helmet>
   {children}
  <Header/>
  <Main/>
  <Footer/>
   </>
  )
}
