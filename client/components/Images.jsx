import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Upload, message, Image } from 'antd';

const images = [
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
];

const ImagesTab = () => {
  return (
    <>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '50px',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        >
          Image Wall
        </h2>
        <p
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '20px',
            fontFamily: 'sans-serif',
            fontWeight: 'medium',
          }}
        >
          All Images in the Database.
        </p>
  
      </div>
      <div 
      style={{ marginTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center'}}

      >


      <Image.PreviewGroup

preview={{
  onChange: (current, prev) =>
    console.log(`current index: ${current}, prev index: ${prev}`),
}}
>
{images.map((image, index) => (
  <Image key={index} width={200} src={image} style={{ padding: '10px' }} />
))}
</Image.PreviewGroup>
      </div>
      
    </>
  );
};

export default ImagesTab;
