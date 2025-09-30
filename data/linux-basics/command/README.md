# Linux 常用指令

Linux是一个强大的操作系统，掌握常用命令是使用Linux的基础。本文将介绍Linux中最常用的命令及其用法。

## 📁 文件和目录操作

### ls - 列出目录内容
```bash
ls          # 列出当前目录内容
ls -l       # 详细列表格式
ls -a       # 显示隐藏文件
ls -lh      # 人类可读的文件大小
ls /home    # 列出指定目录
```

### cd - 切换目录
```bash
cd /home/user    # 切换到绝对路径
cd ..            # 返回上一级目录
cd ~             # 返回用户主目录
cd -             # 返回上一个目录
```

### pwd - 显示当前目录
```bash
pwd  # 显示当前工作目录的完整路径
```

### mkdir - 创建目录
```bash
mkdir new_folder          # 创建单个目录
mkdir -p parent/child      # 创建多级目录
mkdir dir1 dir2 dir3      # 创建多个目录
```

### cp - 复制文件/目录
```bash
cp file1 file2           # 复制文件
cp -r dir1 dir2          # 递归复制目录
cp -v file1 file2        # 显示复制进度
cp -i file1 file2        # 覆盖前确认
```

### mv - 移动/重命名
```bash
mv file1 file2          # 重命名文件
mv file1 /tmp/          # 移动文件
mv -i file1 file2       # 覆盖前确认
```

### rm - 删除文件/目录
```bash
rm file.txt             # 删除文件
rm -r directory         # 递归删除目录
rm -f file.txt          # 强制删除，不提示
rm -i file.txt          # 删除前确认
```

## 📄 文件内容查看和编辑

### cat - 查看文件内容
```bash
cat file.txt           # 显示整个文件
cat -n file.txt        # 显示行号
cat file1 file2        # 连接多个文件
```

### less/more - 分页查看
```bash
less file.txt          # 可上下滚动的查看
more file.txt          # 分页查看文件
```

### head/tail - 查看文件首尾
```bash
head file.txt          # 显示前10行
head -n 20 file.txt    # 显示前20行
tail file.txt          # 显示后10行
tail -n 20 file.txt    # 显示后20行
tail -f log.txt        # 实时跟踪文件变化
```

### nano/vim - 文本编辑器
```bash
nano file.txt          # 使用nano编辑器
vim file.txt           # 使用vim编辑器
```

## 🔍 文件搜索和查找

### find - 查找文件
```bash
find /home -name "*.txt"          # 按名称查找
find . -type f -name "*.log"      # 查找文件类型
find . -size +1M                 # 查找大于1MB的文件
find . -mtime -7                 # 查找7天内修改的文件
```

### grep - 文本搜索
```bash
grep "pattern" file.txt          # 搜索文本
grep -r "pattern" /dir          # 递归搜索
grep -i "pattern" file.txt      # 忽略大小写
grep -n "pattern" file.txt      # 显示行号
grep -v "pattern" file.txt      # 反向匹配
```

### which/whereis - 查找命令位置
```bash
which ls              # 显示命令的完整路径
whereis ls            # 显示命令的二进制、源码和手册页位置
```

## 📊 系统信息和进程管理

### ps - 查看进程
```bash
ps aux               # 显示所有进程详细信息
ps -ef               # 显示完整格式的进程信息
ps -u username       # 显示指定用户的进程
```

### top/htop - 实时系统监控
```bash
top                  # 实时显示系统进程
htop                 # 增强版的top（需要安装）
```

### kill - 终止进程
```bash
kill 1234            # 终止指定PID的进程
kill -9 1234         # 强制终止进程
killall process_name # 终止所有同名进程
```

### free - 内存使用情况
```bash
free -h              # 以人类可读格式显示内存使用
free -m              # 以MB为单位显示
```

### df - 磁盘空间使用
```bash
df -h                # 人类可读的磁盘空间信息
df -i                # 显示inode使用情况
```

### du - 目录空间使用
```bash
du -sh /dir          # 显示目录总大小
du -h --max-depth=1  # 显示一级子目录大小
```

## 📦 包管理工具

### apt (Debian/Ubuntu)
```bash
sudo apt update              # 更新包列表
sudo apt upgrade             # 升级所有包
sudo apt install package     # 安装包
sudo apt remove package      # 移除包
sudo apt search pattern      # 搜索包
```

### yum/dnf (RedHat/CentOS)
```bash
sudo yum install package     # 安装包
sudo yum update             # 更新包
sudo dnf install package    # dnf（新版yum）
```

## 🔗 网络相关命令

### ping - 测试网络连接
```bash
ping google.com        # 测试到Google的连接
ping -c 4 google.com   # 发送4个包后停止
```

### ifconfig/ip - 网络配置
```bash
ifconfig               # 显示网络接口信息
ip addr show           # 显示IP地址信息
```

### netstat - 网络统计
```bash
netstat -tuln          # 显示监听端口
netstat -r             # 显示路由表
```

### wget/curl - 文件下载
```bash
wget http://example.com/file.zip   # 下载文件
curl -O http://example.com/file.zip # 下载文件
curl http://example.com            # 获取网页内容
```

## 👥 用户和权限管理

### chmod - 修改文件权限
```bash
chmod 755 file.sh       # 设置权限为rwxr-xr-x
chmod +x file.sh        # 添加执行权限
chmod u+x file.sh       # 给所有者添加执行权限
```

### chown - 修改文件所有者
```bash
chown user:group file.txt  # 修改所有者和组
chown user file.txt        # 只修改所有者
```

### useradd/userdel - 用户管理
```bash
sudo useradd newuser     # 添加新用户
sudo userdel olduser     # 删除用户
```

### passwd - 修改密码
```bash
passwd                   # 修改当前用户密码
sudo passwd username     # 修改指定用户密码
```

## 📋 其他实用命令

### tar - 归档工具
```bash
tar -czvf archive.tar.gz dir/  # 创建gzip压缩包
tar -xzvf archive.tar.gz       # 解压gzip压缩包
tar -cjvf archive.tar.bz2 dir/ # 创建bzip2压缩包
```

### ssh - 远程连接
```bash
ssh user@hostname        # 连接到远程主机
ssh -p 2222 user@host    # 指定端口连接
```

### scp - 安全复制
```bash
scp file.txt user@host:/path/  # 复制到远程主机
scp user@host:/path/file.txt . # 从远程主机复制
```

### history - 命令历史
```bash
history                 # 显示命令历史
history 10              # 显示最近10条命令
!number                 # 执行历史中的特定命令
```

### alias - 命令别名
```bash
alias ll='ls -alF'      # 创建别名
alias                  # 显示所有别名
unalias ll             # 删除别名
```

## 💡 实用技巧

1. **命令组合**：使用 `&&` 连接多个命令
   ```bash
   cd /tmp && ls -l
   ```

2. **输出重定向**：
   ```bash
   command > file.txt    # 输出重定向到文件
   command >> file.txt   # 追加到文件
   command 2> error.log  # 错误输出重定向
   ```

3. **管道操作**：
   ```bash
   ps aux | grep python  # 查找Python进程
   cat file.txt | grep "pattern" | sort
   ```

4. **通配符使用**：
   ```bash
   ls *.txt              # 所有txt文件
   ls file?.txt          # file1.txt, file2.txt等
   ls [abc]*.txt         # 以a,b,c开头的txt文件
   ```

## 🎯 练习建议

1. 每天练习5-10个新命令
2. 尝试在终端中完成日常文件操作
3. 使用 `man command` 查看命令手册页
4. 创建常用命令的别名
5. 使用Tab键自动补全命令和文件名
