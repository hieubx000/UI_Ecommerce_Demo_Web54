import React from 'react'
import Helmet from '../../components/Helmet/Helmet'
import {MainLayout} from '../../components/Layout'

export default function Home() {
    return (
        <MainLayout>
           <Helmet title='SetUp Store'>
               Home
           </Helmet>
        </MainLayout>
    )
}
