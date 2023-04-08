import {environment} from "../../environments/environment.development";

export class BaseService {
  protected readonly baseUrl = environment.baseUrl;
  protected readonly apiKey = environment.apiKey;
}
