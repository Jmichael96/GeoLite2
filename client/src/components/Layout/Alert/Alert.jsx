import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VscError } from 'react-icons/vsc';
import { removeAlert } from '../../../store/actions/alert';
// styles
import './alert.css';

// utils
import Constants from '../../../utils/Constants';

const Alert = (props) => {
    const alerts = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    // activates upon clicking x button
    const removeAlertHandler = (id) => {
        dispatch(removeAlert(id))
    };

    // validate if the alerts are null
    // if not then render the alert
    return alerts !== null &&
        alerts.length > 0 && (
            <div id="alertStyles_root"> 
                {
                    alerts.map(alert => (
                        <div key={alert.id} className={`alert`} style={{ backgroundColor: Constants.main }}>
                            <div className={`alertStyles_iconWrap`}>
                                {alert.alertType === 'error' && <VscError className="dark-text iconText" />}
                            </div>
                            <div className="alertStyles_bodyWrap">
                                <div className="alertStyles_msgWrap">
                                    <a href="#!" className="alertStyles_alertMsg light-text">
                                        {alert.msg}
                                    </a>
                                </div>
                                <a onClick={() => { removeAlertHandler(alert.id) }} style={{ color: Constants.secondary }} href="#!" className="alertStyles_closeAlert" data-dismiss="alert" aria-hidden="true">x</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
};

export default Alert