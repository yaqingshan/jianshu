import { fromJS } from 'immutable'

const defaultState = fromJS({
  topList: [{
      id: 1,
      title:'社会问题',
      url:'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
      id: 2,
      title:'诗歌',
      url:'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }],
  articleList:[{
    id:1,
    title:'2019愿有人很喜欢你，像风走了八千里，不问归期不远万里',
    abstract:'他真的很喜欢你 像风走了八千里 他真的很喜欢你 像阵雨下到了南极 他真的很想念你 像珊瑚沉在海底 他真的很喜欢你 不问归期不远万里 他真的很喜欢...',
    url:'//upload-images.jianshu.io/upload_images/11555800-90ac9d226a7deeca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id:2,
    title:'移动端混合式快速App开发',
    abstract:'写在前面 力软快速开发平台致力于开发软件框架已经十年了，这十年来我们服务了无数的客户，遇到了各种问题和建议，其中最多的一句就是：你们框架有APP...',
    url:'//upload-images.jianshu.io/upload_images/14096236-baf965674b5169a8.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id:3,
    title:'徐克说她是五十年才出的美人，五十年过去了，也没出现第二个她',
    abstract:'徐克说，她是五十年才一遇的美人； 琼瑶说，没有第二个人可以跟她媲美； 张叔平说，因为那份气质， 她到老也会很美丽。 没错，她就是林青霞，一个美丽...',
    url:'//upload-images.jianshu.io/upload_images/15323783-daf25778084681f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  recommendList:[{
    id:1,
    url:'//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },{
    id:2,
    url:'//cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png'
  },{
    id:3,
    url:'//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
  },{
    id:4,
    url:'//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },{
    id:5,
    url:'//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  },{
    id:6,
    url:'//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  }]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
