/* eslint-disable react-hooks/exhaustive-deps */
import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditButton,
  DeleteButton,
  TableWrap,
  TableHead,
  TableTitle,
  AddButton,
  AddButtonText,
  AddButtonIcon,
  TableContent,
  CustomeTable,
  ResultTable
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { getArticlesAction } from "actions/articleActions";
import { openFormAction, deleteArticleAction } from "actions/articleActions";
import ArticleEditModal from "../ArticleEditModal";

function truncate(title) {
  if (title.length > 80) {
    let truncated = title.substring(0, 65);
    truncated =
      truncated.substring(
        0,
        Math.min(truncated.length, truncated.lastIndexOf(" "))
      ) + "...";
    return truncated;
  }
  return title;
}

function ArticlesTable() {
  const dispatch = useDispatch();
  const onOpenForm = key => dispatch(openFormAction(key));
  const onGetArticles = () => dispatch(getArticlesAction());
  const onDeleteArticle = key => dispatch(deleteArticleAction(key));

  const articles = useSelector(state => state.articles.data);
  const isOpenForm = useSelector(state => state.articles.isOpenForm);

  useEffect(() => {
    onGetArticles();
  }, []);

  function renderArticles(articles) {
    if (articles) {
      let no = 1;
      return _.map(articles, (article, key) => {
        if (article !== undefined)
          return (
            <tr key={key}>
              <td>{no++}</td>
              <td nowrap>{truncate(article.title)}</td>
              <td>2,567</td>
              <td>
                <FontAwesomeIcon
                  style={{ color: article.status ? "#38C6DA" : "#CFD3D8" }}
                  icon={faCheck}
                />
              </td>
              <td>
                <EditButton onClick={() => onOpenForm(key)}>Edit</EditButton>
                <DeleteButton onClick={() => onDeleteArticle(key)}>
                  Delete
                </DeleteButton>
              </td>
            </tr>
          );
      });
    }
  }

  function renderTable() {
    return (
      <>
      <CustomeTable responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Views</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>{renderArticles(articles)}</tbody>
      </CustomeTable>
      { Object.keys(articles).length === 0 && <ResultTable>No data</ResultTable>}
      </>
    );
  }
  console.log('articles: ' + articles)
  return (
    <TableWrap>
      <TableHead>
        <TableTitle>Articles</TableTitle>
        <AddButton onClick={() => onOpenForm()}>
          <AddButtonText>Add new</AddButtonText>
          <AddButtonIcon>
            <FontAwesomeIcon icon={faPlus} />
          </AddButtonIcon>
        </AddButton>
      </TableHead>
      <TableContent>{renderTable()}</TableContent>
      <ArticleEditModal visible={isOpenForm} />
    </TableWrap>
  );
}

export default ArticlesTable;
