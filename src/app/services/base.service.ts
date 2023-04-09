import {environment} from "../../environments/environment";

export class BaseService {
  protected readonly baseUrl = environment.baseUrl;
  protected readonly apiKey = environment.apiKey;
}
