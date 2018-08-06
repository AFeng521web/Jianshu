import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style.js'

class Header extends Component {
    render() {
        const { focused, list, login, logout, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <Link to='/'>
                        <NavItem className="left active">
                            <i className="iconfont mylogo">&#xe611;</i>
                            首页
                        </NavItem>
                    </Link>
                    <NavItem className="left">
                        <i className="iconfont mylogo">&#xe784;</i>
                        下载APP
                    </NavItem>
                    {login ? <NavItem onClick={logout} className="right">退出</NavItem> : <Link to='/login'><NavItem className="right">登陆</NavItem></Link>}

                    <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => {
                                    handleInputFocus(list);
                                }}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe753;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length) {
            for(let i = (page-1)*10; i < page*10; i++) {
                console.log(newList[i]);
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if(focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => {handleChangePage(page, totalPage, this.spinIcon);}}
                        >
                            <i className="iconfont spin"
                               ref={(icon) => {this.spinIcon = icon}}
                            >&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        totalPage: state.get('header').get('totalPage'),
        page: state.get('header').get('page'),
        mouseIn: state.get('header').get('mouseIn'),
        login: state.get('login').get('login')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if(list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.getSearchFocusAction());
        },
        handleInputBlur() {
            const action = actionCreators.getSearchBlurAction();
            dispatch(action)
        },
        handleMouseEnter() {
            const action = actionCreators.mouseEnter();
            dispatch(action);
        },
        handleMouseLeave() {
            const action = actionCreators.mouseLeave();
            dispatch(action);
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if(page<totalPage) {
                dispatch(actionCreators.changePage(page+1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }


};

export default connect(mapStateToProps, mapDispatchToProps)(Header);