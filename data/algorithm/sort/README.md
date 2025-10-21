# 排序算法

> 是否为稳定排序：取决于排序后相同元素的相对位置是否改变。
> 稳定排序：冒泡排序、插入排序、归并排序、桶排序等非比较型排序算法
> 不稳定排序：
> - 选择排序（如序列 [5, 8, 5, 2, 9]，第一次选择 2 交换到第一个位置，会改变两个 5 的相对位置）
> - 快速排序
> - 堆排序

## 冒泡排序
```java
public void bubbleSort(int[] arr) {
    // 每次都将最大的元素交换到末尾
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - i - 1; j++) {
            // 交换
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```

## 选择排序
```java
public void selectionSort(int[] arr) {
    // 从第二个元素开始，将元素插入到前面已排序的序列中
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        // 将比key大的元素向后移动
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // 插入key到正确位置
        arr[j + 1] = key;
    }
}
```

## 插入排序
```java
public void insertionSort(int[] arr) {
    // 每次选择最小的放到前面
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;
        // 寻找最小元素的索引
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 将最小元素交换到当前位置
        if (minIndex != i) {
            swap(arr, i, minIndex);
        }
    }
}
```
## 快速排序
```java
void quickSort(int[] nums, int left, int right) {
    if (l >= r) return;
    // 哨兵划分
    int p = partition(arr, l, r);
    // 划分左右子数组
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);
}

// 尾递归优化版本
void quickSortPlus(int[] nums, int left, int right) {
    // 将递归改为while循环
    while (left < right) {
        int pivot = partition(nums, left, right);
        
        // 选择较短的子数组优先递归
        if (pivot - left < right - pivot) {
            quickSort(nums, left, pivot - 1);  // 递归处理短的左子数组
            left = pivot + 1;  // 长的右子数组通过循环处理
        } else {
            quickSort(nums, pivot + 1, right); // 递归处理短的右子数组
            right = pivot - 1; // 长的左子数组通过循环处理
        }
    }
}

int partition(int[] arr, int l, int r) {
    // 随机基准数
    int randomIndex = l + new Random().nextInt(r - l);
    swap(arr, l, randomIndex);

    int i = l, j = r;
    while (i < j) {
        // 从右向左找到首个小于基准数的元素
        while (i < j && arr[j] >= arr[l]) j--;
        // 从左往右找首个大于基准数的元素
        while (i < j && arr[i] <= arr[l]) i++;
        // 交换i, j
        swap(arr, i, j);
    }
    // 循环结束时，i == j, 此时 num[i] < num[l], 交换后恰好满足左边都 <= num[l]
    swap(arr, i, l);
    return i;
}
```
> 基于分治策略，核心操作为“哨兵划分”, 每次都将数组划分为左右两个子数组，左边都小于等于基准数，右边都大于等于基准数。
> 时间复杂度：O(NlogN), 倒序情况下退化为冒泡排序O(N^2)
> 空间复杂度：O(logN)

## 归并排序
```java
/* 合并左子数组和右子数组 */
void merge(int[] nums, int left, int mid, int right) {
    // 左子数组区间为 [left, mid], 右子数组区间为 [mid+1, right]
    // 创建一个临时数组 tmp ，用于存放合并后的结果
    int[] tmp = new int[right - left + 1];
    // 初始化左子数组和右子数组的起始索引
    int i = left, j = mid + 1, k = 0;
    // 当左右子数组都还有元素时，进行比较并将较小的元素复制到临时数组中
    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j])
            tmp[k++] = nums[i++];
        else
            tmp[k++] = nums[j++];
    }
    // 将左子数组和右子数组的剩余元素复制到临时数组中
    while (i <= mid) {
        tmp[k++] = nums[i++];
    }
    while (j <= right) {
        tmp[k++] = nums[j++];
    }
    // 将临时数组 tmp 中的元素复制回原数组 nums 的对应区间
    for (k = 0; k < tmp.length; k++) {
        nums[left + k] = tmp[k];
    }
}

/* 归并排序 */
void mergeSort(int[] nums, int left, int right) {
    // 终止条件
    if (left >= right)
        return; // 当子数组长度为 1 时终止递归
    // 划分阶段
    int mid = left + (right - left) / 2; // 计算中点
    mergeSort(nums, left, mid); // 递归左子数组
    mergeSort(nums, mid + 1, right); // 递归右子数组
    // 合并阶段
    merge(nums, left, mid, right);
}
```