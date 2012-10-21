require (['dojo/Deferred', 'dojo/request/script'], function (Deferred, script)
{
    function preLoader (filesToPreload, onEachCallback)
    {
        var deferreds = [];
        var itemsDone = 0;
        for (var file = 0; file < filesToPreload.length; file++)
        {
            deferreds.push( script.get(filesToPreload,
           {
               //jsonp: 'callback'
           }));
            for (var i = 0; i < deferreds.length; i++)
            {
                deferreds[i].then(function (res)
                {
                    onEachCallback(res, itemsDone)
                });
            }               
        }
    }

     preLoader (['http://rcorp.co.in/images/RCorp_Logo.png'], function (response)
     {
         console.log('Loaded!');
          document.write ('<img src="' + 'http://rcorp.co.in/images/RCorp_Logo.png' +'" />');       
     });                   
});​P