import { Question, QuestionTypeEnum } from "@/lib/types";

export const questions: Question[] = [
  {
    type: QuestionTypeEnum.CHOICE,
    content: "哪个命令用于列出目录内容？",
    choices: ["list", "dir", "ls", "show"],
    answers: [2],
    hint: "`ls` 命令用于列出目录中的文件和子目录。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "如何显示当前工作目录的完整路径？",
    choices: ["pwd", "cwd", "where", "path"],
    answers: [0],
    hint: "`pwd` (Print Working Directory) 命令显示当前目录的完整路径。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "哪个命令用于创建新目录？",
    choices: ["create", "mkdir", "newdir", "md"],
    answers: [1],
    hint: "`mkdir` (Make Directory) 命令用于创建新目录。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "如何递归复制整个目录？",
    choices: ["cp -r", "cp -a", "cp -all", "cp --recursive"],
    answers: [0],
    hint: "`cp -r` 或 `cp -R` 都可以用于递归复制目录及其内容。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "哪个命令用于搜索文件中的文本？",
    choices: ["find", "search", "grep", "locate"],
    answers: [2],
    hint: "`grep` 命令用于在文件中搜索指定的文本模式。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "如何显示文件的最后10行？",
    choices: ["head", "tail", "end", "last"],
    answers: [1],
    hint: "`tail` 命令默认显示文件的最后10行内容。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "哪个命令用于修改文件权限？",
    choices: ["chmod", "perm", "chown", "modify"],
    answers: [0],
    hint: "`chmod` (Change Mode) 命令用于修改文件或目录的权限。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "如何实时查看日志文件的变化？",
    choices: ["tail -f", "watch", "live", "follow"],
    answers: [0],
    hint: "`tail -f` 命令可以实时跟踪文件末尾的内容变化，常用于监控日志文件。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "哪个命令用于显示磁盘空间使用情况？",
    choices: ["df", "du", "disk", "space"],
    answers: [0],
    hint: "`df` (Disk Free) 命令显示文件系统的磁盘空间使用情况。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "如何终止一个进程？",
    choices: ["stop", "end", "kill", "terminate"],
    answers: [2],
    hint: "`kill` 命令用于向进程发送信号，默认发送TERM信号来终止进程。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "哪个命令用于在当前目录下查找所有.txt文件？",
    choices: [
      "find . -name *.txt",
      "search . -name *.txt",
      "locate . -name *.txt",
      "grep . -name *.txt",
    ],
    answers: [0],
    hint: "使用 `find` 命令配合 `-name` 参数和通配符来查找特定类型的文件。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "哪个命令用于显示系统中所有正在运行的Python进程？",
    choices: [
      "ps aux | grep python",
      "process | find python",
      "top | filter python",
      "list | search python",
    ],
    answers: [0],
    hint: "使用 `ps aux` 显示所有进程，然后通过管道 `|` 用 `grep` 过滤出包含python的进程。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "哪个命令用于将当前目录打包成tar.gz压缩包？",
    choices: [
      "tar -czvf archive.tar.gz .",
      "zip -r archive.tar.gz .",
      "gzip -c archive.tar.gz .",
      "compress -t archive.tar.gz .",
    ],
    answers: [0],
    hint: "`tar -czvf` 中：c=创建, z=gzip压缩, v=显示进度, f=指定文件名。",
  },
  {
    type: QuestionTypeEnum.FILL,
    content:
      "请填写完整的命令：创建一个名为'test'的目录，进入该目录，然后创建一个名为file1.txt的文件",
    answer: "mkdir test && cd test && touch file1.txt",
    hint: "这个命令序列使用 && 连接多个命令，依次执行目录创建、切换目录和文件创建操作。",
  },
  {
    type: QuestionTypeEnum.FILL,
    content:
      "请填写完整的命令：查看系统日志的最后100行，并搜索包含'error'的行（不区分大小写）",
    answer: "tail -n 100 /var/log/syslog | grep -i error",
    hint: "使用 tail 查看日志末尾，通过管道传递给 grep 进行搜索，-i 参数忽略大小写。",
  },
];
