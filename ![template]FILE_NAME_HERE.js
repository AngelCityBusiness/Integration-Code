// FILE_NAME_HERE.js

// MAKE SURE TO END YOUR FILE NAME IN ".js" !!
// I recommend a file name like "bot-#####_business_name.js"

(function() {

    // Load the chat plugin
    var script = document.createElement('script');
    script.src = 'https://app.aminos.ai/js/chat_plugin_ghl.js'; // Original script source
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

    //************************************************
    //NEW INTEGRATION CODE: <script src="https://www.angelcitymarketing.com/FILE_NAME_HERE.js"></script>

    //Notice the Integration code does NOT include the repository name. The repo name is not necessary for the integration code.
    //************************************************
    
    // Optionally, add any additional JavaScript code here

    // Ensure the script runs in noConflict mode to avoid conflicts with other libraries
    var $ = jQuery.noConflict(true);

    // Wrap code in a ready event handler to ensure it executes after the DOM is fully loaded
    $(document).ready(function() {
        // Any additional JavaScript code here
    });

})();