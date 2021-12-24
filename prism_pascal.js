Prism.languages.pascal = {
    directive: {
        pattern: /\{\$[\s\S]*?\}/,
        greedy: true,
        alias: ["marco", "property"]
    },
    comment: {
        pattern: /\(\*[\s\S]*?\*\)|\{[\s\S]*?\}|\/\/.*/,
        greedy: true
    },
    string: {
        pattern: /(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
        greedy: true
    },
    asm: {
        pattern: /(\basm\b)[\s\S]+?(?=\bend\s*[;[])/i,
        lookbehind: true,
        greedy: true,
        inside: null
    },
    keyword: [{
        pattern: /(^|[^&])\b(?:dispose|constructor|destructor|file|goto|inherited|label|object|self|class|dispinterface|except|exports|finally|inline|library|on|out|packed|raise|resourcestring|threadvar|try|uses|const|do|for|while|if|else|case|array|begin|downto|to|of|procedure|function|program|repeat|until|then|type|var|end|true|false|exit|integer|byte|word|shortint|smallint|cardinal|string|ansistring|single|real|extended|comp|curreny|longint|int64|qword|longword|dword|boolean|char|text|record|unit|interface|initialization|finalization|implementation|with|null|nil|set|new)\b/i,
        lookbehind: true
    }, {
        pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|platform|private|protected|public|published|register|reintroduce|result|safecall|saveregisters|soft|float|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|and|as|exclude|in|include|not|or|xor)\b/i,
        lookbehind: true
    }],
    builtin_function: {
        pattern: /(^|[^&])\b(?:sin|cos|sqrt|length|exp|tan|keyPressed|readKey|delay|random|randomize|inc|dec|ceil|trunc|frac|floor|abs|round|sqr|pred|succ|ln|arctan|int|halt|odd|ord|chr|(?:write|read)(?:ln)?)\b|(^|[^&])\b(?:mod|div|is|shl|shr)\b/i,
        lookbehind: true,
        alias: "important"
    },
    function: [{
        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
        lookbehind: true
    }, {
        pattern: /(^|[^\w])(?<!\)\s)[a-z_](?:[\w]*\w)?(?=\s*\()/i,
        lookbehind: true
    }],
    number: [/(?:[&%]\d+|\$[a-f\d]+)/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
    property: [/[+'*=<>,\/\[\])(@\^-]|:=/i],
    punctuation: [/\(\.|\.\)|[;:.]/],
},
Prism.languages.pascal.asm.inside = Prism.languages.extend("pascal", {
    asm: void 0,
    keyword: void 0,
    operator: void 0
}),
Prism.languages.objectpascal = Prism.languages.pascal;
