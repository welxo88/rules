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
				NULL, FALSE);