// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="aptos-move/about-book.html">本书简介</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><a href="aptos-move/info.html">Aptos Move 是什么</a></li><li class="chapter-item affix "><a href="aptos-move/offer.html">Aptos Move 能给你带来什么</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><div>Aptos Move 基础学习</div></li><li class="chapter-item "><a href="aptos-move-basics/introduction.html"><strong aria-hidden="true">1.</strong> 初次相识</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-basics/installation-1.html"><strong aria-hidden="true">1.1.</strong> Aptos Move 环境搭建</a></li><li class="chapter-item "><a href="aptos-move-basics/editor.html"><strong aria-hidden="true">1.2.</strong> Aptos Move VScode</a></li><li class="chapter-item "><a href="aptos-move-basics/hello-move.html"><strong aria-hidden="true">1.3.</strong> Aptos Move 小试牛刀</a></li></ol></li><li class="chapter-item "><a href="aptos-move-basics/data-type.html"><strong aria-hidden="true">2.</strong> 基础类型</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-basics/integers.html"><strong aria-hidden="true">2.1.</strong> 整数</a></li><li class="chapter-item "><a href="aptos-move-basics/bool.html"><strong aria-hidden="true">2.2.</strong> 布尔值</a></li><li class="chapter-item "><a href="aptos-move-basics/address.html"><strong aria-hidden="true">2.3.</strong> 地址</a></li><li class="chapter-item "><a href="aptos-move-basics/vector.html"><strong aria-hidden="true">2.4.</strong> 向量</a></li><li class="chapter-item "><a href="aptos-move-basics/signer.html"><strong aria-hidden="true">2.5.</strong> 签名者</a></li><li class="chapter-item "><a href="aptos-move-basics/references.html"><strong aria-hidden="true">2.6.</strong> 引用</a></li><li class="chapter-item "><a href="aptos-move-basics/tuples-unit.html"><strong aria-hidden="true">2.7.</strong> 元组与单元</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">3.</strong> 基础概念</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-basics/variables.html"><strong aria-hidden="true">3.1.</strong> 局部变量与作用域</a></li><li class="chapter-item "><a href="aptos-move-basics/equality.html"><strong aria-hidden="true">3.2.</strong> 等式</a></li><li class="chapter-item "><a href="aptos-move-basics/abort-assert.html"><strong aria-hidden="true">3.3.</strong> 中止与断言</a></li><li class="chapter-item "><a href="aptos-move-basics/conditionals.html"><strong aria-hidden="true">3.4.</strong> 条件语句</a></li><li class="chapter-item "><a href="aptos-move-basics/loops.html"><strong aria-hidden="true">3.5.</strong> 循环（While、For 和 Loop）</a></li><li class="chapter-item "><a href="aptos-move-basics/functions.html"><strong aria-hidden="true">3.6.</strong> 函数</a></li><li class="chapter-item "><a href="aptos-move-basics/structs-resources.html"><strong aria-hidden="true">3.7.</strong> 结构体与资源</a></li><li class="chapter-item "><a href="aptos-move-basics/enums.html"><strong aria-hidden="true">3.8.</strong> 枚举类型</a></li><li class="chapter-item "><a href="aptos-move-basics/constants.html"><strong aria-hidden="true">3.9.</strong> 常量</a></li><li class="chapter-item "><a href="aptos-move-basics/generics.html"><strong aria-hidden="true">3.10.</strong> 泛型</a></li><li class="chapter-item "><a href="aptos-move-basics/abilities.html"><strong aria-hidden="true">3.11.</strong> 类型能力</a></li><li class="chapter-item "><a href="aptos-move-basics/uses-aliases.html"><strong aria-hidden="true">3.12.</strong> 使用与别名</a></li><li class="chapter-item "><a href="aptos-move-basics/friends.html"><strong aria-hidden="true">3.13.</strong> Friends</a></li><li class="chapter-item "><a href="aptos-move-basics/packages.html"><strong aria-hidden="true">3.14.</strong> 包</a></li><li class="chapter-item "><a href="aptos-move-basics/package-upgrades.html"><strong aria-hidden="true">3.15.</strong> 包升级</a></li><li class="chapter-item "><a href="aptos-move-basics/unit-testing.html"><strong aria-hidden="true">3.16.</strong> 单元测试</a></li><li class="chapter-item "><div><strong aria-hidden="true">3.17.</strong> 全局存储</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-basics/global-storage-structure.html"><strong aria-hidden="true">3.17.1.</strong> 全局存储 - 结构</a></li><li class="chapter-item "><a href="aptos-move-basics/global-storage-operators.html"><strong aria-hidden="true">3.17.2.</strong> 全局存储 - 操作</a></li></ol></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><a href="aptos-move-basics/exercise.html"><strong aria-hidden="true">4.</strong> Aptos Move 入门实战</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-basics/exercise-1.html"><strong aria-hidden="true">4.1.</strong> 模块和脚本</a></li><li class="chapter-item "><a href="aptos-move-basics/exercise-2.html"><strong aria-hidden="true">4.2.</strong> 磨刀霍霍</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-basics/exercise-3.html"><strong aria-hidden="true">4.2.1.</strong> 开发前说明及准备工作</a></li><li class="chapter-item "><a href="aptos-move-basics/exercise-4.html"><strong aria-hidden="true">4.2.2.</strong> 编写我的第一个 Move 模块</a></li></ol></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><a href="aptos-move-advanced/introduction.html"><strong aria-hidden="true">5.</strong> Aptos Move 高阶学习</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-advanced/script.html"><strong aria-hidden="true">5.1.</strong> 脚本 （Script）</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-advanced/writing-scripts.html"><strong aria-hidden="true">5.1.1.</strong> 如何编写 Move 脚本</a></li><li class="chapter-item "><a href="aptos-move-advanced/compiling-scripts.html"><strong aria-hidden="true">5.1.2.</strong> 如何编译 Move 脚本</a></li><li class="chapter-item "><a href="aptos-move-advanced/running-scripts.html"><strong aria-hidden="true">5.1.3.</strong> 如何运行 Move 脚本</a></li></ol></li><li class="chapter-item "><a href="aptos-move-advanced/prover.html"><strong aria-hidden="true">5.2.</strong> Move Prover</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-advanced/prover-guide.html"><strong aria-hidden="true">5.2.1.</strong> Move Prover 使用指南</a></li><li class="chapter-item "><a href="aptos-move-advanced/supporting-resources.html"><strong aria-hidden="true">5.2.2.</strong> Move Prover 相关资源</a></li><li class="chapter-item "><a href="aptos-move-advanced/spec-lang.html"><strong aria-hidden="true">5.2.3.</strong> Move 语言规范</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">5.3.</strong> 随机性</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-advanced/randomness.html"><strong aria-hidden="true">5.3.1.</strong> Aptos Roll - 随机性API</a></li></ol></li><li class="chapter-item "><a href="aptos-move-advanced/cryptography.html"><strong aria-hidden="true">5.4.</strong> 加密</a></li><li class="chapter-item "><a href="aptos-move-advanced/move-security-guidelines.html"><strong aria-hidden="true">5.5.</strong> Move 安全指南</a></li><li class="chapter-item "><a href="aptos-move-advanced/gas-profiling.html"><strong aria-hidden="true">5.6.</strong> Gas 分析</a></li><li class="chapter-item "><a href="aptos-move-advanced/compiler-v2.html"><strong aria-hidden="true">5.7.</strong> 编译器 V2</a></li><li class="chapter-item "><a href="aptos-move-advanced/Aptos-move-linter.html"><strong aria-hidden="true">5.8.</strong> Aptos Move 代码检查工具</a></li><li class="chapter-item "><a href="aptos-move-advanced/aptos-standards.html"><strong aria-hidden="true">5.9.</strong> Aptos 标准</a></li><li class="chapter-item "><a href="aptos-move-advanced/modules-on-aptos.html"><strong aria-hidden="true">5.10.</strong> Aptos 上的模块</a></li><li class="chapter-item "><a href="aptos-move-advanced/move-reference.html"><strong aria-hidden="true">5.11.</strong> Move 引用</a></li><li class="chapter-item "><a href="aptos-move-advanced/third-party-dependencies.html"><strong aria-hidden="true">5.12.</strong> 第三方库依赖</a></li><li class="chapter-item "><a href="aptos-move-advanced/tokens.html"><strong aria-hidden="true">5.13.</strong> Aptos 代币标准概述</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><div><strong aria-hidden="true">6.</strong> 实践案例</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aptos-move-usecases/star-cards.html"><strong aria-hidden="true">6.1.</strong> 球星卡</a></li><li class="chapter-item "><a href="aptos-move-usecases/rock-paper-scissors.html"><strong aria-hidden="true">6.2.</strong> 石头剪刀布</a></li><li class="chapter-item "><a href="aptos-move-usecases/nft.html"><strong aria-hidden="true">6.3.</strong> NFT</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><a href="aptos-move-appendix/appendix.html"><strong aria-hidden="true">7.</strong> 附录</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
