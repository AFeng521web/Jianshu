import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, DownloadApp, WriterHeader, WriterInfoSwitch, WriterList, WriterItem, WriterInfo, LookMore } from '../style';

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <DownloadApp>
                    <img className="imgCode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                    <div className="down">下载简书手机APP ></div>
                    <div className="desc">随时随地发现和创作内容</div>
                </DownloadApp>
                <WriterHeader>
                    <span className="writer">推荐作者</span>
                    <WriterInfoSwitch>
                        <i className="iconfont">&#xe851;</i>
                        换一批
                    </WriterInfoSwitch>
                </WriterHeader>
                <WriterList>
                    {
                        this.props.writerList.map((item) => {
                            return (<WriterItem key={item.get('id')}>
                                        <img className="writer-pic" src={item.get('imgUrl')} alt=""/>
                                        <WriterInfo>
                                            <div>{item.get('writerName')}</div>
                                                <div className="number">{item.get('writerNumber')}</div>
                                                <div className="attention">关注</div>
                                        </WriterInfo>
                                    </WriterItem>)
                        })
                    }
                </WriterList>
                <LookMore>查看全部</LookMore>
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    writerList: state.get('home').get('writerList')
});


export default connect(mapStateToProps, null)(Writer);

