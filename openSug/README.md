# openSug.js

百度搜索框下拉提示


能：无须jQuery库，只需引用一段JS即可获得带有“搜索框提示”功能的搜索框,让您的搜索更快捷！

【注意】但是官网原版不行，得改进一些。改进版见：https://raw.githubusercontent.com/yimobing/NeatUI/main/assets/neatui/js/neatui-opensug.js


Simply reference a section of openSug.js to get a search box with "search box prompts" to make your search easier!
Please browse the configuration page and examples : [here](https://www.opensug.org/ "https://www.opensug.org/")

Browser support: IE6+, Firefox, Chrome, Safari, Opera, Edge...

Provide the replacement result source, The default is to use **Baidu** result source.
## Example
### Simple
input type: only text or search.

action: baiduSug = 1 or true : Automatic submission, baiduSug = 2 or false : Manual submission.
```ini
// [search]Attayo.jp
<input type="text" attayo="1 | true" ... 
<input type="text" attayo="2 | false" ... 

// [search]Baidu.com
<input type="text" baiduSug="1 | true" ... 
<input type="text" baiduSug="2 | false" ... 

// [search]Google.com
<input type="text" google="1 | true" ... 
<input type="text" google="2 | false" ... 

// [search]So.com
<input type="text" haoso="1 | true" ... 
<input type="text" haoso="2 | false" ... 

// [music]Kugou.com
<input type="text" kugou="1 | true" ... 
<input type="text" kugou="2 | false" ... 

// [search]Yahoo.com
<input type="text" yahoo="1 | true" ... 
<input type="text" yahoo="2 | false" ... 

// [search]Yandex.ru
<input type="text" yandex="1 | true" ... 
<input type="text" yandex="2 | false" ... 

// [video]Youku.com
<input type="text" youku="1 | true" ... 
<input type="text" youku="2 | false" ... 

// [shopping]Taobao.com
<input type="text" taobao="1 | true" ... 
<input type="text" taobao="2 | false" ... 

// [video]MGTV.com
<input type="text" mgtv="1 | true" ... 
<input type="text" mgtv="2 | false" ... 

// [search]SM.cn
<input type="text" sm="1 | true" ... 
<input type="text" sm="2 | false" ... 

// [topic]Weibo.com
<input type="text" weibo="1 | true" ... 
<input type="text" weibo="2 | false" ... 

// [search]Rambler.ru
<input type="text" rambler="1 | true" ... 
<input type="text" rambler="2 | false" ... 

// [eBook]Zongheng.com
<input type="text" book="1 | true" ... 
<input type="text" book="2 | false" ... 

// [Software]QQ.com
<input type="text" soft="1 | true" ... 
<input type="text" soft="2 | false" ... 

// [search]Naver.com
<input type="text" naver="1 | true" ... 
<input type="text" naver="2 | false" ... 

// [Car]Sina.com.cn
<input type="text" car="1 | true" ... 
<input type="text" car="2 | false" ... 

// [Car]Netease.com
<input type="text" car2="1 | true" ... 
<input type="text" car2="2 | false" ... 

// [map]Qunar.com
<input type="text" qunar="1 | true" ... 
<input type="text" qunar="2 | false" ... 

// [jobs]Lagou.com
<input type="text" lagou="1 | true" ... 
<input type="text" lagou="2 | false" ... 

```
### Advanced
```JavaScript
typeof(BaiduSuggestion)!="undefined"&&(BaiduSuggestion)instanceof(Object)&&typeof(BaiduSuggestion)=="object"&&document.getElementById("inputObj")?BaiduSuggestion.bind("inputObj", {  // Input ID
      "XOffset": "-4",             // Proposal frame position X offset, unit px.
      "YOffset": "-5",             // Prompt box position vertical Y offset, unit px.
      "width": "",                  // Prompt box width, unit px.
      "fontColor": "#FF0000",       // Prompt text color.
      "fontColorHI": "#0000FF",     // Prompt box highlight text color when selected.
      "fontSize": "14px",           // font size
      "fontFamily": "Microsoft YaHei",    // Text fontFamily.
      "borderColor": "#008000",     // Prompt box border color.
      "bgcolorHI": "#FF6600",       // Prompt box highlights the selected color.
      "sugSubmit": true,             // Whether to submit the form when the entry in the prompt box is selected.
      "source":"attayo | baidu | book | car | car2 | google | haoso | kugou | lagou | mgtv | naver | qunar | rambler | sm | soft | taobao | weibo | yahoo | yandex | youku | [customize]" // customize = https://{URL}/?{query}=, Default Baidu.
  }, function(Callback){console.log('eg:https://{YouURL}/?conut_update='+ Callback);});
```

**Note**: Introduce Javascript files in web pages. Javascript code should be added as far as possible behind the tag in the web page.

**Note**: If the source page is encoded in UTF-8, be sure to set the charset="gbk" attribute in the script tag, otherwise the search hint will be garbled.

[openSug.js](//git.io/&& "https://opensug.github.io/js/opensug.js:16AE550647F48124944E6990DAC6D297243E0C5C")  [xrea.com](https://ss1.xrea.com/opensug.s1009.xrea.com/js/opensug.js "https://ss1.xrea.com/opensug.s1009.xrea.com/js/opensug.js")   [sug.js.org](//sug.js.org/opensug.js "https://sug.js.org/opensug.js")   [opensug.evai.pl](//opensug.evai.pl/js/opensug.js "https://opensug.evai.pl/js/opensug.js")