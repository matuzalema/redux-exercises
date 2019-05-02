import {ADD_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {DELETE_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
            , ...state];

        case REMOVE_COMMENT:
            return
                comments: state.filter(comment => comment.id !== action.id)

 		case THUMB_UP_COMMENT:
 			return comments: state.map(comment => 
 					if (comment.id === action.id){
 						return {...comment, votes: action.votes +1};
 					}
 					retrun comment;
 				)
 			});

 		case THUMB_DOWN_COMMENT:
 			retrun Object.assign({}, state, {
 				comments: state.map(comment => 
 					if (comment.id === action.id){
 						return {...comment, votes: action.votes -1};
 					}
 					retrun comment;
 				)
 			});

        default:
            return state;
    }
}