DROP TABLE IF EXISTS `rules`;

--
-- Table structure for table `rules`
--

CREATE TABLE IF NOT EXISTS `rules` (
  `ruleId` int(3) NOT NULL,
  `ruleTextId` varchar(30) NOT NULL,
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
	(`ruleId`, `ruleTextId`, `ruleName`, `validStart`, `validEnd`, `approvedDate`, `approvedBy`) 
VALUES
	(1, 'nlysaannot17', 'Koiranäyttelysäännöt', 
	 	'2017-01-01', '2021-12-31', '2016-05-29',
		'Kennelliiton valtuusto', 'https://www.kennelliitto.fi/sites/default/files/media/koiranayttelysaannot_2017.pdf'),
	(2, 'nlyohjeet17', 'Näyttelysääntöjä täydentävät ohjeet sekä näyttelyiden järjestämisohjeet', 
	 	'2017-01-01', NULL, '2016-06-10',
		'Kennelliiton hallitus ', 'https://www.kennelliitto.fi/sites/default/files/media/nayttelysaantoja_taydentavat_ohjeet_seka_nayttelyiden_jarjestamisohjeet_2017_1.pdf'),
	(3, 'valioarvo17', 'Suomen valionarvosäännöt 2017', 
	 	'2017-01-01', NULL, NULL,
		NULL, 'https://www.kennelliitto.fi/sites/default/files/media/valionarvosaannot_2017_0.pdf');
