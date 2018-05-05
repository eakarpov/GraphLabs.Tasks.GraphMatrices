import { postData } from '../utils/httpService';
import { Middleware } from 'redux';

export const loggingService: Middleware = (store: any) => (next: any) => (action: any) => {
    const taskId = 123; // Long
    const sessionGuid = 'uuid'; // Guid
    const actions: any[] = []; // ActionDescription[]
    const isTaskFinished = false; // bool
    postData('localhost:54446/RegisterUserActions', {taskId, sessionGuid, actions, isTaskFinished})
        .then(() => null);
    const result = next(action);
    return result;
};