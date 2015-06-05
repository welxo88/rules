--
-- Table structure for table `rules`
--

CREATE TABLE IF NOT EXISTS `rules` (
  `ruleId` int(11) NOT NULL,
  `ruleTextId` varchar(30) NOT NULL,
  `ruleName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `validStart` date NOT NULL,
  `validEnd` date NOT NULL,
  `approvedDate` date NOT NULL,
  PRIMARY KEY (`ruleId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rules`
--

INSERT INTO `rules` (`ruleId`, `ruleTextId`, `ruleName`, `validStart`, `validEnd`, `approvedDate`) VALUES
(1, 'nlysaannot', 'Koiran�yttelys��nn�t', '2012-01-01', '2016-12-31', '2011-11-27');