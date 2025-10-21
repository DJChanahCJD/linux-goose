import { Question, QuestionTypeEnum } from "@/lib/types";

export const questions: Question[] = [
  // 题目1：排序算法稳定性
  {
    content: "下列哪种排序算法是稳定排序？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "快速排序",
      "选择排序",
      "冒泡排序",
      "堆排序"
    ],
    answers: [2],
    hint: "稳定排序是指相等元素的相对位置在排序后不会改变。冒泡排序、插入排序、归并排序和桶排序是稳定排序。"
  },
  
  // 题目2：时间复杂度
  {
    content: "在最好情况下，哪种排序算法的时间复杂度可以达到O(n)？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "快速排序",
      "冒泡排序",
      "归并排序",
      "堆排序"
    ],
    answers: [1],
    hint: "冒泡排序在最好情况下（数组已经有序）只需遍历一次数组，时间复杂度为O(n)。"
  },
  
  // 题目3：排序算法特点
  {
    content: "关于快速排序算法，以下说法正确的是？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "快速排序是稳定排序",
      "快速排序在任何情况下时间复杂度都是O(nlogn)",
      "快速排序是原地排序算法",
      "快速排序不需要额外空间"
    ],
    answers: [2],
    hint: "快速排序是不稳定排序，最坏情况下时间复杂度为O(n²)，但它是原地排序算法，空间复杂度为O(logn)。"
  },
  
  // 题目4：排序算法选择
  {
    content: "对于一个几乎已经有序的数组，使用哪种排序算法效率最高？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "快速排序",
      "归并排序",
      "插入排序",
      "选择排序"
    ],
    answers: [2],
    hint: "插入排序在处理几乎有序的数组时效率很高，因为每个元素只需要移动很少的位置。"
  },
  
  // 题目5：排序算法实现
  {
    content: "在归并排序中，合并两个已排序子数组的时间复杂度是？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "O(1)",
      "O(n)",
      "O(nlogn)",
      "O(n²)"
    ],
    answers: [1],
    hint: "合并两个已排序的子数组需要线性时间，因为每个元素只需比较一次即可确定其位置。"
  },
  
  // 题目6：排序算法比较
  {
    content: "下列排序算法中，哪种算法在最坏情况下时间复杂度仍为O(nlogn)？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "快速排序",
      "归并排序",
      "插入排序",
      "冒泡排序"
    ],
    answers: [1],
    hint: "归并排序在任何情况下时间复杂度都是O(nlogn)，而快速排序在最坏情况下会退化到O(n²)。"
  },
  
  // 题目7：堆排序特点
  {
    content: "关于堆排序，以下说法正确的是？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "堆排序是稳定排序",
      "堆排序的空间复杂度是O(n)",
      "堆排序在最坏情况下时间复杂度为O(nlogn)",
      "堆排序不适合大数据量排序"
    ],
    answers: [2],
    hint: "堆排序是不稳定排序，空间复杂度是O(1)，在任何情况下时间复杂度都是O(nlogn)，适合大数据量排序。"
  },
  
  // 题目8：排序算法应用
  {
    content: "在对链表进行排序时，哪种排序算法通常更合适？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "快速排序",
      "归并排序",
      "堆排序",
      "选择排序"
    ],
    answers: [1],
    hint: "归并排序特别适合链表排序，因为它不需要随机访问，且可以在O(1)额外空间内完成（自底向上归并）。"
  },
  
  // 题目9：排序算法优化
  {
    content: "在快速排序中，使用随机选择基准数的主要目的是？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "提高排序速度",
      "避免最坏情况发生",
      "减少空间复杂度",
      "使排序变为稳定排序"
    ],
    answers: [1],
    hint: "随机选择基准数可以避免在特定输入下（如已排序数组）出现最坏情况，保证平均性能。"
  },
  
  // 题目10：排序算法比较
  {
    content: "对于需要外部排序（数据量大到无法全部装入内存）的情况，最适合的排序算法是？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "快速排序",
      "堆排序",
      "归并排序",
      "插入排序"
    ],
    answers: [2],
    hint: "归并排序适合外部排序，因为它可以分块读取数据，排序后写入磁盘，最后合并已排序的块。"
  }
];
