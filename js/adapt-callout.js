/*
* adapt-callout
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kevin Jones <him@kevincjones.co.uk>
*/

define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

    var Callout = ComponentView.extend({

        events: function () {
            return {
                'click .callout-trigger':'openCallout'
            }
        },
        
        postRender: function() {
            console.log("rendering");

            // IMPORTANT! 
            // Both of the following methods need to be called inside your view.

            // Use this to set the model status to ready. 
            // It should be used when telling Adapt that this view is completely loaded.
            // This is sometimes used in conjunction with imageReady.
            this.setReadyStatus();

            // Use this to set the model status to complete.
            // This can be used with inview or when the model is set to complete/the question has been answered.
            this.setCompletionStatus();
        },

        openCallout: function (event) {
            event.preventDefault();
            // var currentCallout = $(event.currentTarget).data('id'); //data-id
            // this.$('.callout-item').hide().removeClass('active'); //hide all
            // this.$('.'+currentCallout).show().addClass('active'); //show only clicked one
            console.log("clicked");
            var calloutobject = {
                title: "Title Goes Here",
                body:"<img style='float:left;margin:5px' src='http://placehold.it/300x300'><p>    !Arne Astrup is Head of the <a class=\"callout-trigger\" href=\"javascript:void(0);\">Department of Nutrition,</a> Exercise and Sports at the Faculty of Science, University of Copenhagen, Denmark. He is Director of the    Nordea Foundation funded OPUS research centre.</p>"
            };

            Adapt.trigger('notify:popup',calloutobject);
        }

        
        
    });
    
    Adapt.register("callout", Callout);
    
});