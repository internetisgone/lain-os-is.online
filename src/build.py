from staticjinja import Site
import eyed3
import os

VERSION_HISTORY_ENTRIES = [
    {
        "version": "1.1.0",
        "date": "01 july 2024 ",
        "description": """a selection of vol. 2 tracks premiered on <a href="https://www.nts.live/shows/bloodz-boi/episodes/bloodz-boi-1st-july-2024" target="_blank">NTS</a><br> added /v2 placeholder"""
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

# # for prod
V2_TRACKLIST = [
    {'name': 'Bungalovv - Where\'s The Real Me', 'path': 'final_master_mp3/Where_s The Real Me.mp3', 'duration': '05:00', 'link': 'https://soundcloud.com/bungalovv'}, 

    {'name': 'aDeAD  - 真実は真実だからこそ強いんだ', 'path': 'final_master_mp3/adead.mp3', 'duration': '03:48', 'link': 'https://adeadmusic.bandcamp.com'}, 

    {'name': 'georg-i - Spliced fom Memory ', 'path': 'final_master_mp3/Spliced fom Memory .mp3', 'duration': '03:53', 'link': 'https://georg-i.bandcamp.com'}, 

    {'name': 'moemiki - PCB in the Garbage ', 'path': 'final_master_mp3/PCB in the Garbage .mp3', 'duration': '03:24', 'link': 'https://soundcloud.com/moemiki'}, 

    {'name': 'NTFL - 765', 'path': 'final_master_mp3/765.mp3', 'duration': '03:42', 'link': 'https://soundcloud.com/n-t-f-l'},

    {'name': 'Axorst2k - Simulated Bionic Tears', 'path': 'final_master_mp3/Simulated Bionic Tears.mp3', 'duration': '02:22', 'link': 'https://cyanidesystem.bandcamp.com'}, 

    {'name': 'Cicada Shell - 霊性 Wired Unconscious', 'path': 'final_master_mp3/霊性 Wired Unconscious.mp3', 'duration': '04:24', 'link': 'https://soundcloud.com/cicadas-shell'}, 

    {'name': 'Akira Takemoto  - 一人ぼっち1a (Videopunks works)', 'path': 'final_master_mp3/videopunks.mp3', 'duration': '09:09', 'link': 'https://videopunks.bandcamp.com'},

    {'name': '7mint - Slip The Hoax', 'path': 'final_master_mp3/Slip The Hoax.mp3', 'duration': '05:05', 'link': 'https://7mint.bandcamp.com'}, 

    {'name': 'Yau Hei ASJ - Virtual Material Uploading... ', 'path': 'final_master_mp3/Virtual Material Uploading... .mp3', 'duration': '04:18', 'link': ' https://soundcloud.com/weareasj'}, 

    {'name': 'd3br1s - El Nexo', 'path': 'final_master_mp3/El Nexo.mp3', 'duration': '04:04', 'link': 'https://d3br1s.bandcamp.com'}, 

    {'name': 'Kwan - Arisu', 'path': 'final_master_mp3/Arisu.mp3', 'duration': '05:25', 'link': 'https://kwanw.bandcamp.com'}, 

    {'name': 'provinceofnowhere feat. SimonBB - The Music Just Turns Me On', 'path': 'final_master_mp3/The Music Just Turns Me On.mp3', 'duration': '02:49', 'link': ' https://soundcloud.com/province-of-nowhere'}, 
    
    {'name': 'FINGERGAP - Lain is Everywhere ', 'path': 'final_master_mp3/Lain is Everywhere .mp3', 'duration': '02:51', 'link': 'https://fingergap.bandcamp.com'}, 

    {'name': '444theGod  - AIR Sword \'94', 'path': 'final_master_mp3/AIR Sword _94.mp3', 'duration': '03:13', 'link': 'https://instagram.com/444_thegod'}, 
    
    {'name': 'Emo Betriebswerk - Nonverbal/Communication', 'path': 'final_master_mp3/Nonverbal communication.mp3', 'duration': '02:14', 'link': 'https://soundcloud.com/emobetriebswerk'}, 

    {'name': 'Rench Kee - Fake Trauma Orchestra', 'path': 'final_master_mp3/Fake Trauma Orchestra.mp3', 'duration': '07:55', 'link': 'https://instagram.com/totaldedly08river'}
]

# # for test
# V2_TRACKLIST = [{'name': 'boa_duvet', 'path': 'test_mp3/boa_duvet.mp3', 'duration': '03:19', 'link': 'https://i.am.retarded.boa'}, {'name': 'dj sharpnel - gate openerz 0.900x', 'path': 'test_mp3/dj sharpnel - gate openerz 0.900x.mp3', 'duration': '04:54', 'link': 'https://i.am.retarded.sharpnel'}]


V2_ARTISTS = [
	{'name': 'aDeAD ', 'ig': 'adead27', 'sc': 'https://soundcloud.com/oran-dead', 'bc': 'https://adeadmusic.bandcamp.com', 'other': ''}, 
    {'name': 'Axorst2k', 'ig': 'cyan1degh0st', 'sc': 'https://soundcloud.com/cyanidesystem', 'bc': 'https://cyanidesystem.bandcamp.com', 'other': ''}, 
    {'name': 'Bungalovv', 'ig': 'bungalovv', 'sc': 'https://soundcloud.com/bungalovv', 'bc': '', 'other': ''}, 
    {'name': 'Cicada Shell', 'ig': '_cicada_shell_', 'sc': 'https://soundcloud.com/cicadas-shell', 'bc': '', 'other': ''}, 
	{'name': 'd3br1s', 'ig': '', 'sc': 'https://soundcloud.com/dur_ant', 'bc': 'https://d3br1s.bandcamp.com', 'other': 'https://www.youtube.com/@d3br1s_'}, 
    {'name': 'Emo Betriebswerk', 'ig': 'djstoleyourbae', 'sc': 'https://soundcloud.com/emobetriebswerk', 'bc': '', 'other': ''}, 
    {'name': 'FINGERGAP', 'ig': 'fingergap', 'sc': 'https://soundcloud.com/fingergap', 'bc': 'https://fingergap.bandcamp.com', 'other': ''}, 
	{'name': 'georg-i', 'ig': '_georg_i_', 'sc': 'https://soundcloud.com/georg-i', 'bc': 'https://georg-i.bandcamp.com', 'other': ''}, 
    {'name': 'Kwan', 'ig': 'kwanho1997', 'sc': 'https://soundcloud.com/kwanw', 'bc': 'https://kwanw.bandcamp.com', 'other': ''}, 
	{'name': 'moemiki', 'ig': 'moemiki_', 'sc': 'https://soundcloud.com/moemiki', 'bc': '', 'other': 'https://www.twitter.com/moemiki_'}, 
    {'name': 'NTFL', 'ig': 'n_t_f.l', 'sc': 'https://soundcloud.com/n-t-f-l', 'bc': '', 'other': ''}, 
    {'name': 'provinceofnowhere', 'ig': 'provinceofnowhere', 'sc': 'https://soundcloud.com/province-of-nowhere', 'bc': '', 'other': ''}, 
	{'name': 'Rench Kee', 'ig': 'totaldedly08river', 'sc': '', 'bc': '', 'other': ''}, 
    {'name': 'Videopunks', 'ig': 'vxpx.info', 'sc': '', 'bc': 'https://videopunks.bandcamp.com/', 'other': ''},
	{'name': 'Yau Hei ASJ', 'ig': 'yauheiasj', 'sc': 'https://soundcloud.com/weareasj', 'bc': 'https://weareasj.bandcamp.com', 'other': ''}, 
    {'name': '444theGod ', 'ig': '444_thegod', 'sc': '', 'bc': '', 'other': ''}, 
    {'name': '7mint', 'ig': '7mint.music', 'sc': '', 'bc': 'https://7mint.bandcamp.com', 'other': 'https://www.twitter.com/7mint_music'}, 
]

# for filename in os.listdir("../v1/21sept-master-mp3"):
#       V1_TRACKLIST.append( { "name": filename.split(".mp3")[0], "path": "21sept-master-mp3/" + filename })

def format_duration(seconds):
    minutes, seconds = divmod(seconds, 60)
    duration = "{:02d}:{:02d}".format(int(minutes), int(seconds))
    return duration
     
# for filename in os.listdir("../v2/final_master_mp3"):
#     path_lain = os.path.dirname(os.path.realpath(__file__))[0:-4]
    
#     audiofile = eyed3.load(path_lain + "/v2/final_master_mp3/" + filename)

#     V2_TRACKLIST.append( { "name": audiofile.tag.artist + " - " + filename.split(".mp3")[0], "path": "final_master_mp3/" + filename, "duration": format_duration(audiofile.info.time_secs), "link": "artist_link" })

# test mp3
# for filename in os.listdir("../v2/test_mp3"):
#     path_lain = os.path.dirname(os.path.realpath(__file__))[0:-4]
    
#     audiofile = eyed3.load(path_lain + "/v2/test_mp3/" + filename)

#     V2_TRACKLIST.append( { "name": filename.split(".mp3")[0], "path": "test_mp3/" + filename, "duration": format_duration(audiofile.info.time_secs), "link": "https://i.am.retarded" })
	
# print(V2_TRACKLIST)

# # get total duration
# total_seconds = 0
# for filename in os.listdir("../v2/final_master_mp3"):
#     path_lain = os.path.dirname(os.path.realpath(__file__))[0:-4]  
#     audiofile = eyed3.load(path_lain + "/v2/final_master_mp3/" + filename)
#     total_seconds += audiofile.info.time_secs
# print(format_duration(total_seconds))


# for filename in os.listdir("../v2/final_master_mp3"):
#     path_lain = os.path.dirname(os.path.realpath(__file__))[0:-4]
    
#     audiofile = eyed3.load(path_lain + "/v2/final_master_mp3/" + filename)

#     V2_ARTISTS.append(audiofile.tag.artist)
    
# V2_ARTISTS.sort()
# print(V2_ARTISTS)

# test = []
# for artist in V2_ARTISTS:
#     test.append({ 'name' : artist, 'ig' : '', 'sc' : '', 'bc' : '', 'other' : ''})

# print(test)

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
                }),
                ("v2/credits.html", {
                    "artists": V2_ARTISTS
                })
        	],
            outpath = "../"
        )
    site.render(use_reloader=True)
