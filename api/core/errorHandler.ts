import { Result } from "../../models/result";
import { ApiError } from "./apiError";

export const handleError: (err: ApiError | any) => [number, Result<unknown>] = (err: ApiError | any) => {
    console.log(err)
    if (err instanceof ApiError) {
        return [400, {ok: false, message: err.errorMessage}]
    }
    return [500, {ok: false, message: 'server error'}]
}
