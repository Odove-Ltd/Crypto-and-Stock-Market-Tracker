'use client'

import React, {useEffect, useState} from 'react';
import { assetDetailsContainerClass } from '@/app/utils/styling/tempTWStyles';
import { TopBarDataType } from '@/app/utils/seed-data/seed-asset-details';
import { INews } from '@/app/types/news.type';
import { newsData } from '@/app/utils/seed-data/seed-news';

interface Props{
    topBarData: TopBarDataType;
}

const AssetNews: React.FC<Props> = ({topBarData}) => {

    const [newsDataa, setNewsDataa] = useState <INews[]>(newsData);
    const firstThreeItems = newsData.slice(0, 3);
 
    return (
        <>
          <h1 className="text-black mb-7 mt-5">
            <strong>{topBarData.assetName.toUpperCase()} LATEST NEWS</strong>
          </h1>
          <div className="mb-7 mt-5 text-black flex flex-nowrap justify-between">
            {firstThreeItems.map((imageItem, index) => (
              <div key={index} className="flex flex-col w-1/3 mx-8">
                <img className="my-2 rounded-lg" src={imageItem.imageURL} alt={imageItem.title} />
                <h2 className="mb-2">
                  <strong>{imageItem.title}</strong>
                </h2>
                <div className="flex items-center mb-2">
                  <p className="flex-grow">{imageItem.description.substring(0, 140)}... <a className='text-green-500' href={imageItem.link} target="_blank" rel="noopener noreferrer">
                    (Read more)
                  </a></p>
                </div>
                <p className="mb-2">
                  <strong>{imageItem.source}</strong>
                </p>
                <p>{imageItem.date}</p>
              </div>
            ))}
          </div>
          <p>READ MORE</p>
        </>
      )};
      

export default AssetNews;
