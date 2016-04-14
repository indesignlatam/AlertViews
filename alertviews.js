// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See alertviews-tests.js for an example of importing.
// export const AlertViews = 'alertviews';

Alerts = {};

Alerts.showLoading = function(title = 'Cargando...'){
    // Remove any previously created alert
    $('.alert-overlay').remove();

    // Append the new alert to the document body
    $('body').append(
        '<div class="alert-overlay">'+
            '<div class="alert-box">'+
                '<div class="lable">'+
                    title+
                '</div>'+
                '<div class="loader">'+
                    '<div class="element-animation">'+
                        '<img src="/images/defaults/loader.png" width="1180" height="70">'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
    );

    setTimeout(function(){
        $('.alert-overlay').addClass('active');
    }, 10);
}

Alerts.showConfirmation = function( title = 'Precaución', text = '', 
                                    positive = 'Aceptar', 
                                    negative = 'Cancelar', 
                                    pCallback, nCallback) {

    if(!positive){
        positive = 'Aceptar';
    }

    if(!negative){
        negative = Cancelar;
    }

    // CALLBACKS
    if(pCallback){
        Alerts.positiveCallback = pCallback;
    }else{
        Alerts.positiveCallback = function(){
            console.log('No positive callback set.');
        };
    }

    if(nCallback){
        Alerts.negativeCallback = nCallback;
    }else{
        Alerts.negativeCallback = function(){
            console.log('No negative callback set.');
        };
    }

    // Remove any previously created alert
    $('.alert-overlay').remove();

    // Append the new alert to the document body
    $('body').append(
        '<div class="alert-overlay">'+
            '<div class="alert-box">'+
                '<div class="lable">'
                    +title+
                '</div>'+
                '<div class="alert-box-content">'
                    +text+
                '</div>'+
                '<div class="alert-box-buttons">'+
                    '<div class="button-left">'+
                        '<a class="btn idc-alert btn-negative btn-block btn-outlined" onClick="Alerts.negativeCallback(); Alerts.hide();">'
                            +negative+
                        '</a>'+
                    '</div>'+
                    '<div class="button-right">'+
                        '<a class="btn idc-alert btn-positive btn-block" onClick="Alerts.positiveCallback(); Alerts.hide();">'
                        +positive+
                        '</a>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
    );

    // Add active class to alert-overlay to animate
    setTimeout(function(){
        $('.alert-overlay').addClass('active');
    }, 10);
}

Alerts.hide = function(){
    $('.alert-overlay').removeClass('active');

    Alerts.negativeCallback = null;
    Alerts.positiveCallback = null;

    setTimeout(function(){
        $('.alert-overlay').remove();
    }, 500);
}




/* 
 * 
 * Action-Sheet Component
 * Display an iOS like actionsheet with options
 * Every option has text, destructive, and callback
 * Accetps title text, cancel text, and options
 * 
 */
Alerts.showActionSheet  = function(title = 'Action Sheet', cancel = 'Cancelar', options = []) {
    // Remove all previously created callbacks
    Alerts.callbacks = [];

    // Set the intro of the actionsheet
    let intro = 
        '<div class="alert-overlay">'+
            '<div class="action-sheet-wrapper">'+
                '<div class="action-sheet action-sheet-has-icons" style="">'+
                    '<div class="action-sheet-group action-sheet-options">'+
                        '<div class="action-sheet-title">'+
                            title+
                        '</div>';

    // Create the var to store the actionsheet options HTML
    let optionsHTML = '';

    let i = 0;
    for(option of options){
        let cssClass = 'button action-sheet-option'; 

        if(option.destructive){
            cssClass = 'button destructive action-sheet-option';
        }

        optionsHTML =   optionsHTML+
                        '<button class="'+ cssClass +'" onClick="Alerts.callbacks['+i+'](); Alerts.hideActionSheet();">'+
                            option.text+
                        '</button>';

        if(option.callback){
            Alerts.callbacks.push(option.callback);
        }else{
            Alerts.callbacks.push(function(){
                console.log('No callback set for index: '+i);
            });
        }

        i++;
    }

    // Set the footer of the actionsheet
    const footer =  '</div>'+
                    '<div class="action-sheet-group action-sheet-cancel">'+
                        '<button class="button activated" onClick="Alerts.hideActionSheet();">'+
                            cancel+
                        '</button>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>';

    // Group all the actionsheet HTML to create it
    const html = intro + optionsHTML + footer;

    // Remove any previously created alert
    $('.alert-overlay').remove();

    // Append the new alert to the document body
    $('body').append(html);

    // Add active class to alert-overlay to animate the background overlay
    setTimeout(function(){
        $('.alert-overlay').addClass('active');
    }, 10);

    // Add active class to actionsheet to animate it
    setTimeout(function(){
        $('.action-sheet-wrapper').addClass('action-sheet-up');
    }, 300);
}

Alerts.hideActionSheet = function(){
    $('.action-sheet-wrapper').removeClass('action-sheet-up');

    setTimeout(function(){
        $('.alert-overlay').removeClass('active');
    }, 300);
    

    Alerts.callbacks = null;

    setTimeout(function(){
        $('.alert-overlay').remove();
    }, 800);
}





