import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './styles';

const mapStateToProps = function(state, ownProps) {
    const selectedApp = _.find(state.appsByPath, function(app) {
        // Perform search for nested routes
        return ownProps.pathname.indexOf(app.path) > -1;
    });

    return {
        appTitle: (selectedApp) ? selectedApp.title : 'Home'
    };
};


const HeaderComponent = function Header({ appTitle }) {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeftContainer}>
                <Link to='user'><i className={styles.icon}></i></Link>
            </div>

            <h2 className={styles.headerAppTitle}>{appTitle}</h2>

            <div className={styles.headerRightContainer}>
                <Link to='search'><i className={styles.icon}></i></Link>
                <Link to='/recipes/add'><i className={styles.icon}></i></Link>
            </div>
        </header>
    );
};

export default connect(mapStateToProps, null)(HeaderComponent);
