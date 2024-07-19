from staticjinja import Site
import os

VERSION_HISTORY_ENTRIES = [
    {
        "version": "1.1.0",
        "date": "01 july 2024",
        "description": """some vol. 2 tracks premiered on <a href="https://www.nts.live/shows/bloodz-boi/episodes/bloodz-boi-1st-july-2024" target="_blank">NTS</a><br> added /v2 placeholder"""
    },
    {
        "version": "1.0.0",
        "date": "04 nov 2022",
        "description": "vol. 1 release"
    },
    {
        "version": "0.3.2",
        "date": "26 oct 2022",
        "description": "added audio filter developer mode"
    },
    {
        "version": "0.3.1",
        "date": "09 oct 2022",
        "description": """window minimise animation<br> fixed ascii art display issue<br> fixed safari volume issue"""
    },
    {
        "version": "0.3.0",
        "date": "21 sep 2022",
        "description": """uploaded vol. 1 master<br> music player visualiser"""
    },
    {
        "version": "0.2.1",
        "date": "01 sep 2022",
        "description": """audio filter commands<br> mobile optimisation"""
    },
    {
        "version": "0.2.0",
        "date": "28 aug 2022",
        "description": """added terminal window<br> added version history window"""
    },
    {
        "version": "0.1.0",
        "date": "09 aug 2022",
        "description": """uploaded lain comp vol. 1 demo<br> music player with audio filters
"""
    },
]

if __name__ == "__main__":
    site = Site.make_site( 
            contexts = [ 
                ("v1/index.html", {"version_history_entries": VERSION_HISTORY_ENTRIES }), ("v2/index.html", {"version_history_entries": VERSION_HISTORY_ENTRIES })],
            outpath = "../"
        )
    site.render(use_reloader=True)
