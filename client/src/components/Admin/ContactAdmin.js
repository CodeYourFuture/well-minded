import React, { useState } from "react";
import Table from 'react-bootstrap/Table'
import Message from "./Message"
import Pagination from "react-js-pagination";
import "../../css/pagination.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap"

const Messages = ({ contactMessages, setContactMessages, isAdmin }) => {

    const [showMessages, setShowMessages] = useState(false);
    const filterMessage = contactMessages.slice(0, 4)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = contactMessages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (number) => setCurrentPage(number);
    


    return (
        <Container >
            <Row>
                <Col>
                    <Table responsive bordered hover >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Comment</th>
                            </tr>
                        </thead>

                        {filterMessage.sort((a, b) => b.date - a.date).map(message =>
                            <tbody className="row-elements">
                                <Message message={message} />
                            </tbody>
                        )}

                    
                    <div className="pagination">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={postsPerPage}
                        totalItemsCount={contactMessages.length}
                        pageRangeDisplayed={5}
                        onChange={paginate}
                        prevPageText="prev"
                        nextPageText="next"
                        firstPageText="first"
                        lastPageText="last"
                    />
                    </div>
               
                    </Table>
                    </Col>
            </ Row>
        </ Container>
    )
}

export default Messages;