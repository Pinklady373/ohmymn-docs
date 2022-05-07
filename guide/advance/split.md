# split() 函数
[split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 函数目前只在 [Another AutoDef](../modules/anotherautodef) 中使用，用于将摘录的内容分割成标题和摘录两部分。

只需要提供一个 [正则表达式](regex)，作为分割点，将字符串分割成两部分。

这里要单独提一下是因为 split 有个特性，如果你正则表达式中使用了 [捕获组](regex#分组)，就会把捕获的内容放在分割后的结果中。 如果你必须要分组，可以使用 [非捕获组](regex#分组)。

其实捕获组也有个好处，就是当你找不到一个明确的分割点，比如选择题，你想把题目作为标题，选项作为摘录。这时候就必须用到捕获组，并且捕获的内容就是所有选项。