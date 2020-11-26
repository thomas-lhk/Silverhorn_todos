import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Row, Col, Typography, Button} from 'antd'
import * as Actions from '../../store/actions/actions'
import {TODO_FILTERS} from '../../constants'


const TodosFooter = ({activeTodosTotal}) => {
    const dispatch = useDispatch();
    const handleClearCompleted = () => dispatch(Actions.clearCompleted());
    const setFilter = (filter) => dispatch(Actions.setFilter(filter));
    const filter = useSelector(state => state.filterReducer.filter);
    return (
        <>
            <Row align="middle" justify="space-between">
                <Col>
                    <Typography.Text>{`${activeTodosTotal} item left`}</Typography.Text>
                </Col>
                <Col>
                    <Button className="button" onClick={() => setFilter(TODO_FILTERS.ALL)} disabled={filter === TODO_FILTERS.ALL}>All</Button>
                    <Button className="button" onClick={() => setFilter(TODO_FILTERS.ACTIVE)} disabled={filter === TODO_FILTERS.ACTIVE}> Active</Button>
                    <Button className="button" onClick={() => setFilter(TODO_FILTERS.COMPLETED)} disabled={filter === TODO_FILTERS.COMPLETED}>Completed</Button>
                </Col>
                <Col>
                    <Button className="button" onClick={handleClearCompleted}>Clear Completed</Button>
                </Col>
            </Row>
        </>
    )
}

export default TodosFooter;