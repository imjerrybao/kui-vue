/*! kyui v1.5.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([12],{KXMA:function(t,e,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var v=_("YT/9"),n=_.n(v);for(var a in v)"default"!==a&&function(t){_.d(e,t,function(){return v[t]})}(a);var r=_("PN+r"),u=_("XyMi"),i=Object(u.a)(n.a,r.a,r.b,!1,null,null,null);e.default=i.exports},"PN+r":function(t,e,_){"use strict";_.d(e,"a",function(){return v}),_.d(e,"b",function(){return n});var v=function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",[_("h2",[t._v("Page 分页")]),t._v(" "),_("h3",[t._v("基础")]),t._v(" "),_("Page",{attrs:{total:1e3,curent:1,pagesize:10}}),t._v(" "),_("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.pages))]),t._v(" "),_("h3",[t._v("尺寸")]),t._v(" "),_("Page",{attrs:{total:60,curent:1,pagesize:10,mini:""},on:{change:t.test}}),t._v(" "),_("Code",{attrs:{lang:"xml html"}},[t._v(t._s(t.pages1))]),t._v(" "),_("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"table-border"},[_("table",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("current")]),t._v(" "),_("td",[t._v("当前页码")]),t._v(" "),_("td",[t._v("Number,String")]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("total")]),t._v(" "),_("td",[t._v("数据总数")]),t._v(" "),_("td",[t._v("Number,String")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("pagesize")]),t._v(" "),_("td",[t._v("每页条数")]),t._v(" "),_("td",[t._v("Number,String ")]),t._v(" "),_("td",[t._v("10")])]),t._v(" "),_("tr",[_("td",[t._v("mini")]),t._v(" "),_("td",[t._v("是否为迷你版")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("change")]),t._v(" "),_("td",[t._v("页码改变的回调，返回改变后的页码")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")])])])])}]},"YT/9":function(t,e,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{pages:'<Page :total="100" :curent="1" :pagesize="10"></Page>',pages1:'<Page :total="60" :curent="1" :pagesize="10" mini></Page>'}},methods:{test:function(t){}}}}});