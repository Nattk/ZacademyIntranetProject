import React from 'react'
import Head from 'next/head'

const Meta = (props) => (
  <Head>
    <link rel="icon" href="/zenika_icon.png" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/v4-shims.css" />
    <title>{props.title}</title>
  </Head>
)

export default Meta
