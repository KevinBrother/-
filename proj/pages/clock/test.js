Page({

  /**
   * 页面的初始数据
   */
  data: {
    play: "show",
    pause: "hidden",
    point: "00:25:00"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  go: function () {
    var interval = setInterval(this.time, 1000);
    console.log("this.data.play is ----- " + this.data.play);
    if (this.data.play) {
      this.start();
    } else {
      this.stop();
      clearInterval(interval);
    }
  },

  changeImgDisplay: function () {
    if (this.data.play == "show") {
      this.start();
    } else {
      this.stop();
      clearInterval(interval);
    }
  },

  playShow: function () {
    console.log("------stop-------");
    this.setData({
      play: true,
      pause: false
    })
  },

  pauseShow: function () {
    console.log("------start-------");
    this.setData({
      play: false,
      pause: true
    })
  },

  startInterval: function () {

  },

  time: function () {
    var point = this.data.point;
    if (point == "00:00:00") {
      this.stop();
    }

    var arr = point.split(":");
    var sum = parseInt(arr[1] * 60) + parseInt(arr[2]);
    sum -= 1;

    var rest1 = parseInt(sum / 60);
    arr[1] = rest1 < 10 ? "0" + rest1 : rest1;

    var rest2 = parseInt(sum % 60);
    arr[2] = rest2 < 10 ? "0" + rest2 : rest2;

    point = arr.join(":");

    this.setData({
      point: point
    })
  },
})