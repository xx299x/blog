settings.language = "zh-CN";

// an example to create a new mapping `ctrl-y`
mapkey('<Ctrl-y>', 'Show me the money', function() {
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});
//将zv与v互换
//unmap('v') 
//map('v','zv');
//map('zv','v');
  
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
//END

addSearchAliasX('g', 'Hong Kong', 'https://www.google.com.hk/search?num=30&newwindow=1&safe=strict&ei=&q=');
mapkey('og', '#8Open Search with Hong Kong Google', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "g"});
});

addSearchAliasX('pj', '52PJ search', 'https://www.52pojie.cn/search.php?mod=forum&adv=yes&srchtxt=');
mapkey('opj', '#8Open Search with 52PJ', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "pj"});
});

addSearchAliasX('zh', 'ZhiHu search', 'https://www.zhihu.com/search?type=content&q=');
mapkey('ozh', '#8Open Search with ZhiHu', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "zh"});
});
//淘宝
  
addSearchAliasX('tb', 'TaoBao search', 'https://s.taobao.com/search?q=');
mapkey('otb', '#8Open Search with Taobao', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "tb"});
});
//人人影视
  
addSearchAliasX('rr', 'RenRen search', 'http://www.91dict.com/words?w=');
mapkey('orr', '#8Open Open Search with RenRen movie', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "rr"});
});
  
//forvo
addSearchAliasX('fo', 'Forvo search', 'https://zh.forvo.com/search/');
mapkey('ofo', '#8Open Search with Forvo', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "fo"});
});

//v2ex
addSearchAliasX('v2', 'V2EX search', 'https://www.google.com.hk/search?q=site:v2ex.com/t%20');
mapkey('ov2', '#8Open Search with V2EX', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "v2"});
});
  
//cmd
addSearchAliasX('cm', 'Cmd search', 'http://www.bathome.net/s/tool/?key=');
mapkey('ocm', '#8Open Search with Cmd', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "cm"});
});
  
//Python
addSearchAliasX('py', 'Python search', 'https://python3-cookbook.readthedocs.io/zh_CN/latest/search.html?q=');
mapkey('opy', '#8Open Search with Python', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "py"});
});

//Selenium
addSearchAliasX('se', 'Selenium search', 'https://selenium-python-zh.readthedocs.io/en/latest/search.html?q=');
mapkey('ose', '#8Open Search with Selenium', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "se"});
});

//CSDN
addSearchAliasX('cs', 'CSDN search', 'https://so.csdn.net/so/search/s.do?q=');
mapkey('ocs', '#8Open Search with CSDN', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "cs"});
});

  
//Wiki 
  
addSearchAliasX('wi', 'Wiki pedia', 'https://zh.wikipedia.org/wiki/');
mapkey('owi', '#8Open Wiki pedia', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "wi"});
});
  
//w3xue
addSearchAliasX('w3', 'W3XUE search', 'https://www.w3xue.com/search.aspx?wd=');
mapkey('ow3', '#8Open Search with W3XUE', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "w3"});
});
  
//runoob
addSearchAliasX('ru', 'Runoob search', 'https://www.runoob.com/?s=');
mapkey('oru', '#8Open Search with Runoob', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ru"});
});

//变量命名
addSearchAliasX('va', 'Variable search', 'https://unbug.github.io/codelf/#');
mapkey('ova', '#8Open Search with Variable', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "va"});
});


//变量命名
addSearchAliasX('li', 'Linux Command search', 'http://man.linuxde.net/');
mapkey('oli', '#8Open Search with Linux Command', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "li"});
});
  
//WeChat
addSearchAliasX('wx', 'WeChat search', 'https://weixin.sogou.com/weixin?type=2&query=');
mapkey('owx', '#8Open Search with WeChat', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "wx"});
});
  
//微博
addSearchAliasX('wb', 'WeiBo search', 'https://s.weibo.com/weibo/');
mapkey('owb', '#8Open Search with WeiBo', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "wb"});
});

//GitHub
addSearchAliasX('hu', 'GitHub search', 'https://github.com/search?q=');
mapkey('ohu', '#8Open Search with GitHub', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "hu"});
});

//gif 动图
addSearchAliasX('dt', 'GIF search', 'https://www.soogif.com/search/1/');
mapkey('odt', '#8Open Search with GIF', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "dt"});
});

//逗比图片
addSearchAliasX('dq', '逗比图片 search', 'http://www.dbbqb.com/s?w=');
mapkey('odq', '#8Open Search with 逗比图片', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "dq"});
});

//用药助手
addSearchAliasX('yy', '用药助手 search', 'http://drugs.dxy.cn/search/drug.htm?keyword=');
mapkey('oyy', '#8Open Search with 用药助手', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yy"});
});
  
//查企业
addSearchAliasX('qy', '查企业 search', 'https://www.qichacha.com/search?key=');
mapkey('oqy', '#8Open Search with 查企业', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "qy"});
});
  
  
//w3cscool
addSearchAliasX('sc', 'W3cSchool search', 'https://www.w3cschool.cn/search?w=');
mapkey('osc', '#8Open Search with W3cSchool', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "sc"});
});
  

  
//欧路词典
addSearchAliasX('ol', '欧路词典 search', 'https://dict.eudic.net/dicts/en/');
mapkey('ool', '#8Open Search with 欧路词典', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ol"});
});
  
//Tldr
addSearchAliasX('tl', 'tldr search', 'https://tldr.ostera.io/');
mapkey('otl', '#8Open Search with tldr', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "tl"});
});

//思否
addSearchAliasX('sf', '思否 search', 'https://segmentfault.com/search?q=');
mapkey('osf', '#8Open Search with 思否', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "sf"});
});
  
//bilibili
addSearchAliasX('il', 'bilibili search', 'https://search.bilibili.com/all?keyword=');
mapkey('oil', '#8Open Search with bilibili', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "il"});
});
//wikihow-zh
addSearchAliasX('whz', 'wikihow search', 'https://zh.wikihow.com/wikiHowTo?search=');
mapkey('owhz', '#8Open Search with wikihow', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "whz"});
});
//Z-Library 
addSearchAliasX('zl', 'Z-Library  search', 'https://b-ok.cc/s/?q=');
mapkey('ozl', '#8Open Search with Z-Library', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "zl"});
});
//SEO中国站长
addSearchAliasX('zz', 'Chinaz search', 'https://seo.chinaz.com/?q=');
mapkey('ozz', '#8Open Search with Chinaz', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "zz"});
});

//wikihow
addSearchAliasX('whe', 'wikihow search', 'https://www.wikihow.com/wikiHowTo?search=');
mapkey('owhe', '#8Open Search with wikihow', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "whe"});
});

//youtube
addSearchAliasX('yu', 'Youtube search', 'https://www.youtube.com/results?search_query=');
mapkey('oyu', '#8Open Search with Youtube', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yu"});
});

//youku
addSearchAliasX('yk', 'YouKu search', 'https://so.youku.com/search_video/q_');
mapkey('oyk', '#8Open Search with youku', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yk"});
});
  
//语法网
addSearchAliasX('yf', '英语语法网 search', 'https://www.google.com.hk/search?num=30&newwindow=1&safe=strict&ei=&q=site%3Awww.yygrammar.com+');
mapkey('oyf', '#8Open Search with 英语语法网', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yf"});
});

//emacs论坛
addSearchAliasX('em', 'emacs community search', 'https://emacs-china.org/search?q=');
mapkey('oem', '#8Open Search with emacs community', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "em"});
});

//chocolatey
addSearchAliasX('ch', 'Chocolatey community search', 'https://chocolatey.org/packages?q=');
mapkey('och', '#8Open Search with Chocolatey community', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ch"});
});

//网盘
addSearchAliasX('wp', 'WanPan elf search', 'https://www.yunpanjingling.com/search/');
mapkey('owp', '#8Open Search with WanPan elf', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "wp"});
});

//豆瓣
addSearchAliasX('db', 'DouBan elf search', 'https://www.douban.com/search?q=');
mapkey('odb', '#8Open Search with DouBan', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "db"});
});


//R文档
addSearchAliasX('rd', 'R document search', 'https://www.google.com.hk/search?q=site:www.rdocumentation.org ');
mapkey('ord', '#8Open Search with R document', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "rd"});
});
//有道
addSearchAliasX('yd', 'YouDao dictionary', 'http://dict.youdao.com/m/search?q=');
mapkey('oyd', '#8Open Search with YouDao dictionary', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "yd"});
});
// 词不离句
addSearchAliasX('cj', '词句 document search', 'http://www.bj3530979798.com/sr.jsp?skeyword=');
mapkey('ocj', '#8Open Search with 词句 document', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "cj"});
});
// 词不离句
addSearchAliasX('tt', '头条 search', 'https://www.toutiao.com/search/?keyword=');
mapkey('ott', '#8Open Search with 头条', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "tt"});
});

// 词不离句
addSearchAliasX('ca', 'Google cache search', 'http://webcache.googleusercontent.com/search?q=cache:');
mapkey('oca', '#8Open Search with Google cache', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "ca"});
});
////////// 翻译设置
Front.registerInlineQuery({
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
    });
/////////////END

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;

settings.hintAlign = "left"
//Hints.characters = "asdfghjklrtyvn"
