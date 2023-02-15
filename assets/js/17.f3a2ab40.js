(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{424:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"聚合函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数"}},[t._v("#")]),t._v(" 聚合函数")]),t._v(" "),a("p",[t._v("MySQL中有5种聚合函数较为常用，分别是求和函数SUM()、求平均函数AVG()、最大值函数MAX()、最小值函数MIN()和计数函数COUNT()。")]),t._v(" "),a("p",[t._v("这些函数，为我们对数据库中的数据进行统计和计算提供了方便。因为计算直接在数据库中执行，比在应用层面完成相同的工作，效率高很多。")]),t._v(" "),a("h2",{attrs:{id:"时间函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间函数"}},[t._v("#")]),t._v(" 时间函数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("获取日期时间数据中部分信息的函数"),a("br"),t._v("\nEXTRACT（type FROM date）表示从日期时间数据“date”中抽取“type”指定的部分")])]),t._v(" "),a("li",[a("p",[t._v("特定时间函数"),a("br"),t._v("\nYEAR（date）：获取date中的年。\nMONTH（date）：获取date中的月。\nDAY（date）：获取date中的日。\nHOUR（date）：获取date中的小时。\nMINUTE（date）：获取date中的分。\nSECOND（date）：获取date中的秒。")])]),t._v(" "),a("li",[a("p",[t._v("计算日期时间的函数"),a("br"),t._v("\nDATE_ADD（date, INTERVAL 表达式 type）：表示计算从时间点“date”开始，向前或者向后一段时间间隔的时间。“表达式”的值为时间间隔数，正数表示向后，负数表示向前，“type”表示时间间隔的单位（比如年、月、日等）。"),a("br"),t._v("\nLAST_DAY（date）：表示获取日期时间“date”所在月份的最后一天的日期。")])]),t._v(" "),a("li",[a("p",[t._v("其他日期时间函数")]),t._v(" "),a("ul",[a("li",[t._v("CURDATE() 获取当前的日期。日期格式为“YYYY-MM-DD”，也就是年月日的格\n式。")]),t._v(" "),a("li",[t._v("DAYOFWEEK() 获取日期“date”是周几。1表示周日，2表示周一，以此类推，直到7表示周六。")])])]),t._v(" "),a("li",[a("p",[t._v("DATE_FORMAT")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 指定格式“%T”")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" DATE_FORMAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-12-01 13:25:50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%T"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 指定格式“%r”")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" DATE_FORMAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-12-01 13:25:50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%r"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("DATEDIFF()\nDATEDIFF（date1,date2），表示日期“date1”与日期“date2”之间差几天")])])])]),t._v(" "),a("h2",{attrs:{id:"条件判断函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断函数"}},[t._v("#")]),t._v(" 条件判断函数")]),t._v(" "),a("h3",{attrs:{id:"条件判断函数case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断函数case"}},[t._v("#")]),t._v(" 条件判断函数CASE")]),t._v(" "),a("p",[t._v("MySQL中CASE函数的语法如下：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" 表达式 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" 值"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" 表达式"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" 值"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" 表达式"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" 表达式m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n")])])]),a("h3",{attrs:{id:"条件判断函数if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断函数if"}},[t._v("#")]),t._v(" 条件判断函数IF")]),t._v(" "),a("p",[t._v("条件判断函数的主要作用，就是根据特定的条件返回不同的值，常用的有两种：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("IFNULL（V1，V2）：表示如果V1的值不为空值，则返回V1，否则返回V2。\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v("（表达式，V1，V2）：如果表达式为真（"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),t._v("），则返回V1，否则返回V2\n")])])]),a("h2",{attrs:{id:"数学函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数学函数"}},[t._v("#")]),t._v(" 数学函数")]),t._v(" "),a("h2",{attrs:{id:"存储函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储函数"}},[t._v("#")]),t._v(" 存储函数")]),t._v(" "),a("p",[t._v("创建存储函数的语法是：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" 函数名称 （参数）"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURNS")]),t._v(" 数据类型 程序体\n\n")])])]),a("p",[t._v("存储函数与存储过程很像，但有几个不同点：")]),t._v(" "),a("ol",[a("li",[t._v("存储函数必须返回一个值或者数据表，存储过程可以不返回。")]),t._v(" "),a("li",[t._v("存储过程可以通过CALL语句调用，存储函数不可以。")]),t._v(" "),a("li",[t._v("存储函数可以放在查询语句中使用，存储过程不行。")]),t._v(" "),a("li",[t._v("存储过程的功能更加强大，包括能够执行对表的操作（比如创建表，删除表等）和事务操作，这些功能是存储函数不具备的。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);