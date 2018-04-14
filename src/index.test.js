import configureMockStore from 'redux-mock-store';
import {
    addProgress,
    createGoal,
    setCurrentProgress,
    setThreshold,
    CREATE_GOAL
} from './actions';
import goalsApp from './reducers/reducers';
import expect from 'expect'

const mockStore = configureMockStore(goalsApp)

describe('store tests', () => {

    it('store created', () => {
        const store = mockStore({ goals: [] });
        expect(store.getActions()).toEqual([]);
        expect(store.getState()).toEqual({ goals: [] });
    })

    it('goal created', () => {
        const store = mockStore({ goals: [] });

        const name = "test goal"
        const progress = 99
        const threshold = 100
        const expectedGoal = {
            name, progress, threshold
        }

        store.dispatch(createGoal(name, progress, threshold))
        expect(store.getState()).toEqual({ goals: [
            {
                name: name,
                progress: progress,
                threshold:threshold
            }
        ]})
    })

})