const DUMMY_USERS = {
    'Anurag': {
        name: 'Anurag',
        widgets: ['widget-1','widget-2','widget-3','widget-4'],
        columns: {
            'column-1': {
                id: 'column-1',
                widgetIds: ['widget-1','widget-2']
            },
            'column-2': {
                id: 'column-2',
                widgetIds: ['widget-3','widget-4']
            }
        },
    
        columnOrder: ['column-1','column-2']
    },
    'Rohit': {
        name: 'Rohit',
        widgets: ['widget-1','widget-2','widget-3','widget-4'],
        columns: {
            'column-1': {
                id: 'column-1',
                widgetIds: ['widget-1','widget-2']
            },
            'column-2': {
                id: 'column-2',
                widgetIds: ['widget-3','widget-4']
            }
        },
    
        columnOrder: ['column-1','column-2']
    },
    'Faiz': {
        name: 'Faiz',
        widgets: ['widget-1','widget-2','widget-3','widget-4'],
        columns: {
            'column-1': {
                id: 'column-1',
                widgetIds: ['widget-1','widget-2']
            },
            'column-2': {
                id: 'column-2',
                widgetIds: ['widget-3','widget-4']
            }
        },
    
        columnOrder: ['column-1','column-2']
    }
};

export default DUMMY_USERS;