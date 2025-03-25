"use strict";(self.webpackChunknotes_template=self.webpackChunknotes_template||[]).push([[3265],{8453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>t});var n=a(6540);const i={},r=n.createContext(i);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:s},e.children)}},8557:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"compiler/context-free-grammar","title":"Compiler Architecture","description":"After we have studied CFG, we put it into the use of the compiler. All programming languages are CFG. And most programming languages are designed to be $LR(1)$ or $SLR(1)$.","source":"@site/docs/compiler/context-free-grammar.mdx","sourceDirName":"compiler","slug":"/compiler/context-free-grammar","permalink":"/language-automaton-and-compiler/docs/compiler/context-free-grammar","draft":false,"unlisted":false,"editUrl":"https://github.com/finger-bone/language-automaton-and-compiler/blob/main/docs/compiler/context-free-grammar.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Compiler","permalink":"/language-automaton-and-compiler/docs/category/compiler"},"next":{"title":"Context Sensitive Language","permalink":"/language-automaton-and-compiler/docs/category/context-sensitive-language"}}');var i=a(4848),r=a(8453);const l={sidebar_position:1},t="Compiler Architecture",c={},m=[{value:"Tokenizer (Lexical Analyzer)",id:"tokenizer-lexical-analyzer",level:2},{value:"Parser (Syntax Analyzer)",id:"parser-syntax-analyzer",level:2},{value:"Semantic Analysis",id:"semantic-analysis",level:2},{value:"Intermediate Representation Generation",id:"intermediate-representation-generation",level:2},{value:"Backend",id:"backend",level:2}];function h(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mermaid:"mermaid",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mspace:"mspace",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"compiler-architecture",children:"Compiler Architecture"})}),"\n",(0,i.jsxs)(s.p,{children:["After we have studied CFG, we put it into the use of the compiler. All programming languages are CFG. And most programming languages are designed to be ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"L"}),(0,i.jsx)(s.mi,{children:"R"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"LR(1)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})," or ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mi,{children:"L"}),(0,i.jsx)(s.mi,{children:"R"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"SLR(1)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,i.jsx)(s.p,{children:"We will illustrate how our previous knowledge can be applied."}),"\n",(0,i.jsx)(s.h2,{id:"tokenizer-lexical-analyzer",children:"Tokenizer (Lexical Analyzer)"}),"\n",(0,i.jsx)(s.p,{children:"The first pipe is the tokenizer. The tokenizer converts the character stream into tokens. A token is an atomic word in the programming language, and it usually also carries a type."}),"\n",(0,i.jsx)(s.p,{children:"For example,"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"int a = b;\n"})}),"\n",(0,i.jsx)(s.p,{children:"Can be parsed into,"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"(int, native_type)\n(a, identifier)\n(=, assign)\n(b, identifier)\n(;, semicolon)\n"})}),"\n",(0,i.jsx)(s.p,{children:"The tokenizer does not consider the context of the tokens. It only converts the character stream into tokens based on certain rules. For example,"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"int, float"})," are native types."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"=, +=, -="})," are operators."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:";"})," is the notation for the end of a line."]}),"\n",(0,i.jsx)(s.li,{children:"Others are identifiers."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"parser-syntax-analyzer",children:"Parser (Syntax Analyzer)"}),"\n",(0,i.jsx)(s.p,{children:"A parser converts token stream into an AST (abstract syntax tree). AST is just the parse tree of the CFG."}),"\n",(0,i.jsxs)(s.p,{children:["For example, let's consider a language that only has assign and plus. Defined as ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"A"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"A"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"A"})]})})]}),"."]}),"\n",(0,i.jsx)(s.span,{className:"katex-display",children:(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mo,{children:"\u2192"}),(0,i.jsx)(s.mi,{children:"A"}),(0,i.jsx)(s.mspace,{linebreak:"newline"}),(0,i.jsx)(s.mi,{children:"A"}),(0,i.jsx)(s.mo,{children:"\u2192"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"d"}),(0,i.jsx)(s.mo,{children:"="}),(0,i.jsx)(s.mi,{children:"E"}),(0,i.jsx)(s.mspace,{linebreak:"newline"}),(0,i.jsx)(s.mi,{children:"E"}),(0,i.jsx)(s.mo,{children:"\u2192"}),(0,i.jsx)(s.mi,{children:"E"}),(0,i.jsx)(s.mo,{children:"+"}),(0,i.jsx)(s.mi,{children:"E"}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"d"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"S \\rightarrow A \\\\\nA \\rightarrow id = E \\\\\nE \\rightarrow E + E | id "})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"A"})]}),(0,i.jsx)(s.span,{className:"mspace newline"}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"A"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"="}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"})]}),(0,i.jsx)(s.span,{className:"mspace newline"}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"+"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,i.jsx)(s.span,{className:"mord",children:"\u2223"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"})]})]})]})}),"\n",(0,i.jsxs)(s.p,{children:["This is an ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"L"}),(0,i.jsx)(s.mi,{children:"L"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"LL(1)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"LL"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})," after eliminating left recursion (in more complex cases, we design ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"L"}),(0,i.jsx)(s.mi,{children:"R"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"LR(1)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})," or ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mi,{children:"L"}),(0,i.jsx)(s.mi,{children:"R"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"SLR(1)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})," grammar). So we can always parse any valid token stream into a parse tree."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, the parse tree for ",(0,i.jsx)(s.code,{children:"a = b + c"})," is,"]}),"\n",(0,i.jsx)(s.mermaid,{value:'graph TD\n    A --\x3e E1\n    E1 --\x3e E2\n    E1 --\x3e T["\\="]\n    E1 --\x3e E3\n    E2 --\x3e a\n    E3 --\x3e E4\n    E3 --\x3e T1["\\+"]\n    E3 --\x3e E5\n    E4 --\x3e b\n    E5 --\x3e c'}),"\n",(0,i.jsx)(s.h2,{id:"semantic-analysis",children:"Semantic Analysis"}),"\n",(0,i.jsx)(s.p,{children:"After we have an AST, we can do semantic analysis. Sometimes\uff0cmaybe the parse tree is valid, yet the corresponding sentence may not be valid semantically. For example, in,"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"a = b + c;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["If ",(0,i.jsx)(s.code,{children:"b"})," is integer and ",(0,i.jsx)(s.code,{children:"c"})," is string, then this sentence is wrong semantically, not syntactically."]}),"\n",(0,i.jsx)(s.p,{children:"Sematic Analysis Checks the semantic validity of the parse tree. Usually, this is done at the same time with intermediate representation generation."}),"\n",(0,i.jsx)(s.h2,{id:"intermediate-representation-generation",children:"Intermediate Representation Generation"}),"\n",(0,i.jsx)(s.p,{children:"Although, technically, we can directly translate AST into assembly. In most modern compilers, like LLVM, we first translate AST into a unified, platform independent intermediate representation, so that we can preform optimization in a platform independent way, so as not to reinvent the wheel."}),"\n",(0,i.jsx)(s.p,{children:"For example,"}),"\n",(0,i.jsx)(s.mermaid,{value:'graph TD\n    A --\x3e E1\n    E1 --\x3e E2\n    E1 --\x3e T["\\="]\n    E1 --\x3e E3\n    E2 --\x3e a\n    E3 --\x3e E4\n    E3 --\x3e T1["\\+"]\n    E3 --\x3e E5\n    E4 --\x3e b\n    E5 --\x3e c'}),"\n",(0,i.jsx)(s.p,{children:"This tree, we can parse it into,"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-asm",children:"add @mid, a, b\nstr c, @mid\n"})}),"\n",(0,i.jsx)(s.p,{children:"Later we can convert this IR into assembly."}),"\n",(0,i.jsx)(s.h2,{id:"backend",children:"Backend"}),"\n",(0,i.jsx)(s.p,{children:"The backend of an compiler consists of,"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Translating IR into assembly."}),"\n",(0,i.jsx)(s.li,{children:"Optimization."}),"\n",(0,i.jsx)(s.li,{children:"Linking."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"We don't talk about the backend here."})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);