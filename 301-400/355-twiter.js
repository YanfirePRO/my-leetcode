/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.recent = 10;
    this.user = new Map();
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    //第一次
    if(!this.user.has(userId)){
        let node = {
            tArr: [tweetId],
            fArr: []
        }
        this.user.set(userId, node);
        return
    }
    let node = this.user.get(userId);
    if(node.tArr.length >= 10){
        node.tArr.splice(0, 1);
    }
    node.tArr.push(tweetId);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if(!this.user.has(userId)){
        return []
    }
    let node = this.user.get(userId);
    let tArr = node.tArr;
    let fArr = node.fArr;
    // for(let i = 0; i< )
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.user.has(followerId)){
        let node = {
            tArr: [],
            fArr: [followeeId]
        }
        this.user.set(followerId, node);
        return
    }
    let node = this.user.get(followerId);
    // if(node.tArr.length >= 10){
    //     node.tArr.splice(0, 1);
    // }
    node.fArr.push(tweetId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(!this.user.has(followerId)){
        return
    }
    let node = this.user.get(followerId);
    let index = node.fArr.indexof(followeeId);
    if(index == -1){
        return
    } else{
        node.fArr.splice(index, 0);
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */