# tsconfig 项目中关于 ts 的配置文件

- extend tsconfig 文件可继承其它 tsconfig 配置文件的属性

```json
{
  "extends": "./configs/base",
  "files": [
    "main.ts",
    "supplemental.ts"
  ]
}
```

- files 指定哪个文件一定会被ts编译器编译，即使被 exclude 忽略掉也会被编译

- include 指定哪些文件需要被ts编译器编译

```json
"include": [
    "src/**",
]
```

- exclude 指定哪些文件不需要ts编译器编译
```json
"exclude": [
    "node_modules",
]
```

一个 ts 配置文件，例子：

```json
{
    "compilerOptions": {
        "allowJs": true,
        "target": "esnext",
        "module": "es2015",
        "strict": true,
        "jsx": "preserve",
        "importHelpers": true,
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "sourceMap": true,
        "baseUrl": ".",
        "noImplicitAny": false,
        "paths": {
            "@/*": [
                "client/*"
            ]
        },
        "lib": [
            "esnext",
            "dom",
            "dom.iterable",
            "scripthost"
        ]
    },
    "include": [
        "src/**/*.ts",
        "src/**/*.tsx",
        "src/**/*.vue"
    ],
    "exclude": [
        "node_modules"
    ],
    // 打包后的 types 文件路径
    "typeRoots": [
        "dist/types"
    ]
}
```

# 参考

- [官方](https://www.tslang.cn/docs/handbook/tsconfig-json.html)