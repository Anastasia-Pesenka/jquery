define(['underscore', 'text!templates/menu.html'],
    function (_,  menuTpl) {
        return {
            init: function () {
                this.currentState = false;
                this.template = _.template(menuTpl);
                this.$el = $(".menu");

                this.render();
                this.setupEvents();
            },

            render: function () {
                this.el.innerHTML = this.template();
            },


            setupEvents: function (e) {
                this.$el.on('click', this.clickMenuHandler.bind(this));
            },
            clickMenuHandler : function (e) {
                if($(e.target).is(".nav-toggle")) {
                    this.currentState = !this.currentState;
                    $(".nav-toggle").toggleClass(".is-active", this.currentState);
                    $(".nav-menu").toggleClass(".is-active", this.currentState);
                }
            }

        };
    });
