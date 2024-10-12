from staticjinja import Site
import eyed3
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

V2_TRACKLIST = [
    {'name': 'Bungalovv - Where_s The Real Me', 'path': 'final_master_mp3/Where_s The Real Me.mp3', 'duration': '05:00', 'link': 'https://soundcloud.com/bungalovv'}, 

    {'name': 'aDeAD  - 真実は真実だからこそ強いんだ', 'path': 'final_master_mp3/真実は真実だからこそ強いんだ.mp3', 'duration': '03:48', 'link': 'https://adeadmusic.bandcamp.com/'}, 

    {'name': 'georg-i - Spliced fom Memory ', 'path': 'final_master_mp3/Spliced fom Memory .mp3', 'duration': '03:53', 'link': 'artist_link'}, 

    {'name': 'moemiki - PCB in the Garbage ', 'path': 'final_master_mp3/PCB in the Garbage .mp3', 'duration': '03:24', 'link': 'artist_link'}, 

    {'name': 'NTFL - 765', 'path': 'final_master_mp3/765.mp3', 'duration': '03:42', 'link': 'artist_link'},

    {'name': 'Axorst2k - Simulated Bionic Tears', 'path': 'final_master_mp3/Simulated Bionic Tears.mp3', 'duration': '02:22', 'link': 'artist_link'}, 

    {'name': 'Cicada Shell - 霊性 Wired Unconscious', 'path': 'final_master_mp3/霊性 Wired Unconscious.mp3', 'duration': '04:24', 'link': 'artist_link'}, 

    {'name': 'Akira Takemoto  - 一人ぼっち1a (Videopunks works)', 'path': 'final_master_mp3/一人ぼっち1a (Videopunks works).mp3', 'duration': '09:09', 'link': 'artist_link'},

    {'name': '7mint - Slip The Hoax', 'path': 'final_master_mp3/Slip The Hoax.mp3', 'duration': '05:05', 'link': 'https://7mint.bandcamp.com/'}, 

    {'name': 'Yau Hei ASJ - Virtual Material Uploading... ', 'path': 'final_master_mp3/Virtual Material Uploading... .mp3', 'duration': '04:18', 'link': 'artist_link'}, 

    {'name': 'd3br1s - El Nexo', 'path': 'final_master_mp3/El Nexo.mp3', 'duration': '04:04', 'link': 'https://d3br1s.bandcamp.com/'}, 

    {'name': 'Kwan - Arisu', 'path': 'final_master_mp3/Arisu.mp3', 'duration': '05:25', 'link': 'artist_link'}, 

    {'name': 'provinceofnowhere feat. SimonBB - The Music Just Turns Me On', 'path': 'final_master_mp3/The Music Just Turns Me On.mp3', 'duration': '02:49', 'link': 'artist_link'}, 
    
    {'name': 'FINGERGAP - Lain is Everywhere ', 'path': 'final_master_mp3/Lain is Everywhere .mp3', 'duration': '02:51', 'link': 'artist_link'}, 

    {'name': '444theGod  - AIR Sword _94', 'path': 'final_master_mp3/AIR Sword _94.mp3', 'duration': '03:13', 'link': 'artist_link'}, 
    
    {'name': 'Emo Betriebswerk - Nonverbal communication', 'path': 'final_master_mp3/Nonverbal communication.mp3', 'duration': '02:14', 'link': 'artist_link'}, 

    {'name': 'Rench Kee - Fake Trauma Orchestra', 'path': 'final_master_mp3/Fake Trauma Orchestra.mp3', 'duration': '07:55', 'link': 'artist_link'}
]

# for filename in os.listdir("../v1/21sept-master-mp3"):
#       V1_TRACKLIST.append( { "name": filename.split(".mp3")[0], "path": "21sept-master-mp3/" + filename })

# def format_duration(seconds):
#     minutes, seconds = divmod(seconds, 60)
#     duration = "{:02d}:{:02d}".format(int(minutes), int(seconds))
#     return duration
     
# for filename in os.listdir("../v2/final_master_mp3"):
#     path_lain = os.path.dirname(os.path.realpath(__file__))[0:-4]
    
#     audiofile = eyed3.load(path_lain + "/v2/final_master_mp3/" + filename)

#     V2_TRACKLIST.append( { "name": audiofile.tag.artist + " - " + filename.split(".mp3")[0], "path": "final_master_mp3/" + filename, "duration": format_duration(audiofile.info.time_secs), "link": "artist_link" })
	
# print(V2_TRACKLIST)

if __name__ == "__main__":
    site = Site.make_site( 
            contexts = [ 
                ("v1/index.html", { 
                    "version_history_entries": VERSION_HISTORY_ENTRIES,
                    "tracklist" : V1_TRACKLIST
                    }), 
                ("v2/index.html", {
                    "version_history_entries": VERSION_HISTORY_ENTRIES,
                    "tracklist": V2_TRACKLIST
                    })],
            outpath = "../"
        )
    site.render(use_reloader=True)
