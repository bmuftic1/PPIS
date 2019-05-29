define({ "api": [
  {
    "type": "put",
    "url": "/dogadjaj/${id}",
    "title": "Azuriranje jednog dogadjaja",
    "name": "Azuriranje_dogadjaja",
    "group": "Dogadjaj",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Dogadjaj",
            "optional": false,
            "field": "vraca",
            "description": "<p>azurirani objekat tipa Dogadjaj</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>treba biti 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Primjer podataka kada je uspjesan poziv:",
          "content": "{\n      \"dogadjaj\": \"EVENT UPDATE\",\n      \"prioritetId\": 2,\n      \"tipId\": 3,\n      \"inicijator\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/dogadjaj.router.js",
    "groupTitle": "Dogadjaj"
  },
  {
    "type": "delete",
    "url": "/dogadjaj/${id}",
    "title": "Brisanje jedan dogadjaj",
    "name": "Brisanje_dogadjaja",
    "group": "Dogadjaj",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Dogadjaj",
            "optional": false,
            "field": "vraca",
            "description": "<p>obrisani objekat tipa Dogadjaj</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>treba biti 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Primjer podataka kada je uspjesan poziv:",
          "content": "{\n      \"dogadjaj\": \"EVENT\",\n      \"prioritetId\": 2,\n      \"tipId\": 3,\n      \"inicijator\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/dogadjaj.router.js",
    "groupTitle": "Dogadjaj"
  },
  {
    "type": "get",
    "url": "/dogadjaj/${id}",
    "title": "Dohvatanje jedan dogadjaj",
    "name": "Jedan_dogadjaj",
    "group": "Dogadjaj",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Dogadjaj",
            "optional": false,
            "field": "vraca",
            "description": "<p>objekat tipa Dogadjaj</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>treba biti 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Primjer podataka kada je uspjesan poziv:",
          "content": "{\n      \"dogadjaj\": \"EVENT\",\n      \"prioritetId\": 2,\n      \"tipId\": 3,\n      \"inicijator\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/dogadjaj.router.js",
    "groupTitle": "Dogadjaj"
  },
  {
    "type": "post",
    "url": "/dogadjaj",
    "title": "Dodavanje novog dogadjaja",
    "name": "Novi_dogadjaj",
    "group": "Dogadjaj",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Dogadjaj",
            "optional": false,
            "field": "vraca",
            "description": "<p>Dogadjaj objekat</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>treba biti 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Primjer podataka kada je uspjesan poziv:",
          "content": "{\n      \"dogadjaj\": \"EVENT\",\n      \"prioritetId\": 2,\n      \"tipId\": 3,\n      \"inicijator\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/dogadjaj.router.js",
    "groupTitle": "Dogadjaj"
  },
  {
    "type": "get",
    "url": "/dogadjaj",
    "title": "Dohvatanje svih dogadjaja",
    "name": "Svi_dogadjaji",
    "group": "Dogadjaj",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Dogadjaj",
            "optional": false,
            "field": "vraca",
            "description": "<p>niz objekata tipa Dogadjaj</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>treba biti 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Primjer podataka kada je uspjesan poziv:",
          "content": "[\n   {\n      \"dogadjaj\": \"EVENT\",\n      \"prioritetId\": 2,\n      \"tipId\": 3,\n      \"inicijator\": 2\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/dogadjaj.router.js",
    "groupTitle": "Dogadjaj"
  }
] });
