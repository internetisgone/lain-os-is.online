from staticjinja import Site
import os

VERSION_HISTORY_ENTRIES = [
    {
        "version": "1.1.0",
        "date": "01 july 2024 ",
        "description": """some vol. 2 tracks premiered on <a href="https://www.nts.live/shows/bloodz-boi/episodes/bloodz-boi-1st-july-2024" target="_blank">NTS</a><br> added /v2 placeholder"""
    },
    {
        "version": "1.0.0",
        "date": "04 nov 2022 ",
        "description": "vol. 1 release"
    },
    {
        "version": "0.3.2",
        "date": "26 oct 2022 ",
        "description": "added audio filter developer mode"
    },
    {
        "version": "0.3.1",
        "date": "09 oct 2022 ",
        "description": """window minimise animation<br> fixed ascii art display issue<br> fixed safari volume issue"""
    },
    {
        "version": "0.3.0",
        "date": "21 sep 2022 ",
        "description": """uploaded vol. 1 master<br> music player visualiser"""
    },
    {
        "version": "0.2.1",
        "date": "01 sep 2022 ",
        "description": """audio filter commands<br> mobile optimisation"""
    },
    {
        "version": "0.2.0",
        "date": "28 aug 2022 ",
        "description": """added terminal window<br> added version history window"""
    },
    {
        "version": "0.1.0",
        "date": "09 aug 2022 ",
        "description": """uploaded lain comp vol. 1 demo<br> music player with audio filters
"""
    },
]

# for noscript
V1_TRACKLIST = [
	{
		"name": "x/o - Duvet cyberia re-chopped & screwed-MiX",
		"path": "21sept-master-mp3/xo - 200529-DuvetBoa8  [master 20220921].mp3",
	},
	{
		"name": "Wa?ste - cyberia texture 5a x professed intention and real intention",
		"path": "21sept-master-mp3/Wa_ste - cyberia texture 5a x professed intention and real intention [master 20220929].mp3",
	},
	{
		"name": "Thegn ft. Vrain - phantoma_-_track04.wav",
		"path": "21sept-master-mp3/thegn ft. vrain - phantoma [master 20220921].mp3",
	},
	{
		"name": "Nerve - I'm Gonna Diss You",
		"path": "21sept-master-mp3/Nerve - I_m Gonna Diss You [master 20220921].mp3",
	},
	{
		"name": "Fetus - Footprints",
		"path": "21sept-master-mp3/Fetus - Footprints [master 20220921].mp3",
	},
	{
		"name": "GRASPS X NERDIE - I AM HURTING",
		"path": "21sept-master-mp3/GRASPS X NERDIE - I AM HURTING [master 20220921].mp3",
	},
	{
		"name": "Yraki - Lights Down",
		"path": "21sept-master-mp3/Yraki - Lights Down [master 20220921].mp3",
	},
	{
		"name": "Sour Gout - Transmigration",
		"path": "21sept-master-mp3/Sour Gout - Transmigration [master 20220921].mp3",
	},
	{
		"name": "lovefear - Breathe",
		"path": "21sept-master-mp3/lovefear - SEL compilation track final  [master 20220921].mp3",
	},
	{
		"name": "堀池ゆめぁ - lain ",
		"path": "21sept-master-mp3/Yumea Horiike - lain [master 20220921].mp3",
	},
	{
		"name": "Yuting Wu - Help me to Breathe",
		"path": "21sept-master-mp3/Yuting Wu - Help me to Breathe [master 20220921].mp3",
	},
	{
		"name": "ΛFΛLFL - just some kick noyze",
		"path": "21sept-master-mp3/afalfl - just some kick noyze [master 20220921].mp3",
	  },
	  {
		"name": "Yikii - Ancient Scanner",
		"path": "21sept-master-mp3/Yikii - Ancient Scanner [master 20220921].mp3",
	},
	{
		"name": "Kagami Smile -  Acts of Betrayal",
		"path": "21sept-master-mp3/Kagami Smile -  Acts of Betrayal [master 20220921].mp3",
	},
	{
		"name": "Imryll - Family Portrait (Imryll Reimagined)",
		"path": "21sept-master-mp3/Imryll - Family Portrait (Imryll Reimagined) [master 20220921].mp3",
	},
	{
		"name": "Jennifer Walton - At Last, Lain Is Free",
		"path": "21sept-master-mp3/Jennifer Walton - At Last, Lain Is Free [master 20220921].mp3",
	},
]; 

if __name__ == "__main__":
    site = Site.make_site( 
            contexts = [ 
                ("v1/index.html", { 
                    "version_history_entries": VERSION_HISTORY_ENTRIES,
                    "tracklist" : V1_TRACKLIST
                    }), 
                ("v2/index.html", {"version_history_entries": VERSION_HISTORY_ENTRIES })],
            outpath = "../"
        )
    site.render(use_reloader=True)
