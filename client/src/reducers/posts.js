//a reducer is a function that excepts states and actions
//insted of "posts=[]" we could type "state=[]". posts is more convenient.
//the state must always get an initial value, like this empty array
// if we needed to use the reducer here in this file, we would say: 
//const reducer = (posts = [], action) => {
    //but now we need to export it:

export default (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return posts;
        default:
            return posts;
    }
}