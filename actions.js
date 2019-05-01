const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return 
	{
	    type: ADD_COMMENT,
	    id: uuid.v4(),
	    text
	}
}

function editComment(text) {
	return 
	{
	    type: EDIT_COMMENT,
	    id: uuid.v4(),
	    text
	}
}

function deleteComment(id) {
	return 
	{
	    type: DELETE_COMMENT,
	    id: uuid.v4()
	}
}

function thumbUpComment(id, votes) {
	return 
	{
	    type: THUMB_UP_COMMENT,
	    id: uuid.v4(),
	    votes: votesThumbUp(votes)
	}
}

function thumbDownComment(id, votes) {
	return 
	{
	    type: THUMB_DOWN_COMMENT,
	    id: uuid.v4(),
	    votes: votesThumbDown(votes)
	}
}

function votesThumbUp(votes){
	return votes++;
}

function votesThumbDown(votes){
	return votes--;
}