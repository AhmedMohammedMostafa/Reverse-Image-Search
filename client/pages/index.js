import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Tabs } from 'antd';
import Images from '../components/Images';
import UploadTab from '../components/UploadTab';
import SearchTab from '../components/SearchTab';

const tabs = [
  {
    title: 'Upload Image',
    key: 'upload',
    component: <UploadTab />,
  },
  
  {
    title: 'Search Image',
    key: 'search',
    component: <SearchTab />,
  },
  {
    title: 'All Images',
    key: 'all',
    component: <Images />,
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Reverse Image Search | AhmedDvlpr</title>
        <meta name="description" content="Reverse Image Search Folder Based." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs
    defaultActiveKey="1"
    centered
    size='large'
    tabBarStyle={{ marginBottom: 24, color: 'white', fontWeight: 'normal', marginTop: 24 }}
    items={tabs.map((tab) => {
      return {
        label: tab.title,
        key: tab.key,
        children: tab.component,
      };
    })}
  />
    </>
  )
}
