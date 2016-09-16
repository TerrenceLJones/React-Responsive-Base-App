import React from 'react';

import ListPreview from './../../shared/components/ListPreview/ListPreview';

const items = [
    {
        title: 'Chicken Parm',
        id: 212
    },
    {
        title: 'Beef Wellington',
        id: 123
    }
];

const Dashboard = function Dashboard(props) {
    return (
        <div>
            <h3>Dashboard</h3>

            <ListPreview items={items} listName='Recipe' path ='/recipes'></ListPreview>
            <ListPreview items={items} listName='Cuisine' path ='/cookbook'></ListPreview>
        </div>
    );
};

export default Dashboard;
