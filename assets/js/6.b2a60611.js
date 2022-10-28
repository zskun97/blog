(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{320:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gateway网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway网关"}},[t._v("#")]),t._v(" Gateway网关")]),t._v(" "),a("p",[t._v("参考链接:https://blog.csdn.net/rain_web/article/details/102469745")]),t._v(" "),a("h2",{attrs:{id:"重要的几个概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要的几个概念"}},[t._v("#")]),t._v(" 重要的几个概念:")]),t._v(" "),a("p",[t._v("Route (路由) : 这是网关的基本构建块. 它由一个ID, 一个目标URL, 一组断言和一组过滤器定义/ 如果断言为真, 则路由匹配.")]),t._v(" "),a("p",[t._v("Predicate (断言) : 输入类型是一个ServerWebExchange. 我们可以使用它来匹配来自HTTP请求的任何内容, 例如headers或参数.")]),t._v(" "),a("p",[t._v("过滤器 (filter) : Gateway中的Filter分别为两种类型的Filter, 分别是Gateway Filter和Global Filter. 过滤器Filter将会对请求和响应进行修改处理.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/other/format,png.png",alt:"/img/other/format,png.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/other/format,png-20211228221929811.png",alt:"/img/other/format,png-20211228221929811.png"}})]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"通过时间匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过时间匹配"}},[t._v("#")]),t._v(" 通过时间匹配")]),t._v(" "),a("p",[t._v("Predicate支持设置一个时间,在请求进行转发的时候,可以通过判断这个时间之前或者之后进行转发. 比如After判断时间之后, Before判断时间之前, 而Between可以判断时间区间")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time_route\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" After=2018"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("20T06"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("06"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("06+08"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Asia/Shanghai"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" after_route\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Between=2018"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("20T06"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("06"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("06+08"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Asia/Shanghai"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 2019"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("20T06"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("06"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("06+08"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Asia/Shanghai"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"通过cookies匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过cookies匹配"}},[t._v("#")]),t._v(" 通过cookies匹配")]),t._v(" "),a("p",[t._v("Cookie Route Predicate 可以接收两个参数，一个是 Cookie name , 一个是正则表达式，路由规则会通过获取对应的 Cookie name 值和正则表达式去匹配，如果匹配上就会执行路由，如果没有匹配上则不执行。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cookie_route\n         "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n         "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Cookie=ityouknow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kee.e\n")])])]),a("h3",{attrs:{id:"通过header匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过header匹配"}},[t._v("#")]),t._v(" 通过Header匹配")]),t._v(" "),a("p",[t._v("Header Route Predicate 和 Cookie Route Predicate 一样，也是接收 2 个参数，一个 header 中属性名称和一个正则表达式，这个属性值和正则表达式匹配则执行。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" header_route\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Header=X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\d+\n")])])]),a("h3",{attrs:{id:"通过host匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过host匹配"}},[t._v("#")]),t._v(" 通过Host匹配")]),t._v(" "),a("p",[t._v("Host Route Predicate 接收一组参数，一组匹配的域名列表，这个模板是一个 ant 分隔的模板，用"),a("code",[t._v(".")]),t._v("号作为分隔符。它通过参数中的主机地址作为匹配规则。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host_route\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Host="),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**.ityouknow.com")]),t._v("\n")])])]),a("h3",{attrs:{id:"通过请求方式匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过请求方式匹配"}},[t._v("#")]),t._v(" 通过请求方式匹配")]),t._v(" "),a("p",[t._v("可以通过是 POST、GET、PUT、DELETE 等不同的请求方式来进行路由")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" method_route\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Method=GET\n")])])]),a("h3",{attrs:{id:"通过请求路径匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过请求路径匹配"}},[t._v("#")]),t._v(" 通过请求路径匹配")]),t._v(" "),a("p",[t._v("Path Route Predicate 接收一个匹配路径的参数来判断是否走路由。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host_route\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Path=/foo/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("segment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"通过请求参数匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过请求参数匹配"}},[t._v("#")]),t._v(" 通过请求参数匹配")]),t._v(" "),a("p",[t._v("Query Route Predicate 支持传入两个参数，一个是属性名一个为属性值，属性值可以是正则表达式。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" query_route\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Query=smile\n")])])]),a("p",[t._v("还可以将 Query 的值以键值对的方式进行配置，这样在请求过来时会对属性值和正则进行匹配，匹配上才会走路由。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("spring:  cloud:    gateway:      routes:      - id: query_route        uri: http://ityouknow.com        predicates:        - Query=keep, pu.\n")])])]),a("h3",{attrs:{id:"通过请求-ip-地址进行匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过请求-ip-地址进行匹配"}},[t._v("#")]),t._v(" 通过请求 ip 地址进行匹配")]),t._v(" "),a("p",[t._v("Predicate 也支持通过设置某个 ip 区间号段的请求才会路由，RemoteAddr Route Predicate 接受 cidr 符号 (IPv4 或 IPv6) 字符串的列表(最小大小为 1)，例如 192.168.0.1/16 (其中 192.168.0.1 是 IP 地址，16 是子网掩码)。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" remoteaddr_route\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" RemoteAddr=192.168.1.1/24\n")])])]),a("h3",{attrs:{id:"组合使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合使用"}},[t._v("#")]),t._v(" 组合使用")]),t._v(" "),a("p",[t._v("上面为了演示各个 Predicate 的使用，我们是单个单个进行配置测试，其实可以将各种 Predicate 组合起来一起使用。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host_foo_path_headers_to_httpbin\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ityouknow.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Host="),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**.foo.org")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Path=/headers\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Method=GET\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Header=X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\d+\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Query=foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ba.\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Query=baz\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Cookie=chocolate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ch.p\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" After=2018"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("20T06"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("06"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("06+08"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Asia/Shanghai"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("1234567891011121314151617\n")])])]),a("p",[t._v("各种 Predicates 同时存在于同一个路由时，请求必须同时满足所有的条件才被这个路由匹配。")]),t._v(" "),a("blockquote",[a("p",[t._v("一个请求满足多个路由的谓词条件时，请求只会被首个成功匹配的路由转发")])])])}),[],!1,null,null,null);a.default=e.exports}}]);