import request, { Response } from "~~/utils/request";
import { PREFIXAPI } from '@/config'
import { AuthLoginParams } from "./types";

class LoginApi {
    authLogin(params: AuthLoginParams): Promise<Response> {
        return request.get(PREFIXAPI + '/authLogin', params)
    }
}

export default new LoginApi