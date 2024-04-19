// FILE_NAME_HERE.js

// MAKE SURE TO END YOUR FILE NAME IN ".js" !!
// I recommend a file name like "#####_business_name.js"

(function() {

    
    // Load the chat plugin
    var script = document.createElement('script');
    
    script.src = 'https://app.aminos.ai/js/chat_plugin.js'; // Regular website Original Script. // Comment out if not using.
    //script.src = 'https://app.aminos.ai/js/chat_plugin_ghl.js'; // GoHighLevel Original Script. // Comment out if not using.
    //script.src = 'https://app.aminos.ai/js/chat_form_plugin.js'; // Inline Website Original Script. // Comment out if not using.
    
    script.setAttribute('data-bot-id', '#####'); // Setting the bot ID
    document.head.appendChild(script);

    // Add custom CSS styling
    var css = `div.talktext p {
        color: black !important;
        font-family: sans-serif !important;
    }`;
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);
    <div id="chat_form"></div>
    //************************************************
    //NEW INTEGRATION CODE: <script src="https://code.angelcitymarketing.com/FILE_NAME_HERE.js"></script>

    //Notice the Integration code does NOT include the repository name. The repo name is not necessary for the integration code.
    //************************************************
    
    // Optionally, add any additional JavaScript code here

    // Ensure the script runs in noConflict mode to avoid conflicts with other libraries
     if (window.jQuery) {
        var $ = jQuery.noConflict(true);
        $(document).ready(function() {
            // Additional jQuery-dependent code can be added here
        });
    }

})();
