/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/06/10/Linux/1 Linux概念/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/10/Linux/2 Linux基础操作/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/10/Linux/3 CentOS7X64的MySQL5.7（RPM安装）/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/10/Linux/4 LAMP建站之centos7+wordpress/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/10/Linux/5 远程搭建CentOS的SVN服务器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/10/Linux/6 Centos7+JDK1.8+Tomcat9本地RPM安装/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/23/BlackBbox/黑盒测试方法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/23/WEB/HTML/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/23/WEB/JavaScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/23/WEB/PHP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/23/WEB/Web 测试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/07/20/WEB/CSS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/09/16/AndroidAPP/1 移动APP测试–环境搭建/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/09/16/AndroidAPP/2 移动APP测试–Android基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/09/16/AndroidAPP/3 移动APP测试–测试类型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/04/26/SQL/1 数据库基础知识/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/04/26/SQL/2 MySQL 基础操作/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/04/26/SQL/3 数据库基本操作1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/04/26/SQL/4 数据库基本操作2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/04/26/SQL/5 数据库基本操作3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/04/26/SQL/6 Oracle练习/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/04/27/SQL/8 小技巧/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/10/20/QTP&UFT/自动化测试-QTP(1)/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/10/20/QTP&UFT/自动化测试-QTP(2)/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/10/23/LoadRunner/LoadRunner 自带练习服务器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/10/23/Tool/时序图/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/15/Jemeter/Jmeter/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/03/23/python/批量更改文件名/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/04/27/SQL/SQLserver_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/04/27/SQL/SQLserver_2Tips/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/06/23/CFA/02 Economic/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/06/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/bundle.js","d41d8cd98f00b204e9800998ecf8427e"],["/categories/AndroidAPP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/CFA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/敲码/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/笔记/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/笔记/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/02 Economic/image-20210107001829803.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/02 Economic/image-20210107005655471.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/algolia_logo.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/apple-touch-icon-next.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/avatar.gif","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-nc-nd.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-nc-sa.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-nc.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-nd.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-sa.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-zero.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon-16x16-next.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon-32x32-next.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/instantsearch.min.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/loading.gif","d41d8cd98f00b204e9800998ecf8427e"],["/images/logo.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517832848283.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517832856145.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517832864813.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517881008702.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517881089186.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517897678659.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517899577055.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517903255025.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517903693051.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517904938561.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517904967418.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517905466566.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517906361327.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517906381709.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517906414522.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517906455278.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517907756812.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517907826268.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517908005274.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517908183678.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517908920314.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517909953592.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517910059305.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517910247382.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517910501624.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517910689440.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517910943919.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517911411583.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517914491933.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517914704364.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517914839470.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517916230629.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517917585667.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517917645398.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517918396300.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517918432332.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517999668536.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1517999831428.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518000052986.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518000435483.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518000628221.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518000657881.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518000772849.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518001835790.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518001892244.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518002189244.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518002420602.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518002764282.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518002945827.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518003283829.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518003482162.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518005624297.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518005661737.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518005815863.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518056788911.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518060345291.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518060385429.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518062192045.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518062270239.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518062334507.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518415753810.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518417153628.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518417184765.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518418817675.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518419021016.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518419154888.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518425286828.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518437670743.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518437770607.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518441593456.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1518788285092.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1519551713620.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1519770178904.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1519770240912.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1519770366420.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1519770390411.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1519770409343.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520172992067.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520333660070.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520334640507.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520334887199.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520401697087.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520417730484.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520561491776.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520561776190.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520561962003.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520562190968.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520562257912.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520562347986.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520562555602.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520563500419.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520578541610.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520578706431.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520579280156.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1520854447634.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521028554224.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521029406409.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521030220609.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521030801016.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521030846112.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521031252143.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521031260012.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521031276820.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521032316413.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521110508364.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521197986340.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521198979279.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521199136403.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521199747649.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521200744160.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521201535368.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521202175452.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521202854449.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521203418017.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521203604884.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521203706528.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521204321265.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521204358542.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521359779307.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521360766737.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521364528917.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521364615067.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521364742861.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521364874294.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521364975988.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521365123368.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521365228927.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521365447851.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521365542793.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521367448035.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521367486314.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521367529136.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1521447853474.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522226044831.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522226125046.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522226144729.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522226330889.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522226359159.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522226384802.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522229923906.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522229985713.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522230012518.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522233669462.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522233774296.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522235081858.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522235141530.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522235199701.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522286587003.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522286592067.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522286612115.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522288548598.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522462558196.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522475552140.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522475941449.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522479904293.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522479919018.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522554500524.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522565475437.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522565510560.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522565671156.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522565780968.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522565934574.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522566224947.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522566332617.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522566423547.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522566471874.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522566652130.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522566755135.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522566816668.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522566852383.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522566971679.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522567061127.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522567747363.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522567771389.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522567929329.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522568054111.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522568117504.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522568158299.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522568423109.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522568515588.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522568555274.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522568637696.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522568789006.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522568882733.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522569046865.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522569138306.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522569320639.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522570122062.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522570213239.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522570243405.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522570343484.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522570558153.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522570781081.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522570803713.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522572015599.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522572105361.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522582112436.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522582202318.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1522582883553.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523460990404.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523461667370.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523462311983.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523462457629.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523462539384.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523462595563.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523704276438.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523705227883.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523705296687.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523705434825.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523705939209.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523706299470.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523707070775.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523707076589.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523707138486.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523707268329.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523707608020.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523707623505.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523707636904.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523707965307.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523708011331.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523708652088.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523758255129.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523759094615.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523772644257.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523772745510.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523772783416.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523772803669.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523772831815.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523773942816.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523778992606.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523779128706.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523779465711.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523784968385.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523784992857.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/1523785038227.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2335_1.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2339_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2341_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2349_1.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2351_1.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2353_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2357_1.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2359_1.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2361_1.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2365_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2367_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2369_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2371_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2373_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2377_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2379_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2381_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2383_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2387_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2389_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2391_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2393_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2395_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2401_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2403_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2405_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2407_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2409_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2411_0.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/2417_1.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/QQ拼音截图未命名.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/pic/屏幕快照 2018-03-12 23.39.52.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/placeholder.gif","d41d8cd98f00b204e9800998ecf8427e"],["/images/quote-l.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/quote-r.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/searchicon.png","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/affix.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/algolia-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/exturl.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/instantclick.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/js.cookie.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/motion.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/next-boot.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/post-details.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/schemes/muse.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/schemes/pisces.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/scroll-cookie.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/scrollspy.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/canvas-nest/README.html","d41d8cd98f00b204e9800998ecf8427e"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/canvas-nest/canvas-nest.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/fancybox/README.html","d41d8cd98f00b204e9800998ecf8427e"],["/lib/fancybox/source/jquery.fancybox.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/fancybox/source/jquery.fancybox.min.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/fancybox/source/jquery.fancybox.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/fancybox/source/jquery.fancybox.pack.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/font-awesome/css/font-awesome.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/font-awesome/css/font-awesome.min.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","d41d8cd98f00b204e9800998ecf8427e"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","d41d8cd98f00b204e9800998ecf8427e"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","d41d8cd98f00b204e9800998ecf8427e"],["/lib/jquery/index.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/velocity/velocity.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/velocity/velocity.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/velocity/velocity.ui.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/velocity/velocity.ui.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/style.css","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","b30ce19b95a7a8378ec0903dd52cf859"],["/tags/APP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Android/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/CFA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/JavaScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/LoadRunner/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/PHP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/QTP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/SQl/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/UFT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Web/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/css/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/python/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/test/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/tool/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/接口/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/数据库/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/自动化/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
