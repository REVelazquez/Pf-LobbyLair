const allGames =[
    {
      "name": "Counter-Strike: Global Offensive",
      "gameMode": ["PvP", "Team PvP"],
      "genres": ["FPS", "Competitive"],
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/CsGo.png?alt=media&token=9df0b6c6-de88-45a7-97ee-da025ce18d1b"
    },
    {
      "name": "League of Legends",
      "gameMode": ["PvP", "Team PvP"],
      "genres": ["MOBA", "Competitive"],
      "thumbnail": "https://example.com/lol_thumbnail.jpg"
    },
    {
      "name": "Dota 2",
      "gameMode": ["PvP", "Team PvP"],
      "genres": ["MOBA","Competitive"],
      "thumbnail": "https://example.com/dota2_thumbnail.jpg"
    },
    {
           "name": "Lost Ark",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["MMORPG", "Action"],
      "thumbnail": "https://example.com/lostark_thumbnail.jpg"
    },
    {
      "name": "Apex Legends",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["FPS", "Battle Royale"],
      "thumbnail": "https://example.com/apexlegends_thumbnail.jpg"
    },
    {
      "name": "Call of Duty: Modern Warfare® II",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["FPS", "Action"],
      "thumbnail": "https://example.com/codwarzone2_thumbnail.jpg"
    },
    {
      "name": "Fortnite",
      "gameMode": ["PvP", "Team PvP"],
      "genres": ["FPS", "Battle Royale"],
      "thumbnail": "https://example.com/fortnite_thumbnail.jpg"
    },
    {
      "name": "Minecraft",
      "gameMode": ["PvP", "PvE"],
      "genres": ["Sandbox", "Adventure"],
      "thumbnail": "https://example.com/minecraft_thumbnail.jpg"
    },
    {
      "name": "Stardew Valley",
      "gameMode": ["Co-op"],
      "genres": ["Farming Sim", "RPG", "Sandbox"],
      "thumbnail": "https://example.com/stardewvalley_thumbnail.jpg"
    },
    {
      "name": "Conan Exiles",
      "gameMode": ["PvP", "Co-op", "PvE"],
      "genres": ["Survival", "Adventure", "RPG"],
      "thumbnail": "https://example.com/conanexiles_thumbnail.jpg"
    },
    {
      "name": "7 Days to Die",
      "gameMode": ["PvP", "Co-op", "PvE"],
      "genres": ["Survival", "RPG","Zombies" ],
      "thumbnail": "https://example.com/7daystodie_thumbnail.jpg"
    },
    {
      "name": "Rocket League",
      "gameMode": ["PvP","Team PvP" ],
      "genres": ["Competitive", "Racing", "Platformer"],
      "thumbnail": "https://example.com/rocketleague_thumbnail.jpg"
    },
    {
      "name": "Rust",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["Survival", "Adventure"],
      "thumbnail": "https://example.com/rust_thumbnail.jpg"
    },
    {
      "name": "Overwatch 2",
      "gameMode": ["PvP", "Team PvP"],
      "genres": ["FPS"],
      "thumbnail": "https://example.com/overwatch2_thumbnail.jpg"
    },
    {
      "name": "Free Fire MAX",
      "gameMode": ["PvP", "Team PvP"],
      "genres": ["Battle Royale", "FPS"],
      "thumbnail": "https://example.com/freefiremax_thumbnail.jpg"
    },
    {
      "name": "PUBG: Battlegrounds",
      "gameMode": ["PvP", "Team PvP"],
      "genres": ["Battle Royale", "FPS"],
      "thumbnail": "https://example.com/pubg_thumbnail.jpg"
    },
    {
      "name": "Grand Theft Auto Online",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["Action", "Adventure", "Sandbox"],
      "thumbnail": "https://example.com/gtaonline_thumbnail.jpg"
    },
    {
      "name": "Valorant",
      "gameMode":["PvP", "Team PvP"],
      "genres": ["FPS"],
      "thumbnail": "https://example.com/valorant_thumbnail.jpg"
    },
    {
      "name": "Fall Guys",
      "gameMode": ["PvP", "Team PvP"],
      "genres": ["Battle Royale", "Platformer"],
      "thumbnail": "https://example.com/fallguys_thumbnail.jpg"
    },
    {
      "name": "Tom Clancy's Rainbow Six Siege",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["FPS", "Action"],
      "thumbnail": "https://example.com/rainbowsixsiege_thumbnail.jpg"
    },
    {
      "name": "Dead by Daylight",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["Horror", "Survival"],
      "thumbnail": "https://example.com/deadbydaylight_thumbnail.jpg"
    },
    {
      "name": "Left 4 Dead 2",
      "gameMode": ["PvP", "Co-op", "Team PvP" ],
      "genres": ["FPS", "Survival", "Zombies"],
      "thumbnail": "https://example.com/left4dead2_thumbnail.jpg"
    },
    {
      "name": "Red Dead Redemption II",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["Action", "Adventure", "Sandbox"],
      "thumbnail": "https://example.com/rdr2_thumbnail.jpg"
    },
    {
      "name": "V Rising",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["Survival", "Sandbox"],
      "thumbnail": "https://example.com/vrising_thumbnail.jpg"
    },
    {
      "name": "Sea Of Thieves",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["Action", "Adventure"],
      "thumbnail": "https://example.com/seaofthieves_thumbnail.jpg"
    },
    {
      "name": "Project Zomboid",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["Survival", "Zombies"],
      "thumbnail": "https://example.com/projectzomboid_thumbnail.jpg"
    },
    {
      "name": "Raft",
      "gameMode": ["Co-op"],
      "genres": ["Survival", "Adventure"],
      "thumbnail": "https://example.com/raft_thumbnail.jpg"
    },
  
    {
      "name": "Borderlands 3",
      "gameMode": ["Co-op"],
      "genres": ["FPS", "RPG"],
      "thumbnail": "https://example.com/borderlands3_thumbnail.jpg"
    },
    {
      "name": "Age Of Empires 2 DE",
      "gameMode": ["PvP", "Team PvP"],
      "genres": ["City Builder", "RTS"],
      "thumbnail": "https://example.com/ageofempires2de_thumbnail.jpg"
    },
    {
      "name": "Grounded",
      "gameMode": ["Co-op"],
      "genres": ["Survival", "Adventure"],
      "thumbnail": "https://example.com/grounded_thumbnail.jpg"
    },
   
    {
      "name": "Diablo 3",
      "gameMode": ["PvP", "Co-op"],
      "genres": ["Action", "RPG"],
      "thumbnail": "https://example.com/diablo3_thumbnail.jpg"
    },
    {
      "name": "Terraria",
      "gameMode": ["PvP","Team PvP", "Co-op"],
      "genres": ["Adventure", "Survival", "Sandbox"],
      "thumbnail": "https://example.com/terraria_thumbnail.jpg"
    },



    {
      "name": "Among Us",
      "gameMode": ["PvP", "Co-op" ],
      "genres": ["Platformer", "Survival"],
      "thumbnail": "https://example.com/amongus_thumbnail.jpg"
    },
    {
      "name": "Elden Ring",
      "gameMode": ["PvP", "Co-op" ],
      "genres": ["Action", "RPG", "Adventure"],
      "thumbnail": "https://example.com/eldenring_thumbnail.jpg"
    },
    {
      "name": "Tropico 6",
      "gameMode": ["PvP", "Team PvP", "Co-op" ],
      "genres": ["RTS", "City Builder"],
      "thumbnail": "https://example.com/eldenring_thumbnail.jpg"
    },
    {
      "name": "Starcraft II",
      "gameMode":["PvP", "Team PvP", "Co-op" ],
      "genres": ["RTS", "City Builder"],
      "thumbnail": "https://example.com/eldenring_thumbnail.jpg"
    }
  ]

module.exports = allGames;
