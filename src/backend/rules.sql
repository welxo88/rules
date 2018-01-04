DROP TABLE IF EXISTS `rules`;

--
-- Table structure for table `rules`
--

CREATE TABLE IF NOT EXISTS `rules` (
  `ruleId` int(3) NOT NULL,
  `ruleTextId` varchar(30) NOT NULL,
  `presentationOrder` int(3) NOT NULL,
  `ruleName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `validStart` date NOT NULL,
  `validEnd` date NULL,
  `approvedDate` date NULL,
  `approvedBy` varchar(30) NULL,
  `linkToOriginal` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  UNIQUE INDEX ruleTextId_unique (ruleTextId),
  PRIMARY KEY (`ruleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rules`
--

INSERT INTO `rules` 
	(`ruleId`, `ruleTextId`, `presentationOrder`, `ruleName`, `validStart`, `validEnd`, `approvedDate`, `approvedBy`, `linkToOriginal`) 
VALUES
	(1, 'nlysaannot17', 1, 'Koiranäyttelysäännöt', 
	 	'2017-01-01', '2021-12-31', '2016-05-29',
		'Kennelliiton valtuusto', 'https://www.kennelliitto.fi/sites/default/files/media/koiranayttelysaannot_2017.pdf'),
	(2, 'nlyohjeet18', 2, 'Näyttelysääntöjä täydentävät ohjeet sekä näyttelyiden järjestämisohjeet', 
	 	'2018-01-01', NULL, '2017-12-14',
		'Kennelliiton hallitus ', 'https://www.kennelliitto.fi/sites/default/files/media/nayttelysaantoja_taydentavat_ohjeet_seka_nayttelyiden_jarjestamisohjeet_2017_1.pdf'),
	(3, 'valioarvo17', 3, 'Suomen valionarvosäännöt 2017', 
	 	'2017-01-01', NULL, NULL,
		NULL, 'https://www.kennelliitto.fi/sites/default/files/media/valionarvosaannot_2017_0.pdf'),
 	(4, 'muutoksenhaku07', 4, 'Yleinen muutoksenhakumenettely', 
	 	'2007-01-01', NULL, '2006-11-26',
		'Kennelliiton valtuusto', 'https://www.kennelliitto.fi/sites/default/files/media/muutoksenhaku21112008.pdf'),
  	(5, 'antidoping13', 6, 'Antidopingsääntö', 
	 	'2013-01-01', NULL, '2012-05-27',
		'Kennelliiton valtuusto', 'https://www.kennelliitto.fi/sites/default/files/media/antidopingsaanto_2013.pdf'),
  	(6, 'jaaviys08', 5, 'Kennelliiton yleinen jääviyssääntö', 
	 	'2008-01-01', NULL, '2007-05-17',
		'Kennelliiton valtuusto', 'https://www.kennelliitto.fi/sites/default/files/jaaviyssaanto1.1.2008.pdf');

