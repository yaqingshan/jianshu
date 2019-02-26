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
