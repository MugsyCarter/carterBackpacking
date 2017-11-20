routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'home',
        url: '/',
        data: { public: true },
        component: 'home' 
    });

    $stateProvider.state({
        name: 'trips',
        url: '/trips',
        data: { public: true },
        component: 'trips' 
    });

    $stateProvider.state({
        name: 'trip',
        url: '/trip',
        data: { public: true },
        component: 'trip' 
    });

    $urlRouterProvider.otherwise('/');
}
