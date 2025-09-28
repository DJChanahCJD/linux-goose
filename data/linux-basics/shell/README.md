# Shell 脚本基础

Shell脚本是Linux系统管理和自动化的重要工具。通过编写Shell脚本，可以批量执行命令、处理文本数据、实现自动化任务等。

## 🚀 Shell 脚本基础概念

### 什么是Shell脚本？
Shell脚本是一个包含一系列Shell命令的文本文件，可以被Shell解释器执行。

### 常见的Shell类型
- **Bash (Bourne Again Shell)**：Linux系统默认的Shell
- **sh (Bourne Shell)**：Bash的早期版本
- **zsh (Z Shell)**：功能丰富的现代Shell
- **ksh (Korn Shell)**：兼容sh的增强版本

## 📝 第一个Shell脚本

### 创建脚本文件
```bash
#!/bin/bash
# 这是一个简单的Shell脚本示例
echo "Hello, World!"
```

### 脚本解释
- `#!/bin/bash`：shebang，指定脚本使用的解释器
- `# 注释`：以#开头的行是注释，不会被执行
- `echo "Hello, World!"`：输出文本到屏幕

### 执行脚本
```bash
# 方法1：使用bash命令
bash script.sh

# 方法2：添加执行权限后直接运行
chmod +x script.sh
./script.sh
```

## 🔧 变量和数据类型

### 变量定义和使用
```bash
#!/bin/bash

# 定义变量（等号两边不能有空格）
name="张三"
age=25

# 使用变量（需要加$符号）
echo "姓名: $name"
echo "年龄: $age"

# 只读变量
readonly PI=3.14159
```

### 特殊变量
```bash
echo "脚本名称: $0"           # 脚本文件名
echo "第一个参数: $1"         # 第一个参数
echo "参数个数: $#"           # 参数数量
echo "所有参数: $@"           # 所有参数列表
echo "进程ID: $"             # 当前进程ID
echo "退出状态: $?"           # 上一个命令的退出状态
```

## 🔄 输入输出操作

### 读取用户输入
```bash
#!/bin/bash

# 读取用户输入
read -p "请输入您的姓名: " username
echo "您好, $username!"

# 读取多个值
read -p "请输入姓名和年龄: " name age
echo "姓名: $name, 年龄: $age"
```

### 输出重定向
```bash
# 标准输出重定向
echo "内容" > file.txt        # 覆盖写入
echo "内容" >> file.txt       # 追加写入

# 标准错误重定向
command 2> error.log          # 错误输出到文件
command > output.log 2>&1     # 标准输出和错误都重定向
```

## ⚖️ 条件判断

### if 语句
```bash
#!/bin/bash

if [ $1 -gt 10 ]; then
    echo "参数大于10"
elif [ $1 -eq 10 ]; then
    echo "参数等于10"
else
    echo "参数小于10"
fi
```

### 比较运算符
```bash
# 数值比较
[ $a -eq $b ]    # 等于
[ $a -ne $b ]    # 不等于
[ $a -gt $b ]    # 大于
[ $a -lt $b ]    # 小于

# 字符串比较
[ "$str1" = "$str2" ]    # 等于
[ "$str1" != "$str2" ]   # 不等于
[ -z "$str" ]            # 字符串为空
[ -n "$str" ]            # 字符串非空

# 文件测试
[ -f "file.txt" ]        # 文件存在
[ -d "directory" ]       # 目录存在
[ -r "file.txt" ]        # 文件可读
[ -w "file.txt" ]        # 文件可写
[ -x "file.txt" ]        # 文件可执行
```

### case 语句
```bash
#!/bin/bash

case $1 in
    "start")
        echo "启动服务"
        ;;
    "stop")
        echo "停止服务"
        ;;
    "restart")
        echo "重启服务"
        ;;
    *)
        echo "用法: $0 {start|stop|restart}"
        ;;
esac
```

## 🔁 循环结构

### for 循环
```bash
#!/bin/bash

# 遍历列表
for fruit in apple banana orange; do
    echo "水果: $fruit"
done

# 遍历数字范围
for i in {1..5}; do
    echo "数字: $i"
done

# C语言风格的for循环
for ((i=1; i<=5; i++)); do
    echo "计数: $i"
done
```

### while 循环
```bash
#!/bin/bash

# 条件循环
count=1
while [ $count -le 5 ]; do
    echo "计数: $count"
    count=$((count + 1))
done

# 读取文件行
while IFS= read -r line; do
    echo "行内容: $line"
done < file.txt
```

### until 循环
```bash
#!/bin/bash

# 直到条件为真
count=1
until [ $count -gt 5 ]; do
    echo "计数: $count"
    count=$((count + 1))
done
```

## 🔧 函数定义和使用

### 定义函数
```bash
#!/bin/bash

# 函数定义
say_hello() {
    echo "Hello, $1!"
}

# 调用函数
say_hello "World"

# 带返回值的函数
add() {
    local result=$(( $1 + $2 ))
    return $result
}

add 5 3
echo "5 + 3 = $?"
```

## 📊 数组操作

### 数组定义和访问
```bash
#!/bin/bash

# 定义数组
fruits=("apple" "banana" "orange")

# 访问数组元素
echo "第一个水果: ${fruits[0]}"
echo "所有水果: ${fruits[@]}"
echo "水果数量: ${#fruits[@]}"

# 遍历数组
for fruit in "${fruits[@]}"; do
    echo "水果: $fruit"
done
```

## 🛠️ 实用脚本示例

### 备份脚本
```bash
#!/bin/bash

# 备份脚本
BACKUP_DIR="/backup"
DATE=$(date +%Y%m%d)
TARGET_DIR="$1"

if [ -z "$TARGET_DIR" ]; then
    echo "用法: $0 <要备份的目录>"
    exit 1
fi

if [ ! -d "$TARGET_DIR" ]; then
    echo "错误: 目录 $TARGET_DIR 不存在"
    exit 1
fi

tar -czf "$BACKUP_DIR/backup_$DATE.tar.gz" "$TARGET_DIR"
echo "备份完成: $BACKUP_DIR/backup_$DATE.tar.gz"
```

### 系统监控脚本
```bash
#!/bin/bash

# 系统监控脚本
echo "=== 系统信息 ==="
echo "主机名: $(hostname)"
echo "系统时间: $(date)"
echo "运行时间: $(uptime)"
echo ""
echo "=== 内存使用 ==="
free -h
echo ""
echo "=== 磁盘使用 ==="
df -h
```

## 💡 调试技巧

### 调试模式
```bash
# 启用调试模式
bash -x script.sh        # 显示执行的命令
bash -v script.sh        # 显示脚本内容
bash -n script.sh        # 检查语法错误
```

### 在脚本中调试
```bash
#!/bin/bash

# 设置调试选项
set -x    # 开启调试
# 脚本内容...
set +x    # 关闭调试

# 或者使用trap调试
trap 'echo "错误发生在第 $LINENO 行"; exit 1' ERR
```

## 🎯 最佳实践

1. **添加注释**：说明脚本的功能和用法
2. **错误处理**：检查命令执行状态和参数有效性
3. **使用函数**：将复杂逻辑封装成函数
4. **变量引用**：使用双引号引用变量，避免空格问题
5. **设置权限**：确保脚本有执行权限
6. **测试脚本**：在不同环境下测试脚本

## 📚 学习资源

- `man bash`：查看Bash手册
- `help command`：查看内置命令帮助
- 在线教程和文档

记住：实践是最好的学习方法！多写多练，逐步提高脚本编写能力。