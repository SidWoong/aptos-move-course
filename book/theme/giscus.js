// window.onload = () => {
//     const script = document.createElement('script');
//     script.src = 'https://giscus.app/client.js';
//     document.body.appendChild(script);
// };

var script = document.createElement("script")
    script.type = "text/javascript";
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "SidWoong/aptos-move-course");
    script.setAttribute("data-repo-id", "R_kgDONrHv3g");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDONrHv3s4CmDfU");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", pagePath);
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", theme);
    // script.setAttribute("data-lang", lang);
    // 预先加载评论会更好，这样用户读到那边时，评论就加载好了
    // script.setAttribute("data-loading", "lazy");
    // document.getElementById("giscus-container").appendChild(script);
