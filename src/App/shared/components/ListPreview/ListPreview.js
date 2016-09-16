import React from 'react';
import { Link } from 'react-router';

const ListPreview = function Dashboard(props) {
    const length = props.items.length;

    return (
        <div>
            <Link to={ props.path }>All { length }</Link>

            {
                props.items.map(function(item) {
                    return <Link key={ item.id } to={ `${ props.path }/${ item.id }` }>{ item.title }</Link>;
                })
            }

        </div>
    );
};

export default ListPreview;
