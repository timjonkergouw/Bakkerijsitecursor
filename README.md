# Bakkerij De Gouden Korst Website

Een moderne website voor Bakkerij De Gouden Korst, een ambachtelijke bakkerij in Den Bosch. De website is gebouwd met HTML, CSS en JavaScript, zonder gebruik van externe frameworks.

## Functionaliteiten

### Homepage
- Responsive hero sectie met afbeelding van de bakkerij
- Informatie over de bakkerij
- Overzicht van specialiteiten
- Contactgegevens en openingstijden

### Ons Assortiment
- Overzicht van alle producten, onderverdeeld in categorieën:
  - Brood
  - Gebak
  - Koekjes & Klein Gebak
- Elk product heeft:
  - Afbeelding
  - Naam
  - Beschrijving
  - Prijs
  - "Voeg toe aan winkelwagen" knop

### Winkelwagen Systeem
- Winkelwagen icoon in de navigatiebalk
- Zijbalk met winkelwagen inhoud
- Mogelijkheid om:
  - Producten toe te voegen
  - Aantal aan te passen
  - Producten te verwijderen
  - Totaalbedrag te zien
- Winkelwagen data wordt opgeslagen in localStorage

### Afrekenen
- Overzicht van bestelling
- Formulier voor:
  - Persoonlijke gegevens
  - Bezorgadres
  - Betaalmethode (iDEAL, Creditcard, PayPal)
- Bevestigingsbericht na bestelling

## Technische Details

### Bestandsstructuur
```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── cart.js
├── images/
│   ├── bakkerij van buiten.jpg
│   ├── bakker.png
│   └── [andere productafbeeldingen]
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

### Responsive Design
- Mobiel-vriendelijk
- Aanpasbaar aan verschillende schermformaten
- Geoptimaliseerde navigatie voor mobiele apparaten

## Installatie en Gebruik

1. Clone de repository:
```bash
git clone [repository-url]
```

2. Open de website:
- Open `index.html` in een webbrowser
- Of gebruik een lokale server

## Browser Ondersteuning
- Chrome (laatste versie)
- Firefox (laatste versie)
- Safari (laatste versie)
- Edge (laatste versie)

## Toekomstige Verbeteringen
- [ ] Toevoegen van een zoekfunctie
- [ ] Implementeren van een productfilter
- [ ] Toevoegen van een klantenaccount systeem
- [ ] Integratie met een betaalsysteem
- [ ] Toevoegen van een bestelgeschiedenis

## Contact
Bakkerij De Gouden Korst
- Adres: Achter de Sint-Jan 15, 5211 JH Den Bosch
- Openingstijden: Ma t/m Vr: 07:00 - 18:00, Za: 07:00 - 16:00, Zo: Gesloten
