import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import styles from './styles';

const mapStateToProps = (state) => {
    const apps = state.availableAppPaths.map(function(path) {
        return state.appsByPath[path];
    });

    return { apps };
};

const NavigationComponent = function NavigationComponent({ apps }) {
    return (
        <nav className={styles.nav}>
            {
                apps.map(function(app) {
                    if(app.indexRoute) {
                        return <IndexLink key={ app.id } className={styles.link} activeClassName={styles.selected} to={ app.path }>{ app.title }</IndexLink>;
                    }

                    return <Link key={ app.id } className={styles.link} activeClassName={styles.selected} to={ app.path }>{ app.title }</Link>;
                })
            }
        </nav>
    );
};

export default connect(mapStateToProps, null)(NavigationComponent);
