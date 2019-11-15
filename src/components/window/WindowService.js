import {BehaviorSubject} from 'rxjs';
import {ToolbarService} from "../toolbar/ToolbarService";

const bs = new BehaviorSubject(null);

export const WindowService = {
    getObservable: () => bs.asObservable(),
    open: (v) => bs.next(v),
    close: () => {
        bs.next(null);
        ToolbarService.reset()
    },
};
