import {BehaviorSubject} from 'rxjs';

const bs = new BehaviorSubject(null);

export const WindowService = {
    getObservable: () => bs.asObservable(),
    open: (v) => bs.next(v),
    close: () => {bs.next(null)},
};
