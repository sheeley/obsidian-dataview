(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[568],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return t?i.createElement(f,o(o({ref:n},d),{},{components:t})):i.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5359:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var i=t(2122),a=t(9756),r=(t(7294),t(3905)),o={sidebar_position:2},s={unversionedId:"query/expressions",id:"query/expressions",isDocsHomePage:!1,title:"Expressions",description:"Dataview query language expressions are anything that yields a value - all fields are expressions, as are literal",source:"@site/docs/query/expressions.md",sourceDirName:"query",slug:"/query/expressions",permalink:"/obsidian-dataview/docs/query/expressions",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Queries",permalink:"/obsidian-dataview/docs/query/queries"},next:{title:"Sources",permalink:"/obsidian-dataview/docs/query/sources"}},l=[{value:"Expression Types",id:"expression-types",children:[{value:"Fields as Expressions",id:"fields-as-expressions",children:[]},{value:"Arithmetic",id:"arithmetic",children:[]},{value:"Comparisons",id:"comparisons",children:[]},{value:"Array/Object Indexing",id:"arrayobject-indexing",children:[]},{value:"Function Calls",id:"function-calls",children:[]}]},{value:"Type-specific Interactions &amp; Values",id:"type-specific-interactions--values",children:[{value:"Dates",id:"dates",children:[]},{value:"Durations",id:"durations",children:[]},{value:"Links",id:"links",children:[]}]}],p={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dataview query language ",(0,r.kt)("em",{parentName:"p"},"expressions")," are anything that yields a value - all fields are expressions, as are literal\nvalues (like ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),"), as are computed values (like ",(0,r.kt)("inlineCode",{parentName:"p"},"field - 9"),"). For a very high level summary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# General\nfield               (directly refer to a field)\nsimple-field        (refer to fields with spaces/punctuation in them like \"Simple Field!\")\na.b                 (if a is an object, retrieve field named 'b')\na[expr]             (if a is an object or array, retrieve field with name specified by expression 'expr')\nf(a, b, ...)        (call a function called `f` on arguments a, b, ...)\n\n# Arithmetic\na + b               (addition)\na - b               (subtraction)\na * b               (multiplication)\na / b               (division)\n\n# Comparison\na > b               (check if a is greater than b)\na < b               (check if a is less than b)\na = b               (check if a equals b)\na != b              (check if a does not equal b)\na <= b              (check if a is less than or equal to b)\na >= b              (check if a is greater than or equal to b)\n\n# Special Operations\n[[Link]].value      (fetch `value` from page `Link`)\n")),(0,r.kt)("p",null,"More detailed explanations of each follow."),(0,r.kt)("h2",{id:"expression-types"},"Expression Types"),(0,r.kt)("h3",{id:"fields-as-expressions"},"Fields as Expressions"),(0,r.kt)("p",null,'The simplest expression is one that just directly refers to a field. If you have a field called "field", then you can\nrefer to it directly by name - ',(0,r.kt)("inlineCode",{parentName:"p"},"field"),'. If the field name has spaces, punctuation, or other non-letter/number\ncharacters, then you can refer to it using Dataview\'s simplified name, which is all lower case with spaces replaced with\n"-". For example, ',(0,r.kt)("inlineCode",{parentName:"p"},"this is a field")," becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"this-is-a-field"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello!")," becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"hello"),", and so on."),(0,r.kt)("h3",{id:"arithmetic"},"Arithmetic"),(0,r.kt)("p",null,"You can use standard arithmetic operators to combine fields: addition (",(0,r.kt)("inlineCode",{parentName:"p"},"+"),"), subtraction (",(0,r.kt)("inlineCode",{parentName:"p"},"-"),"), multiplication (",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"),\nand division (",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"). For example ",(0,r.kt)("inlineCode",{parentName:"p"},"field1 + field2")," is an expression which computes the sum of the two fields."),(0,r.kt)("h3",{id:"comparisons"},"Comparisons"),(0,r.kt)("p",null,"You can compare most values using the various comparison operators: ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,r.kt)("inlineCode",{parentName:"p"},">="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"!="),". This yields a\nboolean true or false value which can be used in ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," blocks in queries."),(0,r.kt)("h3",{id:"arrayobject-indexing"},"Array/Object Indexing"),(0,r.kt)("p",null,"You can retrieve data from arrays via the index operator ",(0,r.kt)("inlineCode",{parentName:"p"},"array[<index>]"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<index>")," is any computed expression.\nArrays are 0-indexed, so the first element is index 0, the second element is index 1, and so on.  For example ",(0,r.kt)("inlineCode",{parentName:"p"},"list(1,\n2, 3)[0] = 1"),"."),(0,r.kt)("p",null,"You can retrieve data from objects (which map text to data values) also using the index operator, where indexes are now\nstrings/text instead of numbers. You can also use the shorthand ",(0,r.kt)("inlineCode",{parentName:"p"},"object.<name>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<name>")," is the name of the value\nto retrieve. For example ",(0,r.kt)("inlineCode",{parentName:"p"},'object("yes", 1).yes = 1'),"."),(0,r.kt)("h3",{id:"function-calls"},"Function Calls"),(0,r.kt)("p",null,"Dataview supports various functions for manipulating data, which are described in full in the ",(0,r.kt)("a",{parentName:"p",href:"functions"},"functions\ndocumentation"),". They have the general syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"function(arg1, arg2, ...)")," - i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},'lower("yes")')," or\n",(0,r.kt)("inlineCode",{parentName:"p"},'regexmatch("text", ".+")'),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"type-specific-interactions--values"},"Type-specific Interactions & Values"),(0,r.kt)("p",null,"Most dataview types have special interactions with operators, or have additional fields that can be retrieved using the\nindex operator."),(0,r.kt)("h3",{id:"dates"},"Dates"),(0,r.kt)("p",null,"You can retrieve various components of a date via indexing: ",(0,r.kt)("inlineCode",{parentName:"p"},"date.year"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"date.month"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"date.day"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"date.hour"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"date.minute"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"date.second"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"date.week"),". You can also add durations to dates to get new dates."),(0,r.kt)("h3",{id:"durations"},"Durations"),(0,r.kt)("p",null,"Durations can be added to each other or to dates. You can retrieve various components of a duration via indexing:\n",(0,r.kt)("inlineCode",{parentName:"p"},"duration.years"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"duration.months"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"duration.days"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"duration.hours"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"duration.minutes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"duration.seconds"),"."),(0,r.kt)("h3",{id:"links"},"Links"),(0,r.kt)("p",null,'You can "index through" a link to get values on the corresponding page. For example ',(0,r.kt)("inlineCode",{parentName:"p"},"[[Link]].value")," would get the value\n",(0,r.kt)("inlineCode",{parentName:"p"},"value")," from page ",(0,r.kt)("inlineCode",{parentName:"p"},"Link"),"."))}d.isMDXComponent=!0}}]);