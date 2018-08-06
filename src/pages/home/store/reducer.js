import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState, action) => {
    if(action.type === 'change_home_data') {
        return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList),
            writerList: fromJS(action.writerList)
        })
    }
    if(action.type === 'add_home_list') {
        return state.merge({
            articleList: state.get('articleList').concat(action.list),
            articlePage: action.nextPage,
        })
    }
    if(action.type === 'toggle_scroll_top') {
        return state.set('showScroll', action.show);
    }
    return state;
}

