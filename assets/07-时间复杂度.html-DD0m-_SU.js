import{_ as l,c as t,o as e,a as n,b as s,d as a}from"./app-DscWQGyf.js";const m="/assets/time_complexity_simple_example-Dfo8ColS.png",i="/assets/asymptotic_upper_bound-Ctwy6jXn.png",c="/assets/time_complexity_common_types-DgbUXOtd.png",o="/assets/time_complexity_constant_linear_quadratic-XrSv9GDC.png",p="/assets/time_complexity_exponential-BMbW6xf2.png",r="/assets/time_complexity_logarithmic-By49_rWP.png",h="/assets/time_complexity_logarithmic_linear-ClE6W5eJ.png",u="/assets/time_complexity_factorial-Bxg6tSHf.png",g={},d=n('<h1 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h1><p>运行时间可以直观且准确地反映算法的效率。如果我们想准确预估一段代码的运行时间，应该如何操作呢？</p><ol><li><strong>确定运行平台</strong>，包括硬件配置、编程语言、系统环境等，这些因素都会影响代码的运行效率。</li><li><strong>评估各种计算操作所需的运行时间</strong>，例如加法操作 <code>+</code> 需要 1 ns ，乘法操作 <code>*</code> 需要 10 ns ，打印操作 <code>print()</code> 需要 5 ns 等。</li><li><strong>统计代码中所有的计算操作</strong>，并将所有操作的执行时间求和，从而得到运行时间。</li></ol>',3),x=s("p",null,[a("例如在以下代码中，输入数据大小为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" ：")],-1),y=n(`<p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
# 在某运行平台下
def algorithm(n: int):
    a = 2      # 1 ns
    a = a + 1  # 1 ns
    a = a * 2  # 10 ns
    # 循环 n 次
    for _ in range(n):  # 1 ns
        print(0)        # 5 ns
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
// 在某运行平台下
void algorithm(int n) {
    int a = 2;  // 1 ns
    a = a + 1;  // 1 ns
    a = a * 2;  // 10 ns
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {  // 1 ns ，每轮都要执行 i++
        cout &lt;&lt; 0 &lt;&lt; endl;         // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
// 在某运行平台下
void algorithm(int n) {
    int a = 2;  // 1 ns
    a = a + 1;  // 1 ns
    a = a * 2;  // 10 ns
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {  // 1 ns ，每轮都要执行 i++
        System.out.println(0);     // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
// 在某运行平台下
void Algorithm(int n) {
    int a = 2;  // 1 ns
    a = a + 1;  // 1 ns
    a = a * 2;  // 10 ns
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {  // 1 ns ，每轮都要执行 i++
        Console.WriteLine(0);      // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
// 在某运行平台下
func algorithm(n int) {
    a := 2     // 1 ns
    a = a + 1  // 1 ns
    a = a * 2  // 10 ns
    // 循环 n 次
    for i := 0; i &lt; n; i++ {  // 1 ns
        fmt.Println(a)        // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
// 在某运行平台下
func algorithm(n: Int) {
    var a = 2 // 1 ns
    a = a + 1 // 1 ns
    a = a * 2 // 10 ns
    // 循环 n 次
    for _ in 0 ..&lt; n { // 1 ns
        print(0) // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
// 在某运行平台下
function algorithm(n) {
    var a = 2; // 1 ns
    a = a + 1; // 1 ns
    a = a * 2; // 10 ns
    // 循环 n 次
    for(let i = 0; i &lt; n; i++) { // 1 ns ，每轮都要执行 i++
        console.log(0); // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
// 在某运行平台下
function algorithm(n: number): void {
    var a: number = 2; // 1 ns
    a = a + 1; // 1 ns
    a = a * 2; // 10 ns
    // 循环 n 次
    for(let i = 0; i &lt; n; i++) { // 1 ns ，每轮都要执行 i++
        console.log(0); // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
// 在某运行平台下
void algorithm(int n) {
  int a = 2; // 1 ns
  a = a + 1; // 1 ns
  a = a * 2; // 10 ns
  // 循环 n 次
  for (int i = 0; i &lt; n; i++) { // 1 ns ，每轮都要执行 i++
    print(0); // 5 ns
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
// 在某运行平台下
fn algorithm(n: i32) {
    let mut a = 2;      // 1 ns
    a = a + 1;          // 1 ns
    a = a * 2;          // 10 ns
    // 循环 n 次
    for _ in 0..n {     // 1 ns ，每轮都要执行 i++
        println!(&quot;{}&quot;, 0);  // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
// 在某运行平台下
void algorithm(int n) {
    int a = 2;  // 1 ns
    a = a + 1;  // 1 ns
    a = a * 2;  // 10 ns
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {   // 1 ns ，每轮都要执行 i++
        printf(&quot;%d&quot;, 0);            // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
// 在某运行平台下
fun algorithm(n: Int) {
    var a = 2 // 1 ns
    a = a + 1 // 1 ns
    a = a * 2 // 10 ns
    // 循环 n 次
    for (i in 0..&lt;n) {  // 1 ns ，每轮都要执行 i++
        println(0)      // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
# 在某运行平台下
def algorithm(n)
    a = 2       # 1 ns
    a = a + 1   # 1 ns
    a = a * 2   # 10 ns
    # 循环 n 次
    (0...n).each do # 1 ns
        puts 0      # 5 ns
    end
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;
// 在某运行平台下
fn algorithm(n: usize) void {
    var a: i32 = 2; // 1 ns
    a += 1; // 1 ns
    a *= 2; // 10 ns
    // 循环 n 次
    for (0..n) |_| { // 1 ns
        std.debug.print(&quot;{}\\n&quot;, .{0}); // 5 ns
    }
}
\`\`\`
</code></pre>`,28),w=s("p",null,[a("根据以上方法，可以得到算法的运行时间为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"6"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"12"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(6n + 12)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"6"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"12"),s("span",{class:"mclose"},")")])])]),a(" ns ：")],-1),k=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,"+"),s("mn",null,"10"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"+"),s("mn",null,"5"),s("mo",{stretchy:"false"},")"),s("mo",null,"×"),s("mi",null,"n"),s("mo",null,"="),s("mn",null,"6"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"12")]),s("annotation",{encoding:"application/x-tex"}," 1 + 1 + 10 + (1 + 5) \\times n = 6n + 12 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"5"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"6"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"12")])])])])],-1),f=s("p",null,[a("但实际上，"),s("strong",null,"统计算法的运行时间既不合理也不现实"),a("。首先，我们不希望将预估时间和运行平台绑定，因为算法需要在各种不同的平台上运行。其次，我们很难获知每种操作的运行时间，这给预估过程带来了极大的难度。")],-1),M=s("h2",{id:"统计时间增长趋势",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#统计时间增长趋势"},[s("span",null,"统计时间增长趋势")])],-1),v=s("p",null,[a("时间复杂度分析统计的不是算法运行时间，"),s("strong",null,"而是算法运行时间随着数据量变大时的增长趋势"),a("。")],-1),_=s("p",null,[a("“时间增长趋势”这个概念比较抽象，我们通过一个例子来加以理解。假设输入数据大小为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" ，给定三个算法 "),s("code",null,"A"),a("、"),s("code",null,"B"),a(" 和 "),s("code",null,"C"),a(" ：")],-1),b=n(`<p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
# 算法 A 的时间复杂度：常数阶
def algorithm_A(n: int):
    print(0)
# 算法 B 的时间复杂度：线性阶
def algorithm_B(n: int):
    for _ in range(n):
        print(0)
# 算法 C 的时间复杂度：常数阶
def algorithm_C(n: int):
    for _ in range(1000000):
        print(0)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void algorithm_A(int n) {
    cout &lt;&lt; 0 &lt;&lt; endl;
}
// 算法 B 的时间复杂度：线性阶
void algorithm_B(int n) {
    for (int i = 0; i &lt; n; i++) {
        cout &lt;&lt; 0 &lt;&lt; endl;
    }
}
// 算法 C 的时间复杂度：常数阶
void algorithm_C(int n) {
    for (int i = 0; i &lt; 1000000; i++) {
        cout &lt;&lt; 0 &lt;&lt; endl;
    }
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void algorithm_A(int n) {
    System.out.println(0);
}
// 算法 B 的时间复杂度：线性阶
void algorithm_B(int n) {
    for (int i = 0; i &lt; n; i++) {
        System.out.println(0);
    }
}
// 算法 C 的时间复杂度：常数阶
void algorithm_C(int n) {
    for (int i = 0; i &lt; 1000000; i++) {
        System.out.println(0);
    }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void AlgorithmA(int n) {
    Console.WriteLine(0);
}
// 算法 B 的时间复杂度：线性阶
void AlgorithmB(int n) {
    for (int i = 0; i &lt; n; i++) {
        Console.WriteLine(0);
    }
}
// 算法 C 的时间复杂度：常数阶
void AlgorithmC(int n) {
    for (int i = 0; i &lt; 1000000; i++) {
        Console.WriteLine(0);
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
func algorithm_A(n int) {
    fmt.Println(0)
}
// 算法 B 的时间复杂度：线性阶
func algorithm_B(n int) {
    for i := 0; i &lt; n; i++ {
        fmt.Println(0)
    }
}
// 算法 C 的时间复杂度：常数阶
func algorithm_C(n int) {
    for i := 0; i &lt; 1000000; i++ {
        fmt.Println(0)
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
func algorithmA(n: Int) {
    print(0)
}

// 算法 B 的时间复杂度：线性阶
func algorithmB(n: Int) {
    for _ in 0 ..&lt; n {
        print(0)
    }
}

// 算法 C 的时间复杂度：常数阶
func algorithmC(n: Int) {
    for _ in 0 ..&lt; 1_000_000 {
        print(0)
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
function algorithm_A(n) {
    console.log(0);
}
// 算法 B 的时间复杂度：线性阶
function algorithm_B(n) {
    for (let i = 0; i &lt; n; i++) {
        console.log(0);
    }
}
// 算法 C 的时间复杂度：常数阶
function algorithm_C(n) {
    for (let i = 0; i &lt; 1000000; i++) {
        console.log(0);
    }
}

\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
function algorithm_A(n: number): void {
    console.log(0);
}
// 算法 B 的时间复杂度：线性阶
function algorithm_B(n: number): void {
    for (let i = 0; i &lt; n; i++) {
        console.log(0);
    }
}
// 算法 C 的时间复杂度：常数阶
function algorithm_C(n: number): void {
    for (let i = 0; i &lt; 1000000; i++) {
        console.log(0);
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void algorithmA(int n) {
  print(0);
}
// 算法 B 的时间复杂度：线性阶
void algorithmB(int n) {
  for (int i = 0; i &lt; n; i++) {
    print(0);
  }
}
// 算法 C 的时间复杂度：常数阶
void algorithmC(int n) {
  for (int i = 0; i &lt; 1000000; i++) {
    print(0);
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
fn algorithm_A(n: i32) {
    println!(&quot;{}&quot;, 0);
}
// 算法 B 的时间复杂度：线性阶
fn algorithm_B(n: i32) {
    for _ in 0..n {
        println!(&quot;{}&quot;, 0);
    }
}
// 算法 C 的时间复杂度：常数阶
fn algorithm_C(n: i32) {
    for _ in 0..1000000 {
        println!(&quot;{}&quot;, 0);
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void algorithm_A(int n) {
    printf(&quot;%d&quot;, 0);
}
// 算法 B 的时间复杂度：线性阶
void algorithm_B(int n) {
    for (int i = 0; i &lt; n; i++) {
        printf(&quot;%d&quot;, 0);
    }
}
// 算法 C 的时间复杂度：常数阶
void algorithm_C(int n) {
    for (int i = 0; i &lt; 1000000; i++) {
        printf(&quot;%d&quot;, 0);
    }
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
fun algoritm_A(n: Int) {
    println(0)
}
// 算法 B 的时间复杂度：线性阶
fun algorithm_B(n: Int) {
    for (i in 0..&lt;n){
        println(0)
    }
}
// 算法 C 的时间复杂度：常数阶
fun algorithm_C(n: Int) {
    for (i in 0..&lt;1000000) {
        println(0)
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
# 算法 A 的时间复杂度：常数阶
def algorithm_A(n)
    puts 0
end

# 算法 B 的时间复杂度：线性阶
def algorithm_B(n)
    (0...n).each { puts 0 }
end

# 算法 C 的时间复杂度：常数阶
def algorithm_C(n)
    (0...1_000_000).each { puts 0 }
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
fn algorithm_A(n: usize) void {
    _ = n;
    std.debug.print(&quot;{}\\n&quot;, .{0});
}
// 算法 B 的时间复杂度：线性阶
fn algorithm_B(n: i32) void {
    for (0..n) |_| {
        std.debug.print(&quot;{}\\n&quot;, .{0});
    }
}
// 算法 C 的时间复杂度：常数阶
fn algorithm_C(n: i32) void {
    _ = n;
    for (0..1000000) |_| {
        std.debug.print(&quot;{}\\n&quot;, .{0});
    }
}
\`\`\`
</code></pre><p>下图展示了以上三个算法函数的时间复杂度。</p>`,29),q=s("ul",null,[s("li",null,[a("算法 "),s("code",null,"A"),a(" 只有 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 个打印操作，算法运行时间不随着 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 增大而增长。我们称此算法的时间复杂度为“常数阶”。")]),s("li",null,[a("算法 "),s("code",null,"B"),a(" 中的打印操作需要循环 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 次，算法运行时间随着 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 增大呈线性增长。此算法的时间复杂度被称为“"),s("u",null,"线性阶"),a("”。")]),s("li",null,[a("算法 "),s("code",null,"C"),a(" 中的打印操作需要循环 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1000000")]),s("annotation",{encoding:"application/x-tex"},"1000000")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1000000")])])]),a(" 次，虽然运行时间很长，但它与输入数据大小 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 无关。因此 "),s("code",null,"C"),a(" 的时间复杂度和 "),s("code",null,"A"),a(" 相同，仍为“"),s("u",null,"常数阶"),a("”。")])],-1),O=s("figure",null,[s("img",{src:m,alt:"算法 A、B 和 C 的时间增长趋势",tabindex:"0",loading:"lazy"}),s("figcaption",null,"算法 A、B 和 C 的时间增长趋势")],-1),L=s("p",null,"相较于直接统计算法的运行时间，时间复杂度分析有哪些特点呢？",-1),z=s("ul",null,[s("li",null,[s("strong",null,"时间复杂度能够有效评估算法效率"),a("。例如，算法 "),s("code",null,"B"),a(" 的运行时间呈线性增长，在 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,">"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"n > 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 时比算法 "),s("code",null,"A"),a(" 更慢，在 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,">"),s("mn",null,"1000000")]),s("annotation",{encoding:"application/x-tex"},"n > 1000000")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1000000")])])]),a(" 时比算法 "),s("code",null,"C"),a(" 更慢。事实上，只要输入数据大小 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(),s("em",null,"足够大"),a("，复杂度为“常数阶”的算法"),s("em",null,"一定优于"),a("“线性阶”的算法，这正是"),s("em",null,"时间增长趋势"),a("的含义。")]),s("li",null,[s("strong",null,"时间复杂度的推算方法更简便"),a("。显然，运行平台和计算操作类型都与算法运行时间的增长趋势无关。因此在时间复杂度分析中，我们可以简单地将所有计算操作的执行时间视为相同的“单位时间”，从而将“计算操作运行时间统计”简化为“计算操作数量统计”，这样一来估算难度就大大降低了。")]),s("li",null,[s("strong",null,"时间复杂度也存在一定的局限性"),a("。例如，尽管算法 "),s("code",null,"A"),a(" 和 "),s("code",null,"C"),a(" 的时间复杂度相同，但实际运行时间差别很大。同样，尽管算法 "),s("code",null,"B"),a(" 的时间复杂度比 "),s("code",null,"C"),a(" 高，但在输入数据大小 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 较小时，算法 "),s("code",null,"B"),a(" 明显优于算法 "),s("code",null,"C"),a(" 。在这些情况下，我们很难仅凭时间复杂度判断算法效率的高低。当然，尽管存在上述问题，复杂度分析仍然是评判算法效率最有效且常用的方法。")])],-1),C=s("h2",{id:"函数渐近上界",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#函数渐近上界"},[s("span",null,"函数渐近上界")])],-1),A=s("p",null,[a("给定一个输入大小为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 的函数：")],-1),T=n(`<p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
def algorithm(n: int):
    a = 1      # +1
    a = a + 1  # +1
    a = a * 2  # +1
    # 循环 n 次
    for i in range(n):  # +1
        print(0)        # +1
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +1
    a = a + 1;  // +1
    a = a * 2;  // +1
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) { // +1（每轮都执行 i ++）
        cout &lt;&lt; 0 &lt;&lt; endl;    // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +1
    a = a + 1;  // +1
    a = a * 2;  // +1
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) { // +1（每轮都执行 i ++）
        System.out.println(0);    // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
void Algorithm(int n) {
    int a = 1;  // +1
    a = a + 1;  // +1
    a = a * 2;  // +1
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {   // +1（每轮都执行 i ++）
        Console.WriteLine(0);   // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
func algorithm(n int) {
    a := 1      // +1
    a = a + 1   // +1
    a = a * 2   // +1
    // 循环 n 次
    for i := 0; i &lt; n; i++ {   // +1
        fmt.Println(a)         // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
func algorithm(n: Int) {
    var a = 1 // +1
    a = a + 1 // +1
    a = a * 2 // +1
    // 循环 n 次
    for _ in 0 ..&lt; n { // +1
        print(0) // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
function algorithm(n) {
    var a = 1; // +1
    a += 1; // +1
    a *= 2; // +1
    // 循环 n 次
    for(let i = 0; i &lt; n; i++){ // +1（每轮都执行 i ++）
        console.log(0); // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
function algorithm(n: number): void{
    var a: number = 1; // +1
    a += 1; // +1
    a *= 2; // +1
    // 循环 n 次
    for(let i = 0; i &lt; n; i++){ // +1（每轮都执行 i ++）
        console.log(0); // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
void algorithm(int n) {
  int a = 1; // +1
  a = a + 1; // +1
  a = a * 2; // +1
  // 循环 n 次
  for (int i = 0; i &lt; n; i++) { // +1（每轮都执行 i ++）
    print(0); // +1
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
fn algorithm(n: i32) {
    let mut a = 1;   // +1
    a = a + 1;      // +1
    a = a * 2;      // +1

    // 循环 n 次
    for _ in 0..n { // +1（每轮都执行 i ++）
        println!(&quot;{}&quot;, 0); // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +1
    a = a + 1;  // +1
    a = a * 2;  // +1
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {   // +1（每轮都执行 i ++）
        printf(&quot;%d&quot;, 0);            // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
fun algorithm(n: Int) {
    var a = 1 // +1
    a = a + 1 // +1
    a = a * 2 // +1
    // 循环 n 次
    for (i in 0..&lt;n) { // +1（每轮都执行 i ++）
        println(0) // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
def algorithm(n)
    a = 1       # +1
    a = a + 1   # +1
    a = a * 2   # +1
    # 循环 n 次
    (0...n).each do # +1
        puts 0      # +1
    end
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;
fn algorithm(n: usize) void {
    var a: i32 = 1; // +1
    a += 1; // +1
    a *= 2; // +1
    // 循环 n 次
    for (0..n) |_| { // +1（每轮都执行 i ++）
        std.debug.print(&quot;{}\\n&quot;, .{0}); // +1
    }
}
\`\`\`
</code></pre>`,28),B=s("p",null,[a("设算法的操作数量是一个关于输入数据大小 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 的函数，记为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" ，则以上函数的操作数量为：")],-1),j=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"3"),s("mo",null,"+"),s("mn",null,"2"),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"}," T(n) = 3 + 2n ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"n")])])])])],-1),$=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 是一次函数，说明其运行时间的增长趋势是线性的，因此它的时间复杂度是线性阶。")],-1),S=s("p",null,[a("我们将线性阶的时间复杂度记为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" ，这个数学符号称为"),s("u",null,[a("大 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O")]),s("annotation",{encoding:"application/x-tex"},"O")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O")])])]),a(" 记号（big-"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O")]),s("annotation",{encoding:"application/x-tex"},"O")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O")])])]),a(" notation）")]),a("，表示函数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 的"),s("u",null,"渐近上界（asymptotic upper bound）"),a("。")],-1),E=s("p",null,[a("时间复杂度分析本质上是计算“操作数量 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a("”的渐近上界，它具有明确的数学定义。")],-1),P=s("p",null,'!!! note "函数渐近上界"',-1),D=s("pre",null,[s("code",null,`若存在正实数 $c$ 和实数 $n_0$ ，使得对于所有的 $n > n_0$ ，均有 $T(n) \\leq c \\cdot f(n)$ ，则可认为 $f(n)$ 给出了 $T(n)$ 的一个渐近上界，记为 $T(n) = O(f(n))$ 。
`)],-1),I=s("p",null,[a("如下图所示，计算渐近上界就是寻找一个函数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" ，使得当 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 趋向于无穷大时，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 和 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 处于"),s("em",null,"相同的增长级别，仅相差一个常数项"),a(),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"c")]),s("annotation",{encoding:"application/x-tex"},"c")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"c")])])]),a(" 的倍数。")],-1),J=s("figure",null,[s("img",{src:i,alt:"函数的渐近上界",tabindex:"0",loading:"lazy"}),s("figcaption",null,"函数的渐近上界")],-1),W=s("h2",{id:"推算方法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#推算方法"},[s("span",null,"推算方法")])],-1),R=s("p",null,"渐近上界的数学味儿有点重，如果你感觉没有完全理解，也无须担心。我们可以先掌握推算方法，在不断的实践中，就可以逐渐领悟其数学意义。",-1),G=s("p",null,[a("根据定义，确定 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 之后，我们便可得到时间复杂度 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(f(n))")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"))")])])]),a(" 。那么如何确定渐近上界 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 呢？总体分为两步：首先统计操作数量，然后判断渐近上界。")],-1),N=s("h3",{id:"第一步-统计操作数量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#第一步-统计操作数量"},[s("span",null,"第一步：统计操作数量")])],-1),Z=s("p",null,[a("针对代码，逐行从上到下计算即可。然而，由于上述 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"c"),s("mo",null,"⋅"),s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"c \\cdot f(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4445em"}}),s("span",{class:"mord mathnormal"},"c"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 中的常数项 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"c")]),s("annotation",{encoding:"application/x-tex"},"c")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"c")])])]),a(" 可以取任意大小，"),s("strong",null,[a("因此操作数量 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 中的各种系数、常数项都可以忽略")]),a("。根据此原则，可以总结出以下计数简化技巧。")],-1),H=s("ol",null,[s("li",null,[s("strong",null,[a("忽略 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 中的常数项")]),a("。因为它们都与 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 无关，所以对时间复杂度不产生影响。")]),s("li",null,[s("strong",null,"省略所有系数"),a("。例如，循环 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2"),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"2n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"n")])])]),a(" 次、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"5"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"5n + 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"5"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 次等，都可以简化记为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 次，因为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 前面的系数对时间复杂度没有影响。")]),s("li",null,[s("strong",null,"循环嵌套时使用乘法"),a("。总操作数量等于外层循环和内层循环操作数量之积，每一层循环依然可以分别套用第 "),s("code",null,"1."),a(" 点和第 "),s("code",null,"2."),a(" 点的技巧。")])],-1),K=n(`<p>给定一个函数，我们可以用上述技巧来统计操作数量：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
def algorithm(n: int):
    a = 1      # +0（技巧 1）
    a = a + n  # +0（技巧 1）
    # +n（技巧 2）
    for i in range(5 * n + 1):
        print(0)
    # +n*n（技巧 3）
    for i in range(2 * n):
        for j in range(n + 1):
            print(0)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (int i = 0; i &lt; 5 * n + 1; i++) {
        cout &lt;&lt; 0 &lt;&lt; endl;
    }
    // +n*n（技巧 3）
    for (int i = 0; i &lt; 2 * n; i++) {
        for (int j = 0; j &lt; n + 1; j++) {
            cout &lt;&lt; 0 &lt;&lt; endl;
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (int i = 0; i &lt; 5 * n + 1; i++) {
        System.out.println(0);
    }
    // +n*n（技巧 3）
    for (int i = 0; i &lt; 2 * n; i++) {
        for (int j = 0; j &lt; n + 1; j++) {
            System.out.println(0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
void Algorithm(int n) {
    int a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (int i = 0; i &lt; 5 * n + 1; i++) {
        Console.WriteLine(0);
    }
    // +n*n（技巧 3）
    for (int i = 0; i &lt; 2 * n; i++) {
        for (int j = 0; j &lt; n + 1; j++) {
            Console.WriteLine(0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
func algorithm(n int) {
    a := 1     // +0（技巧 1）
    a = a + n  // +0（技巧 1）
    // +n（技巧 2）
    for i := 0; i &lt; 5 * n + 1; i++ {
        fmt.Println(0)
    }
    // +n*n（技巧 3）
    for i := 0; i &lt; 2 * n; i++ {
        for j := 0; j &lt; n + 1; j++ {
            fmt.Println(0)
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
func algorithm(n: Int) {
    var a = 1 // +0（技巧 1）
    a = a + n // +0（技巧 1）
    // +n（技巧 2）
    for _ in 0 ..&lt; (5 * n + 1) {
        print(0)
    }
    // +n*n（技巧 3）
    for _ in 0 ..&lt; (2 * n) {
        for _ in 0 ..&lt; (n + 1) {
            print(0)
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
function algorithm(n) {
    let a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (let i = 0; i &lt; 5 * n + 1; i++) {
        console.log(0);
    }
    // +n*n（技巧 3）
    for (let i = 0; i &lt; 2 * n; i++) {
        for (let j = 0; j &lt; n + 1; j++) {
            console.log(0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
function algorithm(n: number): void {
    let a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (let i = 0; i &lt; 5 * n + 1; i++) {
        console.log(0);
    }
    // +n*n（技巧 3）
    for (let i = 0; i &lt; 2 * n; i++) {
        for (let j = 0; j &lt; n + 1; j++) {
            console.log(0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
void algorithm(int n) {
  int a = 1; // +0（技巧 1）
  a = a + n; // +0（技巧 1）
  // +n（技巧 2）
  for (int i = 0; i &lt; 5 * n + 1; i++) {
    print(0);
  }
  // +n*n（技巧 3）
  for (int i = 0; i &lt; 2 * n; i++) {
    for (int j = 0; j &lt; n + 1; j++) {
      print(0);
    }
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
fn algorithm(n: i32) {
    let mut a = 1;     // +0（技巧 1）
    a = a + n;        // +0（技巧 1）

    // +n（技巧 2）
    for i in 0..(5 * n + 1) {
        println!(&quot;{}&quot;, 0);
    }

    // +n*n（技巧 3）
    for i in 0..(2 * n) {
        for j in 0..(n + 1) {
            println!(&quot;{}&quot;, 0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (int i = 0; i &lt; 5 * n + 1; i++) {
        printf(&quot;%d&quot;, 0);
    }
    // +n*n（技巧 3）
    for (int i = 0; i &lt; 2 * n; i++) {
        for (int j = 0; j &lt; n + 1; j++) {
            printf(&quot;%d&quot;, 0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
fun algorithm(n: Int) {
    var a = 1   // +0（技巧 1）
    a = a + n   // +0（技巧 1）
    // +n（技巧 2）
    for (i in 0..&lt;5 * n + 1) {
        println(0)
    }
    // +n*n（技巧 3）
    for (i in 0..&lt;2 * n) {
        for (j in 0..&lt;n + 1) {
            println(0)
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
def algorithm(n)
    a = 1       # +0（技巧 1）
    a = a + n   # +0（技巧 1）
    # +n（技巧 2）
    (0...(5 * n + 1)).each do { puts 0 }
    # +n*n（技巧 3）
    (0...(2 * n)).each do
        (0...(n + 1)).each do { puts 0 }
    end
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;
fn algorithm(n: usize) void {
    var a: i32 = 1;     // +0（技巧 1）
    a = a + @as(i32, @intCast(n));        // +0（技巧 1）

    // +n（技巧 2）
    for(0..(5 * n + 1)) |_| {
        std.debug.print(&quot;{}\\n&quot;, .{0});
    }

    // +n*n（技巧 3）
    for(0..(2 * n)) |_| {
        for(0..(n + 1)) |_| {
            std.debug.print(&quot;{}\\n&quot;, .{0});
        }
    }
}
\`\`\`
</code></pre>`,29),V=s("p",null,[a("以下公式展示了使用上述技巧前后的统计结果，两者推算出的时间复杂度都为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a(" 。")],-1),X=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right left right",columnspacing:"0em 1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mn",null,"2"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"5"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mn",null,"2")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mtext",null,"完整统计 (-.-|||)")])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mn",null,"2"),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",null,"+"),s("mn",null,"7"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"3")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",null,"n")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mtext",null,"偷懒统计 (o.O)")])])])]),s("annotation",{encoding:"application/x-tex"}," \\begin{aligned} T(n) & = 2n(n + 1) + (5n + 1) + 2 & \\text{完整统计 (-.-|||)} \\newline & = 2n^2 + 7n + 3 \\newline T(n) & = n^2 + n & \\text{偷懒统计 (o.O)} \\end{aligned} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"4.5482em","vertical-align":"-2.0241em"}}),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.5241em"}},[s("span",{style:{top:"-4.6841em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])]),s("span",{style:{top:"-3.16em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"})]),s("span",{style:{top:"-1.6359em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.0241em"}},[s("span")])])])]),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.5241em"}},[s("span",{style:{top:"-4.6841em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"5"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"2")])]),s("span",{style:{top:"-3.16em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"7"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"3")])]),s("span",{style:{top:"-1.6359em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.0241em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"1em"}}),s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.5241em"}},[s("span",{style:{top:"-4.6841em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"完整统计"),s("span",{class:"mord"}," (-.-|||)")])])]),s("span",{style:{top:"-1.6359em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"偷懒统计"),s("span",{class:"mord"}," (o.O)")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.0241em"}},[s("span")])])])])])])])])])])],-1),U=s("h3",{id:"第二步-判断渐近上界",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#第二步-判断渐近上界"},[s("span",null,"第二步：判断渐近上界")])],-1),F=s("p",null,[s("strong",null,[a("时间复杂度由 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 中最高阶的项来决定")]),a("。这是因为在 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 趋于无穷大时，最高阶的项将发挥主导作用，其他项的影响都可以忽略。")],-1),Q=s("p",null,[a("下表展示了一些例子，其中一些夸张的值是为了强调“系数无法撼动阶数”这一结论。当 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 趋于无穷大时，这些常数变得无足轻重。")],-1),Y=s("p",null,"不同操作数量对应的时间复杂度",-1),ss=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,[a("操作数量 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])]),s("th",null,[a("时间复杂度 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(f(n))")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"))")])])])])])]),s("tbody",null,[s("tr",null,[s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"100000")]),s("annotation",{encoding:"application/x-tex"},"100000")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"100000")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])])]),s("tr",null,[s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"3"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"3n + 2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])]),s("tr",null,[s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2"),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",null,"+"),s("mn",null,"3"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"2n^2 + 3n + 2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])])])]),s("tr",null,[s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"n"),s("mn",null,"3")]),s("mo",null,"+"),s("mn",null,"10000"),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"n^3 + 10000n^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"10000"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"3")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^3)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])])])])])]),s("span",{class:"mclose"},")")])])])])]),s("tr",null,[s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mi",null,"n")]),s("mo",null,"+"),s("mn",null,"10000"),s("msup",null,[s("mi",null,"n"),s("mn",null,"10000")])]),s("annotation",{encoding:"application/x-tex"},"2^n + 10000n^{10000}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7477em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"10000"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"10000")])])])])])])])])])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mn",null,"2"),s("mi",null,"n")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(2^n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),s("span",{class:"mclose"},")")])])])])])])],-1),as=s("h2",{id:"常见类型",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#常见类型"},[s("span",null,"常见类型")])],-1),ns=s("p",null,[a("设输入数据大小为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" ，常见的时间复杂度类型如下图所示（按照从低到高的顺序排列）。")],-1),ls=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right",columnspacing:""},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mn",null,"2"),s("mi",null,"n")]),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},"!"),s("mo",{stretchy:"false"},")")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mtext",null,"常数阶"),s("mo",null,"<"),s("mtext",null,"对数阶"),s("mo",null,"<"),s("mtext",null,"线性阶"),s("mo",null,"<"),s("mtext",null,"线性对数阶"),s("mo",null,"<"),s("mtext",null,"平方阶"),s("mo",null,"<"),s("mtext",null,"指数阶"),s("mo",null,"<"),s("mtext",null,"阶乘阶")])])])])]),s("annotation",{encoding:"application/x-tex"}," \\begin{aligned} O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(2^n) < O(n!) \\newline \\text{常数阶} < \\text{对数阶} < \\text{线性阶} < \\text{线性对数阶} < \\text{平方阶} < \\text{指数阶} < \\text{阶乘阶} \\end{aligned} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0241em","vertical-align":"-1.2621em"}}),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.7621em"}},[s("span",{style:{top:"-3.8979em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"!)")])]),s("span",{style:{top:"-2.3979em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"常数阶")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"对数阶")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"线性阶")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"线性对数阶")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"平方阶")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"指数阶")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"阶乘阶")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2621em"}},[s("span")])])])])])])])])])])],-1),ts=s("figure",null,[s("img",{src:c,alt:"常见的时间复杂度类型",tabindex:"0",loading:"lazy"}),s("figcaption",null,"常见的时间复杂度类型")],-1),es=s("h3",{id:"常数阶",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#常数阶"},[s("span",null,[a("常数阶 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])])])],-1),ms=s("p",null,[a("常数阶的操作数量与输入数据大小 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 无关，即不随着 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 的变化而变化。")],-1),is=s("p",null,[a("在以下函数中，尽管操作数量 "),s("code",null,"size"),a(" 可能很大，但由于其与输入数据大小 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 无关，因此时间复杂度仍为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),a(" ：")],-1),cs=s("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[s("pre",{class:"language-src"},[s("code",null,`[file]{time_complexity}-[class]{}-[func]{constant}
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),os=s("h3",{id:"线性阶",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#线性阶"},[s("span",null,[a("线性阶 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])])],-1),ps=s("p",null,[a("线性阶的操作数量相对于输入数据大小 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 以线性级别增长。线性阶通常出现在"),s("em",null,"单层循环"),a("中：")],-1),rs=s("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[s("pre",{class:"language-src"},[s("code",null,`[file]{time_complexity}-[class]{}-[func]{linear}
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),hs=s("p",null,[a("遍历数组和遍历链表等操作的时间复杂度均为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" ，其中 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 为数组或链表的长度：")],-1),us=s("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[s("pre",{class:"language-src"},[s("code",null,`[file]{time_complexity}-[class]{}-[func]{array_traversal}
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),gs=s("p",null,[a("值得注意的是，"),s("strong",null,[a("输入数据大小 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 需根据输入数据的类型来具体确定")]),a("。比如在第一个示例中，变量 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 为输入数据大小；在第二个示例中，数组长度 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 为数据大小。")],-1),ds=s("h3",{id:"平方阶",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#平方阶"},[s("span",null,[a("平方阶 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])])])])],-1),xs=s("p",null,[a("平方阶的操作数量相对于输入数据大小 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 以平方级别增长。平方阶通常出现在"),s("em",null,"嵌套循环"),a("中，外层循环和内层循环的时间复杂度都为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" ，因此总体的时间复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a(" ：")],-1),ys=n(`<div class="language-src line-numbers-mode" data-ext="src" data-title="src"><pre class="language-src"><code>[file]{time_complexity}-[class]{}-[func]{quadratic}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下图对比了常数阶、线性阶和平方阶三种时间复杂度。</p><figure><img src="`+o+'" alt="常数阶、线性阶和平方阶的时间复杂度" tabindex="0" loading="lazy"><figcaption>常数阶、线性阶和平方阶的时间复杂度</figcaption></figure>',3),ws=s("p",null,[a("以冒泡排序为例，外层循环执行 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"n - 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 次，内层循环执行 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"n-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a("、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"n-2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])]),a("、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"…")]),s("annotation",{encoding:"application/x-tex"},"\\dots")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.123em"}}),s("span",{class:"minner"},"…")])])]),a("、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])]),a("、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 次，平均为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"n / 2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord"},"/2")])])]),a(" 次，因此时间复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mi",null,"n"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O((n - 1) n / 2) = O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"(("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord"},"/2"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a(" ：")],-1),ks=s("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[s("pre",{class:"language-src"},[s("code",null,`[file]{time_complexity}-[class]{}-[func]{bubble_sort}
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),fs=s("h3",{id:"指数阶",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#指数阶"},[s("span",null,[a("指数阶 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mn",null,"2"),s("mi",null,"n")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(2^n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),s("span",{class:"mclose"},")")])])])])])],-1),Ms=s("p",null,[a("生物学的“细胞分裂”是指数阶增长的典型例子：初始状态为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 个细胞，分裂一轮后变为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])]),a(" 个，分裂两轮后变为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])]),a(" 个，以此类推，分裂 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 轮后有 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"2^n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6644em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])])])])]),a(" 个细胞。")],-1),vs=s("p",null,[a("下图和以下代码模拟了细胞分裂的过程，时间复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mn",null,"2"),s("mi",null,"n")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(2^n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),s("span",{class:"mclose"},")")])])]),a(" ：")],-1),_s=n(`<div class="language-src line-numbers-mode" data-ext="src" data-title="src"><pre class="language-src"><code>[file]{time_complexity}-[class]{}-[func]{exponential}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="指数阶的时间复杂度" tabindex="0" loading="lazy"><figcaption>指数阶的时间复杂度</figcaption></figure>',2),bs=s("p",null,[a("在实际算法中，指数阶常出现于"),s("mark",null,"递归函数"),a("中。例如在以下代码中，其递归地一分为二，经过 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 次分裂后停止：")],-1),qs=s("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[s("pre",{class:"language-src"},[s("code",null,`[file]{time_complexity}-[class]{}-[func]{exp_recur}
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),Os=s("p",null,[a("指数阶增长非常迅速，在穷举法（暴力搜索、回溯等）中比较常见。"),s("em",null,"对于数据规模较大的问题"),a("，指数阶是不可接受的，通常需要使用"),s("mark",null,"动态规划"),a("或"),s("mark",null,"贪心算法"),a("等来解决。")],-1),Ls=s("h3",{id:"对数阶",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#对数阶"},[s("span",null,[a("对数阶 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(\\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])])],-1),zs=s("p",null,[a("与指数阶相反，对数阶反映了“每轮缩减到一半”的情况。设输入数据大小为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" ，由于每轮缩减到一半，因此循环次数是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mn",null,"2")]),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"\\log_2 n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9386em","vertical-align":"-0.2441em"}}),s("span",{class:"mop"},[s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.207em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" ，即 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"2^n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6644em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])])])])]),a(" 的反函数。")],-1),Cs=s("p",null,[a("下图和以下代码模拟了“每轮缩减到一半”的过程，时间复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mn",null,"2")]),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(\\log_2 n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.207em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" ，简记为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(\\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" ：")],-1),As=n(`<div class="language-src line-numbers-mode" data-ext="src" data-title="src"><pre class="language-src"><code>[file]{time_complexity}-[class]{}-[func]{logarithmic}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="对数阶的时间复杂度" tabindex="0" loading="lazy"><figcaption>对数阶的时间复杂度</figcaption></figure>',2),Ts=s("p",null,[a("与指数阶类似，对数阶也常出现于递归函数中。以下代码形成了一棵高度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mn",null,"2")]),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"\\log_2 n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9386em","vertical-align":"-0.2441em"}}),s("span",{class:"mop"},[s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.207em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 的递归树：")],-1),Bs=s("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[s("pre",{class:"language-src"},[s("code",null,`[file]{time_complexity}-[class]{}-[func]{log_recur}
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),js=s("p",null,"对数阶常出现于基于分治策略的算法中，体现了“一分为多”和“化繁为简”的算法思想。它增长缓慢，是仅次于常数阶的理想的时间复杂度。",-1),$s=s("p",null,[a('!!! tip "'),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(\\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(' 的底数是多少？"')],-1),Ss=s("pre",null,[s("code",null,`准确来说，“一分为 $m$”对应的时间复杂度是 $O(\\log_m n)$ 。而通过对数换底公式，我们可以得到具有不同底数、相等的时间复杂度：

$$
O(\\log_m n) = O(\\log_k n / \\log_k m) = O(\\log_k n)
$$

也就是说，底数 $m$ 可以在不影响复杂度的前提下转换。因此我们通常会省略底数 $m$ ，将对数阶直接记为 $O(\\log n)$ 。
`)],-1),Es=s("h3",{id:"线性对数阶",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#线性对数阶"},[s("span",null,[a("线性对数阶 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n \\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])])],-1),Ps=s("p",null,[a("线性对数阶常出现于嵌套循环中，两层循环的时间复杂度分别为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(\\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 和 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 。相关代码如下：")],-1),Ds=s("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[s("pre",{class:"language-src"},[s("code",null,`[file]{time_complexity}-[class]{}-[func]{linear_log_recur}
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),Is=s("p",null,[a("下图展示了线性对数阶的生成方式。二叉树的每一层的操作总数都为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" ，树共有 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mn",null,"2")]),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"\\log_2 n + 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9386em","vertical-align":"-0.2441em"}}),s("span",{class:"mop"},[s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.207em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 层，因此时间复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n \\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 。")],-1),Js=s("figure",null,[s("img",{src:h,alt:"线性对数阶的时间复杂度",tabindex:"0",loading:"lazy"}),s("figcaption",null,"线性对数阶的时间复杂度")],-1),Ws=s("p",null,[a("主流排序算法的时间复杂度通常为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n \\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" ，例如快速排序、归并排序、堆排序等。")],-1),Rs=s("h3",{id:"阶乘阶",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#阶乘阶"},[s("span",null,[a("阶乘阶 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},"!"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n!)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"!)")])])])])])],-1),Gs=s("p",null,[a("阶乘阶对应数学上的“全排列”问题。给定 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 个互不重复的元素，求其所有可能的排列方案，方案数量为：")],-1),Ns=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",{stretchy:"false"},"!"),s("mo",null,"="),s("mi",null,"n"),s("mo",null,"×"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"×"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"2"),s("mo",{stretchy:"false"},")"),s("mo",null,"×"),s("mo",null,"⋯"),s("mo",null,"×"),s("mn",null,"2"),s("mo",null,"×"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"}," n! = n \\times (n - 1) \\times (n - 2) \\times \\dots \\times 2 \\times 1 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"!"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"minner"},"⋯"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])])],-1),Zs=s("p",null,[a("阶乘通常使用递归实现。如下图和以下代码所示，第一层分裂出 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 个，第二层分裂出 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"n - 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 个，以此类推，直至第 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 层时停止分裂：")],-1),Hs=n(`<div class="language-src line-numbers-mode" data-ext="src" data-title="src"><pre class="language-src"><code>[file]{time_complexity}-[class]{}-[func]{factorial_recur}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="阶乘阶的时间复杂度" tabindex="0" loading="lazy"><figcaption>阶乘阶的时间复杂度</figcaption></figure>',2),Ks=s("p",null,[a("请注意，因为当 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"≥"),s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"n \\geq 4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7719em","vertical-align":"-0.136em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])]),a(" 时恒有 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",{stretchy:"false"},"!"),s("mo",null,">"),s("msup",null,[s("mn",null,"2"),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"n! > 2^n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"!"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6644em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])])])])]),a(" ，所以阶乘阶比指数阶增长得更快，在 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 较大时也是不可接受的。")],-1),Vs=s("h2",{id:"最差、最佳、平均时间复杂度",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#最差、最佳、平均时间复杂度"},[s("span",null,"最差、最佳、平均时间复杂度")])],-1),Xs=s("p",null,[s("strong",null,"算法的时间效率往往不是固定的，而是与输入数据的分布有关"),a("。假设输入一个长度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 的数组 "),s("code",null,"nums"),a(" ，其中 "),s("code",null,"nums"),a(" 由从 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 至 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 的数字组成，每个数字只出现一次；但元素顺序是随机打乱的，任务目标是返回元素 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 的索引。我们可以得出以下结论。")],-1),Us=s("ul",null,[s("li",null,[a("当 "),s("code",null,"nums = [?, ?, ..., 1]"),a(" ，即当末尾元素是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 时，需要完整遍历数组，"),s("strong",null,[a("达到最差时间复杂度 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])]),a(" 。")]),s("li",null,[a("当 "),s("code",null,"nums = [1, ?, ?, ...]"),a(" ，即当首个元素为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 时，无论数组多长都不需要继续遍历，"),s("strong",null,[a("达到最佳时间复杂度 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"Ω"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\Omega(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"Ω"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])]),a(" 。")])],-1),Fs=s("p",null,[a("“最差时间复杂度”对应函数渐近上界，使用大 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O")]),s("annotation",{encoding:"application/x-tex"},"O")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O")])])]),a(" 记号表示。相应地，“最佳时间复杂度”对应函数渐近下界，用 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"Ω")]),s("annotation",{encoding:"application/x-tex"},"\\Omega")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord"},"Ω")])])]),a(" 记号表示：")],-1),Qs=s("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[s("pre",{class:"language-src"},[s("code",null,`[file]{worst_best_time_complexity}-[class]{}-[func]{find_one}
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),Ys=s("p",null,[a("值得说明的是，我们在实际中很少使用最佳时间复杂度，因为通常只有在很小概率下才能达到，可能会带来一定的误导性。"),s("strong",null,"而最差时间复杂度更为实用，因为它给出了一个效率安全值"),a("，让我们可以放心地使用算法。")],-1),sa=s("p",null,[a("从上述示例可以看出，最差时间复杂度和最佳时间复杂度只出现于“特殊的数据分布”，这些情况的出现概率可能很小，并不能真实地反映算法运行效率。相比之下，"),s("strong",null,"平均时间复杂度可以体现算法在随机输入数据下的运行效率"),a("，用 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"Θ")]),s("annotation",{encoding:"application/x-tex"},"\\Theta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord"},"Θ")])])]),a(" 记号来表示。")],-1),aa=s("p",null,[a("对于部分算法，我们可以简单地推算出随机数据分布下的平均情况。比如上述示例，由于输入数组是被打乱的，因此元素 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 出现在任意索引的概率都是相等的，那么算法的平均循环次数就是数组长度的一半 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"n / 2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord"},"/2")])])]),a(" ，平均时间复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"Θ"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",{mathvariant:"normal"},"Θ"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\Theta(n / 2) = \\Theta(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"Θ"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord"},"/2"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"Θ"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(" 。")],-1),na=s("p",null,"但对于较为复杂的算法，计算平均时间复杂度往往比较困难，因为很难分析出在数据分布下的整体数学期望。在这种情况下，我们通常使用最差时间复杂度作为算法效率的评判标准。",-1),la=s("p",null,[a('!!! question "为什么很少看到 '),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"Θ")]),s("annotation",{encoding:"application/x-tex"},"\\Theta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord"},"Θ")])])]),a(' 符号？"')],-1),ta=s("pre",null,[s("code",null,`可能由于 $O$ 符号过于朗朗上口，因此我们常常使用它来表示平均时间复杂度。但从严格意义上讲，这种做法并不规范。在本书和其他资料中，若遇到类似“平均时间复杂度 $O(n)$”的表述，请将其直接理解为 $\\Theta(n)$ 。
`)],-1),ea=[d,x,y,w,k,f,M,v,_,b,q,O,L,z,C,A,T,B,j,$,S,E,P,D,I,J,W,R,G,N,Z,H,K,V,X,U,F,Q,Y,ss,as,ns,ls,ts,es,ms,is,cs,os,ps,rs,hs,us,gs,ds,xs,ys,ws,ks,fs,Ms,vs,_s,bs,qs,Os,Ls,zs,Cs,As,Ts,Bs,js,$s,Ss,Es,Ps,Ds,Is,Js,Ws,Rs,Gs,Ns,Zs,Hs,Ks,Vs,Xs,Us,Fs,Qs,Ys,sa,aa,na,la,ta];function ma(ia,ca){return e(),t("div",null,ea)}const pa=l(g,[["render",ma],["__file","07-时间复杂度.html.vue"]]),ra=JSON.parse('{"path":"/HelloAlgo/%E7%AC%AC02%E7%AB%A0%20%E5%A4%8D%E6%9D%82%E5%BA%A6%E5%88%86%E6%9E%90/07-%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6.html","title":"时间复杂度","lang":"zh-CN","frontmatter":{"date":"2024-05-16T00:00:00.000Z","shortTitle":"07-时间复杂度"},"headers":[{"level":2,"title":"统计时间增长趋势","slug":"统计时间增长趋势","link":"#统计时间增长趋势","children":[]},{"level":2,"title":"函数渐近上界","slug":"函数渐近上界","link":"#函数渐近上界","children":[]},{"level":2,"title":"推算方法","slug":"推算方法","link":"#推算方法","children":[{"level":3,"title":"第一步：统计操作数量","slug":"第一步-统计操作数量","link":"#第一步-统计操作数量","children":[]},{"level":3,"title":"第二步：判断渐近上界","slug":"第二步-判断渐近上界","link":"#第二步-判断渐近上界","children":[]}]},{"level":2,"title":"常见类型","slug":"常见类型","link":"#常见类型","children":[{"level":3,"title":"常数阶","slug":"常数阶","link":"#常数阶","children":[]},{"level":3,"title":"线性阶","slug":"线性阶","link":"#线性阶","children":[]},{"level":3,"title":"平方阶","slug":"平方阶","link":"#平方阶","children":[]},{"level":3,"title":"指数阶","slug":"指数阶","link":"#指数阶","children":[]},{"level":3,"title":"对数阶","slug":"对数阶","link":"#对数阶","children":[]},{"level":3,"title":"线性对数阶","slug":"线性对数阶","link":"#线性对数阶","children":[]},{"level":3,"title":"阶乘阶","slug":"阶乘阶","link":"#阶乘阶","children":[]}]},{"level":2,"title":"最差、最佳、平均时间复杂度","slug":"最差、最佳、平均时间复杂度","link":"#最差、最佳、平均时间复杂度","children":[]}],"git":{"createdTime":1715867746000,"updatedTime":1715868418000,"contributors":[{"name":"OnePiece","email":"109900456+NgxuAnGMH@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":23.9,"words":7169},"filePathRelative":"HelloAlgo/第02章 复杂度分析/07-时间复杂度.md","localizedDate":"2024年5月16日","excerpt":"\\n<p>运行时间可以直观且准确地反映算法的效率。如果我们想准确预估一段代码的运行时间，应该如何操作呢？</p>\\n<ol>\\n<li><strong>确定运行平台</strong>，包括硬件配置、编程语言、系统环境等，这些因素都会影响代码的运行效率。</li>\\n<li><strong>评估各种计算操作所需的运行时间</strong>，例如加法操作 <code>+</code> 需要 1 ns ，乘法操作 <code>*</code> 需要 10 ns ，打印操作 <code>print()</code> 需要 5 ns 等。</li>\\n<li><strong>统计代码中所有的计算操作</strong>，并将所有操作的执行时间求和，从而得到运行时间。</li>\\n</ol>"}');export{pa as comp,ra as data};
