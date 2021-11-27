new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://w3resource.com/',
        websiteTag: '<a href="https://w3resource.com/">W3 Sources</a>'
    },
    methods: {
        greet: function(time) {
            this.name = 'Ravi'
            return 'Good' + ' ' + time + ' ' + this.name
        }
    }
});
