const nh = require('rg2n-hill')

nh.startServer({
    hostKey: "", // Your host key here (can be found under the settings of the set.)

    gameId: 29851, // Your game id here

    port: 42480, // Your port id here (default is 42480)

    local: false, // Whether or not your server is local

    mapDirectory: './maps/', // The path to your maps folder.

    map: 'example.brk', // The file name of your .brk

    scripts: './user_scripts', // Your .js files path

    maxPlayers: 20, // Set the max amount of players for the server
    
    admin: 'none', // Set the admin (none, cheats) 
    
    
    // ADMIN CONFIGS (ONLY MODIFY WHAT IS ENABLED ABOVE)
    
    cheatsAdmin: {
        admins: [1, 417215],
        audit: true,
        safeCommands: false
    },

    // Add npm / built-in node.js modules here
    modules: [
        //"discord.js"
    ]

})

// For more help: https://brickhill.gitlab.io/open-source/node-hill/interfaces/gamesettings.html
