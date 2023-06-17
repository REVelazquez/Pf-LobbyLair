const allGames =[
  {
    id: "csgo",
    name: "Counter-Strike: Global Offensive",
    gameMode: ["PvP", "Team PvP"],
    genres: ["FPS", "Competitive"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/CsGo.png?alt=media&token=9df0b6c6-de88-45a7-97ee-da025ce18d1b"
  },
  {
    id: "lol",
    name: "League of Legends",
    gameMode: ["PvP", "Team PvP"],
    genres: ["MOBA", "Competitive"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/LoL.png?alt=media&token=f7be6c10-5966-43cb-b63b-358469640e4f"
  },
  {
    id: "dota2",
    name: "Dota 2",
    gameMode: ["PvP", "Team PvP"],
    genres: ["MOBA","Competitive"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Dota2.png?alt=media&token=f5fdbb60-9e2a-4c17-bdcf-996d423ca01f"
  },
  {
    id: "lostark",
    name: "Lost Ark",
    gameMode: ["PvP", "Co-op"],
    genres: ["MMORPG", "Action"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Lostark.png?alt=media&token=62efb370-962d-4a96-88a7-284cfd7e1f85"
  },
  {
    id: "apexlegends",
    name: "Apex Legends",
    gameMode: ["PvP", "Co-op"],
    genres: ["FPS", "Battle Royale"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/apexLegends.png?alt=media&token=7c50a006-bde8-4601-916f-968063769e2d"
  },
  {
    id: "codwarfare2",
    name: "Call of Duty: Modern Warfare® II",
    gameMode: ["PvP", "Co-op"],
    genres: ["FPS", "Action"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/codMw2.png?alt=media&token=12f8d4b7-a6f4-4e31-9738-979f3044eea0"
  },
  {
    id: "fortnite",
    name: "Fortnite",
    gameMode: ["PvP", "Team PvP"],
    genres: ["FPS", "Battle Royale"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Fortnite.png?alt=media&token=adda157a-9de1-4551-be49-25612ae3e452"
  },
  {
    id: "minecraft",
    name: "Minecraft",
    gameMode: ["PvP", "PvE"],
    genres: ["Sandbox", "Adventure"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Minecraft.png?alt=media&token=9e1a2382-2abe-464e-aa6c-2213aa4293ca"
  },
  {
    id: "stardewvalley",
    name: "Stardew Valley",
    gameMode: ["Co-op"],
    genres: ["Farming Sim", "RPG", "Sandbox"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/StardewValley.png?alt=media&token=e3185309-8b2e-4bfa-a2a9-c648bf79df2b"
  },
  {
    id: "conanexiles",
    name: "Conan Exiles",
    gameMode: ["PvP", "Co-op", "PvE"],
    genres: ["Survival", "Adventure", "RPG"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Conanexiles.png?alt=media&token=d2dfa6d2-92f0-4cd7-abcf-ae9589f8af53"
  },
  {
    id: "7daystodie",
    name: "7 Days to Die",
    gameMode: ["PvP", "Co-op", "PvE"],
    genres: ["Survival", "RPG","Zombies" ],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/7dtd.png?alt=media&token=8af8e780-07d5-45c0-ad15-a94ff6158f33"
  },
  {
    id: "rocketleague",
    name: "Rocket League",
    gameMode: ["PvP","Team PvP" ],
    genres: ["Competitive", "Racing", "Platformer"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/rocketleague.png?alt=media&token=af0e5089-badf-4af8-9209-12602b9a910e"
  },
  {
    id: "rust",
    name: "Rust",
    gameMode: ["PvP", "Co-op"],
    genres: ["Survival", "Adventure"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/rust.png?alt=media&token=abe6e33b-756b-4d0c-958a-85b67857a9ed"
  },
  {
    id: "overwatch2",
    name: "Overwatch 2",
    gameMode: ["PvP", "Team PvP"],
    genres: ["FPS"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/overwatch2.png?alt=media&token=b149dfda-4c0f-4071-a119-943796a0f997"
  },
  
    {
      id: "borderlands3",
      name: "Borderlands 3",
      gameMode: ["Co-op"],
      genres: ["FPS", "RPG"],
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Borderlands3.png?alt=media&token=5c39585b-9ef5-4bd8-9ee4-85a32d60339f"
    },
    {
      id: "ageofempires2de",
      name: "Age Of Empires 2 DE",
      gameMode: ["PvP", "Team PvP"],
      genres: ["City Builder", "RTS"],
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/AoE2.png?alt=media&token=3af3ef4c-92cc-4fce-8505-a956ae1b958f"
    },
    {
      id: "grounded",
      name: "Grounded",
      gameMode: ["Co-op"],
      genres: ["Survival", "Adventure"],
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/AoE2.png?alt=media&token=3af3ef4c-92cc-4fce-8505-a956ae1b958f"
    },
   
    {
      id: "diablo3",
      name: "Diablo 3",
      gameMode: ["PvP", "Co-op"],
      genres: ["Action", "RPG"],
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/AoE2.png?alt=media&token=3af3ef4c-92cc-4fce-8505-a956ae1b958f"
    },
    {
      id: "terraria",
      name: "Terraria",
      gameMode: ["PvP","Team PvP", "Co-op"],
      genres: ["Adventure", "Survival", "Sandbox"],
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/AoE2.png?alt=media&token=3af3ef4c-92cc-4fce-8505-a956ae1b958f"
    },
  
    {
      id: "amongus",
      name: "Among Us",
      gameMode: ["PvP", "Co-op" ],
      genres: ["Platformer", "Survival"],
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/amongus.png?alt=media&token=1ac69e9c-1376-44e1-84a4-750c3be12ded"
    },
    {
      id: "eldenring",
      name: "Elden Ring",
      gameMode: ["PvP", "Co-op" ],
      genres: ["Action", "RPG", "Adventure"],
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/elderring.png?alt=media&token=1c6bd9f1-330c-408f-aa0c-0205ad4a4212"
    },
    {
      id: "tropico6",
      name: "Tropico 6",
      gameMode: ["PvP", "Team PvP", "Co-op" ],
      genres: ["RTS", "City Builder"],
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/tropico6.png?alt=media&token=31150505-7edd-4363-8a7b-77d41a8ba71f"
    },
    {
      id: "starcraft2",
      name: "Starcraft II",
      gameMode:["PvP", "Team PvP", "Co-op" ],
      genres: ["RTS", "City Builder"],
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Starcraft2.png?alt=media&token=0b3702f9-64d1-4863-ae81-7ce571b83d00"
    }
    ]
  
  module.exports = allGames;