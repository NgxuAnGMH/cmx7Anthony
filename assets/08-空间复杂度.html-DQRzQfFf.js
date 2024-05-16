import{_ as t,c as l,o as e,d as a,a as n,b as s}from"./app-C4v31drI.js";const i="/assets/space_types-D6QhStTE.png",c="/assets/space_complexity_common_types-DWCDQr5E.png",o="/assets/space_complexity_recursive_linear-CpfCgYE2.png",m="/assets/space_complexity_recursive_quadratic-DH0SKVn7.png",r="/assets/space_complexity_exponential-DJCmQdrb.png",p={},u=a('<h1 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度"><span>空间复杂度</span></a></h1><p><u>空间复杂度（space complexity）</u>用于衡量算法占用内存空间随着数据量变大时的增长趋势。这个概念与时间复杂度非常类似，只需将“运行时间”替换为“占用内存空间”。</p><h2 id="算法相关空间" tabindex="-1"><a class="header-anchor" href="#算法相关空间"><span>算法相关空间</span></a></h2><p>算法在运行过程中使用的内存空间主要包括以下几种。</p><ul><li><strong>输入空间</strong>：用于存储算法的输入数据。</li><li><strong>暂存空间</strong>：用于存储算法在运行过程中的变量、对象、函数上下文等数据。</li><li><mark>输出空间</mark>：用于存储算法的输出数据。</li></ul><p>一般情况下，空间复杂度的统计范围是“<u>暂存空间</u>”加上“<u>输出空间</u>”。</p><p>暂存空间可以进一步划分为三个部分。</p><ul><li><mark>暂存数据</mark>：用于保存算法运行过程中的各种常量、变量、对象等。</li><li><mark>栈帧空间</mark>：用于保存调用函数的上下文数据。系统在每次调用函数时都会在栈顶部创建一个栈帧，函数返回后，栈帧空间会被释放。</li><li><strong>指令空间</strong>：用于保存编译后的程序指令，在实际统计中通常忽略不计。</li></ul><p>在分析一段程序的空间复杂度时，我们通常统计<mark>暂存数据</mark>、<mark>栈帧空间</mark>和<mark>输出数据</mark>三部分，如下图所示。</p><figure><img src="'+i+`" alt="算法使用的相关空间" tabindex="0" loading="lazy"><figcaption>算法使用的相关空间</figcaption></figure><p>相关代码如下：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
class Node:
    &quot;&quot;&quot;类&quot;&quot;&quot;
    def __init__(self, x: int):
        self.val: int = x              # 节点值
        self.next: Node | None = None  # 指向下一节点的引用

def function() -&gt; int:
    &quot;&quot;&quot;函数&quot;&quot;&quot;
    # 执行某些操作...
    return 0

def algorithm(n) -&gt; int:  # 输入数据
    A = 0                 # 暂存数据（常量，一般用大写字母表示）
    b = 0                 # 暂存数据（变量）
    node = Node(0)        # 暂存数据（对象）
    c = function()        # 栈帧空间（调用函数）
    return A + b + c      # 输出数据
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
/* 结构体 */
struct Node {
    int val;
    Node *next;
    Node(int x) : val(x), next(nullptr) {}
};

/* 函数 */
int func() {
    // 执行某些操作...
    return 0;
}

int algorithm(int n) {        // 输入数据
    const int a = 0;          // 暂存数据（常量）
    int b = 0;                // 暂存数据（变量）
    Node* node = new Node(0); // 暂存数据（对象）
    int c = func();           // 栈帧空间（调用函数）
    return a + b + c;         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
/* 类 */
class Node {
    int val;
    Node next;
    Node(int x) { val = x; }
}

/* 函数 */
int function() {
    // 执行某些操作...
    return 0;
}

int algorithm(int n) {        // 输入数据
    final int a = 0;          // 暂存数据（常量）
    int b = 0;                // 暂存数据（变量）
    Node node = new Node(0);  // 暂存数据（对象）
    int c = function();       // 栈帧空间（调用函数）
    return a + b + c;         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
/* 类 */
class Node(int x) {
    int val = x;
    Node next;
}

/* 函数 */
int Function() {
    // 执行某些操作...
    return 0;
}

int Algorithm(int n) {        // 输入数据
    const int a = 0;          // 暂存数据（常量）
    int b = 0;                // 暂存数据（变量）
    Node node = new(0);       // 暂存数据（对象）
    int c = Function();       // 栈帧空间（调用函数）
    return a + b + c;         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
/* 结构体 */
type node struct {
    val  int
    next *node
}

/* 创建 node 结构体  */
func newNode(val int) *node {
    return &amp;node{val: val}
}

/* 函数 */
func function() int {
    // 执行某些操作...
    return 0
}

func algorithm(n int) int { // 输入数据
    const a = 0             // 暂存数据（常量）
    b := 0                  // 暂存数据（变量）
    newNode(0)              // 暂存数据（对象）
    c := function()         // 栈帧空间（调用函数）
    return a + b + c        // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
/* 类 */
class Node {
    var val: Int
    var next: Node?

    init(x: Int) {
        val = x
    }
}

/* 函数 */
func function() -&gt; Int {
    // 执行某些操作...
    return 0
}

func algorithm(n: Int) -&gt; Int { // 输入数据
    let a = 0             // 暂存数据（常量）
    var b = 0             // 暂存数据（变量）
    let node = Node(x: 0) // 暂存数据（对象）
    let c = function()    // 栈帧空间（调用函数）
    return a + b + c      // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
/* 类 */
class Node {
    val;
    next;
    constructor(val) {
        this.val = val === undefined ? 0 : val; // 节点值
        this.next = null;                       // 指向下一节点的引用
    }
}

/* 函数 */
function constFunc() {
    // 执行某些操作
    return 0;
}

function algorithm(n) {       // 输入数据
    const a = 0;              // 暂存数据（常量）
    let b = 0;                // 暂存数据（变量）
    const node = new Node(0); // 暂存数据（对象）
    const c = constFunc();    // 栈帧空间（调用函数）
    return a + b + c;         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
/* 类 */
class Node {
    val: number;
    next: Node | null;
    constructor(val?: number) {
        this.val = val === undefined ? 0 : val; // 节点值
        this.next = null;                       // 指向下一节点的引用
    }
}

/* 函数 */
function constFunc(): number {
    // 执行某些操作
    return 0;
}

function algorithm(n: number): number { // 输入数据
    const a = 0;                        // 暂存数据（常量）
    let b = 0;                          // 暂存数据（变量）
    const node = new Node(0);           // 暂存数据（对象）
    const c = constFunc();              // 栈帧空间（调用函数）
    return a + b + c;                   // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
/* 类 */
class Node {
  int val;
  Node next;
  Node(this.val, [this.next]);
}

/* 函数 */
int function() {
  // 执行某些操作...
  return 0;
}

int algorithm(int n) {  // 输入数据
  const int a = 0;      // 暂存数据（常量）
  int b = 0;            // 暂存数据（变量）
  Node node = Node(0);  // 暂存数据（对象）
  int c = function();   // 栈帧空间（调用函数）
  return a + b + c;     // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
use std::rc::Rc;
use std::cell::RefCell;

/* 结构体 */
struct Node {
    val: i32,
    next: Option&lt;Rc&lt;RefCell&lt;Node&gt;&gt;&gt;,
}

/* 创建 Node 结构体 */
impl Node {
    fn new(val: i32) -&gt; Self {
        Self { val: val, next: None }
    }
}

/* 函数 */
fn function() -&gt; i32 {      
    // 执行某些操作...
    return 0;
}

fn algorithm(n: i32) -&gt; i32 {       // 输入数据
    const a: i32 = 0;               // 暂存数据（常量）
    let mut b = 0;                  // 暂存数据（变量）
    let node = Node::new(0);        // 暂存数据（对象）
    let c = function();             // 栈帧空间（调用函数）
    return a + b + c;               // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
/* 函数 */
int func() {
    // 执行某些操作...
    return 0;
}

int algorithm(int n) { // 输入数据
    const int a = 0;   // 暂存数据（常量）
    int b = 0;         // 暂存数据（变量）
    int c = func();    // 栈帧空间（调用函数）
    return a + b + c;  // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
/* 类 */
class Node(var _val: Int) {
    var next: Node? = null
}

/* 函数 */
fun function(): Int {
    // 执行某些操作...
    return 0
}

fun algorithm(n: Int): Int { // 输入数据
    val a = 0                // 暂存数据（常量）
    var b = 0                // 暂存数据（变量）
    val node = Node(0)       // 暂存数据（对象）
    val c = function()       // 栈帧空间（调用函数）
    return a + b + c         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
### 类 ###
class Node
    attr_accessor :val      # 节点值
    attr_accessor :next     # 指向下一节点的引用

    def initialize(x)
        @val = x
    end
end

### 函数 ###
def function
    # 执行某些操作...
    0
end

### 算法 ###
def algorithm(n)        # 输入数据
    a = 0               # 暂存数据（常量）
    b = 0               # 暂存数据（变量）
    node = Node.new(0)  # 暂存数据（对象）
    c = function        # 栈帧空间（调用函数）
    a + b + c           # 输出数据
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre><h2 id="推算方法" tabindex="-1"><a class="header-anchor" href="#推算方法"><span>推算方法</span></a></h2><p>空间复杂度的推算方法与时间复杂度大致相同，只需将统计对象从“操作数量”转为“使用空间大小”。</p><p>而与时间复杂度不同的是，<strong>我们通常只关注<mark>最差空间复杂度</mark></strong>。这是因为内存空间是一项硬性要求，我们必须确保在所有输入数据下都有足够的内存空间预留。</p><p>观察以下代码，最差空间复杂度中的“最差”有两层含义。</p>`,43),h=n("ol",null,[n("li",null,[n("strong",null,"以最差输入数据为准"),s("：当 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mo",null,"<"),n("mn",null,"10")]),n("annotation",{encoding:"application/x-tex"},"n < 10")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"10")])])]),s(" 时，空间复杂度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])]),s(" ；但当 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mo",null,">"),n("mn",null,"10")]),n("annotation",{encoding:"application/x-tex"},"n > 10")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},">"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"10")])])]),s(" 时，初始化的数组 "),n("code",null,"nums"),s(" 占用 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" 空间，因此最差空间复杂度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" 。")]),n("li",null,[n("strong",null,"以算法运行中的峰值内存为准"),s("：例如，程序在执行最后一行之前，占用 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])]),s(" 空间；当初始化数组 "),n("code",null,"nums"),s(" 时，程序占用 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" 空间，因此最差空间复杂度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" 。")])],-1),d=a(`<p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
def algorithm(n: int):
    a = 0               # O(1)
    b = [0] * 10000     # O(1)
    if n &gt; 10:
        nums = [0] * n  # O(n)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
void algorithm(int n) {
    int a = 0;               // O(1)
    vector&lt;int&gt; b(10000);    // O(1)
    if (n &gt; 10)
        vector&lt;int&gt; nums(n); // O(n)
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
void algorithm(int n) {
    int a = 0;                   // O(1)
    int[] b = new int[10000];    // O(1)
    if (n &gt; 10)
        int[] nums = new int[n]; // O(n)
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
void Algorithm(int n) {
    int a = 0;                   // O(1)
    int[] b = new int[10000];    // O(1)
    if (n &gt; 10) {
        int[] nums = new int[n]; // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
func algorithm(n int) {
    a := 0                      // O(1)
    b := make([]int, 10000)     // O(1)
    var nums []int
    if n &gt; 10 {
        nums := make([]int, n)  // O(n)
    }
    fmt.Println(a, b, nums)
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
func algorithm(n: Int) {
    let a = 0 // O(1)
    let b = Array(repeating: 0, count: 10000) // O(1)
    if n &gt; 10 {
        let nums = Array(repeating: 0, count: n) // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
function algorithm(n) {
    const a = 0;                   // O(1)
    const b = new Array(10000);    // O(1)
    if (n &gt; 10) {
        const nums = new Array(n); // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
function algorithm(n: number): void {
    const a = 0;                   // O(1)
    const b = new Array(10000);    // O(1)
    if (n &gt; 10) {
        const nums = new Array(n); // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
void algorithm(int n) {
  int a = 0;                            // O(1)
  List&lt;int&gt; b = List.filled(10000, 0);  // O(1)
  if (n &gt; 10) {
    List&lt;int&gt; nums = List.filled(n, 0); // O(n)
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
fn algorithm(n: i32) {
    let a = 0;                              // O(1)
    let b = [0; 10000];                     // O(1)
    if n &gt; 10 {
        let nums = vec![0; n as usize];     // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
void algorithm(int n) {
    int a = 0;               // O(1)
    int b[10000];            // O(1)
    if (n &gt; 10)
        int nums[n] = {0};   // O(n)
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
fun algorithm(n: Int) {
    val a = 0                    // O(1)
    val b = IntArray(10000)      // O(1)
    if (n &gt; 10) {
        val nums = IntArray(n)   // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
def algorithm(n)
    a = 0                           # O(1)
    b = Array.new(10000)            # O(1)
    nums = Array.new(n) if n &gt; 10   # O(n)
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre><p><strong>在递归函数中，需要注意统计栈帧空间</strong>。观察以下代码：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
def function() -&gt; int:
    # 执行某些操作
    return 0

def loop(n: int):
    &quot;&quot;&quot;循环的空间复杂度为 O(1)&quot;&quot;&quot;
    for _ in range(n):
        function()

def recur(n: int):
    &quot;&quot;&quot;递归的空间复杂度为 O(n)&quot;&quot;&quot;
    if n == 1:
        return
    return recur(n - 1)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
int func() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
void loop(int n) {
    for (int i = 0; i &lt; n; i++) {
        func();
    }
}
/* 递归的空间复杂度为 O(n) */
void recur(int n) {
    if (n == 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
int function() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
void loop(int n) {
    for (int i = 0; i &lt; n; i++) {
        function();
    }
}
/* 递归的空间复杂度为 O(n) */
void recur(int n) {
    if (n == 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
int Function() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
void Loop(int n) {
    for (int i = 0; i &lt; n; i++) {
        Function();
    }
}
/* 递归的空间复杂度为 O(n) */
int Recur(int n) {
    if (n == 1) return 1;
    return Recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
func function() int {
    // 执行某些操作
    return 0
}

/* 循环的空间复杂度为 O(1) */
func loop(n int) {
    for i := 0; i &lt; n; i++ {
        function()
    }
}

/* 递归的空间复杂度为 O(n) */
func recur(n int) {
    if n == 1 {
        return
    }
    recur(n - 1)
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
@discardableResult
func function() -&gt; Int {
    // 执行某些操作
    return 0
}

/* 循环的空间复杂度为 O(1) */
func loop(n: Int) {
    for _ in 0 ..&lt; n {
        function()
    }
}

/* 递归的空间复杂度为 O(n) */
func recur(n: Int) {
    if n == 1 {
        return
    }
    recur(n: n - 1)
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
function constFunc() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
function loop(n) {
    for (let i = 0; i &lt; n; i++) {
        constFunc();
    }
}
/* 递归的空间复杂度为 O(n) */
function recur(n) {
    if (n === 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
function constFunc(): number {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
function loop(n: number): void {
    for (let i = 0; i &lt; n; i++) {
        constFunc();
    }
}
/* 递归的空间复杂度为 O(n) */
function recur(n: number): void {
    if (n === 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
int function() {
  // 执行某些操作
  return 0;
}
/* 循环的空间复杂度为 O(1) */
void loop(int n) {
  for (int i = 0; i &lt; n; i++) {
    function();
  }
}
/* 递归的空间复杂度为 O(n) */
void recur(int n) {
  if (n == 1) return;
  return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
fn function() -&gt; i32 {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
fn loop(n: i32) {
    for i in 0..n {
        function();
    }
}
/* 递归的空间复杂度为 O(n) */
fn recur(n: i32) {
    if n == 1 {
        return;
    }
    recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
int func() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
void loop(int n) {
    for (int i = 0; i &lt; n; i++) {
        func();
    }
}
/* 递归的空间复杂度为 O(n) */
void recur(int n) {
    if (n == 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
fun function(): Int {
    // 执行某些操作
    return 0
}
/* 循环的空间复杂度为 O(1) */
fun loop(n: Int) {
    for (i in 0..&lt;n) {
        function()
    }
}
/* 递归的空间复杂度为 O(n) */
fun recur(n: Int) {
    if (n == 1) return
    return recur(n - 1)
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
def function
    # 执行某些操作
    0
end

### 循环的空间复杂度为 O(1) ###
def loop(n)
    (0...n).each { function }
end

### 递归的空间复杂度为 O(n) ###
def recur(n)
    return if n == 1
    recur(n - 1)
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre>`,57),g=n("p",null,[s("函数 "),n("code",null,"loop()"),s(" 和 "),n("code",null,"recur()"),s(" 的时间复杂度都为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" ，但空间复杂度不同。")],-1),x=n("ul",null,[n("li",null,[s("函数 "),n("code",null,"loop()"),s(" 在循环中调用了 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" 次 "),n("code",null,"function()"),s(" ，每轮中的 "),n("code",null,"function()"),s(" 都返回并释放了栈帧空间，因此空间复杂度仍为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])]),s(" 。")]),n("li",null,[s("递归函数 "),n("code",null,"recur()"),s(" 在运行过程中会同时存在 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" 个未返回的 "),n("code",null,"recur()"),s(" ，从而占用 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" 的栈帧空间。")])],-1),y=n("h2",{id:"常见类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常见类型"},[n("span",null,"常见类型")])],-1),f=n("p",null,[s("设输入数据大小为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" ，下图展示了常见的空间复杂度类型（从低到高排列）。")],-1),w=n("p",{class:"katex-block"},[n("span",{class:"katex-display"},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[n("semantics",null,[n("mtable",{rowspacing:"0.25em",columnalign:"right",columnspacing:""},[n("mtr",null,[n("mtd",null,[n("mstyle",{scriptlevel:"0",displaystyle:"true"},[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")"),n("mo",null,"<"),n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"log"),n("mo",null,"⁡"),n("mi",null,"n"),n("mo",{stretchy:"false"},")"),n("mo",null,"<"),n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")"),n("mo",null,"<"),n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mi",null,"n"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")"),n("mo",null,"<"),n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mn",null,"2"),n("mi",null,"n")]),n("mo",{stretchy:"false"},")")])])])]),n("mtr",null,[n("mtd",null,[n("mstyle",{scriptlevel:"0",displaystyle:"true"},[n("mrow",null,[n("mtext",null,"常数阶"),n("mo",null,"<"),n("mtext",null,"对数阶"),n("mo",null,"<"),n("mtext",null,"线性阶"),n("mo",null,"<"),n("mtext",null,"平方阶"),n("mo",null,"<"),n("mtext",null,"指数阶")])])])])]),n("annotation",{encoding:"application/x-tex"}," \\begin{aligned} O(1) < O(\\log n) < O(n) < O(n^2) < O(2^n) \\newline \\text{常数阶} < \\text{对数阶} < \\text{线性阶} < \\text{平方阶} < \\text{指数阶} \\end{aligned} ")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"3.0241em","vertical-align":"-1.2621em"}}),n("span",{class:"mord"},[n("span",{class:"mtable"},[n("span",{class:"col-align-r"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"1.7621em"}},[n("span",{style:{top:"-3.8979em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mop"},[s("lo"),n("span",{style:{"margin-right":"0.01389em"}},"g")]),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8641em"}},[n("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.7144em"}},[n("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),n("span",{class:"mclose"},")")])]),n("span",{style:{top:"-2.3979em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord text"},[n("span",{class:"mord cjk_fallback"},"常数阶")]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord text"},[n("span",{class:"mord cjk_fallback"},"对数阶")]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord text"},[n("span",{class:"mord cjk_fallback"},"线性阶")]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord text"},[n("span",{class:"mord cjk_fallback"},"平方阶")]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord text"},[n("span",{class:"mord cjk_fallback"},"指数阶")])])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"1.2621em"}},[n("span")])])])])])])])])])])],-1),v=n("figure",null,[n("img",{src:c,alt:"常见的空间复杂度类型",tabindex:"0",loading:"lazy"}),n("figcaption",null,"常见的空间复杂度类型")],-1),q=n("h3",{id:"常数阶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常数阶"},[n("span",null,[s("常数阶 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])])])])],-1),k=n("p",null,[s("常数阶常见于数量与输入数据大小 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" 无关的常量、变量、对象。")],-1),b=n("p",null,[s("需要注意的是，在循环中初始化变量或调用函数而占用的内存，在进入下一循环后就会被释放，因此不会累积占用空间，空间复杂度仍为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])]),s(" ：")],-1),O=n("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[n("pre",{class:"language-src"},[n("code",null,`[file]{space_complexity}-[class]{}-[func]{constant}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),M=n("h3",{id:"线性阶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#线性阶"},[n("span",null,[s("线性阶 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])])],-1),_=n("p",null,[s("线性阶常见于元素数量与 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" 成正比的数组、链表、栈、队列等：")],-1),L=n("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[n("pre",{class:"language-src"},[n("code",null,`[file]{space_complexity}-[class]{}-[func]{linear}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),N=n("p",null,[s("如下图所示，此函数的递归深度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" ，即同时存在 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" 个未返回的 "),n("code",null,"linear_recur()"),s(" 函数，使用 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" 大小的栈帧空间：")],-1),z=a(`<div class="language-src line-numbers-mode" data-ext="src" data-title="src"><pre class="language-src"><code>[file]{space_complexity}-[class]{}-[func]{linear_recur}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="递归函数产生的线性阶空间复杂度" tabindex="0" loading="lazy"><figcaption>递归函数产生的线性阶空间复杂度</figcaption></figure>',2),A=n("h3",{id:"平方阶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#平方阶"},[n("span",null,[s("平方阶 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mi",null,"n"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])])])])],-1),I=n("p",null,[s("平方阶常见于矩阵和图，元素数量与 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" 成平方关系：")],-1),C=n("div",{class:"language-src line-numbers-mode","data-ext":"src","data-title":"src"},[n("pre",{class:"language-src"},[n("code",null,`[file]{space_complexity}-[class]{}-[func]{quadratic}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("p",null,[s("如下图所示，该函数的递归深度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" ，在每个递归函数中都初始化了一个数组，长度分别为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s("、"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mo",null,"−"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"n-1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s("、"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",null,"…")]),n("annotation",{encoding:"application/x-tex"},"\\dots")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.123em"}}),n("span",{class:"minner"},"…")])])]),s("、"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"2")]),n("annotation",{encoding:"application/x-tex"},"2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"2")])])]),s("、"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s(" ，平均长度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mi",{mathvariant:"normal"},"/"),n("mn",null,"2")]),n("annotation",{encoding:"application/x-tex"},"n / 2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord"},"/2")])])]),s(" ，因此总体占用 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mi",null,"n"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])]),s(" 空间：")],-1),S=a(`<div class="language-src line-numbers-mode" data-ext="src" data-title="src"><pre class="language-src"><code>[file]{space_complexity}-[class]{}-[func]{quadratic_recur}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="递归函数产生的平方阶空间复杂度" tabindex="0" loading="lazy"><figcaption>递归函数产生的平方阶空间复杂度</figcaption></figure>',2),R=n("h3",{id:"指数阶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#指数阶"},[n("span",null,[s("指数阶 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mn",null,"2"),n("mi",null,"n")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(2^n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.6644em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),n("span",{class:"mclose"},")")])])])])])],-1),D=n("p",null,[s("指数阶常见于二叉树。观察下图，层数为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" 的“满二叉树”的节点数量为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mi",null,"n")]),n("mo",null,"−"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"2^n - 1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7477em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.6644em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s(" ，占用 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mn",null,"2"),n("mi",null,"n")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(2^n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.6644em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),n("span",{class:"mclose"},")")])])]),s(" 空间：")],-1),F=a(`<div class="language-src line-numbers-mode" data-ext="src" data-title="src"><pre class="language-src"><code>[file]{space_complexity}-[class]{}-[func]{build_tree}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="满二叉树产生的指数阶空间复杂度" tabindex="0" loading="lazy"><figcaption>满二叉树产生的指数阶空间复杂度</figcaption></figure>',2),j=n("h3",{id:"对数阶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#对数阶"},[n("span",null,[s("对数阶 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"log"),n("mo",null,"⁡"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(\\log n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mop"},[s("lo"),n("span",{style:{"margin-right":"0.01389em"}},"g")]),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])])],-1),T=n("p",null,[s("对数阶常见于分治算法。例如归并排序，输入长度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" 的数组，每轮递归将数组从中点处划分为两半，形成高度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"log"),n("mo",null,"⁡"),n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"\\log n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),n("span",{class:"mop"},[s("lo"),n("span",{style:{"margin-right":"0.01389em"}},"g")]),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" 的递归树，使用 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"log"),n("mo",null,"⁡"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(\\log n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mop"},[s("lo"),n("span",{style:{"margin-right":"0.01389em"}},"g")]),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" 栈帧空间。")],-1),B=n("p",null,[s("再例如将数字转化为字符串，输入一个正整数 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" ，它的位数为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"⌊"),n("msub",null,[n("mrow",null,[n("mi",null,"log"),n("mo",null,"⁡")]),n("mn",null,"10")]),n("mi",null,"n"),n("mo",{stretchy:"false"},"⌋"),n("mo",null,"+"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"\\lfloor \\log_{10} n \\rfloor + 1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"⌊"),n("span",{class:"mop"},[n("span",{class:"mop"},[s("lo"),n("span",{style:{"margin-right":"0.01389em"}},"g")]),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.207em"}},[n("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"10")])])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2441em"}},[n("span")])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},"⌋"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s(" ，即对应字符串长度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"⌊"),n("msub",null,[n("mrow",null,[n("mi",null,"log"),n("mo",null,"⁡")]),n("mn",null,"10")]),n("mi",null,"n"),n("mo",{stretchy:"false"},"⌋"),n("mo",null,"+"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"\\lfloor \\log_{10} n \\rfloor + 1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"⌊"),n("span",{class:"mop"},[n("span",{class:"mop"},[s("lo"),n("span",{style:{"margin-right":"0.01389em"}},"g")]),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.207em"}},[n("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"10")])])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2441em"}},[n("span")])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},"⌋"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s(" ，因此空间复杂度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msub",null,[n("mrow",null,[n("mi",null,"log"),n("mo",null,"⁡")]),n("mn",null,"10")]),n("mi",null,"n"),n("mo",null,"+"),n("mn",null,"1"),n("mo",{stretchy:"false"},")"),n("mo",null,"="),n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"log"),n("mo",null,"⁡"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(\\log_{10} n + 1) = O(\\log n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mop"},[n("span",{class:"mop"},[s("lo"),n("span",{style:{"margin-right":"0.01389em"}},"g")]),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.207em"}},[n("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"10")])])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2441em"}},[n("span")])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mop"},[s("lo"),n("span",{style:{"margin-right":"0.01389em"}},"g")]),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" 。")],-1),J=n("h2",{id:"权衡时间与空间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#权衡时间与空间"},[n("span",null,"权衡时间与空间")])],-1),P=n("p",null,"理想情况下，我们希望算法的时间复杂度和空间复杂度都能达到最优。然而在实际情况中，同时优化时间复杂度和空间复杂度通常非常困难。",-1),G=n("p",null,[n("strong",null,"降低时间复杂度通常需要以提升空间复杂度为代价，反之亦然"),s("。我们将牺牲内存空间来提升算法运行速度的思路称为“以空间换时间”；反之，则称为“以时间换空间”。")],-1),H=n("p",null,"选择哪种思路取决于我们更看重哪个方面。在大多数情况下，时间比空间更宝贵，因此“以空间换时间”通常是更常用的策略。当然，在数据量很大的情况下，控制空间复杂度也非常重要。",-1),K=[u,h,d,g,x,y,f,w,v,q,k,b,O,M,_,L,N,z,A,I,C,E,S,R,D,F,j,T,B,J,P,G,H];function V(Z,Q){return e(),l("div",null,K)}const Y=t(p,[["render",V],["__file","08-空间复杂度.html.vue"]]),U=JSON.parse('{"path":"/HelloAlgo/%E7%AC%AC02%E7%AB%A0%20%E5%A4%8D%E6%9D%82%E5%BA%A6%E5%88%86%E6%9E%90/08-%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6.html","title":"空间复杂度","lang":"zh-CN","frontmatter":{"date":"2024-05-16T00:00:00.000Z","shortTitle":"08-空间复杂度"},"headers":[{"level":2,"title":"算法相关空间","slug":"算法相关空间","link":"#算法相关空间","children":[]},{"level":2,"title":"推算方法","slug":"推算方法","link":"#推算方法","children":[]},{"level":2,"title":"常见类型","slug":"常见类型","link":"#常见类型","children":[{"level":3,"title":"常数阶","slug":"常数阶","link":"#常数阶","children":[]},{"level":3,"title":"线性阶","slug":"线性阶","link":"#线性阶","children":[]},{"level":3,"title":"平方阶","slug":"平方阶","link":"#平方阶","children":[]},{"level":3,"title":"指数阶","slug":"指数阶","link":"#指数阶","children":[]},{"level":3,"title":"对数阶","slug":"对数阶","link":"#对数阶","children":[]}]},{"level":2,"title":"权衡时间与空间","slug":"权衡时间与空间","link":"#权衡时间与空间","children":[]}],"git":{"createdTime":1715867746000,"updatedTime":1715867746000,"contributors":[{"name":"OnePiece","email":"109900456+NgxuAnGMH@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.53,"words":4059},"filePathRelative":"HelloAlgo/第02章 复杂度分析/08-空间复杂度.md","localizedDate":"2024年5月16日","excerpt":"\\n<p><u>空间复杂度（space complexity）</u>用于衡量算法占用内存空间随着数据量变大时的增长趋势。这个概念与时间复杂度非常类似，只需将“运行时间”替换为“占用内存空间”。</p>\\n<h2>算法相关空间</h2>\\n<p>算法在运行过程中使用的内存空间主要包括以下几种。</p>\\n<ul>\\n<li><strong>输入空间</strong>：用于存储算法的输入数据。</li>\\n<li><strong>暂存空间</strong>：用于存储算法在运行过程中的变量、对象、函数上下文等数据。</li>\\n<li><mark>输出空间</mark>：用于存储算法的输出数据。</li>\\n</ul>"}');export{Y as comp,U as data};
