/*! markdown-it-footnote 3.0.1 https://github.com//markdown-it/markdown-it-footnote @license MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,o.markdownitFootnote=e()}}(function(){return function e(o,t,n){function r(f,l){if(!t[f]){if(!o[f]){var u="function"==typeof require&&require;if(!l&&u)return u(f,!0);if(s)return s(f,!0);var i=new Error("Cannot find module '"+f+"'");throw i.code="MODULE_NOT_FOUND",i}var a=t[f]={exports:{}};o[f][0].call(a.exports,function(e){var t=o[f][1][e];return r(t?t:e)},a,a.exports,e,o,t,n)}return t[f].exports}for(var s="function"==typeof require&&require,f=0;f<n.length;f++)r(n[f]);return r}({1:[function(e,o,t){"use strict";function n(e,o,t,n){var r=Number(e[o].meta.id+1).toString(),s="";return"string"==typeof n.docId&&(s="-"+n.docId+"-"),s+r}function r(e,o){var t=Number(e[o].meta.id+1).toString();return e[o].meta.subId>0&&(t+=":"+e[o].meta.subId),"["+t+"]"}function s(e,o,t,n,r){var s=r.rules.footnote_anchor_name(e,o,t,n,r),f=r.rules.footnote_caption(e,o,t,n,r),l=s;return e[o].meta.subId>0&&(l+=":"+e[o].meta.subId),'<sup class="footnote-ref"><a href="#fn'+s+'" id="fnref'+l+'">'+f+"</a></sup>"}function f(e,o,t){return(t.xhtmlOut?'<hr class="footnotes-sep" />\n':'<hr class="footnotes-sep">\n')+'<section class="footnotes">\n<ol class="footnotes-list">\n'}function l(){return"</ol>\n</section>\n"}function u(e,o,t,n,r){var s=r.rules.footnote_anchor_name(e,o,t,n,r);return e[o].meta.subId>0&&(s+=":"+e[o].meta.subId),'<li id="fn'+s+'" class="footnote-item">'}function i(){return"</li>\n"}function a(e,o,t,n,r){var s=r.rules.footnote_anchor_name(e,o,t,n,r);return e[o].meta.subId>0&&(s+=":"+e[o].meta.subId),' <a href="#fnref'+s+'" class="footnote-backref">\u21a9\ufe0e</a>'}o.exports=function(e){function o(e,o,t,n){var r,s,f,l,u,i,a,c,p,d,k,b=e.bMarks[o]+e.tShift[o],v=e.eMarks[o];if(b+4>v)return!1;if(91!==e.src.charCodeAt(b))return!1;if(94!==e.src.charCodeAt(b+1))return!1;for(u=b+2;u<v;u++){if(32===e.src.charCodeAt(u))return!1;if(93===e.src.charCodeAt(u))break}if(u===b+2)return!1;if(u+1>=v||58!==e.src.charCodeAt(++u))return!1;if(n)return!0;for(u++,e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.refs||(e.env.footnotes.refs={}),i=e.src.slice(b+2,u-2),e.env.footnotes.refs[":"+i]=-1,a=new e.Token("footnote_reference_open","",1),a.meta={label:i},a.level=e.level++,e.tokens.push(a),r=e.bMarks[o],s=e.tShift[o],f=e.sCount[o],l=e.parentType,k=u,c=p=e.sCount[o]+u-(e.bMarks[o]+e.tShift[o]);u<v&&(d=e.src.charCodeAt(u),h(d));)9===d?p+=4-p%4:p++,u++;return e.tShift[o]=u-k,e.sCount[o]=p-c,e.bMarks[o]=k,e.blkIndent+=4,e.parentType="footnote",e.sCount[o]<e.blkIndent&&(e.sCount[o]+=e.blkIndent),e.md.block.tokenize(e,o,t,!0),e.parentType=l,e.blkIndent-=4,e.tShift[o]=s,e.sCount[o]=f,e.bMarks[o]=r,a=new e.Token("footnote_reference_close","",(-1)),a.level=--e.level,e.tokens.push(a),!0}function t(e,o){var t,n,r,s,f,l=e.posMax,u=e.pos;return!(u+2>=l)&&(94===e.src.charCodeAt(u)&&(91===e.src.charCodeAt(u+1)&&(t=u+2,n=d(e,u+1),!(n<0)&&(o||(e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.list||(e.env.footnotes.list=[]),r=e.env.footnotes.list.length,e.md.inline.parse(e.src.slice(t,n),e.md,e.env,f=[]),s=e.push("footnote_ref","",0),s.meta={id:r},e.env.footnotes.list[r]={tokens:f}),e.pos=n+1,e.posMax=l,!0))))}function c(e,o){var t,n,r,s,f,l=e.posMax,u=e.pos;if(u+3>l)return!1;if(!e.env.footnotes||!e.env.footnotes.refs)return!1;if(91!==e.src.charCodeAt(u))return!1;if(94!==e.src.charCodeAt(u+1))return!1;for(n=u+2;n<l;n++){if(32===e.src.charCodeAt(n))return!1;if(10===e.src.charCodeAt(n))return!1;if(93===e.src.charCodeAt(n))break}return n!==u+2&&(!(n>=l)&&(n++,t=e.src.slice(u+2,n-1),"undefined"!=typeof e.env.footnotes.refs[":"+t]&&(o||(e.env.footnotes.list||(e.env.footnotes.list=[]),e.env.footnotes.refs[":"+t]<0?(r=e.env.footnotes.list.length,e.env.footnotes.list[r]={label:t,count:0},e.env.footnotes.refs[":"+t]=r):r=e.env.footnotes.refs[":"+t],s=e.env.footnotes.list[r].count,e.env.footnotes.list[r].count++,f=e.push("footnote_ref","",0),f.meta={id:r,subId:s,label:t}),e.pos=n,e.posMax=l,!0)))}function p(e){var o,t,n,r,s,f,l,u,i,a,c=!1,p={};if(e.env.footnotes&&(e.tokens=e.tokens.filter(function(e){return"footnote_reference_open"===e.type?(c=!0,i=[],a=e.meta.label,!1):"footnote_reference_close"===e.type?(c=!1,p[":"+a]=i,!1):(c&&i.push(e),!c)}),e.env.footnotes.list)){for(f=e.env.footnotes.list,l=new e.Token("footnote_block_open","",1),e.tokens.push(l),o=0,t=f.length;o<t;o++){for(l=new e.Token("footnote_open","",1),l.meta={id:o,label:f[o].label},e.tokens.push(l),f[o].tokens?(u=[],l=new e.Token("paragraph_open","p",1),l.block=!0,u.push(l),l=new e.Token("inline","",0),l.children=f[o].tokens,l.content="",u.push(l),l=new e.Token("paragraph_close","p",(-1)),l.block=!0,u.push(l)):f[o].label&&(u=p[":"+f[o].label]),e.tokens=e.tokens.concat(u),s="paragraph_close"===e.tokens[e.tokens.length-1].type?e.tokens.pop():null,r=f[o].count>0?f[o].count:1,n=0;n<r;n++)l=new e.Token("footnote_anchor","",0),l.meta={id:o,subId:n,label:f[o].label},e.tokens.push(l);s&&e.tokens.push(s),l=new e.Token("footnote_close","",(-1)),e.tokens.push(l)}l=new e.Token("footnote_block_close","",(-1)),e.tokens.push(l)}}var d=e.helpers.parseLinkLabel,h=e.utils.isSpace;e.renderer.rules.footnote_ref=s,e.renderer.rules.footnote_block_open=f,e.renderer.rules.footnote_block_close=l,e.renderer.rules.footnote_open=u,e.renderer.rules.footnote_close=i,e.renderer.rules.footnote_anchor=a,e.renderer.rules.footnote_caption=r,e.renderer.rules.footnote_anchor_name=n,e.block.ruler.before("reference","footnote_def",o,{alt:["paragraph","reference"]}),e.inline.ruler.after("image","footnote_inline",t),e.inline.ruler.after("footnote_inline","footnote_ref",c),e.core.ruler.after("inline","footnote_tail",p)}},{}]},{},[1])(1)});
