(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{440:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在实际开发中，我们经常会遇到这样的情况：有2个或者多个相互关联的表，如商品信息和库存信息分别存放在2个不同的数据表中，我们在添加一条新商品记录的时候，为了保证数据的完整性，必须同时在库存表中添加一条库存记录。\n这样一来，我们就必须把这两个关联的操作步骤写到程序里面，而且要用事务包裹起来，确保这两个操作成为一个原子操作，要么全部执行，要么全部不执行。要是遇到特殊情况，可能还需要对数据进行手动维护，这样就很容易忘记其中的一步，导致数据缺失。\n这个时候，其实咱们可以使用触发器。你可以创建一个触发器，让商品信息数据的插入操作\n自动触发库存数据的插入操作。这样一来，就不用担心因为忘记添加库存数据而导致的数据\n缺失了。")]),s._v(" "),t("h2",{attrs:{id:"触发器操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#触发器操作"}},[s._v("#")]),s._v(" 触发器操作")]),s._v(" "),t("h3",{attrs:{id:"创建触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建触发器"}},[s._v("#")]),s._v(" 创建触发器")]),s._v(" "),t("p",[s._v("创建触发器的语法结构是：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" 触发器名称 {BEFORE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AFTER")]),s._v("} {"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v("}\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR EACH ROW")]),s._v(" 表达式；\n")])])]),t("p",[s._v("在创建时，你一定要注意触发器的三个要素:")]),s._v(" "),t("ul",[t("li",[s._v("表名：表示触发器监控的对象。")]),s._v(" "),t("li",[s._v("INSERT|UPDATE|DELETE：表示触发的事件。INSERT表示插入记录时触发；UPDATE表示更新记录时触发；DELETE表示删除记录时触发。")]),s._v(" "),t("li",[s._v("BEFORE|AFTER：表示触发的时间。BEFORE表示在事件之前触发；AFTER表示在事件之后\n触发。")])]),s._v(" "),t("h3",{attrs:{id:"查看触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看触发器"}},[s._v("#")]),s._v(" 查看触发器")]),s._v(" "),t("p",[s._v("SHOW TRIGGERS\\G;")]),s._v(" "),t("h3",{attrs:{id:"删除触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除触发器"}},[s._v("#")]),s._v(" 删除触发器")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" 触发器名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"触发器的优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#触发器的优缺点"}},[s._v("#")]),s._v(" 触发器的优缺点")]),s._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),t("ol",[t("li",[s._v("触发器可以确保数据的完整性")]),s._v(" "),t("li",[s._v("触发器可以帮助我们记录操作日志")]),s._v(" "),t("li",[s._v("触发器还可以用在操作数据前，对数据进行合法性检查")])]),s._v(" "),t("h3",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),t("ul",[t("li",[s._v("触发器最大的一个问题就是可读性差。\n因为触发器存储在数据库中，并且由事件驱动，这就意味着触发器有可能不受应用层的控\n制。这对系统维护是非常有挑战的。")]),s._v(" "),t("li",[s._v("另外，相关数据的变更，特别是数据表结构的变更，都可能会导致触发器出错，进而影响数\n据操作的正常运行。这些都会由于触发器本身的隐蔽性，影响到应用中错误原因排查的效\n率")])]),s._v(" "),t("h2",{attrs:{id:"触发器示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#触发器示例"}},[s._v("#")]),s._v(" 触发器示例")]),s._v(" "),t("p",[s._v("会员编号是2的会员李四，到超市的某家连锁店购买了一条烟，消费了150元。\n这个过程用SQL表示：")]),s._v(" "),t("ol",[t("li",[s._v("第一步，查询出编号是2的会员卡的储值金额是多少")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" memberdeposit\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("membermaster\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" memberid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" memberdeposit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200.00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("把会员编号是2的会员的储值金额减去150")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("membermaster\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" memberdeposit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" memberdeposit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" memberid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("读出会员编号是2的会员当前的储值金额")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" memberdeposit\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("membermaster\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" memberid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" memberdeposit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50.00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("把会员编号和前面查询中获得的储值起始金额、储值余额和储值金额变化值，写入会员储值历史表。")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deposithist\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" memberid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" transdate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" oldvalue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" newvalue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" changedvalue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NOW")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRecords: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Duplicates: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Warnings")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("h3",{attrs:{id:"用触发器的代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用触发器的代码"}},[s._v("#")]),s._v(" 用触发器的代码")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELIMITER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("upd_membermaster BEFORE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 在更新前触发")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("membermaster\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR EACH ROW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表示每更新一条记录，触发一次")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 开始程序体")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memberdeposit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" old"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memberdeposit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 如果储值金额有变化")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deposithist\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nmemberid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ntransdate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\noldvalue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nnewvalue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nchangedvalue\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\nNEW"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memberid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NOW")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nOLD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memberdeposit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 更新前的储值金额")]),s._v("\nNEW"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memberdeposit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 更新后的储值金额")]),s._v("\nNEW"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memberdeposit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("OLD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memberdeposit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 储值金额变化值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELIMITER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);