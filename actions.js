export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		id: uuid.v4(),
		text
	}
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		id,
		text
	}
}

function deleteComment(id) {
	return {
		type: DELETE_COMMENT,
		id
	}
}

function thumbUpComment(id, votes) {
	return {
		type: THUMB_UP_COMMENT,
		id,
		votes: votesThumbUp(votes)
	}
}

function thumbDownComment(id, votes) {
	return {
		type: THUMB_DOWN_COMMENT,
		id,
		votes: votesThumbDown(votes)
	}
}

function votesThumbUp(votes) {
	return votes++;
}

function votesThumbDown(votes) {
	return votes--;
}
