(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[353],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return h}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),h=n,v=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return t?r.createElement(v,o(o({ref:a},p),{},{components:t})):r.createElement(v,o({ref:a},p))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7554:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(2122),n=t(9756),i=(t(7294),t(3905)),o={sidebar_position:3},l={unversionedId:"api/code-reference",id:"api/code-reference",isDocsHomePage:!1,title:"Codeblock Reference",description:"Dataview JavaScript Codeblocks are created using the dataviewjs language specification for a codeblock:",source:"@site/docs/api/code-reference.md",sourceDirName:"api",slug:"/api/code-reference",permalink:"/obsidian-dataview/docs/api/code-reference",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Data Arrays",permalink:"/obsidian-dataview/docs/api/data-array"},next:{title:"Codeblock Examples",permalink:"/obsidian-dataview/docs/api/code-examples"}},s=[{value:"Query",id:"query",children:[{value:"<code>dv.pages(source)</code>",id:"dvpagessource",children:[]},{value:"<code>dv.pagePaths(source)</code>",id:"dvpagepathssource",children:[]},{value:"<code>dv.page(path)</code>",id:"dvpagepath",children:[]}]},{value:"Render",id:"render",children:[{value:"<code>dv.header(level, text)</code>",id:"dvheaderlevel-text",children:[]},{value:"<code>dv.paragraph(text)</code>",id:"dvparagraphtext",children:[]}]},{value:"Dataviews",id:"dataviews",children:[{value:"<code>dv.list(elements)</code>",id:"dvlistelements",children:[]},{value:"<code>dv.taskList(tasks, groupByFile)</code>",id:"dvtasklisttasks-groupbyfile",children:[]},{value:"<code>dv.table(headers, elements)</code>",id:"dvtableheaders-elements",children:[]}]}],d={toc:s};function p(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dataview JavaScript Codeblocks are created using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataviewjs")," language specification for a codeblock:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```dataviewjs\ndv.table([], ...)\n```\n")),(0,i.kt)("p",null,"The API is available through the implicitly provided ",(0,i.kt)("inlineCode",{parentName:"p"},"dv")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"dataview"),") variable, through which you can query for\ninformation, render HTML, and configure the view."),(0,i.kt)("h2",{id:"query"},"Query"),(0,i.kt)("h3",{id:"dvpagessource"},(0,i.kt)("inlineCode",{parentName:"h3"},"dv.pages(source)")),(0,i.kt)("p",null,"Takes a single string argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"source"),", which is the same form as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/query/sources"},"query language source"),".\nReturns a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/data-array"},"data array")," of page objects, which are plain objects with all of the page fields as\nvalues."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'dv.pages("#books") => all pages with tag \'books\'\ndv.pages(\'"folder"\') => all pages from folder "folder"\ndv.pages("#yes or -#no") => all pages with tag #yes, or which DON\'T have tag #no\n')),(0,i.kt)("h3",{id:"dvpagepathssource"},(0,i.kt)("inlineCode",{parentName:"h3"},"dv.pagePaths(source)")),(0,i.kt)("p",null,"As with ",(0,i.kt)("inlineCode",{parentName:"p"},"dv.pages"),", but just returns a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/data-array"},"data array")," of paths of pages that match the given source."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"dv.pagePaths(\"#books\") => the paths of pages with tag 'books'\n")),(0,i.kt)("h3",{id:"dvpagepath"},(0,i.kt)("inlineCode",{parentName:"h3"},"dv.page(path)")),(0,i.kt)("p",null,"Maps a simple path to the full page object, which includes all of the pages fields. Automatically does link resolution,\nand will figure out the extension automatically if not present."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'dv.page("Index") => The page object for /Index\ndv.page("books/The Raisin.md") => The page object for /books/The Raisin.md\n')),(0,i.kt)("h2",{id:"render"},"Render"),(0,i.kt)("h3",{id:"dvheaderlevel-text"},(0,i.kt)("inlineCode",{parentName:"h3"},"dv.header(level, text)")),(0,i.kt)("p",null,"Renders a header of level 1 - 6 with the given text."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'dv.header(1, "Big!");\ndv.header(6, "Tiny");\n')),(0,i.kt)("h3",{id:"dvparagraphtext"},(0,i.kt)("inlineCode",{parentName:"h3"},"dv.paragraph(text)")),(0,i.kt)("p",null,"Renders arbitrary text in a paragraph."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'dv.paragraph("This is some text");\n')),(0,i.kt)("h2",{id:"dataviews"},"Dataviews"),(0,i.kt)("h3",{id:"dvlistelements"},(0,i.kt)("inlineCode",{parentName:"h3"},"dv.list(elements)")),(0,i.kt)("p",null,"Render a dataview list of elements; accepts both vanilla arrays and data arrays."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'dv.list([1, 2, 3]) => list of 1, 2, 3\ndv.list(dv.pages().file.name) => list of all file names\ndv.list(dv.pages().file.link) => list of all file links\ndv.list(dv.pages("#book").where(p => p.rating > 7)) => list of all books with rating greater than 7\n')),(0,i.kt)("h3",{id:"dvtasklisttasks-groupbyfile"},(0,i.kt)("inlineCode",{parentName:"h3"},"dv.taskList(tasks, groupByFile)")),(0,i.kt)("p",null,"Render a dataview list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," objects, as obtained by ",(0,i.kt)("inlineCode",{parentName:"p"},"page.file.tasks"),". Only the first argument is required; if the\nsecond argument ",(0,i.kt)("inlineCode",{parentName:"p"},"groupByFile")," is provided (and is true), then tasks will be grouped by the file they come from automatically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// List all tasks from pages marked \'#project\'\ndv.taskList(dv.pages("#project").file.tasks)\n\n// List all *uncompleted* tasks from pages marked #project\ndv.taskList(dv.pages("#project").file.tasks\n    .where(t => !t.completed))\n\n// List all tasks tagged with \'#tag\' from pages marked #project\ndv.taskList(dv.pages("#project").file.tasks\n    .where(t => t.text.includes("#tag")))\n')),(0,i.kt)("h3",{id:"dvtableheaders-elements"},(0,i.kt)("inlineCode",{parentName:"h3"},"dv.table(headers, elements)")),(0,i.kt)("p",null,"Render a dataview table with the given list of headers and 2D array of elements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Render a simple table of book info sorted by rating.\ndv.table(["File", "Genre", "Time Read", "Rating"], dv.pages("#book")\n    .sort(b => b.rating)\n    .map(b => [b.file.link, b.genre, b["time-read"], b.rating]))\n')))}p.isMDXComponent=!0}}]);