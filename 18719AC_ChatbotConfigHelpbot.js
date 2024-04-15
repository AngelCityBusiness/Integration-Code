// 18719AC_ChatbotConfigHelpbot.js

(function() {

    // Load the chat plugin
    var script = document.createElement('script');
    script.src = 'https://app.aminos.ai/js/chat_plugin_ghl.js'; // Original script source
    script.setAttribute('data-bot-id', '18719'); // Setting the bot ID
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
//NEW INTEGRATION CODE: <script src="https://code.angelcitymarketing.com/18719AC_ChatbotConfigHelpbot.js"></script>
//************************************************
    
    // Optionally, add any additional JavaScript code here

})();
