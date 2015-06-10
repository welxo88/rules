DROP TABLE IF EXISTS `ruleSections`;

--
-- Table structure for table `ruleSections`
--

CREATE TABLE IF NOT EXISTS `ruleSections` (
  `ruleId` int(3) NOT NULL,
  `sectionId` varchar(10) NOT NULL,
  `parentSection` varchar(10) DEFAULT NULL,
  `sectionHeader` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`ruleId`, `sectionId`),
  FOREIGN KEY (ruleId) REFERENCES rules(ruleId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ruleSections`
--

INSERT INTO `ruleSections` 
	(`ruleId`, `sectionId`, `parentSection`, `sectionHeader`) 
VALUES
	(1, '1', NULL, 'Yleistä'),
	(1, '2', NULL, 'Näyttelyn tarkoitus'),
	(1, '3', NULL, 'Osallistumisoikeus'),
	(1, '3.1', 3,  'Jääviys'),
	(1, '3.2', 3,  'Terveysmääräykset'),
	(1, '4', NULL, 'Ilmoittautuminen'),
	(1, '5', NULL, 'Ilmoittautumisen peruuttaminen'),
	(1, '6', NULL, 'Näytteilleasettajaa koskevia määräyksiä'),
	(1, '7', NULL, 'Vastuuvakuutus'),
	(1, '8', NULL, 'Ulkomuototuomarit'),
	(1, '9', NULL, 'Koirien arvostelu'),
	(1, '10', NULL, 'Arvosteluperusteet'),
	(1, '10.1','10','Laatuarvostelu'),
	(1, '10.2','10','Kilpailuarvostelu'),
	(1, '11', NULL, 'Arvosteluluokat'),
	(1, '12', NULL, 'Palkintoa osoittavat värit'),
	(1, '13', NULL, 'Arvostelun muuttaminen'),
	(1, '14', NULL, 'Muut ohjeet'),
	(1, '15', NULL, 'Valitukset'),
	(1, '16', NULL, 'Voimassaolo');