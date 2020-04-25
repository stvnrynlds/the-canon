const books = {
	"GENE": {
		"name": "Genesis",
		"aliases": [],
        "groups": [
            "Pentateuch"
        ]
	},
	"EXOD": {
		"name": "Exodus",
		"aliases": [],
        "groups": [
            "Pentateuch"
        ]
    },
    "LEVI": {
		"name": "Leviticus",
		"aliases": [],
        "groups": [
            "Pentateuch"
        ]
	},
	"NUMB": {
		"name": "Numbers",
		"aliases": [],
        "groups": [
			"Pentateuch",
			"Law"
        ]
	},
	"DEUT": {
		"name": "Deuteronomy",
		"aliases": [],
        "groups": [
			"Pentateuch",
			"Law",
        ]
	},
	"JOSH": {
		"name": "Joshua",
		"aliases": []
	},
	"JUDG": {
		"name": "Judges",
		"aliases": []
	},
	"RUTH": {
		"name": "Ruth",
		"aliases": []
	},
	"1SAM": {
		"name": "1 Samuel",
		"aliases": [
            "1 Kings",
			"1 Kingdoms"
		]
	},
	"2SAM": {
		"name": "2 Samuel",
		"aliases": [
            "2 Kings",
			"2 Kingdoms"
		]
	},
	"1KIN": {
		"name": "1 Kings",
		"aliases": [
            "3 Kings",
			"3 Kingdoms"
		]
	},
	"2KIN": {
		"name": "2 Kings",
		"aliases": [
            "4 Kings",
            "4 Kingdoms"
		]
	},
	"1CHR": {
		"name": "1 Chronicles",
		"aliases": [
			"1 Paraleipomenon"
		]
	},
	"2CHR": {
		"name": "2 Chronicles",
		"aliases": [
			"2 Paraleipomenon"
		]
	},
	"EZRA": {
		"name": "Ezra",
		"aliases": [
            "1 Esdras"
        ]
	},
	"NEHE": {
		"name": "Nehemiah",
		"aliases": [
			"2 Esdras"
		]
	},
	"TOBI": {
		"name": "Tobit",
		"aliases": [
			"Tobias"
		]
	},
	"JUDI": {
		"name": "Judith",
		"aliases": []
	},
	"ESTH": {
		"name": "Esther",
		"aliases": []
	},
	"1MAC": {
		"name": "1 Maccabees",
		"aliases": []
	},
	"2MAC": {
		"name": "2 Maccabees",
		"aliases": []
	},
	"3MAC": {
		"name": "3 Maccabees",
		"aliases": []
	},
	"3ESD": {
		"name": "3 Esdras",
		"aliases": []
	},
	"4MAC": {
		"name": "4 Maccabees",
		"aliases": []
	},
	"JOB": {
		"name": "Job",
		"aliases": []
	},
	"PSAL": {
		"name": "Psalms",
		"aliases": [
            "Psalter"
        ]
	},
	"PROV": {
		"name": "Proverbs",
		"aliases": []
	},
	"ECCL": {
		"name": "Ecclesiastes",
		"aliases": []
	},
	"SONG": {
		"name": "Song of Solomon",
		"aliases": [
			"Song of Songs",
			"Canticle of Canticles"
		]
	},
	"WISD": {
		"name": "Wisdom",
		"aliases": []
	},
	"SIRA": {
		"name": "Sirach",
		"aliases": [
			"Ecclesiasticus"
		]
	},
	"ISAI":{
		"name": "Isaiah",
		"aliases": [
			"Isaias"
		]
	},
	"JERE": {
		"name": "Jeremiah",
		"aliases": [
			"Jeremias"
		]
	},
	"LAME": {
		"name": "Lamentations",
		"aliases": []
	},
	"BARU": {
		"name": "Baruch",
		"aliases": []
	},
	"EZEK": {
		"name": "Ezekiel",
		"aliases": []
	},
	"DANI": {
		"name": "Daniel",
		"aliases": []
	},
	"HOSE": {
		"name": "Hosea",
		"aliases": [
			"Osee"
		]
	},
	"JOEL": {
		"name": "Joel",
		"aliases": []
	},
	"AMOS": {
		"name": "Amos",
		"aliases": []
	},
	"OBAD": {
		"name": "Obadiah",
		"aliases": [
		]
	},
	"JONA": {
		"name": "Jonah",
		"aliases": [
			"Jonas"
		]
	},
	"MICA": {
		"name": "Micah",
		"aliases": [
			"Michaeas"
		]
	},
	"NAHU": {
		"name": "Nahum",
		"aliases": [
		]
	},
	"HABA": {
		"name": "Habakkuk",
		"aliases": [
		]
	},
	"ZEPH": {
		"name": "Zephaniah",
		"aliases": [
		]
	},
	"HAGG": {
		"name": "Haggai",
		"aliases": [
		]
	},
	"ZECH": {
		"name": "Zechariah",
		"aliases": [
		]
    },
    "MALA": {
		"name": "Malachi",
		"aliases": [
		]
	},
	"MATT": {
		"name": "Matthew",
		"aliases": [
			"Matt"
		]
	},
	"MARK": {
		"name": "Mark",
		"aliases": []
	},
	"LUKE": {
		"name": "Luke",
		"aliases": []
	},
	"JOHN": {
		"name": "John",
		"aliases": []
	},
	"ACTS": {
		"name": "Acts",
		"aliases": []
	},
	"ROMA": {
		"name": "Romans",
		"aliases": [
			"Rom"
		]
	},
	"1COR": {
		"name": "1 Corinthians",
		"aliases": [
			"1 Cor",
			"1st Cor",
			"1st Corinthians",
			"First Corinthians"
		]
	},
	"2COR": {
		"name": "2 Corinthians",
		"aliases": [
			"2 Cor",
			"2nd Cor",
			"2nd Corinthians",
			"Second Corinthians"
		]
	},
	"GALA": {
		"name": "Galatians",
		"aliases": [
			"Gal"
		]
	},
	"EPHE": {
		"name": "Ephesians",
		"aliases": []
	},
	"PHIL": {
		"name": "Philippians",
		"aliases": []
	},
	"COLO": {
		"name": "Colossians",
		"aliases": []
	},
	"1THE": {
		"name": "1 Thessalonians",
		"aliases": []
	},
	"2THE": {
		"name": "2 Thessalonians",
		"aliases": []
	},
	"1TIM": {
		"name": "1 Timothy",
		"aliases": []
	},
	"2TIM": {
		"name": "2 Timothy",
		"aliases": []
	},
	"TITU": {
		"name": "Titus",
		"aliases": []
	},
	"PHIL": {
		"name": "Philemon",
		"aliases": []
	},
	"HEBR": {
		"name": "Hebrews",
		"aliases": []
	},
	"JAME": {
		"name": "James",
		"aliases": []
	},
	"1PET": {
		"name": "1 Peter",
		"aliases": []
	},
	"2PET": {
		"name": "2 Peter",
		"aliases": []
	},
	"1JOH": {
		"name": "1 John",
		"aliases": []
	},
	"2JOH": {
		"name": "2 John",
		"aliases": []
	},
	"3JOH": {
		"name": "3 John",
		"aliases": []
	},
	"JUDE": {
		"name": "Jude",
		"aliases": []
	},
	"REVE": {
		"name": "Revelation",
		"aliases": [
			"The Apocalypse"
		]
	}
};

export default books;