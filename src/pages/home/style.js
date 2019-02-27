import styled from 'styled-components'

export const HomeWrapper = styled.div`
  padding-top: 30px;
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
`
export const ListItem = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center;
  border-bottom:1px solid #f0f0f0;
  .list-info {
    padding-right: 15px;
    flex: 1;
    h2{
      font-size: 18px;
      font-weight: 700;
      line-height: 150%;
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
export const WriteWrapper = styled.div`

`
export const WriteList = styled.div`

`
export const WriteItem = styled.div`
  display: flex;
  align-items: center;
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

`
