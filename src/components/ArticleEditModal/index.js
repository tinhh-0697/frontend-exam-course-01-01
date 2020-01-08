import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback} from "reactstrap";
import { addArticleAction, closeFormAction, enterTitleAction, changeStatusAction } from "../../actions/articleActions";

function ArticleEditModal({ visible }) {
  const dispatch = useDispatch();
  const onAddArticle = () => dispatch(addArticleAction());
  const onCloseForm = () => dispatch(closeFormAction());
  const onChangeTitle = (e) => dispatch(enterTitleAction(e.target.value));
  const onChangeStatus = (e) => dispatch(changeStatusAction(e.target.checked));

  const title = useSelector(state => state.articles.article.title)
  const status = useSelector(state => state.articles.article.status)

  return (
    <>
      <Modal isOpen={visible}>
        <ModalHeader>Add new article</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Enter article title"
                value={title}
                onChange={onChangeTitle}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={onChangeStatus}/> Status
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onAddArticle}>Add</Button>{" "}
          <Button color="secondary" onClick={onCloseForm}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ArticleEditModal;
