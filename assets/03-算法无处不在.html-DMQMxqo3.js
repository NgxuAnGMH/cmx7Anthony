import{_ as t,c as n,o as l,a as s,b as a,d as e}from"./app-C9eS8QuH.js";const m="/assets/binary_search_dictionary_step1--NHFPFS5.png",i="/assets/binary_search_dictionary_step2-CV8OrKzu.png",c="/assets/binary_search_dictionary_step3-RO7QqT1I.png",p="/assets/binary_search_dictionary_step4-BmPASTJ5.png",r="/assets/binary_search_dictionary_step5-W3_SiIg4.png",o="/assets/playing_cards_sorting-DixWti2W.png",h="/assets/greedy_change-De5ECwrs.png",u={},g=s("h1",{id:"算法无处不在",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#算法无处不在"},[s("span",null,"算法无处不在")])],-1),d=s("p",null,"当我们听到“算法”这个词时，很自然地会想到数学。然而实际上，许多算法并不涉及复杂数学，而是更多地依赖基本逻辑，这些逻辑在我们的日常生活中处处可见。",-1),x=s("p",null,[a("在正式探讨算法之前，有一个有趣的事实值得分享："),s("strong",null,"你已经在不知不觉中学会了许多算法，并习惯将它们应用到日常生活中了"),a("。下面我将举几个具体的例子来证实这一点。")],-1),w=s("p",null,[s("strong",null,"例一：查字典"),a("。在字典里，每个汉字都对应一个拼音，而字典是按照拼音字母顺序排列的。假设我们需要查找一个拼音首字母为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r")]),s("annotation",{encoding:"application/x-tex"},"r")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),a(" 的字，通常会按照下图所示的方式实现。")],-1),_=s("ol",null,[s("li",null,[a("翻开字典约一半的页数，查看该页的首字母是什么，假设首字母为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),a(" 。")]),s("li",null,[a("由于在拼音字母表中 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r")]),s("annotation",{encoding:"application/x-tex"},"r")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),a(" 位于 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),a(" 之后，所以排除字典前半部分，查找范围缩小到后半部分。")]),s("li",null,[a("不断重复步骤 "),s("code",null,"1."),a(" 和 步骤 "),s("code",null,"2."),a(" ，直至找到拼音首字母为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r")]),s("annotation",{encoding:"application/x-tex"},"r")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),a(" 的页码为止。")])],-1),y=e('<p>=== &quot;&lt;1&gt;&quot; <img src="'+m+'" alt="查字典步骤" loading="lazy"></p><p>=== &quot;&lt;2&gt;&quot; <img src="'+i+'" alt="binary_search_dictionary_step2" loading="lazy"></p><p>=== &quot;&lt;3&gt;&quot; <img src="'+c+'" alt="binary_search_dictionary_step3" loading="lazy"></p><p>=== &quot;&lt;4&gt;&quot; <img src="'+p+'" alt="binary_search_dictionary_step4" loading="lazy"></p><p>=== &quot;&lt;5&gt;&quot; <img src="'+r+'" alt="binary_search_dictionary_step5" loading="lazy"></p><p>查字典这个小学生必备技能，实际上就是著名的“二分查找”算法。从数据结构的角度，我们可以把字典视为一个已排序的“数组”；从算法的角度，我们可以将上述查字典的一系列操作看作“二分查找”。</p><p><strong>例二：整理扑克</strong>。我们在打牌时，每局都需要整理手中的扑克牌，使其从小到大排列，实现流程如下图所示。</p><ol><li>将扑克牌划分为“有序”和“无序”两部分，并假设初始状态下最左 1 张扑克牌已经有序。</li><li>在无序部分抽出一张扑克牌，插入至有序部分的正确位置；完成后最左 2 张扑克已经有序。</li><li>不断循环步骤 <code>2.</code> ，每一轮将一张扑克牌从无序部分插入至有序部分，直至所有扑克牌都有序。</li></ol><figure><img src="'+o+'" alt="扑克排序步骤" tabindex="0" loading="lazy"><figcaption>扑克排序步骤</figcaption></figure><p>上述整理扑克牌的方法本质上是“插入排序”算法，它在处理小型数据集时非常高效。许多编程语言的排序库函数中都有插入排序的身影。</p>',10),k=s("p",null,[s("strong",null,"例三：货币找零"),a("。假设我们在超市购买了 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"69")]),s("annotation",{encoding:"application/x-tex"},"69")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"69")])])]),a(" 元的商品，给了收银员 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"100")]),s("annotation",{encoding:"application/x-tex"},"100")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"100")])])]),a(" 元，则收银员需要找我们 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"31")]),s("annotation",{encoding:"application/x-tex"},"31")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"31")])])]),a(" 元。他会很自然地完成如下图所示的思考。")],-1),M=s("ol",null,[s("li",null,[a("可选项是比 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"31")]),s("annotation",{encoding:"application/x-tex"},"31")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"31")])])]),a(" 元面值更小的货币，包括 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 元、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"5")]),s("annotation",{encoding:"application/x-tex"},"5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"5")])])]),a(" 元、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"10")]),s("annotation",{encoding:"application/x-tex"},"10")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"10")])])]),a(" 元、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"20")]),s("annotation",{encoding:"application/x-tex"},"20")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"20")])])]),a(" 元。")]),s("li",null,[a("从可选项中拿出最大的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"20")]),s("annotation",{encoding:"application/x-tex"},"20")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"20")])])]),a(" 元，剩余 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"31"),s("mo",null,"−"),s("mn",null,"20"),s("mo",null,"="),s("mn",null,"11")]),s("annotation",{encoding:"application/x-tex"},"31 - 20 = 11")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"31"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"20"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"11")])])]),a(" 元。")]),s("li",null,[a("从剩余可选项中拿出最大的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"10")]),s("annotation",{encoding:"application/x-tex"},"10")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"10")])])]),a(" 元，剩余 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"11"),s("mo",null,"−"),s("mn",null,"10"),s("mo",null,"="),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"11 - 10 = 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"11"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 元。")]),s("li",null,[a("从剩余可选项中拿出最大的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 元，剩余 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"1"),s("mo",null,"="),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"1 - 1 = 0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])]),a(" 元。")]),s("li",null,[a("完成找零，方案为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"20"),s("mo",null,"+"),s("mn",null,"10"),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,"="),s("mn",null,"31")]),s("annotation",{encoding:"application/x-tex"},"20 + 10 + 1 = 31")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"20"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"31")])])]),a(" 元。")])],-1),b=s("figure",null,[s("img",{src:h,alt:"货币找零过程",tabindex:"0",loading:"lazy"}),s("figcaption",null,"货币找零过程")],-1),L=s("p",null,"在以上步骤中，我们每一步都采取当前看来最好的选择（尽可能用大面额的货币），最终得到了可行的找零方案。从数据结构与算法的角度看，这种方法本质上是“贪心”算法。",-1),E=s("p",null,"小到烹饪一道菜，大到星际航行，几乎所有问题的解决都离不开算法。计算机的出现使得我们能够通过编程将数据结构存储在内存中，同时编写代码调用 CPU 和 GPU 执行算法。这样一来，我们就能把生活中的问题转移到计算机上，以更高效的方式解决各种复杂问题。",-1),f=s("p",null,"!!! tip",-1),A=s("pre",null,[s("code",null,`如果你对数据结构、算法、数组和二分查找等概念仍感到一知半解，请继续往下阅读，本书将引导你迈入数据结构与算法的知识殿堂。
`)],-1),q=[g,d,x,w,_,y,k,M,b,L,E,f,A];function z(v,B){return l(),n("div",null,q)}const C=t(u,[["render",z],["__file","03-算法无处不在.html.vue"]]),N=JSON.parse('{"path":"/HelloAlgo/%E7%AC%AC01%E7%AB%A0%20%E5%88%9D%E8%AF%86%E7%AE%97%E6%B3%95/03-%E7%AE%97%E6%B3%95%E6%97%A0%E5%A4%84%E4%B8%8D%E5%9C%A8.html","title":"算法无处不在","lang":"zh-CN","frontmatter":{"date":"2024-05-16T00:00:00.000Z","shortTitle":"03-算法无处不在"},"headers":[],"git":{"createdTime":1715866461000,"updatedTime":1715866461000,"contributors":[{"name":"OnePiece","email":"109900456+NgxuAnGMH@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.41,"words":1022},"filePathRelative":"HelloAlgo/第01章 初识算法/03-算法无处不在.md","localizedDate":"2024年5月16日","excerpt":"\\n<p>当我们听到“算法”这个词时，很自然地会想到数学。然而实际上，许多算法并不涉及复杂数学，而是更多地依赖基本逻辑，这些逻辑在我们的日常生活中处处可见。</p>\\n<p>在正式探讨算法之前，有一个有趣的事实值得分享：<strong>你已经在不知不觉中学会了许多算法，并习惯将它们应用到日常生活中了</strong>。下面我将举几个具体的例子来证实这一点。</p>\\n<p><strong>例一：查字典</strong>。在字典里，每个汉字都对应一个拼音，而字典是按照拼音字母顺序排列的。假设我们需要查找一个拼音首字母为 <span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\\"application/x-tex\\">r</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">r</span></span></span></span> 的字，通常会按照下图所示的方式实现。</p>"}');export{C as comp,N as data};
