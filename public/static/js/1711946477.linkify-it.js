import{r as _,a as t,b as e,c as s}from"./1711946477.uc.micro.js";var r,i;function c(_){return Array.prototype.slice.call(arguments,1).forEach((function(t){t&&Object.keys(t).forEach((function(e){_[e]=t[e]}))})),_}function n(_){return Object.prototype.toString.call(_)}function o(_){return"[object Function]"===n(_)}function a(_){return _.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var h={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};var l={"http:":{validate:function(_,t,e){var s=_.slice(t);return e.re.http||(e.re.http=new RegExp("^\\/\\/"+e.re.src_auth+e.re.src_host_port_strict+e.re.src_path,"i")),e.re.http.test(s)?s.match(e.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(_,t,e){var s=_.slice(t);return e.re.no_http||(e.re.no_http=new RegExp("^"+e.re.src_auth+"(?:localhost|(?:(?:"+e.re.src_domain+")\\.)+"+e.re.src_domain_root+")"+e.re.src_port+e.re.src_host_terminator+e.re.src_path,"i")),e.re.no_http.test(s)?t>=3&&":"===_[t-3]||t>=3&&"/"===_[t-3]?0:s.match(e.re.no_http)[0].length:0}},"mailto:":{validate:function(_,t,e){var s=_.slice(t);return e.re.mailto||(e.re.mailto=new RegExp("^"+e.re.src_email_name+"@"+e.re.src_host_strict,"i")),e.re.mailto.test(s)?s.match(e.re.mailto)[0].length:0}}},u="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",p="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function m(c){var h=c.re=(i?r:(i=1,r=function(r){var i={};r=r||{},i.src_Any=_().source,i.src_Cc=t().source,i.src_Z=e().source,i.src_P=s.source,i.src_ZPCc=[i.src_Z,i.src_P,i.src_Cc].join("|"),i.src_ZCc=[i.src_Z,i.src_Cc].join("|");var c="[><｜]";return i.src_pseudo_letter="(?:(?![><｜]|"+i.src_ZPCc+")"+i.src_Any+")",i.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",i.src_auth="(?:(?:(?!"+i.src_ZCc+"|[@/\\[\\]()]).)+@)?",i.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",i.src_host_terminator="(?=$|[><｜]|"+i.src_ZPCc+")(?!"+(r["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+i.src_ZPCc+"))",i.src_path="(?:[/?#](?:(?!"+i.src_ZCc+"|"+c+"|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!"+i.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+i.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+i.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+i.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+i.src_ZCc+"|[']).)+\\'|\\'(?="+i.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+i.src_ZCc+"|[.]|$)|"+(r["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+i.src_ZCc+"|$)|;(?!"+i.src_ZCc+"|$)|\\!+(?!"+i.src_ZCc+"|[!]|$)|\\?(?!"+i.src_ZCc+"|[?]|$))+|\\/)?",i.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',i.src_xn="xn--[a-z0-9\\-]{1,59}",i.src_domain_root="(?:"+i.src_xn+"|"+i.src_pseudo_letter+"{1,63})",i.src_domain="(?:"+i.src_xn+"|(?:"+i.src_pseudo_letter+")|(?:"+i.src_pseudo_letter+"(?:-|"+i.src_pseudo_letter+"){0,61}"+i.src_pseudo_letter+"))",i.src_host="(?:(?:(?:(?:"+i.src_domain+")\\.)*"+i.src_domain+"))",i.tpl_host_fuzzy="(?:"+i.src_ip4+"|(?:(?:(?:"+i.src_domain+")\\.)+(?:%TLDS%)))",i.tpl_host_no_ip_fuzzy="(?:(?:(?:"+i.src_domain+")\\.)+(?:%TLDS%))",i.src_host_strict=i.src_host+i.src_host_terminator,i.tpl_host_fuzzy_strict=i.tpl_host_fuzzy+i.src_host_terminator,i.src_host_port_strict=i.src_host+i.src_port+i.src_host_terminator,i.tpl_host_port_fuzzy_strict=i.tpl_host_fuzzy+i.src_port+i.src_host_terminator,i.tpl_host_port_no_ip_fuzzy_strict=i.tpl_host_no_ip_fuzzy+i.src_port+i.src_host_terminator,i.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+i.src_ZPCc+"|>|$))",i.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+i.src_ZCc+")("+i.src_email_name+"@"+i.tpl_host_fuzzy_strict+")",i.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+i.src_ZPCc+"))((?![$+<=>^`|｜])"+i.tpl_host_port_fuzzy_strict+i.src_path+")",i.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+i.src_ZPCc+"))((?![$+<=>^`|｜])"+i.tpl_host_port_no_ip_fuzzy_strict+i.src_path+")",i}))(c.__opts__),l=c.__tlds__.slice();function p(_){return _.replace("%TLDS%",h.src_tlds)}c.onCompile(),c.__tlds_replaced__||l.push(u),l.push(h.src_xn),h.src_tlds=l.join("|"),h.email_fuzzy=RegExp(p(h.tpl_email_fuzzy),"i"),h.link_fuzzy=RegExp(p(h.tpl_link_fuzzy),"i"),h.link_no_ip_fuzzy=RegExp(p(h.tpl_link_no_ip_fuzzy),"i"),h.host_fuzzy_test=RegExp(p(h.tpl_host_fuzzy_test),"i");var m=[];function d(_,t){throw new Error('(LinkifyIt) Invalid schema "'+_+'": '+t)}c.__compiled__={},Object.keys(c.__schemas__).forEach((function(_){var t=c.__schemas__[_];if(null!==t){var e={validate:null,link:null};if(c.__compiled__[_]=e,"[object Object]"===n(t))return!function(_){return"[object RegExp]"===n(_)}(t.validate)?o(t.validate)?e.validate=t.validate:d(_,t):e.validate=function(_){return function(t,e){var s=t.slice(e);return _.test(s)?s.match(_)[0].length:0}}(t.validate),void(o(t.normalize)?e.normalize=t.normalize:t.normalize?d(_,t):e.normalize=function(_,t){t.normalize(_)});!function(_){return"[object String]"===n(_)}(t)?d(_,t):m.push(_)}})),m.forEach((function(_){c.__compiled__[c.__schemas__[_]]&&(c.__compiled__[_].validate=c.__compiled__[c.__schemas__[_]].validate,c.__compiled__[_].normalize=c.__compiled__[c.__schemas__[_]].normalize)})),c.__compiled__[""]={validate:null,normalize:function(_,t){t.normalize(_)}};var f=Object.keys(c.__compiled__).filter((function(_){return _.length>0&&c.__compiled__[_]})).map(a).join("|");c.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+h.src_ZPCc+"))("+f+")","i"),c.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+h.src_ZPCc+"))("+f+")","ig"),c.re.schema_at_start=RegExp("^"+c.re.schema_search.source,"i"),c.re.pretest=RegExp("("+c.re.schema_test.source+")|("+c.re.host_fuzzy_test.source+")|@","i"),function(_){_.__index__=-1,_.__text_cache__=""}(c)}function d(_,t){var e=_.__index__,s=_.__last_index__,r=_.__text_cache__.slice(e,s);this.schema=_.__schema__.toLowerCase(),this.index=e+t,this.lastIndex=s+t,this.raw=r,this.text=r,this.url=r}function f(_,t){var e=new d(_,t);return _.__compiled__[e.schema].normalize(e,_),e}function z(_,t){if(!(this instanceof z))return new z(_,t);var e;t||(e=_,Object.keys(e||{}).reduce((function(_,t){return _||h.hasOwnProperty(t)}),!1)&&(t=_,_={})),this.__opts__=c({},h,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=c({},l,_),this.__compiled__={},this.__tlds__=p,this.__tlds_replaced__=!1,this.re={},m(this)}z.prototype.add=function(_,t){return this.__schemas__[_]=t,m(this),this},z.prototype.set=function(_){return this.__opts__=c(this.__opts__,_),this},z.prototype.test=function(_){if(this.__text_cache__=_,this.__index__=-1,!_.length)return!1;var t,e,s,r,i,c,n,o;if(this.re.schema_test.test(_))for((n=this.re.schema_search).lastIndex=0;null!==(t=n.exec(_));)if(r=this.testSchemaAt(_,t[2],n.lastIndex)){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(o=_.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||o<this.__index__)&&null!==(e=_.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(i=e.index+e[1].length,(this.__index__<0||i<this.__index__)&&(this.__schema__="",this.__index__=i,this.__last_index__=e.index+e[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&_.indexOf("@")>=0&&null!==(s=_.match(this.re.email_fuzzy))&&(i=s.index+s[1].length,c=s.index+s[0].length,(this.__index__<0||i<this.__index__||i===this.__index__&&c>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=i,this.__last_index__=c)),this.__index__>=0},z.prototype.pretest=function(_){return this.re.pretest.test(_)},z.prototype.testSchemaAt=function(_,t,e){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(_,e,this):0},z.prototype.match=function(_){var t=0,e=[];this.__index__>=0&&this.__text_cache__===_&&(e.push(f(this,t)),t=this.__last_index__);for(var s=t?_.slice(t):_;this.test(s);)e.push(f(this,t)),s=s.slice(this.__last_index__),t+=this.__last_index__;return e.length?e:null},z.prototype.matchAtStart=function(_){if(this.__text_cache__=_,this.__index__=-1,!_.length)return null;var t=this.re.schema_at_start.exec(_);if(!t)return null;var e=this.testSchemaAt(_,t[2],t[0].length);return e?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+e,f(this,0)):null},z.prototype.tlds=function(_,t){return _=Array.isArray(_)?_:[_],t?(this.__tlds__=this.__tlds__.concat(_).sort().filter((function(_,t,e){return _!==e[t-1]})).reverse(),m(this),this):(this.__tlds__=_.slice(),this.__tlds_replaced__=!0,m(this),this)},z.prototype.normalize=function(_){_.schema||(_.url="http://"+_.url),"mailto:"!==_.schema||/^mailto:/i.test(_.url)||(_.url="mailto:"+_.url)},z.prototype.onCompile=function(){};var x=z;export{x as l};
