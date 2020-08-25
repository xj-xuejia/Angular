// 体验 静态类型 分析 和 编译操作

// 静态类型分析:  通过 变量:类型名 写法来告知 vscode 变量是什么类型的
// vscode就可以在 代码未运行的情况下 提前预判代码
function show(name: string) {
  // name.push();

  return name.toLowerCase();
}

console.log(show("HELLO"));

// 编译成JS之后运行
// 编译命令: tsc 文件名.ts

/**
 * 优点:
 * 写代码的时候 有充足的代码提示
 * 并且 可以预判出代码中的错误 给出提示
 * 对于程序员非常友好
 */
