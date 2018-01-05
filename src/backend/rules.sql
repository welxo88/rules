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

	(3, 'valioarvo17', 4, 'Suomen valionarvosäännöt 2017', 
	 	'2017-01-01', NULL, NULL,
		NULL, 'https://www.kennelliitto.fi/sites/default/files/media/valionarvosaannot_2017_0.pdf'),

 	(4, 'muutoksenhaku07', 5, 'Yleinen muutoksenhakumenettely', 
	 	'2007-01-01', NULL, '2006-11-26',
		'Kennelliiton valtuusto', 'https://www.kennelliitto.fi/sites/default/files/media/muutoksenhaku21112008.pdf'),

  	(5, 'antidoping13', 9, 'Antidopingsääntö', 
	 	'2013-01-01', NULL, '2012-05-27',
		'Kennelliiton valtuusto', 'https://www.kennelliitto.fi/sites/default/files/media/antidopingsaanto_2013.pdf'),
		
  	(6, 'jaaviys08', 6, 'Kennelliiton yleinen jääviyssääntö', 
	 	'2008-01-01', NULL, '2007-05-17',
		'Kennelliiton valtuusto', 'https://www.kennelliitto.fi/sites/default/files/jaaviyssaanto1.1.2008.pdf'),

  	(7, 'antidopingohje13', 9, 'Ohje dopingnäytteen ottamisesta ja tutkimisesta', 
	 	'2013-01-01', NULL, '2015-10-08',
		'Kennelliiton hallitus', 'https://www.kennelliitto.fi/sites/default/files/media/ohje_dopingnaytteen_tutkimisesta_ja_ottamisesta_0.pdf'),

  	(8, 'nordohje18', 3, 'NORD-näyttelyiden ohjeet', 
	 	'2018-01-01', NULL, '2017-04-06',
		'Kennelliiton hallitus', 'https://www.kennelliitto.fi/sites/default/files/nord-nayttelyiden_ohjeet_hall6.4.pdf'),
	
	(9, 'rko', 7, 'RKO - Rotukohtaiset ohjeet liioiteltujen piirteiden huomioimisesta ulkomuotoarvostelussa ', 
	 	NULL, NULL, NULL,
		'-', 'https://www.kennelliitto.fi/sites/default/files/media/rotukohtaiset_ohjeet_rko_0.pdf')
;
