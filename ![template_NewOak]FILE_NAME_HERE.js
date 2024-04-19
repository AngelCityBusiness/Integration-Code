// FILE_NAME_HERE.js

// MAKE SURE TO END YOUR FILE NAME IN ".js" !!
// I recommend a file name like "bot-#####_business_name.js"

(function() {

    
    // Load the chat plugin
    var script = document.createElement('script');
    script.src = 'https://www.newoaks.ai/embed.min.js'; // Regular website Original Script. // Comment out if not using.
    //script.src = 'https://app.aminos.ai/js/chat_plugin_ghl.js'; // GoHighLevel Original Script. // Comment out if not using.
    //script.src = 'https://app.aminos.ai/js/chat_form_plugin.js'; // Inline Website Original Script. // Comment out if not using.
  
  /*------- For NewOak.ai floating embed integration code

  
  THIS IS WHAT I NEED TO GIVE TO MY CLIENTS, NOT THE SMALL INTEGRATION CODE BECAUSE THIS HAS HTML IN IT!! THIS IS THE CODE!

  
  <script>
  window.chatpilotConfig = {
    chatbotId: "#############################",
    domain: "https://www.newoaks.ai"
  }
  </script>
  <script
  src="https://www.newoaks.ai/embed.min.js"
  charset="utf-8"
  defer
  ></script>
  */

/* 
------- For NewOak.ai iframe embed integration code
<script>
  window.newoaksIframeConfig = {
    chatbotId: "###############################"
  }
</script>
<script src="https://www.newoaks.ai/embed.iframe.js" charset="utf-8"></script>
<iframe
  src="https://www.newoaks.ai/chatbot-iframe/###############################"
  id="chatbot-iframe"
  style="border: 1px solid #e5e7eb"
  width="460px"
  height="600px"
  frameborder="0"
></iframe>
  */
 
    script.setAttribute('data-bot-id', '#############################'); // Setting the bot ID
    document.head.appendChild(script);

    //************************************************
    //NEW INTEGRATION CODE: <script src="https://code.angelcitymarketing.com/FILE_NAME_HERE.js"></script>

    //NEW SHARE LINK CODE: https://www.newoaks.ai/share/###############################

    //Notice the Integration code does NOT include the repository name. The repo name is not necessary for the integration code.
    //************************************************
    
    // Optionally, add any additional JavaScript code here

    // Ensure the script runs in noConflict mode to avoid conflicts with other libraries
    var $ = jQuery.noConflict(true);

     if (window.jQuery) {
        var $ = jQuery.noConflict(true);
        $(document).ready(function() {
            // Additional jQuery-dependent code can be added here
        });
    }

})();
