import React, { useState } from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    fetchLocation
} from '../../store/actions/geo';
import {
    setAlert
} from '../../store/actions/alert';

// utils
import Constants from '../../utils/Constants';

// components
import Wrapper from '../../components/Layout/Wrapper/Wrapper';
import Button from '../../components/Layout/Button/Button';
import Input from '../../components/Layout/Input/Input';
import PageLoader from '../../components/Layout/PageLoader/PageLoader';
import LocationData from '../../components/LocationData/LocationData';

const Home = (props) => {
    const [ip, setIp] = useState('');
    const dispatch = useDispatch();
    const { fetching, address } = useSelector((state) => state.geo);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // validate if an ip was submitted in the form
        // if not then stop submission and return err
        if (!ip) {
            await dispatch(setAlert('Please make sure you submit an IP', 'error'));
            return;
        }
        // submit and fetch ip address location
        await dispatch(fetchLocation(ip))
        // clear form 
        clearForm();
    };

    const clearForm = () => {
        setIp('');
    };

    return (
        <article>
            <Wrapper styles={{ marginTop: '3rem' }}>
                <section className="large-shadow large-rad" style={styles.card}>
                    <form onSubmit={(e) => onSubmitHandler(e)}>
                        <div className="form-block">
                            <label className="input-label light-text">IP Address</label>
                            <Input
                                type="input"
                                placeholder="Search for an IP"
                                value={ip}
                                onChange={(e) => setIp(e.target.value)}
                            />
                        </div>
                        <Wrapper styles={{ justifyContent: 'flex-end' }}>
                            <Button type="submit" loading={fetching}>Search</Button>
                        </Wrapper>
                    </form>
                </section>
            </Wrapper>
            <Wrapper>
                {fetching && <PageLoader />}
                {!fetching && address !== null && (
                    <LocationData locationData={address} />
                )}
            </Wrapper>
        </article>
    );
};

const styles = {
    // card that contains the form
    card: {
        backgroundColor: Constants.main,
        padding: '1rem',
        width: '100%',
        maxWidth: '30rem'
    }
};

export default Home;