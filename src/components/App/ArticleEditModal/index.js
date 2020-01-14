import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ModalBody, Form, FormGroup } from "reactstrap";
import { Input } from "components/Input";
import { Label } from "components/Label";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  AddButton,
  CancelButton
} from "./styles";
import {
  Switch,
  CheckBox,
  CheckBoxLabel
} from "components/Switch";
import {
  addArticleAction,
  closeFormAction,
  enterTitleAction,
  changeStatusAction,
  updateArticleAction
} from "actions/articleActions";

function ArticleEditModal({ visible }) {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();

  const onAddArticle = () => dispatch(addArticleAction());
  const onUpdateArticle = () => dispatch(updateArticleAction());
  const onCloseForm = () => dispatch(closeFormAction());
  const onChangeTitle = e => dispatch(enterTitleAction(e.target.value));
  const onChangeStatus = e => dispatch(changeStatusAction(e.target.checked));

  const key = useSelector(state => state.articles.article.key);
  const title = useSelector(state => state.articles.article.title);
  const status = useSelector(state => state.articles.article.status);

  return (
    <>
      <Modal isOpen={visible}>
        <ModalHeader>{key ? "Update article" : "Add new article"}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Enter article title"
                autoComplete="off"
                defaultValue={title}
                onChange={onChangeTitle}
                innerRef={register({
                  required: "Please enter article title",
                  minLength: {
                    value: 10,
                    message: "At least 10 characters"
                  }
                })}
              />
              {errors.title && errors.title.message}
            </FormGroup>
            <Switch>
              <CheckBox
                id="status"
                type="checkbox"
                checked={status}
                onChange={onChangeStatus}
              />
              <CheckBoxLabel htmlFor="status" />
            </Switch>
          </Form>
        </ModalBody>
        <ModalFooter>
          <AddButton
            color="primary"
            onClick={
              key ? handleSubmit(onUpdateArticle) : handleSubmit(onAddArticle)
            }
          >
            {key ? "Update" : "Add"}
          </AddButton>
          <CancelButton color="secondary" onClick={onCloseForm}>
            Cancel
          </CancelButton>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ArticleEditModal;
