# JS中的栈内存和堆内存


给一个全局变量赋值为null，相当于将这个变量的指针对象以及值清空，如果是给对象的属性 赋值为null，或者局部变量赋值为null,相当于给这个属性分配了一块空的内存，然后值为null， JS会回收全局变量为null的对象。

给一个全局变量赋值为undefined，相当于将这个对象的值清空，但是这个对象依旧存在,如果是给对象的属性赋值 为undefined，说明这个值为空值


栈：原始数据类型（Undefined，Null，Boolean，Number、String）
 堆：引用数据类型（对象、数组和函数）

 两种类型的区别是：存储位置不同；
 原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
 引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体


https://github.com/Aaaaaaaty/Blog/issues/17

https://camo.githubusercontent.com/d1947e624a0444d1032a85800013df487adc5550/687474703a2f2f7777772e77337363686f6f6c2e636f6d2e636e2f692f63745f6a735f76616c75652e676966

const 的存储位置，引用类型为什么可以修改

null 是在栈内存中，还是堆内存中

typeof null 为什么是 object


https://github.com/yygmind/blog/issues/14

https://github.com/yygmind/blog/issues/15

https://www.jianshu.com/p/996671d4dcc4

https://blog.csdn.net/xdd19910505/article/details/41900693