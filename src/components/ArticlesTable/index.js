/* eslint-disable react-hooks/exhaustive-deps */
import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { getArticlesAction } from "actions/articleActions";
import { openFormAction } from "../../actions/articleActions";
import ArticleEditModal from "../ArticleEditModal";

const AddButton = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    width: 157px;
    height: 51px;
    background: #38c6da;
    border: none;
  }
`;

const AddButtonText = styled.div`
  color: #fff;
  margin-right: 15px;
`;

const AddButtonIcon = styled.div``;

const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 20px 36px;
`;

const TableTitle = styled.h4`
  font-size: 20px;
  color: #555;
`;

const TableContent = styled.div``;

const TableWrap = styled.div`
  background: #fff;
  border-radius: 8px;
`;

const CustomeTable = styled(Table)`
  && {
    table-layout: fixed;

    thead > tr {
      border-bottom: 1px solid #eaeced;
    }

    tr {
      &:nth-child(even) {
        background-color: #f1f3f5;
      }
    }

    th {
      padding: 24px 19px;
      font-size: 17px;
      color: #555;
      border: none;

      &:first-child {
        width: 1px;
        white-space: nowrap;
      }

      &:nth-child(4) {
        text-align: center;
      }
    }

    td {
      padding: 26px 19px;
      border: none;
      vertical-align: middle;

      &:nth-child(4) {
        text-align: center;
      }
    }
  }
`;

const EditButton = styled(Button)`
  && {
    font-size: 15px;
    padding: 6px 28px;
    background-color: #6ad36e;
    color: #fff;
    border: 0;
  }
`;

const DeleteButton = styled(EditButton)`
  && {
    background-color: #fb5867;
    margin-left: 11px;
  }
`;

function truncate(title) {
  if (title.length > 50) {
    let truncated = title.substring(0, 45);
    truncated = truncated.substring(0, Math.min(truncated.length, truncated.lastIndexOf(" ")))  + "...";
    return truncated;
  }
  return title;

}

function ArticlesTable() {
  const dispatch = useDispatch();
  const onGetArticles = () => dispatch(getArticlesAction());
  const onOpenForm = () => dispatch(openFormAction());

  const articles = useSelector(state => state.articles.data);
  const isOpenForm = useSelector(state =>state.articles.isOpenForm);

  useEffect(() => {
    onGetArticles();
  }, []);

  function renderArticles(articles) {
    if (articles) {
        console.log(Object.keys(articles))
        console.log(articles['-Ly3XTY2wxY9Kxq7Ejye']);
        let no = 1;
        return _.map(articles, (article, index) => {
          if (article !== undefined)
            return (
              <tr key={index}>
                <td>{no++}</td>
                <td>{truncate(article.title)}</td>
                <td>2,567</td>
                <td>
                  <FontAwesomeIcon style={{ color: article.status ? '#38C6DA' : '#CFD3D8'}} icon={faCheck} />
                </td>
                <td>
                  <EditButton>Edit</EditButton>
                  <DeleteButton>Delete</DeleteButton>
                </td>
              </tr>
            );
        });
    }
  }

  return (
    <TableWrap>
      <TableHead>
        <TableTitle>Articles</TableTitle>
        <AddButton onClick={onOpenForm}>
          <AddButtonText>Add new</AddButtonText>
          <ArticleEditModal visible={isOpenForm}/>
          <AddButtonIcon>
            <FontAwesomeIcon icon={faPlus} />
          </AddButtonIcon>
        </AddButton>
      </TableHead>
      <TableContent>
        <CustomeTable>
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
      </TableContent>
      <ArticleEditModal visible={isOpenForm}/>
    </TableWrap>
  );
}

export default ArticlesTable;