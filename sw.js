/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/06/10/Linux/1 Linux概念/index.html","686bd517636740496b46b4cc3b48f88b"],["/2017/06/10/Linux/2 Linux基础操作/index.html","4f22e121e69d6a99d36864535f2ee614"],["/2017/06/10/Linux/3 CentOS7X64的MySQL5.7（RPM安装）/index.html","aa204c7f1cb8903c76b8f45e40d2188f"],["/2017/06/10/Linux/4 LAMP建站之centos7+wordpress/index.html","35bf97e75a796f8b7f06610ddb98284e"],["/2017/06/10/Linux/5 远程搭建CentOS的SVN服务器/index.html","f4adcd8b1176e9d97fc0dd224d2c032a"],["/2017/06/10/Linux/6 Centos7+JDK1.8+Tomcat9本地RPM安装/index.html","1307657d9709a21e013fa3ec833365bb"],["/2017/06/23/BlackBbox/黑盒测试方法/index.html","4e86983f187f387c2962d3a104b064a6"],["/2017/06/23/WEB/HTML/index.html","14f96a0ff27e6d7760fc2dba7d06d344"],["/2017/06/23/WEB/JavaScript/index.html","3ef353bbfed7d373a9e9116c2b63ffeb"],["/2017/06/23/WEB/PHP/index.html","85024096be2c1aea15128c8477b73499"],["/2017/06/23/WEB/Web 测试/index.html","fa97c861ea6c9f1c1379e831e1e69c4d"],["/2017/07/20/WEB/CSS/index.html","d3da3355704bded33ec0455f702cc1ae"],["/2017/09/16/AndroidAPP/1 移动APP测试–环境搭建/index.html","08b18e564115bbf8e14dcf13dfedb9c9"],["/2017/09/16/AndroidAPP/2 移动APP测试–Android基础/index.html","a16831daa26f740621cb1821a126d271"],["/2017/09/16/AndroidAPP/3 移动APP测试–测试类型/index.html","b09ec7705310c92b296b31a8b019d533"],["/2018/04/26/SQL/1 数据库基础知识/index.html","3b9953070696c1188e80a57835618933"],["/2018/04/26/SQL/2 MySQL 基础操作/index.html","7cb85270ffd4dade4f1e9c14b90a3ac2"],["/2018/04/26/SQL/3 数据库基本操作1/index.html","30a23fdfdc02334957e5e9b1bde05a42"],["/2018/04/26/SQL/4 数据库基本操作2/index.html","53d9778994d5ca51d9ba1a4404318e9d"],["/2018/04/26/SQL/5 数据库基本操作3/index.html","c0a942ff2547f9973d0dcfb39b992a62"],["/2018/04/26/SQL/6 Oracle练习/index.html","8404b5f2c862a46077966ea282a0aaf7"],["/2018/04/27/SQL/8 小技巧/index.html","8a630d8a1e7ee54c0595a8625ee27331"],["/2018/10/20/QTP&UFT/自动化测试-QTP(1)/index.html","105733ce9f232a144d72ad1d88941adb"],["/2018/10/20/QTP&UFT/自动化测试-QTP(2)/index.html","cc985a6d4b3234bb8cdd3d4928f5c169"],["/2018/10/23/LoadRunner/LoadRunner 自带练习服务器/index.html","74f5ba8cdba1c66b75d946a0b581d4e3"],["/2018/10/23/Tool/时序图/index.html","2d0850dc010fea7ca69a9832c5b4b3de"],["/2018/11/15/Jemeter/Jmeter/index.html","bdfc22a92c913a5fe3cd769ee915b70b"],["/2019/03/23/python/批量更改文件名/index.html","646dd8a0c9b1bbaaea91328efbf024a5"],["/archives/2017/06/index.html","0e536ea906db7591dd68168a4bc5a3ac"],["/archives/2017/06/page/2/index.html","0f9fe108bbf6facd65c422da10ed8924"],["/archives/2017/07/index.html","25274904b66478b01b212d6b5107c286"],["/archives/2017/09/index.html","be5d3f7096c3fe465f69d50d83f8b21d"],["/archives/2017/index.html","5a942556f252935da082a0172670d6c6"],["/archives/2017/page/2/index.html","243c81ea6b597b33c448a1d7c59862e9"],["/archives/2018/04/index.html","44ecbaad9471725057dcba47c58518e5"],["/archives/2018/10/index.html","8601e53056019240f0c00128c05c1e2a"],["/archives/2018/11/index.html","8c6becd9d554658d6c468af4f79ad116"],["/archives/2018/index.html","5fd58f716cc52de3bdb6d82710cc7afd"],["/archives/2018/page/2/index.html","7482d726e7923edea0652c478c64865a"],["/archives/2019/03/index.html","41ce2bb1a9862e8deabb0ee4590fe7ea"],["/archives/2019/index.html","9b19b3546ffe789419e202f8b9fced85"],["/archives/index.html","d87abc9df8b6ec62f1d6ce6cf869d1bf"],["/archives/page/2/index.html","d700972da5f90f2145eb81efea848da8"],["/archives/page/3/index.html","275ba02b6912a48f40ec8bb00678b667"],["/bundle.js","21591922af749a24b6d882c01338e7d6"],["/categories/AndroidAPP/index.html","983a4fe73e3bd24dfbfea11547c508a8"],["/categories/index.html","c2fd281c84a7fd5ad69e1d5e6a64ab00"],["/categories/敲码/index.html","0c5c24b6f976cbc7fced05cd5a85f3e7"],["/categories/笔记/index.html","4365c43644889bb5a815550ffd42c5e9"],["/categories/笔记/page/2/index.html","45b49f2df2624a1ce934927dabdd42ed"],["/categories/笔记/page/3/index.html","3e4a68ace306ba8fefe1ec30e783a6bd"],["/css/main.css","ab3785be649183a0037dcb00b4911131"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","97b7ba06e9a2898aa9d67d7a89f7613b"],["/images/avatar.gif","e8fb3a675c7ddfe43c8d9c0e7d9511ae"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","2e1681dfb593e39ff40baaf008715d35"],["/images/favicon-32x32-next.png","d55dee7233cfe4be1b947bc0807f86fc"],["/images/instantsearch.min.css","a3d1234ae13e8f3ad6831db1e97f59fd"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/pic/1517832848283.png","cae40e3a18e695b7124843af1e9a4f9b"],["/images/pic/1517832856145.png","ac7f93d0db2565099a41aad294cf0dbb"],["/images/pic/1517832864813.png","bbd4a6f72dd771af59d01d0882d75d53"],["/images/pic/1517881008702.png","9f2b0fd8ec2366f807b7123316fff96f"],["/images/pic/1517881089186.png","0a9c3910ab2eebb6c0cf8b80e88d0b43"],["/images/pic/1517897678659.png","c43f71f3a86778c90118b17cf5cb3ad2"],["/images/pic/1517899577055.png","8644f10aacebf8cf32132301c0bc1ec0"],["/images/pic/1517903255025.png","645eba4603339746dabca5abcf22494a"],["/images/pic/1517903693051.png","780f907bc3b02e15652365e4d3bbf289"],["/images/pic/1517904938561.png","5af9ef3287e0df9a57b19dce7917af45"],["/images/pic/1517904967418.png","6ba9d35088bcdb8b0e7bcc9246c068f2"],["/images/pic/1517905466566.png","821254ad3811b750910ba22cb9327729"],["/images/pic/1517906361327.png","82f66856991b8d0628f590e6caeb5468"],["/images/pic/1517906381709.png","128d7ec14d81b2215df1d180aa875ad3"],["/images/pic/1517906414522.png","52d754884df5de44189102c48f14a7a7"],["/images/pic/1517906455278.png","7a6674f99a68d8edb1727ba41231bb64"],["/images/pic/1517907756812.png","9f76802469cc7b443673733ce18aec85"],["/images/pic/1517907826268.png","e90b798dcdec6f201d67bbe0d3ee642f"],["/images/pic/1517908005274.png","973c5d0ed31925b1c3e7d344dba1c418"],["/images/pic/1517908183678.png","e05747385af483f980394d08cf40b96e"],["/images/pic/1517908920314.png","b4f2df3132e1d3414db73d7268d3a70d"],["/images/pic/1517909953592.png","37e3a05d3cbcce65258229f0d15289fe"],["/images/pic/1517910059305.png","2e7b3baacb72e4f243c2ff0e64c34f4a"],["/images/pic/1517910247382.png","13b90409a0804b8be71176db8f2720ac"],["/images/pic/1517910501624.png","aab6f02ea72c2944e1b8ef515334e3f0"],["/images/pic/1517910689440.png","ef58ff8dc97355905ce12eeb27e9aa08"],["/images/pic/1517910943919.png","e05870c6f9f8b627f838770bb2a2b660"],["/images/pic/1517911411583.png","9e5f7d1015e84666685b86015c6dcded"],["/images/pic/1517914491933.png","14c693d1196dd62121b802877c22ad49"],["/images/pic/1517914704364.png","1ec052ff7e9ace314dbb30be385bec90"],["/images/pic/1517914839470.png","ce03721e9452e7182531047118a1f1a6"],["/images/pic/1517916230629.png","5e2a77741b8e85c1199f05115f73ec31"],["/images/pic/1517917585667.png","f3bb715e1dd2d6249379ee472fe5a85e"],["/images/pic/1517917645398.png","4e1a989126ee21ccd1f6e339dac09356"],["/images/pic/1517918396300.png","b5a2e8508356c111f446872be3a50adb"],["/images/pic/1517918432332.png","20572a47e6a8d85d65edbb62158ba122"],["/images/pic/1517999668536.png","9a5bd8094d3fe61ffd404f8d26b2f0ef"],["/images/pic/1517999831428.png","edb77199098b5762d3df775daf02dcdb"],["/images/pic/1518000052986.png","20157aa49ca1098a1bfe27ea84c76240"],["/images/pic/1518000435483.png","93c62f4bb8f36f2f576e93e35976d966"],["/images/pic/1518000628221.png","ec30714ad26b3c140e3eb57b946d3807"],["/images/pic/1518000657881.png","bd79ec47bd1c02ae49ea89b0c320d858"],["/images/pic/1518000772849.png","80f04e6e4e5075be6875c9eab5b9d895"],["/images/pic/1518001835790.png","a3ecb79dd2653d18949dfd2a52b6ea22"],["/images/pic/1518001892244.png","cf9871589321ac24496d7c87409b4d63"],["/images/pic/1518002189244.png","f278eb4780bf92747572cb4150f7bf7f"],["/images/pic/1518002420602.png","9c707e619f2543683313418a67c8e1bb"],["/images/pic/1518002764282.png","219fbd4a856c5c40477452fe3cc9781d"],["/images/pic/1518002945827.png","e23d85a3e92e107e6e4aec5931221eff"],["/images/pic/1518003283829.png","549f8bec6e26ca229d38f757fd25f478"],["/images/pic/1518003482162.png","ae2db5828ef0e090b1a1123fcbfe2dec"],["/images/pic/1518005624297.png","f77884c48bdf76b9063ef0309504b952"],["/images/pic/1518005661737.png","08d803745da09d6e3ea4fa24778cf476"],["/images/pic/1518005815863.png","7ec2cd6a07faee02b5f82db519fc8693"],["/images/pic/1518056788911.png","0e0506a896657d505344b6e2b22a6d17"],["/images/pic/1518060345291.png","8cd2619a23f7b8c72862ed9996956e84"],["/images/pic/1518060385429.png","8a1f3cb480ad3d8c6c7a76200adfe7a2"],["/images/pic/1518062192045.png","0ed2c44ed0615b3084277a842d78460e"],["/images/pic/1518062270239.png","1ee3f382b7019095e0f4a7abee1b0b4b"],["/images/pic/1518062334507.png","cc123a4759d9a4de4a536ec165e8382b"],["/images/pic/1518415753810.png","79586ffa28dd0bcecd808ef4e2c5f20d"],["/images/pic/1518417153628.png","a54b5f7c91377bc35b91457268aba480"],["/images/pic/1518417184765.png","c6ba79fe4795983fb0c8fbac9265369b"],["/images/pic/1518418817675.png","471ccc2d0b54f5cee8b6b816a70fcddb"],["/images/pic/1518419021016.png","12a3e1b12fd9b681deb5040d7ebe30a6"],["/images/pic/1518419154888.png","01a9a74ffa61b50cfa6f148634989cd0"],["/images/pic/1518425286828.png","e9a4a0c9c3b92948da7afff8be566eb2"],["/images/pic/1518437670743.png","b53cd90b86c774ecaad74dcb85b43fe3"],["/images/pic/1518437770607.png","473809f89e10ee96ec50b22a885bc6de"],["/images/pic/1518441593456.png","02bc3c32843c652289fd2da4bf734ef1"],["/images/pic/1518788285092.png","93a3e00a744b87b3c2d50131f889da77"],["/images/pic/1519551713620.png","cca1c593e307e91e0ec7a12706ee175e"],["/images/pic/1519770178904.png","055dcf52195c83be9348268f5592fdc9"],["/images/pic/1519770240912.png","a60988f769148e493ca66c1b2e17d6c4"],["/images/pic/1519770366420.png","d7d69869d6da54282964f65b59609833"],["/images/pic/1519770390411.png","1d660a5f27384bdfa2e6049389de7c1c"],["/images/pic/1519770409343.png","1eecf58672fc88aaebbd074cce26c1ed"],["/images/pic/1520172992067.png","c14e0b820eea6a39407cd2ec94d10d57"],["/images/pic/1520333660070.png","3775c12909144363a1a034c0fe30f495"],["/images/pic/1520334640507.png","cdd6a67f3e642d026aaa3b2e6c06bdb7"],["/images/pic/1520334887199.png","8787d7b3ca4b5d6dc0ba549f9f3a66c9"],["/images/pic/1520401697087.png","b655912a52991e1eb26625eb16b586cf"],["/images/pic/1520417730484.png","7b7918077d446707e18122d39f0c85b0"],["/images/pic/1520561491776.png","b8d776b41a8f8bfc1d7814bbb5db2395"],["/images/pic/1520561776190.png","478a35458ea9fb20d380ec4cf2dbe012"],["/images/pic/1520561962003.png","a55c203f078a216b32d80b7dab3f593d"],["/images/pic/1520562190968.png","b6d65aa5314ff21e0630caf6c5b215e9"],["/images/pic/1520562257912.png","6d74733954ab08748dacac600d7d1d6f"],["/images/pic/1520562347986.png","411c1df99b53380e641f2907789c4d08"],["/images/pic/1520562555602.png","b71013ea993badec820626b13ac72e59"],["/images/pic/1520563500419.png","c1f6b595a74d85ead4e8555394b20138"],["/images/pic/1520578541610.png","4ba79c5cc6fccc0c310a03eaa23e05a9"],["/images/pic/1520578706431.png","6e19a2f5c69b90c8b71e57264172ae77"],["/images/pic/1520579280156.png","264b9928816f60743c696a306fa8c5b8"],["/images/pic/1520854447634.png","801783d90741f6f8a58f134f6ea45b53"],["/images/pic/1521028554224.png","d8455f8ec499d61924c7d6025d46e934"],["/images/pic/1521029406409.png","b03932834713a2608f54f0052731b4c5"],["/images/pic/1521030220609.png","720625a188a6eea53d5d702d8a4a6cfc"],["/images/pic/1521030801016.png","3dd6d556454579833c87332e4b6d3355"],["/images/pic/1521030846112.png","39b800923e8fca67e04d63e79494a8ef"],["/images/pic/1521031252143.png","0da2765ef5d43b1c8489cf92a79435ad"],["/images/pic/1521031260012.png","e7a389aa2a4024673aa78ee20ca59e7c"],["/images/pic/1521031276820.png","9d8689ff5d22a595df024cd939d9303d"],["/images/pic/1521032316413.png","95b37ccc176d892b423f174751452a26"],["/images/pic/1521110508364.png","db11eebc144e8a2b3036f7b61b3990b7"],["/images/pic/1521197986340.png","e8af92e945576340552132e849358cd9"],["/images/pic/1521198979279.png","3ecac55d7d979e35671cf5dd9eb13036"],["/images/pic/1521199136403.png","c2db99a63331cee4529780c6c432466d"],["/images/pic/1521199747649.png","fa513c9668fa65b90c7fb0e66e80e9d0"],["/images/pic/1521200744160.png","2f07fca91bd519de4d364c47bce8eb6e"],["/images/pic/1521201535368.png","51c0b2b8ba18a2880810270fac6ee341"],["/images/pic/1521202175452.png","4be960b8a01527a1f5185bbef2a520c3"],["/images/pic/1521202854449.png","388dcf1976309392f308c9d47862052f"],["/images/pic/1521203418017.png","d10db6d3e4f344f07c804b25ce5c09ba"],["/images/pic/1521203604884.png","daf76d736c68a60ffb73ff956bac0953"],["/images/pic/1521203706528.png","81e2163036bef9fc6b844c937c9aa623"],["/images/pic/1521204321265.png","36453793f46b01191607ba90508049b2"],["/images/pic/1521204358542.png","225041c383d13768b9a206a707238604"],["/images/pic/1521359779307.png","c3c5d8122f61d6e304c2aff9b42f17fe"],["/images/pic/1521360766737.png","d149bc206cab3248df57107b38cdc9e5"],["/images/pic/1521364528917.png","9910ad5843ccec6bb5151385adc9bd46"],["/images/pic/1521364615067.png","e835ce366e9f323fb6d6a8f8cb5f9ddc"],["/images/pic/1521364742861.png","f027282038d6adcd234cfdf42bd1022f"],["/images/pic/1521364874294.png","50c02b7780e60947aa04f7ef61751a84"],["/images/pic/1521364975988.png","6b99b5e23086e6bf28a21bb1d8ef2a31"],["/images/pic/1521365123368.png","5a60620b079c6a21bd3882c312bcb4a7"],["/images/pic/1521365228927.png","9bb116256be6493271be40e654df7f85"],["/images/pic/1521365447851.png","42f6b07cfa50a438ff4ed9e91c002104"],["/images/pic/1521365542793.png","f9c6471c9054a35da0edc309c689773d"],["/images/pic/1521367448035.png","55ef87cc21e329aba4c6c1c94c72b111"],["/images/pic/1521367486314.png","275208d955fa4695893b7c780a69402c"],["/images/pic/1521367529136.png","bf50ee50e410ec59ae316f6adad1a2ed"],["/images/pic/1521447853474.png","e8bbaa5759c0804f6609bed3227e0544"],["/images/pic/1522226044831.png","eedfa0f6d9112c103f0227f092daad87"],["/images/pic/1522226125046.png","d88e6a34af29cedcd099cf0b54c142f1"],["/images/pic/1522226144729.png","0806f25d98c9fa976fe70d55538fa9e3"],["/images/pic/1522226330889.png","b6811f42fde330d8e08bc105b9191ba1"],["/images/pic/1522226359159.png","4e4a6c7f607b1b6b958dfc81e061be2e"],["/images/pic/1522226384802.png","864c2c821e10eab1a7f8f9548610e80c"],["/images/pic/1522229923906.png","e7ac06fae786c0e8ac5fff73380b07fb"],["/images/pic/1522229985713.png","9dbcd1ec9ca50e7599774b227befc025"],["/images/pic/1522230012518.png","0e3299c2e29b00bce306831a5a5b4088"],["/images/pic/1522233669462.png","b1fccf5a19e0a6c1d057b077e282fe8f"],["/images/pic/1522233774296.png","15248278da2b92162c4112789bdf1206"],["/images/pic/1522235081858.png","b18b9c7979c2273c29187b3f5f3bf9b2"],["/images/pic/1522235141530.png","b23e0029cff600c942d2bbb680d65b7b"],["/images/pic/1522235199701.png","118976461ec3c621e866d05ac9e41b43"],["/images/pic/1522286587003.png","73efd938f5e6e1244f0ca42349e586be"],["/images/pic/1522286592067.png","97a25f6ee7bae413d87b6f39692407d0"],["/images/pic/1522286612115.png","d785a0bd1e9a959132097a382b03fdf3"],["/images/pic/1522288548598.png","fcb528eb5a3ed048768cd8652b5acfdb"],["/images/pic/1522462558196.png","47147cce379a3f5acafc7f0bf72d609e"],["/images/pic/1522475552140.png","6cfeb5f521d563ec059c81b9cd1f294e"],["/images/pic/1522475941449.png","ebfa06be234733a94b14617a7f8f0cc7"],["/images/pic/1522479904293.png","12f565dbf65535696cd10558954e7614"],["/images/pic/1522479919018.png","87dda30114638e91d90559ff1b3f1ffd"],["/images/pic/1522554500524.png","739a0450cd662660d481d68db4a4a55b"],["/images/pic/1522565475437.png","6dc07d7318df63af8f02549a9ec5a123"],["/images/pic/1522565510560.png","cf0f61576a3c82fa9e568c0a764dd290"],["/images/pic/1522565671156.png","7af42060092ac05280be920563781364"],["/images/pic/1522565780968.png","c40ba217e4f30dcaf0f73ac05f6e86a6"],["/images/pic/1522565934574.png","560c9dd537282840b4d88c1459d59f31"],["/images/pic/1522566224947.png","7ceeff5731d90d165e0127822adb5a51"],["/images/pic/1522566332617.png","392cbf8bf884ee189260b38dfad0fc23"],["/images/pic/1522566423547.png","7fa4199f1843b96902d4ef5eb5962146"],["/images/pic/1522566471874.png","a0e0dd4b9a5831db4578333b285cc193"],["/images/pic/1522566652130.png","a00d81d8b564c670930d57bc93507b6d"],["/images/pic/1522566755135.png","d25c7f62cf63e743d2864b326a00ac16"],["/images/pic/1522566816668.png","4784d7a5899e819171759465fc864ea5"],["/images/pic/1522566852383.png","db9cbfae12ad9c2d2d42f0b3219d9745"],["/images/pic/1522566971679.png","4e7e591cc34e25b63500c3d19461ea81"],["/images/pic/1522567061127.png","4b9c5bb46dce45e19407de780dfeba8a"],["/images/pic/1522567747363.png","4c489874d87c3c3058c081f452897983"],["/images/pic/1522567771389.png","777e3b943940b017dcfb43025654c017"],["/images/pic/1522567929329.png","df92fce231af621dcdedab2ff19e0de5"],["/images/pic/1522568054111.png","9dfb1f24b421706f5db323231b34a96c"],["/images/pic/1522568117504.png","44de31174af686341f7d6a14781b2365"],["/images/pic/1522568158299.png","09c0dd68912fdfa164bf3ccaaccc48fd"],["/images/pic/1522568423109.png","8cc0e031c1641819faaee006d186e4b9"],["/images/pic/1522568515588.png","d4f885cfd898795d535583ba84097cc5"],["/images/pic/1522568555274.png","d05345755572d06b0f938e745a4c43c0"],["/images/pic/1522568637696.png","4bf5e03fbc56e7da2d467e9085dc26e5"],["/images/pic/1522568789006.png","5cf5a13f8febb4672452c56df0d4ea32"],["/images/pic/1522568882733.png","a6b4a8eead405f344c7118dd65b42f3a"],["/images/pic/1522569046865.png","53496d98981877aacc2bb7befdac2781"],["/images/pic/1522569138306.png","8b0b691572c2b276f7a2c8c70996be1c"],["/images/pic/1522569320639.png","c9d8e211d7dc39cff19ddd53fe8ecc76"],["/images/pic/1522570122062.png","6236bb79fead2bef5faf6baa0564fbcd"],["/images/pic/1522570213239.png","cc0884280d4775c7bf8a7a541a82ae48"],["/images/pic/1522570243405.png","ad98ec37a9edcf518d24a8bb5a331cff"],["/images/pic/1522570343484.png","f2b318cc642cf604e17d6a93eea1978d"],["/images/pic/1522570558153.png","4e1534c8518c8f6ed2a485e8511efca0"],["/images/pic/1522570781081.png","0d4cac211dfd11a0744d489763943274"],["/images/pic/1522570803713.png","7ba6e1c0f2bbf4c0ee4c99c89105d4e0"],["/images/pic/1522572015599.png","7ecab63244016b0ad4872b26c3937ad0"],["/images/pic/1522572105361.png","3de08fab04b70c1ac5521937d60cf2de"],["/images/pic/1522582112436.png","35fe377f30417cdb1e0c073b1198e0c6"],["/images/pic/1522582202318.png","449c78ed529bf7a21653f5b0fb5b806c"],["/images/pic/1522582883553.png","d38d8d68bbcf60f50d0e4a06bdbb3805"],["/images/pic/1523460990404.png","3a5a7f7c5585d7db52a7b658b1c7e15b"],["/images/pic/1523461667370.png","7afd738c54a4b7c4b765b332e66ae05a"],["/images/pic/1523462311983.png","2ce8487b99c79120e934290b595d6d40"],["/images/pic/1523462457629.png","06239f8fee21bc1a582e907f0d30636f"],["/images/pic/1523462539384.png","212eb30a204a8f701674158f5c9a9d1b"],["/images/pic/1523462595563.png","b6775b2c79c4c24745fa4113900a20c9"],["/images/pic/1523704276438.png","48b6d0c0fbfd32589809a44ce08a086a"],["/images/pic/1523705227883.png","a47fd66c17cb42a59a7cc7132f741357"],["/images/pic/1523705296687.png","6111f0be5178215f3346a385ebe6cac4"],["/images/pic/1523705434825.png","804901ef2a9804160b53cfb1bb607d1a"],["/images/pic/1523705939209.png","68a7bf43bf7277c2c0a74362e1e20f2d"],["/images/pic/1523706299470.png","10c0fa616744504bcb03d3889f2a0bc6"],["/images/pic/1523707070775.png","e2be9cadaba1542431540e058afbcea3"],["/images/pic/1523707076589.png","0358a11fbdc3938f94a1535a6c676988"],["/images/pic/1523707138486.png","630d9ab8f26c352c695db3298e7b2a14"],["/images/pic/1523707268329.png","2ee4154b4d28169efa367a4456506777"],["/images/pic/1523707608020.png","bf31b61ef0c00866ad0809e09bc98277"],["/images/pic/1523707623505.png","964dda44cd036074c11e0a8f9d50d29a"],["/images/pic/1523707636904.png","702029b844b82157ec201c920f0ec080"],["/images/pic/1523707965307.png","9478bd0c15d2ecda18e6950b7f51e214"],["/images/pic/1523708011331.png","4b1cd55feaa644d9cf3390f424a82c15"],["/images/pic/1523708652088.png","85689715e57dfa3601cb3c9f5414ae5d"],["/images/pic/1523758255129.png","51eb6443e4561729f02830953b745e55"],["/images/pic/1523759094615.png","8cdfa30e790ae30ac486a4dd952d573b"],["/images/pic/1523772644257.png","c3161e5ea1918a2d926174e28406d684"],["/images/pic/1523772745510.png","d3093570e016369f4e14c2def5b9f324"],["/images/pic/1523772783416.png","f1a8aeccb21ca40fc2616be530751cfc"],["/images/pic/1523772803669.png","9675fd6090905619f0ccf7303e0fe2de"],["/images/pic/1523772831815.png","da6ba567498bc17db1484905137688a8"],["/images/pic/1523773942816.png","fb459a9c2c6838bbfc60a39577354626"],["/images/pic/1523778992606.png","ff99db9a28a6798d5deb6cfbe81e1f0d"],["/images/pic/1523779128706.png","93119a411346ce01b9e844b6878939d4"],["/images/pic/1523779465711.png","8380f664cf1eb1854616132d2106d085"],["/images/pic/1523784968385.png","d233a7af2bcb1e0f06c507252939ae8d"],["/images/pic/1523784992857.png","a6c65f20844602d834fc5545650aedaf"],["/images/pic/1523785038227.png","5ef7396171396ff1ceacb3f0fbd39020"],["/images/pic/2335_1.png","9f760961e1a8f099a5d1544cd3a74b78"],["/images/pic/2339_0.png","77cef2126c2807979a03fc6071068813"],["/images/pic/2341_0.png","468f6a4d79537c07aa29ddee2c5ac351"],["/images/pic/2349_1.png","0918e4f1472529957a971bc04c6e14f2"],["/images/pic/2351_1.png","d526f39fcf93b455bd8792460119a612"],["/images/pic/2353_0.png","0b0b92c7fc0759855768a1d648109b1a"],["/images/pic/2357_1.png","f832eb9219d4fa7d71e2ec5f20bd532d"],["/images/pic/2359_1.png","16351eda32d16721ea9c4d1c6fef6003"],["/images/pic/2361_1.png","a364a83bd10d8976f9fb322f0b72d295"],["/images/pic/2365_0.png","a5f1535ebd10fe4958ed6ed1e2177080"],["/images/pic/2367_0.png","fe86ffbc1755e088205bf212628d9697"],["/images/pic/2369_0.png","5fba9beab397b48bf84cd577472e6624"],["/images/pic/2371_0.png","9a25294d9d094df0c74c16baaf1bc3ea"],["/images/pic/2373_0.png","b915f7955160c1816bb0e1fde026ea1d"],["/images/pic/2377_0.png","31f3bce28d3d6bba30c00a33dc7e877c"],["/images/pic/2379_0.png","b97e8cd0cd23bfb59b80141d339b841e"],["/images/pic/2381_0.png","7e0bd14e823323d05d739c8ce8a62a87"],["/images/pic/2383_0.png","dc0fbb9c08247d62e734c7768abb9cab"],["/images/pic/2387_0.png","e80de244a585a517cc4d837795893dad"],["/images/pic/2389_0.png","098276fcf4214aa4610ab7559eacd36f"],["/images/pic/2391_0.png","9ea7f93cc231d98464229e5eb5e1e6d5"],["/images/pic/2393_0.png","2992ce90b20f95c2d4f64e60469d7dd3"],["/images/pic/2395_0.png","3531e4b9e19f73f6868256b5380182f1"],["/images/pic/2401_0.png","6e4b4f77200e2b0fd7af16080e78b9a9"],["/images/pic/2403_0.png","50f5d968e3eda3a7be009ab58a54dfc1"],["/images/pic/2405_0.png","b2ddc74637857c05621f343a6047e7bb"],["/images/pic/2407_0.png","b0ec5ea7b3ce2c3cc62a11edf246cfce"],["/images/pic/2409_0.png","dcaea77ce749ae81a2b16f32112ff73d"],["/images/pic/2411_0.png","35e532a9910a7cbb87c6e8e12e8eaf2f"],["/images/pic/2417_1.png","97e1cb56d981946b1c47c4f2ec15b9ce"],["/images/pic/QQ拼音截图未命名.png","5a63e1988548ba1c99994b93e7446b36"],["/images/pic/屏幕快照 2018-03-12 23.39.52.png","ff9c256f124661822bd2b70fbd09a00e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","13eacd08bd4340f9f601b6c153f54267"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/src/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/src/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","ff0d7db2ae445ecbe05873c54f365e8a"],["/lib/canvas-nest/README.html","cf85aebc47077197415cd8c884a06319"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6a25aa75d393e5e63b30f0c2277c9ade"],["/page/3/index.html","33f8f72a2604c0544d1abe2057afb017"],["/style.css","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","962f09600b319f8c114cebf993463e10"],["/tags/APP/index.html","403d1b9449bf416ac5331b0293aedf88"],["/tags/Android/index.html","8f2c59811676be3d65b9931be2ed07a0"],["/tags/JavaScript/index.html","70c2e7cf5054ca48c1b3e8bd1da93451"],["/tags/Linux/index.html","193535b9a9c6f446d3afb9ed9c66daf0"],["/tags/LoadRunner/index.html","e47b3f42fe1c6d93658f2e66b43058d8"],["/tags/PHP/index.html","99490dd7cedacf7591702258375f21eb"],["/tags/QTP/index.html","636a11b6e43b4e613f1be1107981a6a9"],["/tags/SQl/index.html","1f18ab42bbe962878cf64f6106e3eead"],["/tags/UFT/index.html","3f28d321b93bf91ff681f9d0891b4143"],["/tags/Web/index.html","733f2873be77f9e8a1f968eec788c078"],["/tags/css/index.html","2ddb36537382e94d0bebbfed7edc24dd"],["/tags/index.html","a206237b2c22e7b18407bc40a6134acc"],["/tags/markdown/index.html","5c548034388ab7b1d3807b3778f1b9fc"],["/tags/python/index.html","9616c1dd65ed3f177d6f6bb5a1ae3437"],["/tags/test/index.html","7bdae6e5863b9411bdb9233d8a9dee68"],["/tags/tool/index.html","54c60910c6482451cb1d00fabc93300d"],["/tags/接口/index.html","a74a5cdcf36b9a654cf1d3c7b35489bd"],["/tags/数据库/index.html","7e4308b39dbdf66ff5f042f1dbfb96a6"],["/tags/自动化/index.html","fc772aba61222d776c8156619c827ec0"]];
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
