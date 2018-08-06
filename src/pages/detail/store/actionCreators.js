import axios from 'axios';

const changeDetail = (title, content) => ({
    type: 'change_detail',
    title: title,
    content: content,
});

export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result[id-1].title, result[id-1].content));
        }).catch(() =>{

        })
    }
};
