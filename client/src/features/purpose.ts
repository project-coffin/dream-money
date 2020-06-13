import { createAction, handleActions } from 'redux-actions'

// TODO: title 변경 등 추가

// Actions
const SET_PURPOSE = 'purpose/set_purpose'
const CREATE_PURPOSE = 'purpose/create_purpose'
const DELETE_PURPOSE = 'purpose/delete_purpose'

// Action Creators
let id = 0
export const setPurpose = createAction(SET_PURPOSE, (idx: number, purpose: number) => ({
  idx,
  purpose,
}))
export const createPurpose = createAction(CREATE_PURPOSE, (title: string, purpose: number) => ({
  title,
  purpose,
  idx: id++,
}))
export const deletePurpose = createAction(DELETE_PURPOSE, (idx: number) => idx)

// watchers using redux-saga
// TODO: develop
/*
function* setPurposeAsync(purpose: number) {
  yield put(setPurpose(purpose))
}

function* walletReducer() {
  yield takeEvery(SET_PURPOSE, setPurposeAsync)
}*/

// initial state
/* format.
  {
    id: 0,
    title: '',
    purpose: 0,
  },
*/
const initialState = {
  list: [
    {
      id: -1,
      title: '전세금',
      purpose: 100_000_000,
    },
  ],
}

// reducers
const purpose = handleActions(
  {
    [CREATE_PURPOSE]: (state: any, { payload }) => ({
      list: state.list.concat({
        id: payload.idx,
        title: payload.title,
        purpose: payload.purpose,
      }),
    }),
    [SET_PURPOSE]: (state, { payload }) => ({
      ...state,
      list: [
        ...state.list.slice(0, payload.idx),
        {
          ...state.list[payload.idx],
          purpose: payload.purpose,
        },
        ...state.list.slice(payload.idx + 1, state.list.length),
      ],
    }),
    [DELETE_PURPOSE]: (state, { payload }) => ({
      list: state.list.filter((item: any) => item.id !== payload),
    }),
  },
  initialState
)

export default purpose
