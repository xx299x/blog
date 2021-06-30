// an example to create a new mapping `ctrl-y`
mapkey('<Ctrl-y>', 'Show me the money', function() {
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});
// mapkey('gd','打开下载',function() {
//     window.open("extension://klibmapgcnoakgokdhnfhlngdphiiinp/ui/index.htm");
// });
//将zv与v互换
//
//unmap('v') 
//map('v','zv');
//map('zv','v');
map('cr','cS');
map("a","'");
// mapkey('cr', '#12Open Chrome Downloads', function() {

//             scrollNodes = null;
//             initScrollIndex();
//             if (scrollNodes.length > 0) {
//                 var scrollNode = scrollNodes[scrollIndex];
//                 _highlightElement(scrollNode);

// }}
// );
// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
//map('gt', 'T');

// an example to remove mapkey `Ctrl-i`
//unmap('<Ctrl-i>');

  
//禁用必应，com谷歌,duckduckgo,youtube
removeSearchAliasX('w');
unmap('ow');
removeSearchAliasX('g');
unmap('og');
removeSearchAliasX('d');
unmap('od');
removeSearchAliasX('y');
unmap('oy');
// removeSearchAliasX('b');
// unmap('ob');
//END
//下载管理
mapkey('gd', '#12Open Chrome Downloads', function() {
tabOpenLink("extension://mciiogijehkdemklbdcbfkefimifhecn/ui/index.htm")}
)
//
addSearchAliasX('g', 'Hong Kong',  'https://www.google.com.hk/search?num=30&newwindow=1&ei=&q=');
addSearchAliasX('gy', 'Hong Kong',  'https://www.google.com.hk/search?num=30&newwindow=1&tbs=qdr:y&ei=&q=');
addSearchAliasX('gm', 'Hong Kong',  'https://www.google.com.hk/search?num=30&newwindow=1&tbs=qdr:m&ei=&q=');
addSearchAliasX('gw', 'Hong Kong',  'https://www.google.com.hk/search?num=30&newwindow=1&tbs=qdr:m&ei=&q=');
addSearchAliasX('gd', 'Hong Kong',  'https://www.google.com.hk/search?num=30&newwindow=1&tbs=qdr:d&ei=&q=');
mapkey('og', '#8Open  Hong Kong Google', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "g"});
});

// bug
addSearchAliasX('u', 'bug search', 'https://www.google.com.hk/search?num=30&newwindow=1&ei=&q=site:stackoverflow.com OR site:segmentfault.com OR site:v2ex.com OR site:cnblogs.com OR site:juejin.cn ');
mapkey('ou','#8Open  bug', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "u"});
});


addSearchAliasX('pj', '52PJ search', 'https://www.google.com.hk/search?num=30&newwindow=1&ei=&q=site:52pojie.cn');
mapkey('opj', '#8Open  52PJ', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "pj"});
});

addSearchAliasX('zh', 'ZhiHu search', 'https://www.zhihu.com/search?type=content&q=');
mapkey('ozh', '#8Open  ZhiHu', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "zh"});
});
//淘宝
  
addSearchAliasX('tb', 'TaoBao search', 'https://s.taobao.com/search?q=');
mapkey('otb', '#8Open  Taobao', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "tb"});
});
//人人影视
  
addSearchAliasX('rr', 'RenRen search', 'http://www.91dict.com/words?w=');
mapkey('orr', '#8Open  RenRen movie', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "rr"});
});
  
//forvo
addSearchAliasX('fo', 'Forvo search', 'https://zh.forvo.com/search/');
mapkey('ofo', '#8Open  Forvo', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "fo"});
});

//v2ex
addSearchAliasX('v2', 'V2EX search', 'https://www.google.com.hk/search?q=site:v2ex.com/t%20');
mapkey('ov2', '#8Open  V2EX', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "v2"});
});
  
//cmd
addSearchAliasX('cm', 'Cmd search', 'http://www.bathome.net/s/tool/?key=');
mapkey('ocm', '#8Open  Cmd', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "cm"});
});
  
//Python
addSearchAliasX('py', 'Python search', 'https://docs.python.org/3/search.html?q=');
mapkey('opy', '#8Open  Python', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "py"});
});

//Selenium
addSearchAliasX('se', 'Selenium search', 'https://selenium-python.readthedocs.io/search.html?q=');
mapkey('ose', '#8Open  Selenium', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "se"});
});

  
//Wiki 
  
addSearchAliasX('wi', 'Wiki pedia', 'https://zh.wikipedia.org/wiki/');
mapkey('owi', '#8Open Wiki pedia', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "wi"});
});
  
//w3xue
addSearchAliasX('w3', 'W3XUE search', 'https://www.w3xue.com/search.aspx?wd=');
mapkey('ow3', '#8Open  W3XUE', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "w3"});
});
  
//runoob
addSearchAliasX('ru', 'Runoob search', 'https://www.runoob.com/?s=');
mapkey('oru', '#8Open  Runoob', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ru"});
});

//变量命名
addSearchAliasX('va', 'Variable search', 'https://unbug.github.io/codelf/#');
mapkey('ova', '#8Open  Variable', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "va"});
});


//变量命名
addSearchAliasX('li', 'Linux Command search', 'http://man.linuxde.net/');
mapkey('oli', '#8Open  Linux Command', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "li"});
});
  
//WeChat
addSearchAliasX('wx', 'WeChat search', 'https://weixin.sogou.com/weixin?type=2&query=');
mapkey('owx', '#8Open  WeChat', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "wx"});
});
  
//微博
addSearchAliasX('wb', 'WeiBo search', 'https://s.weibo.com/weibo/');
mapkey('owb', '#8Open  WeiBo', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "wb"});
});

//GitHub
addSearchAliasX('hu', 'GitHub search', 'https://github.com/search?q=');
mapkey('ohu', '#8Open  GitHub', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "hu"});
});

//gif 动图
addSearchAliasX('dt', 'GIF search', 'https://www.soogif.com/search/1/');
mapkey('odt', '#8Open  GIF', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "dt"});
});

//逗比图片
addSearchAliasX('dq', '逗比图片 search', 'http://www.dbbqb.com/s?w=');
mapkey('odq', '#8Open  逗比图片', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "dq"});
});

//用药助手
addSearchAliasX('yy', '用药助手 search', 'http://drugs.dxy.cn/search/drug.htm?keyword=');
mapkey('oyy', '#8Open  用药助手', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yy"});
});
  
//查企业
addSearchAliasX('qy', '查企业 search', 'https://www.qcc.com/web/search?key=');
mapkey('oqy', '#8Open  查企业', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "qy"});
});
  
  
//w3cscool
addSearchAliasX('sc', 'W3cSchool search', 'https://www.w3cschool.cn/search?w=');
mapkey('osc', '#8Open  W3cSchool', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "sc"});
});
  

  
//欧路词典
addSearchAliasX('ol', '欧路词典 search', 'https://dict.eudic.net/dicts/en/');
mapkey('ool', '#8Open  欧路词典', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ol"});
});
  
//Tldr
addSearchAliasX('tl', 'tldr search', 'https://tldr.ostera.io/');
mapkey('otl', '#8Open  tldr', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "tl"});
});

  
//bilibili
addSearchAliasX('ll', 'bilibili search', 'https://search.bilibili.com/all?keyword=');
mapkey('oll', '#8Open  bilibili', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ll"});
});
//wikihow-zh
addSearchAliasX('whz', 'wikihow search', 'https://zh.wikihow.com/wikiHowTo?search=');
mapkey('owhz', '#8Open  wikihow', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "whz"});
});
//Z-Library 
addSearchAliasX('zl', 'Z-Library  search', 'https://b-ok.cc/s/?q=');
mapkey('ozl', '#8Open  Z-Library', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "zl"});
});
//SEO中国站长
addSearchAliasX('zz', 'Chinaz search', 'https://seo.chinaz.com/?q=');
mapkey('ozz', '#8Open  Chinaz', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "zz"});
});

//wikihow
addSearchAliasX('whe', 'wikihow search', 'https://www.wikihow.com/wikiHowTo?search=');
mapkey('owhe', '#8Open  wikihow', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "whe"});
});

//youtube
addSearchAliasX('yu', 'Youtube search', 'https://www.youtube.com/results?search_query=');
mapkey('oyu', '#8Open  Youtube', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yu"});
});

//youku
addSearchAliasX('yk', 'YouKu search', 'https://so.youku.com/search_video/q_');
mapkey('oyk', '#8Open  youku', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yk"});
});
  
//语法网
addSearchAliasX('yf', '英语语法网 search', 'https://www.google.com.hk/search?num=30&newwindow=1&safe=strict&ei=&q=site%3Awww.yygrammar.com+');
mapkey('oyf', '#8Open  英语语法网', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yf"});
});

//emacs论坛
addSearchAliasX('em', 'emacs community search', 'https://emacs-china.org/search?q=');
mapkey('oem', '#8Open  emacs community', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "em"});
});

//chocolatey
addSearchAliasX('ch', 'Chocolatey community search', 'https://chocolatey.org/packages?q=');
mapkey('och', '#8Open  Chocolatey community', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ch"});
});

//网盘
addSearchAliasX('wp', 'WanPan elf search', 'https://www.yunpanjingling.com/search/');
mapkey('owp', '#8Open  WanPan elf', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "wp"});
});

//豆瓣
addSearchAliasX('db', 'DouBan elf search', 'https://www.douban.com/search?q=');
mapkey('odb', '#8Open  DouBan', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "db"});
});


//R文档
addSearchAliasX('rd', 'R document search', 'https://www.google.com.hk/search?q=site:www.rdocumentation.org ');
mapkey('ord', '#8Open  R document', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "rd"});
});
//有道
addSearchAliasX('yd', 'YouDao dictionary', 'http://dict.youdao.com/m/search?q=');
mapkey('oyd', '#8Open  YouDao dictionary', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yd"});
});
// 词不离句
addSearchAliasX('cj', '词句 document search', 'http://www.bj3530979798.com/sr.jsp?skeyword=');
mapkey('ocj', '#8Open  词句 document', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "cj"});
});
// 搜索头条
addSearchAliasX('to', '头条 search', 'https://www.toutiao.com/search/?keyword=');
mapkey('oto', '#8Open  头条', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "to"});
});

// 搜索twitter
addSearchAliasX('tt', 'twitter search', 'https://twitter.com/search?q=');
mapkey('ott', '#8Open  twitter', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "tt"});
});

// Google cache
addSearchAliasX('ca', 'Google cache search', 'http://webcache.googleusercontent.com/search?q=cache:');
mapkey('oca', '#8Open  Google cache', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ca"});
});
// Google search
addSearchAliasX('rg', 'emacs document search', 'https://www.google.com.hk/search?q=site:www.gnu.org+OR+site:orgmode.org ');
mapkey('org', '#8Open  emacs document', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "rg"});
});
// 视频解析
addSearchAliasX('vi', 'VIP解析 search', 'http://jx.598110.com/?url=');
mapkey('ovi', '#8Open  VIP解析 document', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "vi"});
});
// 少数派
addSearchAliasX('ss', '少数派搜索 search', 'https://www.google.com.hk/search?q=site:sspai.com ');
mapkey('oss', '#8Open  少数派搜索 document', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ss"});
});

// Boss直聘
addSearchAliasX('os', 'Boss直聘 search', 'https://www.zhipin.com/c101210100/ka=sel-city-101210100&/?query=');
mapkey('oos', '#8Open Boss直聘搜索 ', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "os"});
});

// anki
addSearchAliasX('an', 'Anki search', 'https://www.google.com.hk/search?q=site:ankiweb.net ');
mapkey('oan', '#8Open  Anki Deck', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "an"});
});
// anki
addSearchAliasX('la', '恋爱话术 search', 'http://dialog.360lyq.com/index.html#/search?text=');
mapkey('ola', '#8Open  恋爱话术 Deck', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "la"});
});

addSearchAliasX('wj', '问卷星 search', 'https://www.google.com.hk/search?q=site:wjx.cn ');
mapkey('owj', '#8Open  问卷星 Deck', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "wj"});
});

addSearchAliasX('do', 'dogedoge search', 'https://www.dogedoge.com/results?q=');
mapkey('odo', '#8Open  dogedoge Deck', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'do'});
});

// addSearchAliasX('b', 'dogedoge search', 'https://www.baidu.com/s?wd=');
// mapkey('ob', '#8Open  dogedoge Deck', function() {
//     Front.openOmnibar({type: "SearchEngine", extra: 'b'});
// });

addSearchAliasX('ph', 'phrase search', 'https://www.google.com.hk/search?q=site:www.ldoceonline.com OR site:www.macmillandictionary.com OR site:thefreedictionary.com ');
mapkey('oph', '#8phrase', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ph"});
});

addSearchAliasX('df', 'Thefreedictionary', 'https://idioms.thefreedictionary.com/ ');
mapkey('odf', '#8phrase', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'df'});
});

addSearchAliasX('dl', '大力搜索','https://www.dalipan.com/search?keyword=');
mapkey('odl', '#8Open 大力搜索', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'dl'});
});

addSearchAliasX('zb', '真不卡影院','https://www.zhenbuka.com/vodsearch/-------------/?wd=');
mapkey('ozb', '#8Open 真不卡影院', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'zb'});
});


//问医生
addSearchAliasX('ys', '问医生','https://www.google.com.hk/search?q=site:haodf.com OR site:youlai.cn OR site:dxy.com ');
mapkey('oys', '#8Open 问医生', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'ys'});
});

//ahk
addSearchAliasX('ah', 'ahk','https://www.google.com.hk/search?q=site:ahkcn.github.io OR site:wyagd001.github.io ');
mapkey('oah', '#8Open 问医生', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'ah'});
});

//掘金
addSearchAliasX('jj', '掘金','https://www.google.com.hk/search?q=site:juejin.cn ');
mapkey('ojj', '#8Open 掘金', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'jj'});
});

//单词比较不同
addSearchAliasX('di', 'diff','https://www.google.com.hk/search?q=site:wikidiff.com ');
mapkey('odi', '#8Open 单词比较不同', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'jj'});
});
//谷歌扩展插件
addSearchAliasX('eg', '谷歌扩展','https://chrome.google.com/webstore/search/');
mapkey('oeg', '#8Open 谷歌扩展', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'eg'});
});
//Micrsoft 插件
addSearchAliasX('ee', 'Microsoft插件','https://www.google.com.hk/search?q=site:wikidiff.com ');
mapkey('oee', '#8Open Microsoft插件 ', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'ee'});
});
//Micrsoft 插件
addSearchAliasX('dx', '图书馆搜索','http://book.ly.superlib.net/search?sw=');
mapkey('odx', '#8Open 图书馆搜索 ', function() {
    Front.openOmnibar({type: "SearchEngine", extra: 'dx'});
});

  
//Python
addSearchAliasX('pd', 'pandas search', 'https://pandas.pydata.org/pandas-docs/stable/search.html?q=');
mapkey('opd', '#8Open  pandas', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "pd"});
});

//Ai搜索
addSearchAliasX('sm', 'magi search', 'https://magi.com/search?q=');
mapkey('osm', '#8Open  Ai 搜索', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "sm"});
});

//小工具
addSearchAliasX('te', '在线工具大全 search', 'https://www.google.com.hk/search?q=www.tooleyes.com ');
mapkey('ote', '#8Open  在线工具 搜索', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "te"});
});


////////// 翻译设置
/* Front.registerInlineQuery({
        url: "https://api.shanbay.com/bdc/search/?word=",
        parseResult: function(res) {
            try {
                res = JSON.parse(res.text);
                var exp = res.msg;
                if (res.data.definition) {
                    var pronunciations = [];
                    for (var reg in res.data.pronunciations) {
                        pronunciations.push(`<div>[${reg}] ${res.data.pronunciations[reg]}</div>`);
                        // pronunciations.push(`<div><audio src="${res.data[reg+'_audio']}" controls></audio></div>`);
                    }
                    var definition = res.data.definition.split("\n").map(function(d) {
                        return `<li>${d}</li>`;
                    }).join("");
                    exp = `${pronunciations.join("")}<ul>${definition}</ul>`;
                }
                if (res.data.en_definitions) {
                    exp += "<hr/>";
                    for (var lex in res.data.en_definitions) {
                        var sense = res.data.en_definitions[lex].map(function(s) {
                            return `<li>${s}</li>`;
                        }).join("");
                        exp += `<div>${lex}</div><ul>${sense}</ul>`;
                    }
                }
                return exp;
            } catch (e) {
                return "";
            }
        }
    }); */
	
Front.registerInlineQuery({
    url: function(q) {
        return `http://dict.youdao.com/w/eng/${q}/#keyfrom=dict2.index`;
    },
    parseResult: function(res) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(res.text, "text/html");
        var collinsResult = doc.querySelector("#collinsResult");
        var authTransToggle = doc.querySelector("#authTransToggle");
        var examplesToggle = doc.querySelector("#examplesToggle");
        if (collinsResult) {
            collinsResult.querySelectorAll("div>span.collinsOrder").forEach(function(span) {
                span.nextElementSibling.prepend(span);
            });
            collinsResult.querySelectorAll("div.examples").forEach(function(div) {
                div.innerHTML = div.innerHTML.replace(/<p/gi, "<span").replace(/<\/p>/gi, "</span>");
            });
            var exp = collinsResult.innerHTML;
            return exp;
        } else if (authTransToggle) {
            authTransToggle.querySelector("div.via.ar").remove();
            return authTransToggle.innerHTML;
        } else if (examplesToggle) {
            return examplesToggle.innerHTML;
        }
    }
});
/////////////END

// set theme
// settings.theme = `
// .sk_theme {
    // font-family: Input Sans Condensed, Charcoal, sans-serif;
    // font-size: 10pt;
    // background: #24272e;
    // color: #abb2bf;
// }
// .sk_theme tbody {
    // color: #fff;
// }
// .sk_theme input {
    // color: #d0d0d0;
// }
// .sk_theme .url {
    // color: #61afef;
// }
// .sk_theme .annotation {
    // color: #56b6c2;
// }
// .sk_theme .omnibar_highlight {
    // color: #528bff;
// }
// .sk_theme .omnibar_timestamp {
    // color: #e5c07b;
// }
// .sk_theme .omnibar_visitcount {
    // color: #98c379;
// }
// .sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    // background: #303030;
// }
// .sk_theme #sk_omnibarSearchResult>ul>li.focused {
    // background: #3e4452;
// }
// #sk_status, #sk_find {
    // font-size: 20pt;
// }`;

settings.theme = `
.sk_theme {
	background: #100a14dd;
	color: #4f97d7;
}
.sk_theme tbody {
	color: #292d;
}
.sk_theme input {
	color: #d9dce0;
}
.sk_theme .url {
	color: #2d9574;
}
.sk_theme .annotation {
	color: #a31db1;
}
.sk_theme .omnibar_highlight {
	color: #333;
	background: #ffff00aa;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
	background: #5d4d7a55;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
	background: #5d4d7aaa;
}
.sk_theme #sk_omnibarSearchResult .omnibar_folder {
	color: #a31db1;
}
`;


settings.hintAlign = "left"
//Hints.characters = "asdfghjklrtyvn"