// 面向对象中的 访问控制词
/**
 * 在绝大多数的面向对象语言中都存在 控制词
 * public 公开的
 * protected 保护的
 * private 私有的
 */

//  三个角色: 本人 外人 儿子
class Demo {
  // 公开的
  public name = "唐三";
  // 保护的
  protected money = "唐三的钱";
  // 私有的
  private avi = "唐三年轻时珍藏的电影";
}

// extends 继承
class Son extends Demo {
  show() {
    this.name; //公开的, 子类可以访问
    this.money; //保护的, 子类可以
    // this.avi;
  }
}

let san = new Demo();
san.name;
// 类外读
// san.money;
// san.avi;
