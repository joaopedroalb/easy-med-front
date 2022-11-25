import React from 'react';
import LoadingGif from '../../../assets/images/loading.gif'
import { LoadingBg } from './style';

function Loading() {
  return (
    <LoadingBg>
        <img src={LoadingGif} />
    </LoadingBg>
  )
}

export default Loading;