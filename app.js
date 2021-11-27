new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: '',
        y: '',
    },
    methods: {
        add: function(num) {
            this.age += num
        },
        subtract: function(num) {
            this.age -= num
        },
        updateXY: function(event) {
            this.x = event.offsetX
            this.y = event.offsetX
            console.log('X-' + this.x + " " + 'Y-' + this.y);
        },
        click: function() {
            alert('clicked')
        },
        doThis: function() {
            alert('doThis')
        },
        onSubmit: function() {
            alert('doThis')
        },
        keyEvents: function(message) {
            console.log(message);
        },
    }
});
