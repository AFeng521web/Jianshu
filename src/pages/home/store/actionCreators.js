import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: 'change_home_data',
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
});

const addHomeList = (list, nextPage) => ({
    type: 'add_home_list',
    list: fromJS(list),
    nextPage: nextPage
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
};

export const getMoreListItem = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page+1));
        })
    }
};

export const toggleTopShow = (show) => ({
    type: 'toggle_scroll_top',
    show: show
});