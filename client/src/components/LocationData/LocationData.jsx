import React from 'react';

// components
import Wrapper from '../Layout/Wrapper/Wrapper';

// utils
import Constants from '../../utils/Constants';

const LocationData = (props) => {
    const { locationData } = props;

    return (
        <section className="large-rad large-shadow" style={styles.locationCard}>
            <Wrapper>
                <h3 style={styles.cardTitle} className="light-text">Location Data</h3>
            </Wrapper>
            <ul className="light-text">
                <li style={styles.listItem}>Latitude: {locationData.latitude}</li>
                <li style={styles.listItem}>Longitude: {locationData.longitude}</li>
                <li style={styles.listItem}>Time Zone: {locationData.time_zone}</li>
            </ul>
        </section>
    );
};

const styles = {
    // container for the address data
    locationCard: {
        backgroundColor: Constants.main,
        width: '100%',
        maxWidth: '25rem',
        margin: '3rem 1rem'
    },
    cardTitle: {
        fontSize: '1.4rem',
        margin: '1rem 0',
        padding: 0
    },
    // each item for the unordered list
    listItem: {
        marginBottom: '1rem'
    }
};

export default LocationData;