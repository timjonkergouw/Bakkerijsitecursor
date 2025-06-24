# Bakkerij De Gouden Korst Website

Een moderne website voor Bakkerij De Gouden Korst, een ambachtelijke bakkerij in Den Bosch. De website is gebouwd met HTML, CSS en JavaScript, zonder gebruik van externe frameworks.

## Over de Bakkerij

Bakkerij De Gouden Korst is gelegen in het hartje van Den Bosch, vlak achter de Sint-Jan. De bakkerij wordt gerund door eigenaar Gijs van den Berg en staat bekend om ambachtelijk brood en gebak. Elke ochtend om vier uur begint Gijs met zijn trouwe hond Broodje aan het kneden van deeg en het aansteken van de oven.

### Specialiteiten
- **Bosche Bronsbrood**: Bekroond desembrood met knapperige korst (alleen op zaterdag)
- **Bossche Bollen**: Lokale favoriet met een eigen twist
- **Ambachtelijke Croissants**: Vers en knapperig, elke ochtend gebakken

## Functionaliteiten

### Homepage (`index.html`)
- Responsive hero sectie met welkomstbericht
- Informatie over de bakkerij en eigenaar Gijs van den Berg
- Overzicht van specialiteiten
- Contactgegevens en openingstijden

### Ons Assortiment (`pages/assortiment.html`)
- Overzicht van alle producten, onderverdeeld in categorieën:
  - **Brood**: Worstenbrood, Volkorenbrood, Stokbrood
  - **Gebak**: Bossche Bollen, Appeltaart, Slagroomtaart
  - **Koekjes & Klein Gebak**: Croissants, Boterkoekjes, Koffiebroodjes
- Elk product heeft:
  - Afbeelding
  - Naam
  - Beschrijving
  - Prijs
  - "Voeg toe aan winkelwagen" knop

### Winkelwagen Systeem
- Winkelwagen icoon in de navigatiebalk met productaantal
- Zijbalk met winkelwagen inhoud
- Mogelijkheid om:
  - Producten toe te voegen
  - Aantal aan te passen (+/- knoppen)
  - Producten te verwijderen
  - Totaalbedrag te zien
- Winkelwagen data wordt opgeslagen in localStorage
- Notificaties bij het toevoegen van producten

### Afrekenen (`pages/afrekenen.html`)
- Overzicht van bestelling
- Formulier voor:
  - Persoonlijke gegevens
  - Bezorgadres
  - Betaalmethode (iDEAL, Creditcard, PayPal)
- Bevestigingsbericht na bestelling

### Contact (`pages/contact.html`)
- Contactformulier met validatie
- Adresgegevens en openingstijden
- Success message na het versturen van het formulier

## Technische Details

### Bestandsstructuur
```
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── cart.js
├── images/
│   ├── bakkerij van buiten.jpg
│   ├── bakker.png
│   ├── Worstenbroord.webp
│   ├── Volkorenbrood.png
│   ├── Witbrood.png
│   ├── bosche bol.jpg
│   ├── Taartje.png
│   ├── Klein gebakje.png
│   ├── speculaas.png
│   └── Vers koekje.png
└── pages/
    ├── assortiment.html
    ├── afrekenen.html
    └── contact.html
```

### Gebruikte Technologieën
- HTML5
- CSS3 (met CSS Grid en Flexbox)
- Vanilla JavaScript
- LocalStorage voor winkelwagen data
- Google Fonts (Playfair Display & Source Sans Pro)

### Responsive Design
- Mobiel-vriendelijk
- Aanpasbaar aan verschillende schermformaten
- Geoptimaliseerde navigatie voor mobiele apparaten
- Smooth scrolling en animaties

### JavaScript Functionaliteiten
- **ShoppingCart Class**: Volledig functioneel winkelwagen systeem
- **Form Handling**: Contactformulier validatie en submission
- **Animation System**: Product card animaties bij scrollen
- **LocalStorage Integration**: Persistente winkelwagen data

## Installatie en Gebruik

1. Clone de repository:
```bash
git clone [repository-url]
```

2. Open de website:
- Open `index.html` in een webbrowser
- Of gebruik een lokale server voor optimale prestaties

## Browser Ondersteuning
- Chrome (laatste versie)
- Firefox (laatste versie)
- Safari (laatste versie)
- Edge (laatste versie)

## Contactgegevens
**Bakkerij De Gouden Korst**
- Adres: Achter de Sint-Jan 15, 5211 JH Den Bosch
- Openingstijden: 
  - Maandag t/m Vrijdag: 07:00 - 18:00
  - Zaterdag: 07:00 - 16:00
  - Zondag: Gesloten

## Toekomstige Verbeteringen
- [ ] Toevoegen van een zoekfunctie
- [ ] Implementeren van een productfilter
- [ ] Toevoegen van een klantenaccount systeem
- [ ] Integratie met een betaalsysteem
- [ ] Toevoegen van een bestelgeschiedenis
- [ ] Product reviews en ratings
- [ ] Allergenen informatie per product
