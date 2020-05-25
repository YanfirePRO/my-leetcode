/**
 * 前缀和 + 状态压缩 + 哈希表
 * 原始想法：暴力，枚举所有子串，遍历子串中的所有字符，统计元音字母出现的次数，如果符合条件，更新答案。
 * 前缀和： 对于一个区间，可以利用前缀和之差，得到某个字母的出现次数。
 * 利用偶数这个特性，记录前缀的字母出现的奇偶性。
 */

var findTheLongestSubstring = function(s) {
    const n = s.length;
    const pos = new Array(1 << 5).fill(-1);
    let ans = 0, status = 0;
    pos[0] = 0;
    for (let i = 0; i < n; ++i) {
        const ch = s.charAt(i);
        if (ch === 'a') {
            status ^= 1<<0;
        } else if (ch === 'e') {
            status ^= 1<<1;
        } else if (ch === 'i') {
            status ^= 1<<2;
        } else if (ch === 'o') {
            status ^= 1<<3;
        } else if (ch === 'u') {
            status ^= 1<<4;
        }
        if (~pos[status]) {
            ans = Math.max(ans, i + 1 - pos[status]);
        } else {
            pos[status] = i + 1;
        }
    }
    return ans;
};