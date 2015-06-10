DROP TABLE IF EXISTS `ruleParagraph`;

--
-- Table structure for table `ruleParagraph`
--

CREATE TABLE IF NOT EXISTS `ruleParagraph` (
  `ruleId` int(3) NOT NULL,
  `sectionId` varchar(10) NOT NULL,
  `paragraphId` int(3) NOT NULL,
  `paragraphText` TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `paragraphInterpretation`  TEXT CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `paragraphIsSub` BOOL DEFAULT FALSE,
  PRIMARY KEY (`ruleId`, `sectionId`, `paragraphId`),
  FOREIGN KEY (ruleId, sectionId) REFERENCES ruleSections(ruleId, sectionId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ruleParagraph`
--

INSERT INTO `ruleParagraph` 
	(`ruleId`, `sectionId`, `paragraphId`, `paragraphText`, `paragraphInterpretation`, `paragraphIsSub`) 
VALUES
(1, '1', 1, 'Näitä sääntöjä noudatetaan Suomen Kennelliitto - Finska Kennelklubben ry:n (jäljempänä Kennelliitto) hyväksymissä koiranäyttelyissä. Ilmoittaessaan koiran näyttelyyn näytteilleasettaja sitoutuu noudattamaan näitä sääntöjä sekä näitä sääntöjä täydentäviä Kennelliiton näyttelynjärjestämisohjeita ja FCI:n ohjeita sekä suostuu siihen, että hänen ilmoittautumislomakkeessa antamansa henkilö – ja osoitetiedot saa julkaista ja antaa ulkopuolisille, ellei hän ole tätä osoitetietojen osalta erikseen kieltänyt.', 
				'mahdolliset tulkintaohjeet tänne, sekä kuka niistä vastuussa.', FALSE),
(1, '1', 2, 'Näyttelystä on ilmoitettava vähintään kaksi kuukautta ennen sen toimeenpanemista Kennelliiton julkaisussa Koiramme-Våra Hundar.', 
				NULL, FALSE),
(1, '2', 1, 'Näyttelyiden tarkoituksena on tarjota koiraharrastajille mahdollisuus kilpailla omistamiensa/esittämiensä koirien kanssa. Koiranäyttelyissä koiraharrastajalla on tilaisuus vertailla jalostustyön tuloksia ja arvioida rodun jalostusmateriaalia.', 
				NULL, FALSE),
(1, '2', 2, 'Koirien hyvinvoinnin on oltava koiranäyttelyissä aina etusijalla.', 
				NULL, FALSE),
(1, '3', 1, 'Näyttelyyn saavat osallistua FCI:n tunnustaman maan kenneljärjestössä rekisteröidyt FCI:n ja Pohjoismaisen Kennelunionin PKU:n hyväksymien rotujen koirat, jotka on tunnistusmerkitty Kennelliiton hyväksymällä tavalla ja täyttävät voimassa olevat Kennelliiton hyväksymät terveysmääräykset. Kansainvälisissä näyttelyissä rodut, joita FCI ei ole hyväksynyt, sijoitetaan näyttelyluettelossa omaan osioonsa ja ne eivät osallistu ryhmäkilpailuihin.', 
				NULL, FALSE),
(1, '3', 2, 'Arvostelun aikana ei koiralla saa olla kuonokoppaa tai muuta vastaavaa hallintavälinettä.', 
				NULL, FALSE),
(1, '3', 3, 'Näyttelyyn ei saa osallistua', 
				NULL, FALSE),
(1, '3', 4, '* koira, jota ei ole rokotettu Kennelliiton rokotusmääräysten mukaan', 
				NULL, TRUE),
(1, '3', 5, '* sairas koira', 
				NULL, TRUE),
(1, '3', 6, '* uros, jolla ei ole normaalit kivekset, ellei urosta ole kastroitu vamman tai sairauden takia, mistä on esitettävä Kennelliiton hyväksymä eläinlääkärintodistus. Lisäksi vaaditaan eläinlääkärintodistus tai näyttelytulos, josta ilmenee, että uroksella on ollut vähintään 6 kk. iässä normaalit kivekset.', 
				NULL, TRUE),
(1, '3', 7, '* kantava narttu 30 vuorokautta ennen laskettua aikaa (laskettu aika = 63 vrk ensimmäisestä astutuksesta) ja synnyttänyt narttu alle 75 vrk synnytyksen jälkeen', 
				NULL, TRUE),
(1, '3', 8, '* Suomen lain vastaisesti typistetyt koirat (erillinen luettelo roduista, joilla esiintyy ns. luonnontöpöhäntäisyyttä)', 
				NULL, TRUE),
(1, '3', 9, '* vaarallisen vihainen koira', 
				NULL, TRUE),
(1, '3', 10, '* koira, joka on saanut näyttelyssä kolme kertaa laatumaininnan ”hylätty” käyttäytymisen takia', 
				NULL, TRUE),
(1, '3', 11, '* koira, jolle on tehty jokin toimenpide rotumääritelmän mukaan tai muuten viaksi katsottavan ominaisuuden korjaamiseksi', 
				NULL, TRUE),
(1, '3', 12, '* koira, jonka karvapeite on värjätty tai joka on trimmattu rotumääritelmän vastaisesti, pyrkimyksenä salata esim. pitkäkarvaisuutta tai todellista karvanlaatua', 
				NULL, TRUE),
(1, '3', 13, '* koiran karvapeitteen, kirsun ja ihon käsitteleminen sellaisilla aineilla, jotka vaikuttavat väriin, muotoon ja rakenteeseen on kielletty.', 
				NULL, TRUE),
(1, '3', 14, '* yleisen antidoping-säännön vastainen koira (liite 1)', 
				NULL, TRUE),
(1, '3', 15, 'Sääntöjen vastaisen menettelyn tutkimiseksi on näyttelytoimikunnan valtuuttamalla henkilöllä oikeus ottaa koirista tarvittavia näytteitä näyttelyn aikana tai viiden vuorokauden kuluessa näyttelyn päättymisestä.', 
				NULL, FALSE),
(1, '3', 16, 'Näyttelyyn osallistumisoikeutta ei ole', 
				NULL, FALSE),
(1, '3', 17, '* koiralla, jonka omistajalla tai yhdelläkin omistajista on Kennelliiton kurinpitolautakunnan lisäseuraamuksena määräämä kielto tai Kennelliiton hallituksen määräämä tilapäinen kielto osallistua näyttelyihin näytteilleasettajana tai esittäjänä', 
				NULL, TRUE),
(1, '3', 18, '* kasvattajaryhmällä, jonka kasvattajalla tai yhdelläkin kasvattajista on Kennelliiton kurinpitolautakunnan lisäseuraamuksena määräämä kielto tai Kennelliiton hallituksen määräämä tilapäinen kielto osallistua näyttelyihin näytteilleasettajana tai esittäjänä', 
				NULL, TRUE),
(1, '3.1', 1, 'Näyttelyssä noudatetaan kulloinkin voimassa olevaa Kennelliiton yleistä jääviyssääntöä.', 
				NULL, FALSE),
(1, '3.2', 1, 'Näyttelyn eläinlääkäri voi tarkastaa koiria ja todetessaan koiran sairaaksi, hänellä on oikeus poistaa se näyttelystä. Eläinlääkäri voi myös ottaa koirista näytteitä näyttelyn aikana tai viiden vuorokauden kuluessa näyttelyn päättymisestä.', 
				NULL, FALSE),
(1, '4', 1, 'Ilmoittautuminen on tehtävä joko postitse tai sähköisesti Kennelliiton hyväksymällä lomakkeella, joka on maksuineen toimitettava näyttelytoimikunnalle ennen ilmoittautumisajan päättymistä. Sekä maksupäivän että kirjeen postileiman päiväyksen on oltava viimeistään ilmoittautumisajan päättymispäivä.', 
				NULL, FALSE),
(1, '4', 2, 'Koira on ilmoitettava näyttelyyn sillä nimellä ja sen rotuisena, jolla se on rekisteröity. Se on ilmoitettava laatuarvosteluluokkaan, johon se on oikeutettu osallistumaan. Ilmoittautumisajan päättymisen jälkeen koiraa ei voida siirtää toiseen luokkaan (ellei kysymyksessä ole järjestäjästä johtuva virhe) seuraavia tapauksia lukuun ottamatta:', 
				NULL, FALSE),
(1, '4', 3, '* Suomen Muotovalion arvon saavuttanutta koiraa, joka voidaan siirtää valioluokkaan', 
				NULL, TRUE),
(1, '4', 4, '* Suomessa/Pohjoismaissa käyttöluokkaan oikeuttavat tulokset saavuttanutta koiraa, joka voidaan siirtää käyttöluokkaan.', 
				NULL, TRUE),
(1, '4', 5, 'Jos koirasta on ilmoitettaessa annettu vääriä tietoja, koira voidaan sulkea näyttelystä ja mitätöidä sille jo mahdollisesti annetut tulokset.', 
				NULL, FALSE);