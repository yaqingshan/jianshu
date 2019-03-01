import styled from 'styled-components'

export const HomeWrapper = styled.div`
  padding-top: 86px;
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  .banner {
    width: 625px;
    height: 270px;
    border-radius:5px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
`
export const TopItem = styled.div`
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  float: left;
  color: #000;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  img {
    display: blok;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
export const ListWrapper = styled.div`
  margin-top: 20px;
  border-top:1px solid #f0f0f0;
  a {
    text-decoration: none;
  }
`
export const ListItem = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center;
  border-bottom:1px solid #f0f0f0;
  .list-info {
    padding-right: 15px;
    flex: 1;
    h4{
      font-size: 18px;
      font-weight: 700;
      line-height: 150%;
      color: #333;
    }
    .abstract{
      padding-top: 10px;
      font-size: 13px;
      color:#999;
      line-height: 150%;
    }
  }
  .img{
    width: 150px;
    height: 100px;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`
export const LoadMore = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background: #a5a5a5;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`
export const RecommendWrapper =styled.div`
  margin-top: -3px;
`
export const RecommendItem =styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 8px;
  background:url(${(props)=>props.imgurl});
  background-size:contain;
`
export const WriterWrapper = styled.div`
  margin-top: 20px;
`
export const WriterList = styled.div`
  padding-top: 20px;
`
export const WriterTop = styled.div`
  display: flex;
  cursor:pointer;
  font-size: 14px;
  color: #969696;
  .title {
    flex:1;
  }
  .refresh {
    display: flex;
    align-items: center;
    .iconfont{
      margin-right: 6px;
      transition: all .4s ease-in;
      transform-origin: 50%;
    }
  }
`
export const WriterItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  .avatar{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .writer-info{
    padding-left: 12px;
    .name{
      font-size: 14px;
      color: #333;
      line-height: 150%;
    }
    p {
      padding-top: 6px;
      font-size: 12px;
      color: #969696;
      line-height: 150%;
    }
  }
  .tag {
    font-size: 13px;
    font-weight: 700;
    color: #42c02e;
    position: absolute;
    right: 0;
    top: 8px;
  }
`
export const BackTop = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
  transition: .1s ease-in;
  color: #333;
  font-size: 14px;
  line-height: 50px;
`
