import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

// utils
import Constants from '../../../utils/Constants';

const PageLoader = () =>
    <RingLoader
        color={Constants.secondary}
        size={100}
        css={loaderStyles}
    />
    
const loaderStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem'
};

export default PageLoader;