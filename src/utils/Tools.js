class Tools {

  // 获取单例
  static getInstance () {
    return this.instance ? this.instance : new Tools()
  }

  constructor () {
  }

  

}

export default Tools
