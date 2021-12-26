import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFields: "",
  });
  const classes = useStyles();
  //in order to dispatch actions: what the user submits:
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //we are creating a post and pass all the data from our state:
    dispatch(createPost(postData))
  }


  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Adding a movie review</Typography>
        <TextField name ="creator" label="Creator" variant="outlined" value={postData.creator} onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          } fullWidth />
       <TextField name ="title" label="Title" variant="outlined" value={postData.title} onChange={(e) =>
            setPostData({ ...postData, title: e.target.value })
          } fullWidth />
        <TextField name ="message" label="Message" variant="outlined" value={postData.message} onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          } fullWidth />
        <TextField name ="tags" label="Tags" variant="outlined" value={postData.tags} onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value })
          } fullWidth />
    
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, SelectedFile: base64 })
            }
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
    
      </form>
    </Paper>
  );
};

export default Form;
