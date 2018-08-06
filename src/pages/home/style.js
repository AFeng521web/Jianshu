import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;  
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 7px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;


export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`;

export const WriterWrapper = styled.div`
    position: relative;
    width: 278px;
    border-radius: 3px;
    // border: 1px solid #dcdcdc;
    height: 470px;
`;

export const WriterHeader = styled.div`
    position: absolute;
    top: 100px;
    width: 278px;
    height: 29px;
    .writer {
        display: inline-block;
        text-align: left;
        font-size: 14px;
        color: #969696;
    }
`;

export const WriterInfoSwitch = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    color: #969696;
    cursor: pointer;
`;

export const WriterList = styled.div`
    width: 278px;
    height: 280px;
    position: absolute;
    top: 130px
    
`;

export const WriterItem = styled.div`
    position: relative;
    width: 278px;
    height: 48px;
    margin-bottom: 10px;
    .writer-pic {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid #dcdcdc;
    }
`;

export const WriterInfo = styled.div`
    position: absolute;
    top: 10px;
    left: 60px
    width: 200px;
    height: 35px;
    font-size: 14px;
    cursor: pointer;
    color: #333;
    .number {
        font-size: 12px;
        color: #969696;
        margin-top: 7px;
    }
    .attention {
        position: absolute;
        top: 8px;
        right: 5px;
        float: right;
        font-size: 13px;
        color: #42c02e;
    }
`;

export const LookMore = styled.div`
    position: absolute;
    bottom: 0;
	width: 100%;
	height: 30px;
	font-size: 13px;
	line-height: 30px;
	margin: 15px 0;
	background: #f7f7f7;;
	text-align: center;
	border-radius: 5px;
	border: 1px solid #dcdcdc;
	color: #787878;;
	cursor: pointer;
`;


export const DownloadApp = styled.div`
    width: 258px;
    height: 110px;
    position: absolute;
    left: 20px;
    top: 20;
    .imgCode {
        float: left;
        width: 60px;
        height: 60px;
        cursor: pointer;
        opacity: .85;
    }
    .down {
        position: absolute;
        left: 75px;
        top: 13px;
        font-size: 15px;
        color: #333;
        cursor: pointer;
    }
    .desc {
        position: absolute;
        left: 75px;
        top: 30px;
        margin-top: 5px;
        font-size: 13px;
        color: #999;
        cursor: pointer;
    }
`;


